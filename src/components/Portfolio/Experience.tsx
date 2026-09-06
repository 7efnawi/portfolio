import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const { experienceList, title, description } = portfolioData.experience;

  if (!experienceList || experienceList.length === 0) {
    return null;
  }

  const titleWords = title ? title.split(" ") : ["Professional", "Experience"];
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(" ");

  return (
    <section id="experience" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background radial glow accents */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 0% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-full pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(22, 255, 0, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <div 
              className="p-2.5 rounded-full"
              style={{
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.25)',
              }}
            >
              <Briefcase size={24} style={{ color: '#00D4FF' }} />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-science">
            <span className="text-foreground">{firstWord}</span>{" "}
            <span className="gradient-text-liquid">{restWords || "Experience"}</span>
          </h2>
          {description && (
            <p className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Experience Cards / Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 relative group hover:border-[#00D4FF]/40 transition-all duration-300"
            >
              {/* Top Row: Role, Company, Period & Badges */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                      {exp.title}
                    </h3>
                    <Badge 
                      className="border-none text-xs font-semibold px-2.5 py-0.5"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(22, 255, 0, 0.2))',
                        border: '1px solid rgba(0, 212, 255, 0.35)',
                        color: '#00D4FF',
                      }}
                    >
                      Active
                    </Badge>
                  </div>
                  <h4 className="text-base md:text-lg font-medium text-foreground/90">
                    {exp.company}
                  </h4>
                </div>

                {/* Metadata badges (Period & Location) */}
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground shrink-0">
                  <div 
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                    }}
                  >
                    <Calendar size={14} style={{ color: '#00D4FF' }} />
                    <span className="text-foreground/90 font-medium">{exp.period}</span>
                  </div>
                  <div 
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(22, 255, 0, 0.08)',
                      border: '1px solid rgba(22, 255, 0, 0.2)',
                    }}
                  >
                    <MapPin size={14} style={{ color: '#16FF00' }} />
                    <span className="text-foreground/90">{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements Bullet Points */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 
                        size={18} 
                        className="shrink-0 mt-0.5" 
                        style={{ color: '#16FF00' }} 
                      />
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies Used */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground/70 font-semibold mr-1 flex items-center gap-1.5">
                    <Terminal size={13} style={{ color: '#00D4FF' }} />
                    Tech Stack:
                  </span>
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#00D4FF',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
