import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Github, ExternalLink, X, ChevronRight, Code, Zap, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectGlassFolder from "./ProjectGlassFolder";

const ProjectsModern = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showGrid, setShowGrid] = useState(false);
  const { projectList, title, description } = portfolioData.projects;

  const currentProject = selectedProject !== null ? projectList[selectedProject] : null;

  return (
    <section id="projects" className="py-20 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <AnimatePresence mode="wait">
          {!showGrid ? (
            <motion.div
              key="folder-view"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center min-h-[60vh] w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 relative z-10"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-science">
                  <span className="text-white">{title.split(" ")[0]}</span>{" "}
                  <span className="text-accent">{title.split(" ").slice(1).join(" ")}</span>
                </h2>
                <div className="flex items-center justify-center gap-2 text-accent font-medium">
                  <span className="text-xl">📂</span>
                  <span>{projectList.length} Files Found</span>
                </div>
              </motion.div>

              <ProjectGlassFolder onOpen={() => setShowGrid(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Back to Folder Button */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setShowGrid(false)}
                className="absolute top-0 left-0 md:bg-white/5 md:hover:bg-white/10 p-2 md:px-4 md:py-2 rounded-full md:rounded-lg flex items-center gap-2 text-muted-foreground hover:text-accent transition-all z-20"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden md:inline">Back to Folder</span>
              </motion.button>

              <div className="text-center mb-16 relative pt-12 md:pt-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center font-science">
                  <span className="text-white">{title.split(" ")[0]}</span>{" "}
                  <span className="text-accent">{title.split(" ").slice(1).join(" ")}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.map((project, index) => (
                  <motion.div
                    key={index}
                    style={{ originY: 0 }}
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.2, ease: "circOut", delay: index * 0.03 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    onClick={() => setSelectedProject(index)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  >
                    {/* Image Overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <Badge variant="secondary" className="mb-2 bg-primary/80 hover:bg-primary text-white border-none">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                        View Details <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-primary/20"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <Badge className="mb-3 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                      {currentProject.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">{currentProject.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                      <Code className="w-5 h-5" />
                      <h3>Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-white/5 border-white/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-lg font-semibold text-accent">
                      <Zap className="w-5 h-5" />
                      <h3>Key Impact</h3>
                    </div>
                    <p className="text-sm text-muted-foreground border-l-2 border-accent/50 pl-4 italic">
                      {currentProject.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    {currentProject.demo && (
                      <Button
                        className="bg-primary hover:bg-primary/90 text-white gap-2"
                        onClick={() => window.open(currentProject.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {currentProject.github && (
                      <Button
                        variant="outline"
                        className="border-white/20 hover:bg-white/10 gap-2"
                        onClick={() => window.open(currentProject.github, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsModern;
