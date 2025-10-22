import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState("All");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <motion.section id="projects" ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              {portfolioData.projects.title}
            </motion.h2>
            <motion.div
              variants={staggerItem}
              className="w-20 h-1 bg-gradient-to-r from-accent to-orange mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {portfolioData.projects.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {categories.map((category, index) => (
              <motion.div key={category} variants={staggerItem}>
                <Button
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={`${
                    filter === category
                      ? "bg-gradient-primary text-primary-foreground"
                      : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  } transition-all`}
                  asChild
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Filter className="mr-2" size={16} />
                    {category}
                  </motion.button>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ z: 50 }}
      className="will-animate"
    >
      <Card className="h-full bg-gradient-card/80 backdrop-blur border-border/50 hover:border-accent/40 shadow-sm hover:shadow-2xl transition-all overflow-hidden group relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/10 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ transform: "translateZ(10px)" }}
        />

        <div className="relative overflow-hidden bg-muted flex items-center justify-center h-48 sm:h-56">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="max-h-full max-w-full object-contain p-6 transition-transform duration-500"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            initial={false}
          />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <CardTitle className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </CardTitle>
              <motion.div
                className="h-0.5 mt-1 bg-gradient-to-r from-accent to-transparent rounded-full"
                initial={{ width: 40 }}
                whileHover={{ width: 80 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <Badge
              variant="secondary"
              className="bg-accent/10 text-accent border-accent/20 shadow-sm shrink-0"
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
            {project.technologies.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1 glass text-muted-foreground rounded-full text-xs font-medium border border-border/40"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="bg-accent/10 border-l-4 border-accent/70 p-3 rounded"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-xs sm:text-sm font-medium text-foreground">
              <strong>Impact:</strong> {project.impact}
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
            {project.github && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
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
              </motion.div>
            )}
            {project.demo && (
              <motion.div
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-primary text-primary-foreground hover:bg-primary-light"
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
              </motion.div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectsEnhanced;
