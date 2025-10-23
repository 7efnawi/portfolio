import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsRevolutionary = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Featured Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{portfolioData.projects.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.projects.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(index)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all hover:shadow-xl hover:shadow-accent/20 h-full">
                  <div className="relative h-48 overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange/20"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-accent/30 text-accent text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="border-accent/30 text-accent text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3">
                      {project.demo && (
                        <Button
                          size="sm"
                          className="bg-accent text-accent-foreground hover:bg-accent-light flex-1"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-accent/30 hover:bg-accent/10 flex-1"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <Card className="bg-card border-accent/30 p-8 relative">
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </Button>

                <div className="mb-6">
                  <Badge className="bg-accent text-accent-foreground mb-4">
                    {portfolioData.projects.projectList[selectedProject].category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    {portfolioData.projects.projectList[selectedProject].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {portfolioData.projects.projectList[selectedProject].description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.projects.projectList[selectedProject].technologies.map(
                      (tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-accent/30 text-accent"
                        >
                          {tech}
                        </Badge>
                      )
                    )}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-xl">
                  <h3 className="text-lg font-bold mb-2 text-accent">Impact</h3>
                  <p className="text-muted-foreground">
                    {portfolioData.projects.projectList[selectedProject].impact}
                  </p>
                </div>

                <div className="flex gap-4">
                  {portfolioData.projects.projectList[selectedProject].demo && (
                    <Button
                      size="lg"
                      className="bg-accent text-accent-foreground hover:bg-accent-light flex-1"
                      asChild
                    >
                      <a
                        href={portfolioData.projects.projectList[selectedProject].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Demo
                      </a>
                    </Button>
                  )}
                  {portfolioData.projects.projectList[selectedProject].github && (
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-accent/30 hover:bg-accent/10 flex-1"
                      asChild
                    >
                      <a
                        href={portfolioData.projects.projectList[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsRevolutionary;
