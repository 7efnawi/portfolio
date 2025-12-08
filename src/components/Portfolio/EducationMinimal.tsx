import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationMinimal = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-science"
        >
          <span className="text-white">{portfolioData.education.title.split(" ")[0]}</span>{" "}
          <span className="text-[#37ff25]">{portfolioData.education.title.split(" ").slice(1).join(" ")}</span>
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
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(55,255,37,0.15)] hover:border-[#37ff25]/30 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#37ff25] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                     <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-[#37ff25] transition-colors mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-lg text-white/90 font-medium">{edu.institution}</p>
                     </div>
                     <Badge variant="outline" className="border-white/10 text-[#37ff25] bg-white/5 backdrop-blur-sm shadow-sm whitespace-nowrap self-start">
                        {edu.period}
                     </Badge>
                  </div>

                  <p className="text-muted-foreground mb-6 text-sm md:text-base border-l-2 border-white/5 pl-4 group-hover:border-[#37ff25]/50 transition-colors">
                    {edu.specialization}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 border border-white/5 hover:border-[#37ff25]/30 transition-colors">
                      <MapPin size={14} className="text-[#37ff25]" />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 border border-white/5 hover:border-[#37ff25]/30 transition-colors">
                        <Award size={14} className="text-[#37ff25]" />
                        <span className="text-white/80"><span className="text-[#37ff25]">GPA:</span> {edu.gpa}</span>
                      </div>
                    )}
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
