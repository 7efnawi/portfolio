import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";

const CertificationsModern = () => {
  const certifications = portfolioData.education.certifications;

  return (
    <section id="certifications" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background accent */}
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-full pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, rgba(22, 255, 0, 0.05) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award style={{ color: '#16FF00' }} size={28} />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 font-science">
            <span className="gradient-text-liquid">Certifications</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="glass-card h-full p-6 flex flex-col hover:border-[#16FF00]/40">
                {/* Header with icon and badge */}
                <div className="flex justify-between items-start mb-5">
                  <div 
                    className="w-12 h-12 rounded-xl p-2 flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <img 
                      src={cert.icon} 
                      alt={cert.issuer} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <Badge 
                    className="border-none gap-1"
                    style={{
                      background: 'rgba(22, 255, 0, 0.1)',
                      border: '1px solid rgba(22, 255, 0, 0.3)',
                      color: '#16FF00',
                    }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#00D4FF] transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer and date */}
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span className="font-medium text-foreground">{cert.issuer}</span>
                  <span className="text-[#00D4FF]">•</span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" style={{ color: '#00D4FF' }} />
                    {cert.date}
                  </div>
                </div>

                {/* Action button */}
                <div className="mt-auto">
                  {cert.link && (
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full transition-all group/btn hover:bg-[#16FF00]/10 active:scale-95"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <span className="group-hover/btn:text-[#16FF00] transition-colors">
                        View Credential
                      </span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:text-[#16FF00] transition-colors" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsModern;
