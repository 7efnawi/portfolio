import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Profile Image - Shows on top for mobile, right side for desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center lg:order-2"
          >
            <motion.img
              src="/Gemini_Generated_Image_v9jke4v9jke4v9jk.png"
              alt="Yousef Mahmoud"
              loading="eager"
              fetchPriority="high"
              className="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-full lg:max-w-md lg:h-auto object-cover rounded-full border-4 border-accent/20 drop-shadow-[0_0_25px_#16FF00]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Left Content - Shows below image on mobile, left side on desktop */}
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
                <span className="text-accent block sm:inline">
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
              <p className="text-lg sm:text-xl lg:text-2xl text-accent font-semibold leading-relaxed">
                {portfolioData.hero.title}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="py-1"
            >
              <p className="text-xs sm:text-sm text-accent-light font-semibold tracking-widest uppercase">
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

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              {[
                { href: "https://www.linkedin.com/in/yousef-mahmoud-157b23219", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/7efnawi", icon: Github, label: "GitHub" },
                { href: "https://wa.me/201017906167", icon: WhatsappIcon, label: "WhatsApp" },
                { href: "mailto:7efnaw.ii@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.includes("http") ? "_blank" : undefined}
                  rel={social.href.includes("http") ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full border-2 border-muted-foreground/40 flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-6 text-base font-medium transition-all duration-300"
                asChild
              >
                <a
                  href="/Yousef Mahmoud Hefnawi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  See my CV
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-accent text-white hover:bg-accent-light px-8 py-6 text-base font-medium transition-all duration-300"
                asChild
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Contact Me
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
