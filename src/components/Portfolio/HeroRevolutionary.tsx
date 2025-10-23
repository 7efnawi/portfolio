import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Download, Linkedin, ArrowRight, Database, Brain, Code, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroRevolutionary = () => {
  const ref = useRef<HTMLElement>(null);
  const [currentStat, setCurrentStat] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Database },
    { label: "ML Models Trained", value: "100+", icon: Brain },
    { label: "Lines of Code", value: "50k+", icon: Code },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#skills");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ opacity, scale }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-orange to-accent"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-2 h-2 bg-accent rounded-full"
              />
              <span className="text-sm text-accent font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {portfolioData.hero.name.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                  {index < portfolioData.hero.name.split(" ").length - 1 && " "}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-12 bg-gradient-to-r from-accent to-orange" />
              <p className="text-2xl md:text-3xl gradient-text font-semibold">
                {portfolioData.hero.title}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              {portfolioData.hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent-light px-8 py-6 text-lg font-semibold group"
                asChild
              >
                <a href="mailto:7efnaw.ii@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Let's Connect
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-accent/20 hover:bg-accent/10 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1Fv_JPSUg_pdEk6e-P7DmhlHFT5AZyAuG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6"
          >
            {[
              { href: "https://www.linkedin.com/in/yousef-mahmoud-157b23219", icon: Linkedin },
              { href: "mailto:7efnaw.ii@gmail.com", icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.includes("linkedin") ? "_blank" : undefined}
                rel={social.href.includes("linkedin") ? "noopener noreferrer" : undefined}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-accent/20 hover:border-accent hover:bg-accent/10 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5 text-accent" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="col-span-2 relative group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-orange/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-accent/20">
                <img
                  src={portfolioData.hero.image}
                  alt={portfolioData.hero.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {stats.map((stat, index) =>
                currentStat === index ? (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-2 p-6 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent/10 rounded-xl">
                        <stat.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: {
            delay: 2,
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
    </motion.section>
  );
};

export default HeroRevolutionary;
