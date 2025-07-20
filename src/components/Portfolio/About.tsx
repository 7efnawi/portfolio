import { useEffect, useRef, useState } from 'react';
import { Brain, Database, BarChart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "5+ years developing neural networks, deep learning models, and AI solutions"
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Expert in processing and analyzing large-scale datasets using modern tools"
    },
    {
      icon: BarChart,
      title: "Predictive Analytics",
      description: "Building forecasting models that drive strategic business decisions"
    },
    {
      icon: Award,
      title: "Research & Innovation",
      description: "Published researcher with focus on ethical AI and algorithmic fairness"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about leveraging artificial intelligence and data science to solve complex real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a results-driven AI Engineer with over 5 years of experience transforming complex data 
                into actionable business insights. My expertise spans machine learning, deep learning, and 
                advanced analytics, with a proven track record of delivering scalable AI solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently, I lead data science initiatives that have improved operational efficiency by 40% 
                and reduced costs by $2M annually. I'm passionate about ethical AI development and have 
                contributed to open-source projects focused on algorithmic fairness.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">ML Models Deployed</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-3xl font-bold text-orange">$5M+</div>
                  <div className="text-sm text-muted-foreground">Business Value Created</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={highlight.title} className="bg-gradient-card border-border/50 hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                            <Icon size={24} className="text-accent-foreground" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;