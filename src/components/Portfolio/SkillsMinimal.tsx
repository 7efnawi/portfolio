import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import * as Icons from "lucide-react";

const SkillsMinimal = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-foreground">{portfolioData.skills.title.split(" ")[0]}</span>{" "}
          <span className="text-accent">{portfolioData.skills.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto"
        >
          {portfolioData.skills.description}
        </motion.p>
      </div>

      {/* Hard Skills Marquee */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-science">
          Hard Skills
        </h3>
        <div className="relative w-full pause-on-hover">
          <div className="flex w-max animate-scroll gap-8">
            {[...portfolioData.skills.hardSkills, ...portfolioData.skills.hardSkills, ...portfolioData.skills.hardSkills].map(
              (skill, index) => (
                <div
                  key={`hard-${index}`}
                  className="flex flex-col items-center justify-center gap-3 p-4 w-32 h-32 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
                >
                  <div className="w-12 h-12 relative flex items-center justify-center">
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name} 
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {skill.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Soft Skills Marquee (Reverse Direction or Same) */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center font-science">
          Soft Skills
        </h3>
        <div className="relative w-full pause-on-hover">
          <div className="flex w-max animate-scroll gap-8" style={{ animationDirection: 'reverse' }}>
            {[...portfolioData.skills.softSkills, ...portfolioData.skills.softSkills, ...portfolioData.skills.softSkills].map(
              (skill, index) => {
                const IconComponent = (Icons as any)[skill.icon] || Icons.Circle;
                return (
                  <div
                    key={`soft-${index}`}
                    className="flex flex-col items-center justify-center gap-3 p-4 w-32 h-32 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMinimal;
