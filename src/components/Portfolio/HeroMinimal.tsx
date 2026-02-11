import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animate, stagger, utils } from "animejs";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
  </svg>
);

const HeroMinimal = () => {
  const dataNodesRef = useRef<HTMLDivElement>(null);

  // Animate data nodes around profile image
  useEffect(() => {
    if (!dataNodesRef.current) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const nodes = dataNodesRef.current.querySelectorAll('.data-node');
    
    // Animate each node individually with v4 API
    const nodeAnimations = Array.from(nodes).map((node, i) => {
      return animate(node, {
        translateX: { from: 0, to: utils.random(-20, 20) },
        translateY: { from: 0, to: utils.random(-20, 20) },
        scale: { from: 0.8, to: utils.random(1, 1.3) },
        opacity: { from: 0.3, to: utils.random(0.6, 1) },
        duration: utils.random(3000, 5000),
        delay: utils.random(0, 1000),
        ease: 'inOutSine',
        alternate: true,
        loop: true,
      });
    });

    // Animate connection lines
    const lines = dataNodesRef.current.querySelectorAll('.data-line');
    const lineAnimations = Array.from(lines).map((line, i) => {
      return animate(line, {
        opacity: { from: 0, to: 0.4 },
        duration: 4000,
        delay: i * 500,
        ease: 'inOutQuad',
        alternate: true,
        loop: true,
      });
    });

    return () => {
      nodeAnimations.forEach(anim => anim.pause());
      lineAnimations.forEach(anim => anim.pause());
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-start relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pb-0 lg:pt-[12vh]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Profile Image with Data Field Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center lg:order-2"
          >
            {/* Data Nodes Container */}
            <div ref={dataNodesRef} className="absolute inset-0 pointer-events-none">
              {/* Animated data nodes */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="data-node absolute"
                  style={{
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${15 + Math.floor(i / 4) * 60}%`,
                  }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#00D4FF' : '#16FF00',
                      boxShadow: `0 0 15px ${i % 2 === 0 ? '#00D4FF' : '#16FF00'}`,
                    }}
                  />
                </div>
              ))}
              
              {/* Connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                <line className="data-line" x1="25%" y1="20%" x2="45%" y2="35%" stroke="#00D4FF" strokeWidth="1" />
                <line className="data-line" x1="55%" y1="35%" x2="75%" y2="25%" stroke="#16FF00" strokeWidth="1" />
                <line className="data-line" x1="30%" y1="70%" x2="50%" y2="55%" stroke="#00D4FF" strokeWidth="1" />
                <line className="data-line" x1="50%" y1="55%" x2="70%" y2="75%" stroke="#16FF00" strokeWidth="1" />
              </svg>
            </div>

            {/* Profile Image with Glass Frame */}
            <div className="relative">
              {/* Outer glow ring */}
              <div 
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(22, 255, 0, 0.3))',
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)',
                }}
              />
              
              <motion.img
                src="/profile_pic.webp"
                alt="Yousef Mahmoud"
                width={400}
                height={400}
                loading="eager"

                className="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-full lg:max-w-md lg:h-auto object-cover rounded-full relative z-10"
                style={{
                  border: '3px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.3), inset 0 0 60px rgba(0, 0, 0, 0.3)',
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 lg:space-y-6 lg:order-1"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight font-science">
                Welcome to{" "}
                <span className="gradient-text-liquid block sm:inline">
                  {portfolioData.hero.name.split(" ")[0]}'s
                </span>{" "}
                Space
              </h1>
            </motion.div>

            {/* Title/Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                I'm a
              </p>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed gradient-text-liquid">
                {portfolioData.hero.title}
              </p>
            </motion.div>

            {/* Tagline with data styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="py-1"
            >
              <p 
                className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
                style={{ color: '#00D4FF', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }}
              >
                Patterns, Insights, Action
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="prose prose-invert max-w-none"
            >
              <div className="text-sm lg:text-base text-muted-foreground leading-relaxed space-y-3 whitespace-pre-line">
                {portfolioData.hero.description}
              </div>
            </motion.div>

            {/* Social Icons with Glass Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              {[
                { href: "https://www.linkedin.com/in/yousef-mahmoud-157b23219", icon: Linkedin, label: "LinkedIn", color: "#00D4FF" },
                { href: "https://github.com/7efnawi", icon: Github, label: "GitHub", color: "#ffffff" },
                { href: "https://wa.me/201017906167", icon: WhatsappIcon, label: "WhatsApp", color: "#16FF00" },
                { href: "mailto:7efnaw.ii@gmail.com", icon: Mail, label: "Email", color: "#00D4FF" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.includes("http") ? "_blank" : undefined}
                  rel={social.href.includes("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground transition-all duration-300 group"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: `0 0 20px ${social.color}40`,
                    borderColor: social.color,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons with Liquid Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden border-2 border-[#00D4FF] text-[#00D4FF] hover:text-white px-8 py-6 text-base font-medium rounded-full group"
                asChild
              >
                <a
                  href="/Yousef Mahmoud Hefnawi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#0066FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">See my CV</span>
                </a>
              </Button>

              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-accent to-[#00D4FF] text-white px-8 py-6 text-base font-medium rounded-full group"
                asChild
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10">Contact Me</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroMinimal;
