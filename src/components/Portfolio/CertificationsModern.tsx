import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";

const CertificationsModern = () => {
  const certifications = portfolioData.education.certifications;

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              style={{ originY: 0 }}
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.2, ease: "circOut", delay: index * 0.03 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
              className="group"
            >
              <Card className="h-full bg-card/40 backdrop-blur-sm border-white/10 overflow-hidden hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 relative">
                {/* Gradient Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <CardContent className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shadow-sm">
                      <img 
                        src={cert.icon} 
                        alt={cert.issuer} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20 gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-sm text-muted-foreground mb-6 gap-2">
                    <span className="font-medium text-foreground">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                  </div>

                  <div className="mt-auto space-y-6">
                    {/* Skills are not in the JSON, so we omit them or could infer them if needed. 
                        For now, I'll remove the skills section since it's not in the data source. */}
                    
                    {cert.link && (
                      <Button 
                        variant="outline" 
                        className="w-full border-white/10 hover:bg-white/5 hover:text-accent group-hover:border-accent/30 transition-all"
                        onClick={() => window.open(cert.link, "_blank")}
                      >
                        View Credential
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsModern;
