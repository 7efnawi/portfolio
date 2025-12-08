import { Heart, ArrowUp, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/[0.03] backdrop-blur-md border-t border-white/10 text-foreground py-16 overflow-hidden z-10">
      
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
              <span className="text-white">Yousef</span>
              <span className="text-[#37ff25]"> Mahmoud</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
            >
              Aspiring <span className="text-[#37ff25] font-semibold">Data Analyst</span> | ICT Student
            </motion.p>
            
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center gap-6 mb-12"
            >
              {portfolioData.contact.socialLinks
                .filter(social => ["Github", "Linkedin"].includes(social.icon))
                .map((social, index) => {
                  const Icon = social.icon === "Github" ? Github : Linkedin;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-[#37ff25] hover:text-[#37ff25] hover:shadow-[0_0_15px_rgba(55,255,37,0.3)] transition-all duration-300 group"
                    >
                      <Icon size={32} className="text-muted-foreground group-hover:text-[#37ff25] transition-colors" />
                    </a>
                  );
              })}
            </motion.div>

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
                  className="text-sm font-medium text-muted-foreground hover:text-[#37ff25] transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#37ff25] group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#37ff25]/30 to-transparent" />
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
              <span>© {currentYear} Yousef Mahmoud. Built with Data & Code.</span>
            </div>

            <Button
              onClick={scrollToTop}
              className="bg-white/5 border border-white/10 text-white hover:bg-[#37ff25] hover:text-black hover:border-[#37ff25] transition-all duration-300 font-bold group shadow-[0_0_10px_rgba(55,255,37,0.1)] hover:shadow-[0_0_20px_rgba(55,255,37,0.4)]"
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
