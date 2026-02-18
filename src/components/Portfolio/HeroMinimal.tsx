import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { animate, utils } from "animejs";

// ── Typewriter Hook ───────────────────────────────────────────
const TYPEWRITER_STRINGS = [
  "Python & SQL",
  "Power BI Dashboards",
  "Exploratory Data Analysis (EDA)",
  "Data Wrangling & ETL",
];

const useTypewriter = (strings: string[], typingSpeed = 80, deletingSpeed = 40, pauseMs = 2000) => {
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const current = strings[indexRef.current];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setDisplay(current.slice(0, display.length + 1));
          if (display.length + 1 === current.length) {
            // Pause at end of word, then start deleting
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          // Deleting
          setDisplay(current.slice(0, display.length - 1));
          if (display.length - 1 === 0) {
            setIsDeleting(false);
            indexRef.current = (indexRef.current + 1) % strings.length;
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [display, isDeleting, strings, typingSpeed, deletingSpeed, pauseMs]);

  return display;
};

// ── WhatsApp Icon ─────────────────────────────────────────────
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

// ── Hero description (hardcoded for clarity) ──────────────────
const HERO_DESCRIPTION =
  "I am a Data Analyst specializing in transforming raw, complex datasets into actionable business intelligence. With hands-on experience in Python, SQL, and Power BI, I build interactive dashboards and automate reporting workflows.";

const HeroMinimal = () => {
  const dataNodesRef = useRef<HTMLDivElement>(null);
  const typed = useTypewriter(TYPEWRITER_STRINGS);

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
    <div id="home">
      {/* ===== MOBILE HERO (< md) ===== */}
      <section
        className="flex md:hidden relative w-full h-[100dvh] overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/profile_pic.webp')` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

        {/* Bottom-anchored Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-[14%] left-0 right-0 px-6 flex flex-col items-center text-center"
        >
          {/* Name */}
          <h1 className="text-3xl font-bold text-white tracking-tight">
            {portfolioData.hero.name}
          </h1>

          {/* Title */}
          <p className="text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 mt-2">
            Aspiring Data Analyst
          </p>

          {/* Typewriter — Mobile */}
          <div className="mt-3 h-6 flex items-center justify-center">
            <span
              className="font-mono text-xs tracking-wide"
              style={{ color: "#00D4FF" }}
            >
              {"> "}
              {typed}
              <span
                className="inline-block w-[2px] h-[14px] ml-0.5 align-middle"
                style={{
                  background: "#00D4FF",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>
          </div>

          {/* CTA Buttons — full width on mobile */}
          <div className="flex flex-col w-full gap-3 mt-6">
            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden border-2 border-[#00D4FF] text-[#00D4FF] hover:text-white py-5 text-sm font-medium rounded-full group active:scale-95 w-full"
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
              className="relative overflow-hidden bg-gradient-to-r from-accent to-[#00D4FF] text-white py-5 text-sm font-medium rounded-full group active:scale-95 w-full"
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Contact Me</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ===== DESKTOP HERO (>= md) ===== */}
      <section
        className="hidden md:flex min-h-screen items-start relative overflow-hidden"
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
                className="space-y-3"
              >
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
                  Hi, I'm{" "}
                  <span className="text-foreground font-semibold">
                    {portfolioData.hero.name}
                  </span>
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-sans font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#16FF00] leading-snug pb-1">
                  Aspiring Data Analyst
                </h1>
              </motion.div>

              {/* Tagline + Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                className="space-y-2"
              >
                <p
                  className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
                  style={{ color: '#00D4FF', textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }}
                >
                  Patterns, Insights, Action
                </p>

                {/* Typewriter — Desktop */}
                <div className="h-7 flex items-center">
                  <span className="font-mono text-sm lg:text-base text-cyan-300 tracking-wide">
                    <span className="text-muted-foreground/50">{"$"}</span>{" "}
                    {typed}
                    <span
                      className="inline-block w-[2px] h-[16px] ml-0.5 align-middle bg-cyan-300"
                      style={{ animation: "blink 1s step-end infinite" }}
                    />
                  </span>
                </div>
              </motion.div>

              {/* Description — hardcoded, recruiter-focused */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="prose prose-invert max-w-none"
              >
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {HERO_DESCRIPTION}
                </p>
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
                  className="relative overflow-hidden border-2 border-[#00D4FF] text-[#00D4FF] hover:text-white px-8 py-6 text-base font-medium rounded-full group active:scale-95"
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
                  className="relative overflow-hidden bg-gradient-to-r from-accent to-[#00D4FF] text-white px-8 py-6 text-base font-medium rounded-full group active:scale-95"
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
    </div>
  );
};

export default HeroMinimal;
