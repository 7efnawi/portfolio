import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Github, ExternalLink, X, ChevronRight, Code, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsModern = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { projectList, title, description } = portfolioData.projects;

  const currentProject = selectedProject !== null ? projectList[selectedProject] : null;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-10 relative overflow-hidden min-h-screen">
      {/* Background gradient accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(0, 212, 255, 0.1)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(22, 255, 0, 0.08)' }}
        />
      </div>

      <div className="container mx-auto px-4 pt-[5vh]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-science">
            <span className="text-white">{title.split(" ")[0]}</span>{" "}
            <span className="gradient-text-liquid">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description || "Data-driven projects showcasing analytical skills and technical expertise"}
          </p>
          
          {/* Project count badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full glass-card"
          >
            <span 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#16FF00', boxShadow: '0 0 10px #16FF00' }}
            />
            <span className="text-sm font-medium text-muted-foreground">
              {projectList.length} Projects Completed
            </span>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(index)}
              className="project-card-glass cursor-pointer group"
            >
              {/* Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a15] via-[#050a15]/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge 
                    className="border-none font-medium"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(22, 255, 0, 0.8))',
                      color: '#050a15',
                    }}
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <p className="text-muted-foreground line-clamp-3 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        color: '#00D4FF',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span 
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View details link */}
                <div 
                  className="flex items-center text-sm font-medium group-hover:translate-x-2 transition-transform"
                  style={{ color: '#16FF00' }}
                >
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(5, 10, 21, 0.9)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[80vh] flex flex-col glass-card"
              style={{ borderRadius: '24px' }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full z-50 transition-colors"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable content wrapper */}
              <div
                className="overflow-y-auto flex-1"
                style={{ borderRadius: '24px', overscrollBehavior: 'contain' }}
              >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image section */}
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to right, transparent 30%, #050a15 100%)',
                    }}
                  />
                  <div 
                    className="absolute inset-0 md:hidden"
                    style={{
                      background: 'linear-gradient(to top, #050a15 20%, transparent 100%)',
                    }}
                  />
                </div>

                {/* Content section */}
                <div className="p-8 space-y-6">
                  <div>
                    <Badge 
                      className="mb-3 border-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(22, 255, 0, 0.2))',
                        border: '1px solid rgba(0, 212, 255, 0.4)',
                        color: '#00D4FF',
                      }}
                    >
                      {currentProject.category}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-3">{currentProject.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-lg font-semibold" style={{ color: '#00D4FF' }}>
                      <Code className="w-5 h-5" />
                      <h3>Tech Stack</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-lg font-semibold" style={{ color: '#16FF00' }}>
                      <Zap className="w-5 h-5" />
                      <h3>Key Impact</h3>
                    </div>
                    <p 
                      className="text-sm text-muted-foreground pl-4 italic"
                      style={{ borderLeft: '2px solid #16FF00' }}
                    >
                      {currentProject.impact}
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {currentProject.demo && (
                      <Button
                        className="gap-2 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                        }}
                        onClick={() => window.open(currentProject.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                    {currentProject.github && (
                      <Button
                        variant="outline"
                        className="gap-2 rounded-full hover:bg-white/10"
                        style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                        onClick={() => window.open(currentProject.github, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </Button>
                    )}
                  </div>
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
