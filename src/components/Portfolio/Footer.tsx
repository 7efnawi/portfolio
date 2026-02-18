import { Heart, ArrowUp, Sparkles, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-28 md:pb-16 overflow-hidden" style={{ background: '#050a15' }}>
      {/* Top border with gradient glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #00D4FF, #16FF00, #00D4FF, transparent)',
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.1), transparent)',
        }}
      />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(#00D4FF 1px, transparent 1px), linear-gradient(90deg, #00D4FF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <Database size={20} style={{ color: '#00D4FF' }} />
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-science"
            >
              <span className="text-foreground">Yousef</span>
              <span className="gradient-text-liquid"> Mahmoud</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-2 max-w-2xl mx-auto"
            >
              Junior <span style={{ color: '#16FF00' }} className="font-semibold">Data Analyst</span> | ICT Student
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

            {/* Navigation Links — Desktop only */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex flex-wrap justify-center gap-6 mb-8"
            >
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
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
                  className="text-sm font-medium text-muted-foreground hover:text-[#00D4FF] transition-all duration-300 relative group min-h-[44px] flex items-center"
                >
                  {link.label}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ background: 'linear-gradient(90deg, #00D4FF, #16FF00)' }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Divider with Glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div 
                className="w-full h-px"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(0, 212, 255, 0.5), rgba(22, 255, 0, 0.5), rgba(0, 212, 255, 0.5), transparent)',
                }}
              />
            </div>
            <div className="relative flex justify-center">
              <div style={{ background: '#050a15' }} className="px-4">
                <Sparkles size={20} style={{ color: '#16FF00' }} />
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
              <Heart 
                size={14} 
                className="mx-2 animate-pulse" 
                fill="#16FF00"
                style={{ color: '#16FF00' }}
              />
              <span>and lots of coffee</span>
            </div>

            {/* Back to Top — Desktop only */}
            <Button
              onClick={scrollToTop}
              className="hidden md:inline-flex font-bold group rounded-full relative overflow-hidden"
              style={{
                background: 'transparent',
                border: '2px solid #00D4FF',
                color: '#00D4FF',
              }}
            >
              <span 
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #16FF00)' }}
              />
              <span className="relative z-10 flex items-center group-hover:text-[#050a15] transition-colors">
                <ArrowUp size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
