import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Calendar, MapPin, Award, GraduationCap } from "lucide-react";

const EducationMinimal = () => {
  return (
    <section id="education" className="py-14 md:py-20 relative">
      {/* Background accent */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 100% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-foreground">{portfolioData.education.title.split(" ")[0]}</span>{" "}
          <span className="gradient-text-liquid">{portfolioData.education.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>

        {portfolioData.education.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-16"
          >
            {portfolioData.education.description}
          </motion.p>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 font-science flex items-center gap-3">
              <GraduationCap style={{ color: '#00D4FF' }} />
              <span>Education</span>
            </h3>
            
            <div className="space-y-6">
              {portfolioData.education.educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-[#00D4FF]/50 group"
                >
                  {/* Timeline dot */}
                  <div className="flex gap-6">
                    <div className="hidden md:flex flex-col items-center">
                      <div 
                        className="w-4 h-4 rounded-full shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #00D4FF, #16FF00)',
                          boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
                        }}
                      />
                      {index !== portfolioData.education.educationList.length - 1 && (
                        <div 
                          className="w-0.5 h-full mt-2"
                          style={{ background: 'linear-gradient(to bottom, #00D4FF, transparent)' }}
                        />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 
                        className="text-lg font-bold mb-2 group-hover:text-[#00D4FF] transition-colors"
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-foreground font-medium mb-2">{edu.institution}</p>
                      <p className="text-muted-foreground mb-4">{edu.specialization}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div 
                          className="flex items-center gap-2 px-3 py-1 rounded-full"
                          style={{ 
                            background: 'rgba(0, 212, 255, 0.1)',
                            border: '1px solid rgba(0, 212, 255, 0.2)',
                          }}
                        >
                          <Calendar size={14} style={{ color: '#00D4FF' }} />
                          <span>{edu.period}</span>
                        </div>
                        <div 
                          className="flex items-center gap-2 px-3 py-1 rounded-full"
                          style={{ 
                            background: 'rgba(22, 255, 0, 0.1)',
                            border: '1px solid rgba(22, 255, 0, 0.2)',
                          }}
                        >
                          <MapPin size={14} style={{ color: '#16FF00' }} />
                          <span>{edu.location}</span>
                        </div>
                        {edu.gpa && (
                          <div 
                            className="flex items-center gap-2 px-3 py-1 rounded-full"
                            style={{ 
                              background: 'rgba(139, 92, 246, 0.1)',
                              border: '1px solid rgba(139, 92, 246, 0.2)',
                            }}
                          >
                            <Award size={14} style={{ color: '#8B5CF6' }} />
                            <span>{edu.gpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationMinimal;
