import { Heart, ArrowUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t-2 border-accent/20 text-foreground py-16 overflow-hidden">
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#16FF00 1px, transparent 1px), linear-gradient(90deg, #16FF00 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 font-science"
            >
              <span className="text-foreground">Yousef</span>
              <span className="text-accent"> Mahmoud</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-2 max-w-2xl mx-auto"
            >
              Aspiring <span className="text-accent font-semibold">Data Analyst</span> | ICT Student
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground/80 text-sm mb-8 max-w-2xl mx-auto"
            >
              Passionate about leveraging data science and AI to drive innovative solutions
            </motion.p>

            {/* Navigation Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              {[
                { href: "#home", label: "Home" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Divider with Glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-4">
                <Sparkles size={20} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {currentYear} Yousef Mahmoud. Crafted with</span>
              <Heart size={14} className="mx-2 text-accent animate-pulse" fill="currentColor" />
              <span>and lots of coffee</span>
            </div>

            <Button
              onClick={scrollToTop}
              className="bg-accent/10 border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 font-bold group"
            >
              <ArrowUp size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
