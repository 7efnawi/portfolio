import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    "All",
    ...Array.from(
      new Set(portfolioData.projects.projectList.map((p) => p.category))
    ),
  ];
  const filteredProjects =
    filter === "All"
      ? portfolioData.projects.projectList
      : portfolioData.projects.projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 md:mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              {portfolioData.projects.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {portfolioData.projects.description}
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`${
                  filter === category
                    ? "bg-gradient-primary text-primary-foreground"
                    : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                } transition-all hover-scale`}
              >
                <Filter className="mr-2" size={16} />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Carousel (Horizontal Scroll) */}
          <ProjectsCarousel projects={filteredProjects} isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

// Horizontally scrollable carousel component
const ProjectsCarousel = ({
  projects,
  isVisible,
}: {
  projects: typeof portfolioData.projects.projectList;
  isVisible: boolean;
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [lightbox, setLightbox] = useState<{ open: boolean; projectIndex: number; imageIndex: number }>({ open: false, projectIndex: 0, imageIndex: 0 });

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(600, Math.max(320, el.clientWidth * 0.8));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  // Update active dot on scroll
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handler = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let idx = 0;
      let best = Infinity;
      children.forEach((child, i) => {
        const cMid = child.offsetLeft + child.clientWidth / 2;
        const d = Math.abs(cMid - mid);
        if (d < best) {
          best = d;
          idx = i;
        }
      });
      setCurrent(idx);
    };
    handler();
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler as any);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollBy(-1);
      if (e.key === "ArrowRight") scrollBy(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollToIndex = (i: number, behavior: ScrollBehavior = "smooth") => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const centerOffset = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
    el.scrollTo({ left: Math.max(0, centerOffset), behavior });
  };

  // On mount, center an initial card (middle of list) and on resize keep current centered
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const initial = Math.min(projects.length - 1, Math.max(0, Math.floor(projects.length / 2)));
    setCurrent(initial);
    // use instant behavior to avoid visible jump
    scrollToIndex(initial, "auto");
    const onResize = () => scrollToIndex(current, "auto");
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  // Autoplay with pause on hover and reduced motion respect
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return; // don't autoplay if user prefers reduced motion
    let id: number | null = null;
    const tick = () => {
      if (!hovering && document.visibilityState === 'visible') {
        const next = (current + 1) % projects.length;
        scrollToIndex(next);
      }
      id = window.setTimeout(tick, 4000);
    };
    id = window.setTimeout(tick, 4000);
    return () => { if (id) window.clearTimeout(id); };
  }, [current, hovering, projects.length]);

  return (
    <div className="relative">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent hidden md:block" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent hidden md:block" />
      {/* Scroll buttons */}
      <button
        aria-label="Scroll left"
        onClick={() => scrollBy(-1)}
        className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur hover:bg-accent/10 shadow-lg"
      >
        ‹
      </button>
      <button
        aria-label="Scroll right"
        onClick={() => scrollBy(1)}
        className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur hover:bg-accent/10 shadow-lg"
      >
        ›
      </button>

      <div
        ref={scrollerRef}
        className={`flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] no-scrollbar ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationDelay: "0.1s" }}
        role="listbox"
        aria-label="Projects"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Hide scrollbar for WebKit */}
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`p-[1px] rounded-[14px] bg-[linear-gradient(135deg,rgba(56,189,248,0.25),rgba(99,102,241,0.18),transparent)] snap-center shrink-0 w-[90%] sm:w-[520px] lg:w-[560px] transition-transform duration-300 motion-reduce:transition-none ${
              current === index ? "scale-[1.02]" : "scale-[1.0]"
            }`}
          >
            <Card
              role="option"
              aria-selected={current === index}
              tabIndex={-1}
              className="relative bg-gradient-card/80 backdrop-blur border border-border/50 hover:border-accent/40 shadow-sm hover:shadow-xl hover:shadow-accent/10 overflow-hidden group rounded-[13px] will-change-transform"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseMove={(e) => {
                const target = e.currentTarget as HTMLDivElement;
                const rect = target.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                const rotateX = (-y * 3).toFixed(2);
                const rotateY = (x * 3).toFixed(2);
                target.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "";
              }}
            >
              {/* Project Image */}
              <div
                className="relative overflow-hidden bg-muted flex items-center justify-center h-48 sm:h-56 md:h-60"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="max-h-full max-w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                  onClick={() => setLightbox({ open: true, projectIndex: index, imageIndex: 0 })}
                  role="button"
                  aria-label="Open preview"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background:"radial-gradient(60% 60% at 50% 40%, rgba(56,189,248,0.15), transparent)"}} />
                {/* Index badge */}
                <div className="absolute left-3 top-3 text-[11px] px-2 py-0.5 rounded-full bg-background/70 border border-border/50 text-muted-foreground backdrop-blur-sm">
                  {index + 1}/{projects.length}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    {/* Animated underline */}
                    <div className={`h-0.5 mt-1 w-10 bg-gradient-to-r from-accent to-transparent rounded-full transition-all duration-500 ${current === index ? "w-20" : "group-hover:w-20"}`} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 shadow-sm shrink-0 text-xs sm:text-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/70 backdrop-blur text-muted-foreground rounded-full text-xs font-medium border border-border/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-accent/10 border-l-4 border-accent/70 p-3 rounded">
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  <strong>Impact:</strong> {project.impact}
                </p>
              </div>

              {/* CTA bar */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 bg-background/40 backdrop-blur-md p-2 rounded-lg border border-border/40">
                {project.github ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                ) : null}
                {project.demo ? (
                  <Button
                    size="sm"
                    className="w-full sm:w-auto bg-gradient-primary text-primary-foreground hover:bg-primary-light flex-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Progress bar tied to scroll */}
      <div className="mt-5 mx-auto w-full max-w-xl">
        <div className="h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-accent transition-[width] duration-500"
            style={{ width: `${projects.length ? ((current + 1) / projects.length) * 100 : 0}%` }}
            aria-valuemin={0}
            aria-valuemax={projects.length}
            aria-valuenow={current + 1}
            role="progressbar"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightbox({ open: false, projectIndex: 0, imageIndex: 0 })}
        >
          <div className="absolute inset-0" />
          <button
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded-full bg-background/80 border border-border text-foreground hover:bg-background"
            onClick={(e) => { e.stopPropagation(); setLightbox({ open: false, projectIndex: 0, imageIndex: 0 }); }}
          >
            <X size={18} />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 md:left-10 p-2 rounded-full bg-background/70 border border-border text-foreground hover:bg-background"
            onClick={(e) => {
              e.stopPropagation();
              const gallery = ((projects[lightbox.projectIndex] as any)?.gallery as string[] | undefined) ?? [projects[lightbox.projectIndex].image];
              setLightbox((lb) => ({ ...lb, imageIndex: (lb.imageIndex - 1 + gallery.length) % gallery.length }));
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            aria-label="Next"
            className="absolute right-4 md:right-10 p-2 rounded-full bg-background/70 border border-border text-foreground hover:bg-background"
            onClick={(e) => {
              e.stopPropagation();
              const gallery = ((projects[lightbox.projectIndex] as any)?.gallery as string[] | undefined) ?? [projects[lightbox.projectIndex].image];
              setLightbox((lb) => ({ ...lb, imageIndex: (lb.imageIndex + 1) % gallery.length }));
            }}
          >
            <ChevronRight size={20} />
          </button>
          <div className="relative max-w-5xl w-[92vw] md:w-[80vw]" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const gallery = ((projects[lightbox.projectIndex] as any)?.gallery as string[] | undefined) ?? [projects[lightbox.projectIndex].image];
              const src = gallery[lightbox.imageIndex];
              return (
                <img src={src} alt="Project preview" className="w-full h-auto object-contain rounded-lg shadow-2xl" loading="lazy" decoding="async" />
              );
            })()}
            {/* Thumbnails if multiple */}
            {((projects[lightbox.projectIndex] as any)?.gallery?.length ? (
              <div className="mt-4 grid grid-flow-col auto-cols-[72px] gap-2 overflow-x-auto px-1">
                {(((projects[lightbox.projectIndex] as any).gallery as string[])).map((g, i) => (
                  <button key={i} className={`h-16 w-18 overflow-hidden rounded-md border ${i === lightbox.imageIndex ? 'border-accent' : 'border-border'}`} onClick={() => setLightbox((lb) => ({ ...lb, imageIndex: i }))}>
                    <img src={g} alt="thumb" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            ) : null)}
          </div>
        </div>
      )}
    </div>
  );
};
