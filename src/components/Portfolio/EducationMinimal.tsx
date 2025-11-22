import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationMinimal = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-foreground">{portfolioData.education.title.split(" ")[0]}</span>{" "}
          <span className="text-accent">{portfolioData.education.title.split(" ").slice(1).join(" ")}</span>
        </motion.h2>

        {portfolioData.education.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16"
          >
            {portfolioData.education.description}
          </motion.p>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 font-science">Education</h3>
            <div className="space-y-6">
              {portfolioData.education.educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="pb-6 border-b border-border last:border-b-0"
                >
                  <h4 className="text-lg font-bold text-accent mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-foreground font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground mb-3">{edu.specialization}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-accent" />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-accent" />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-accent" />
                        {edu.gpa}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 font-science">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.education.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="group p-5 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-accent hover:shadow-[0_0_15px_rgba(22,255,0,0.1)] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-white rounded-lg w-12 h-12 flex items-center justify-center">
                      {cert.icon ? (
                        <img 
                          src={cert.icon} 
                          alt={cert.issuer} 
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Award size={20} className="text-accent" />
                      )}
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>

                  <div className="mb-4 flex-grow">
                    <h4 className="font-bold text-foreground text-lg mb-2 leading-tight">
                      {cert.title}
                    </h4>
                    <Badge
                      variant="outline"
                      className="text-xs font-normal text-muted-foreground border-border group-hover:border-accent/50 transition-colors"
                    >
                      {cert.issuer}
                    </Badge>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={14} className="text-accent" />
                    {cert.date}
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
