import { useState, useEffect } from "react";
import { portfolioData } from "@/lib/portfolio-data";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Profile Image Left */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-primary p-3 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src={portfolioData.hero.image}
                  alt={`${portfolioData.hero.name} - ${portfolioData.hero.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Text Content Right */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in-up">
              {portfolioData.hero.name}
            </h1>
            <div
              className="text-2xl md:text-3xl text-accent font-semibold mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {portfolioData.hero.title}
            </div>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl md:max-w-2xl lg:max-w-3xl mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {portfolioData.hero.description}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-primary-light text-primary-foreground px-8 py-3 text-lg font-semibold hover-glow"
                asChild
              >
                <a href="mailto:7efnaw.ii@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </a>
              </Button>
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
            </div>
            <div
              className="flex justify-center md:justify-start space-x-6 mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="https://www.linkedin.com/in/yousef-mahmoud-157b23219"
                className="text-muted-foreground hover:text-accent transition-colors hover-scale"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:7efnaw.ii@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors hover-scale"
              >
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={scrollToNext}
              className="animate-bounce text-muted-foreground hover:text-accent transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
