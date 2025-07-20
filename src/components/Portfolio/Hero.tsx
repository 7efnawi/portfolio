import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI Engineer',
    'Data Scientist', 
    'ML Engineer',
    'Data Analytics Expert'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-primary p-2 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Alex Chen - AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in-up">
            Alex Chen
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-accent font-semibold">
              {roles[currentRole]}
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Transforming complex data into actionable insights through advanced AI and machine learning. 
            Specializing in predictive analytics, neural networks, and scalable data solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-light text-primary-foreground px-8 py-3 text-lg font-semibold hover-glow">
              <Mail className="mr-2" size={20} />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold">
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a href="https://github.com" className="text-muted-foreground hover:text-accent transition-colors hover-scale">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-accent transition-colors hover-scale">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-accent transition-colors hover-scale">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-muted-foreground hover:text-accent transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;