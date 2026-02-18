import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Github, ExternalLink, X, ChevronRight, Code, Zap, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Detect mobile (used for choosing modal vs bottom sheet)
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const ProjectsModern = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { projectList, title, description } = portfolioData.projects;
  const isMobile = useIsMobile();

  const currentProject = selectedProject !== null ? projectList[selectedProject] : null;

  // Bottom sheet drag-to-dismiss
  const sheetY = useMotionValue(0);
  const sheetOpacity = useTransform(sheetY, [0, 300], [1, 0.2]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.y > 120 || info.velocity.y > 500) {
      setSelectedProject(null);
    }
  };

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
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-[120px]"
          style={{ background: 'rgba(0, 212, 255, 0.1)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full blur-[120px]"
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
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-science">
            <span className="text-white">{title.split(" ")[0]}</span>{" "}
            <span className="gradient-text-liquid">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedProject(index)}
              className="project-card-glass cursor-pointer group active:scale-[0.98]"
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
              <div className="p-5 md:p-6">
                <p className="text-muted-foreground line-clamp-3 mb-4 text-sm leading-normal">
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

      {/* ─── Project Detail: Bottom Sheet (mobile) / Centered Modal (desktop) ─── */}
      <AnimatePresence>
        {selectedProject !== null && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(5, 10, 21, 0.9)', backdropFilter: 'blur(10px)' }}
            onClick={() => setSelectedProject(null)}
          >
            {/* ── MOBILE: Bottom sheet ── */}
            {isMobile ? (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                drag="y"
                dragConstraints={{ top: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ y: sheetY, opacity: sheetOpacity }}
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-0 left-0 right-0 max-h-[92vh] flex flex-col glass-card"
                role="dialog"
                aria-label={currentProject.title}
              >
                {/* Drag handle */}
                <div className="flex justify-center py-3 flex-shrink-0 cursor-grab active:cursor-grabbing">
                  <Minus className="w-10 h-1 text-white/30" strokeWidth={4} />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-2 rounded-full z-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrollable content */}
                <div
                  className="overflow-y-auto flex-1 overscroll-contain"
                  style={{ borderRadius: '24px 24px 0 0' }}
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <img
                      src={currentProject.image}
                      alt={currentProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, #050a15 10%, transparent 100%)' }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-4 -mt-8 relative z-10">
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
                      <h2 className="text-2xl font-bold mb-3">{currentProject.title}</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {currentProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-base font-semibold" style={{ color: '#00D4FF' }}>
                        <Code className="w-4 h-4" />
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
                      <div className="flex items-center gap-2 text-base font-semibold" style={{ color: '#16FF00' }}>
                        <Zap className="w-4 h-4" />
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
                    <div className="flex gap-3 pt-2 pb-6">
                      {currentProject.demo && (
                        <Button
                          className="gap-2 rounded-full flex-1 active:scale-95 min-h-[44px]"
                          style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)' }}
                          onClick={() => window.open(currentProject.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      )}
                      {currentProject.github && (
                        <Button
                          variant="outline"
                          className="gap-2 rounded-full flex-1 hover:bg-white/10 active:scale-95 min-h-[44px]"
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
              </motion.div>
            ) : (
              /* ── DESKTOP: Centered modal ── */
              <div className="flex items-center justify-center h-full p-4">
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
                    className="absolute top-4 right-4 p-2 rounded-full z-50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    style={{ background: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Scrollable content wrapper */}
                  <div
                    className="overflow-y-auto flex-1"
                    style={{ borderRadius: '24px', overscrollBehavior: 'contain' }}
                  >
                    <div className="grid grid-cols-2">
                      {/* Image section */}
                      <div className="relative h-full min-h-[300px]">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to right, transparent 30%, #050a15 100%)' }}
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
                              style={{ background: 'linear-gradient(135deg, #00D4FF, #0066FF)' }}
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
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsModern;
