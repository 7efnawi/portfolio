import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">Yousef Mahmoud</h3>
            <p className="text-muted-foreground text-base mb-6 max-w-2xl mx-auto">
              ICT Student | AI & Data Science Enthusiast. Passionate about
              leveraging artificial intelligence and data science to contribute
              to innovative projects.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "Skills" },
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
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
                <span>© {currentYear} Yousef Mahmoud. Made with</span>
                <Heart size={16} className="mx-2 text-red-500" />
                <span>and lots of coffee.</span>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-border text-muted-foreground hover:bg-accent/10 hover:text-accent"
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
