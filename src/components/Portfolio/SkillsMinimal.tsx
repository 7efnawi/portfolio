import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { MessageSquare, Puzzle, BrainCircuit, BookOpen, RefreshCw, Users, Clock, Circle, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare, Puzzle, BrainCircuit, BookOpen, RefreshCw, Users, Clock, Circle,
};

const SkillsMinimal = () => {
  return (
    <section id="skills" className="py-10 md:py-16 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto px-4 mb-12 relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-foreground">{portfolioData.skills.title.split(" ")[0]}</span>{" "}
          <span className="gradient-text-liquid">{portfolioData.skills.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto"
        >
          {portfolioData.skills.description}
        </motion.p>
      </div>

      {/* Hard Skills Marquee */}
      <div className="mb-16 relative z-10">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-science">
          <span style={{ color: '#00D4FF', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }}>
            Hard
          </span>{" "}
          Skills
        </h3>
        <div className="relative w-full pause-on-hover">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050a15] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050a15] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-scroll gap-6">
            {[...portfolioData.skills.hardSkills, ...portfolioData.skills.hardSkills, ...portfolioData.skills.hardSkills].map(
              (skill, index) => (
                <div
                  key={`hard-${index}`}
                  className="skill-card-glass flex flex-col items-center justify-center gap-3 w-24 h-24 md:w-32 md:h-32 group cursor-pointer"
                >
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name} 
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center group-hover:text-[#00D4FF] transition-colors">
                    {skill.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Soft Skills Marquee (Reverse Direction) */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-science">
          <span style={{ color: '#16FF00', textShadow: '0 0 10px rgba(22, 255, 0, 0.5)' }}>
            Soft
          </span>{" "}
          Skills
        </h3>
        <div className="relative w-full pause-on-hover">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050a15] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050a15] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-scroll gap-6" style={{ animationDirection: 'reverse' }}>
            {[...portfolioData.skills.softSkills, ...portfolioData.skills.softSkills, ...portfolioData.skills.softSkills].map(
              (skill, index) => {
                const IconComponent = iconMap[skill.icon] || Circle;
                return (
                  <div
                    key={`soft-${index}`}
                    className="skill-card-glass flex flex-col items-center justify-center gap-3 w-24 h-24 md:w-32 md:h-32 group cursor-pointer"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(22, 255, 0, 0.1), rgba(0, 212, 255, 0.1))',
                        border: '1px solid rgba(22, 255, 0, 0.3)',
                      }}
                    >
                      <IconComponent 
                        className="w-6 h-6 transition-colors duration-300" 
                        style={{ color: '#16FF00' }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center group-hover:text-[#16FF00] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div 
        className="absolute top-1/2 left-10 w-2 h-2 rounded-full opacity-50"
        style={{ background: '#00D4FF', boxShadow: '0 0 20px #00D4FF' }}
      />
      <div 
        className="absolute top-1/3 right-20 w-3 h-3 rounded-full opacity-40"
        style={{ background: '#16FF00', boxShadow: '0 0 20px #16FF00' }}
      />
    </section>
  );
};

export default SkillsMinimal;
