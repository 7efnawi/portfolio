import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Yousef Mahmoud</h3>
            <p className="text-primary-foreground/80 text-lg mb-6 max-w-2xl mx-auto">
              ICT Student | AI & Data Science Enthusiast. Passionate about
              leveraging artificial intelligence and data science to contribute
              to innovative projects.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              {[
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-sm text-primary-foreground/60 mb-4 md:mb-0">
                <span>
                  © {currentYear} Yousef Mahmoud Ibrahim Hefnawi. Made with
                </span>
                <Heart size={16} className="mx-2 text-red-400" />
                <span>and lots of coffee.</span>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowUp size={16} className="mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
