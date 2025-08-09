import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
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
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {portfolioData.projects.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`bg-gradient-card border-border/50 hover-lift overflow-hidden group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div
                  className="relative overflow-hidden bg-muted flex items-center justify-center"
                  style={{ height: "12rem" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="max-h-full max-w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-accent/10 text-accent border-accent/20"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-accent/5 border-l-4 border-accent p-3 rounded">
                    <p className="text-sm font-medium text-foreground">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    {project.github ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1"
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
                        className="bg-gradient-primary text-primary-foreground hover:bg-primary-light flex-1"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
