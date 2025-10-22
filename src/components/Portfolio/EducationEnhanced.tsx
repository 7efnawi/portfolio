import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Award,
  ExternalLink,
  CheckCircle,
  Calendar,
  MapPin,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const EducationEnhanced = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id="education"
      ref={ref}
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              {portfolioData.education.title}
            </motion.h2>
            <motion.div
              variants={staggerItem}
              className="w-20 h-1 bg-gradient-to-r from-accent to-orange mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {portfolioData.education.description}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h3
                variants={staggerItem}
                className="text-2xl font-semibold text-foreground mb-6 flex items-center"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <GraduationCap className="text-accent mr-3" size={28} />
                </motion.div>
                Academic Background
              </motion.h3>

              {portfolioData.education.educationList.map((edu, index) => (
                <motion.div key={edu.degree} variants={staggerItem}>
                  <Card className="glass border-border/60 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all group">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                            {edu.degree}
                          </CardTitle>
                          <p className="text-accent font-medium leading-tight mt-0.5">
                            {edu.specialization}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap items-start justify-between gap-3 text-sm">
                        <div className="text-foreground/90">
                          <p className="font-medium">{edu.institution}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={14} className="text-accent" />
                              <span>{edu.location}</span>
                            </span>
                            <motion.span
                              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Calendar size={14} />
                              <span className="font-medium">{edu.period}</span>
                            </motion.span>
                          </div>
                        </div>
                        {edu.gpa && (
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {edu.gpa}
                          </Badge>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <motion.li
                            key={hIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.1 + hIndex * 0.05 }}
                          >
                            <CheckCircle size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.h3
                variants={staggerItem}
                className="text-2xl font-semibold text-foreground mb-6 flex items-center"
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Award className="text-orange mr-3" size={28} />
                </motion.div>
                Professional Certifications
              </motion.h3>

              {portfolioData.education.certifications.map((cert, index) => (
                <motion.div key={cert.title} variants={staggerItem}>
                  <Card className="glass border-border/60 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all group">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground leading-tight group-hover:text-accent transition-colors">
                            {cert.title}
                          </h4>
                          <p className="text-accent font-medium text-sm mt-0.5">
                            {cert.issuer}
                          </p>
                        </div>
                        <Badge variant="outline" className="border-accent text-accent">
                          {cert.date}
                        </Badge>
                      </div>
                      {cert.credential && (
                        <p className="text-xs text-muted-foreground mb-3 font-mono truncate">
                          Credential ID: {cert.credential}
                        </p>
                      )}
                      {cert.link && (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-primary text-primary-foreground hover:bg-primary-light mb-3 w-full sm:w-auto"
                          >
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} className="mr-2" /> View Credential
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {Array.isArray((cert as any).skills) &&
                        (cert as any).skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {((cert as any).skills as string[]).map((skill, skillIndex) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-2 py-1 glass text-muted-foreground rounded-full text-xs border border-border/40"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationEnhanced;
