import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { FolderOpen, Code } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectGlassFolderProps {
  onOpen: () => void;
}

const ProjectGlassFolder = ({ onOpen }: ProjectGlassFolderProps) => {
  const projects = portfolioData.projects.projectList.slice(0, 4); // Take first 4 projects for preview

  return (
    <div className="w-full max-w-[450px] px-4 md:px-0 mx-auto aspect-[6/5] flex items-center justify-center">
      <motion.div
        className="relative w-full h-full cursor-pointer group perspective-1000"
        onClick={onOpen}
        whileHover="hover"
        initial="floating"
        animate="floating" 
      >
        {/* Layer 1: Folder Back (z-index: 10) */}
        <div 
          className="absolute inset-0 rounded-3xl z-10 flex flex-col overflow-hidden transition-shadow duration-500"
          style={{
            background: "linear-gradient(135deg, #37ff25 0%, #2ecc20 100%)",
            boxShadow: "0 0 50px rgba(55, 255, 37, 0.4)"
          }}
        >
          {/* Folder Tab */}
          <div className="h-[15%] w-[40%] bg-black/10 rounded-tr-3xl relative top-0 left-0 border-r border-t border-white/10" />
          {/* Main Back Body */}
          <div className="flex-1 w-full bg-black/5" />
          
          {/* Label inside back */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-70 mix-blend-overlay">
             <div className="text-6xl mb-2 text-black drop-shadow-sm">📂</div>
             <p className="font-science text-black font-bold tracking-widest text-sm uppercase drop-shadow-sm">Click to Open</p>
          </div>
        </div>

        {/* Layer 2: Project Cards Stack (z-index: 20) */}
        <div className="absolute inset-x-[5%] bottom-[5%] h-[80%] z-20">
          {projects.map((project, index) => {
            // Calculate reverse index for stacking order (last item on top visually inside stack)
            const reverseIndex = projects.length - 1 - index;
            
            return (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-xl overflow-hidden border border-white/20 bg-black/80 origin-bottom"
                style={{ 
                  zIndex: reverseIndex,
                  bottom: 0,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.3)" 
                }}
                variants={{
                  floating: { 
                    y: ["-5%", "-15%", "-5%"], // Continuous floating wave
                    rotate: [0, (index - 1.5) * 5, 0],
                    scale: 0.95,
                    x: 0,
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  },
                  hover: { 
                    y: -120, // Move up significantly on hover
                    rotate: (index - 1.5) * 12, // Fan out more
                    scale: 1,
                    x: (index - 1.5) * 40, // Spread out horizontally
                    transition: {
                      duration: 0.4,
                      ease: "backOut"
                    }
                  }
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Layer 3: Glass Front (z-index: 30) */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 z-30 overflow-hidden rounded-b-3xl">
           <div 
             className="w-full h-full"
             style={{
               background: "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(0,0,0,0.2))",
               backdropFilter: "blur(20px)",
               borderTop: "1px solid rgba(255, 255, 255, 0.4)",
               boxShadow: "0 -5px 20px rgba(0,0,0,0.2)"
             }}
           >
             {/* Glass Reflections */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
             <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#37ff25]/20 blur-3xl rounded-full" />
             
             {/* Front Icon */}
             <div className="absolute bottom-6 left-6 z-40">
               <div className="p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
                 <Code className="w-8 h-8 text-white/90 drop-shadow-md" />
               </div>
             </div>
           </div>
        </div>
        
      </motion.div>
    </div>
  );
};

export default ProjectGlassFolder;
