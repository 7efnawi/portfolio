import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  floatingAnimation,
} from "@/lib/animations";

const HeroEnhanced = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-10 noise-texture"></div>

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl will-animate"
        animate={floatingAnimation}
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl will-animate"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 0.5,
          },
        }}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl will-animate"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        style={{
          x: "-50%",
          y: "-50%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={staggerItem} className="flex-shrink-0 mb-8 md:mb-0">
            <motion.div
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary p-2 sm:p-3 shadow-xl flex items-center justify-center relative group"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-orange opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden relative">
                <img
                  src={portfolioData.hero.image}
                  alt={`${portfolioData.hero.name} - ${portfolioData.hero.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1
              variants={staggerItem}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3"
            >
              {portfolioData.hero.name.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                  {index < portfolioData.hero.name.split(" ").length - 1 && " "}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              variants={staggerItem}
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-5 overflow-hidden"
            >
              <motion.span
                className="inline-block gradient-text"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {portfolioData.hero.title}
              </motion.span>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="text-md sm:text-lg text-muted-foreground max-w-md mx-auto md:mx-0 md:max-w-2xl mb-8 leading-relaxed"
            >
              {portfolioData.hero.description}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:bg-primary-light text-primary-foreground px-8 py-3 text-lg font-semibold relative overflow-hidden group"
                  asChild
                >
                  <a href="mailto:7efnaw.ii@gmail.com">
                    <span className="relative z-10 flex items-center">
                      <Mail className="mr-2" size={20} />
                      Get In Touch
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-accent to-orange"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1Fv_JPSUg_pdEk6e-P7DmhlHFT5AZyAuG/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2" size={20} />
                    Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="flex justify-center md:justify-start space-x-6 mb-12"
            >
              {[
                {
                  href: "https://www.linkedin.com/in/yousef-mahmoud-157b23219",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                { href: "mailto:7efnaw.ii@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-accent transition-colors relative group"
                  target={social.label === "LinkedIn" ? "_blank" : undefined}
                  rel={social.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                  <motion.span
                    className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-20 blur-xl"
                    initial={false}
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              onClick={scrollToNext}
              className="text-muted-foreground hover:text-accent transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                y: {
                  delay: 1.5,
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown size={32} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroEnhanced;
