import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationMinimal = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
        >
          {portfolioData.education.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16"
        >
          {portfolioData.education.description}
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {portfolioData.education.educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="pb-6 border-b border-gray-200 last:border-b-0"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-600 font-medium mb-3">{edu.institution}</p>
                  <p className="text-gray-600 mb-3">{edu.specialization}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        {edu.gpa}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {portfolioData.education.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: (portfolioData.education.educationList.length + index) * 0.05,
                  }}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={14} />
                        {cert.date}
                      </div>
                    </div>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
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
