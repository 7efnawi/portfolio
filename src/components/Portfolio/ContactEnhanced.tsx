import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolio-data";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram,
};

const ContactEnhanced = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              {portfolioData.contact.title}
            </motion.h2>
            <motion.div
              variants={staggerItem}
              className="w-20 h-1 bg-gradient-to-r from-accent to-orange mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {portfolioData.contact.description}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <CheckCircle2 className="h-4 w-4 text-accent" /> Open to internships &
                collaborations
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Clock className="h-4 w-4 text-accent" /> Response within 24h
              </motion.span>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {(() => {
                const email =
                  portfolioData.contact.contactInfo.find((i) => i.icon === "Mail")
                    ?.link || "mailto:7efnaw.ii@gmail.com";
                return (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild size="lg" className="px-6 relative overflow-hidden group">
                      <a href={email} aria-label="Email Me">
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-accent to-orange"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center">
                          <Mail className="mr-2 h-5 w-5" /> Email Me
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                );
              })()}
              {(() => {
                const linkedin = portfolioData.contact.socialLinks.find((s) =>
                  s.platform.toLowerCase().includes("linkedin")
                )?.url;
                return (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" asChild size="lg" className="px-6">
                      <a
                        href={linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn"
                      >
                        <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                      </a>
                    </Button>
                  </motion.div>
                );
              })()}
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-10 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-border to-transparent"
            />
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className="text-center">
              <motion.h4
                variants={staggerItem}
                className="text-2xl font-semibold text-foreground mb-6"
              >
                {portfolioData.contact.followMeTitle}
              </motion.h4>
              <motion.div
                className="flex justify-center space-x-6"
                variants={staggerContainer}
              >
                {portfolioData.contact.socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 glass rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors group relative"
                      title={`${social.platform} - ${social.username}`}
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-orange opacity-0 group-hover:opacity-20 blur-lg"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                      <Icon size={28} className="relative z-10" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactEnhanced;
