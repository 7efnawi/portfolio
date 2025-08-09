import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolio-data";
import {
  Code,
  Code2,
  Brain,
  BarChart,
  BarChart3,
  ListTree,
  Database,
  Notebook,
  Cloud,
  FileText,
  FileSpreadsheet,
  Clock,
  MessageCircle,
  RefreshCcw,
  Puzzle,
  Users,
  Sparkles,
  Crown,
  Handshake,
  CheckCircle2,
  Search,
  Sigma,
  Table,
  LineChart,
  Waves,
  Flame,
  FunctionSquare,
  Workflow,
} from "lucide-react";

const iconMap = {
  Code,
  Code2,
  Brain,
  BarChart,
  BarChart3,
  ListTree,
  Database,
  Notebook,
  Cloud,
  FileText,
  FileSpreadsheet,
  Clock,
  MessageCircle,
  RefreshCcw,
  Puzzle,
  Users,
  Sparkles,
  Crown,
  Handshake,
  CheckCircle2,
  Search,
  Sigma,
  Table,
  LineChart,
  Waves,
  Flame,
  FunctionSquare,
  Workflow,
};

const Skills = () => {
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

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {portfolioData.skills.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {portfolioData.skills.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {portfolioData.skills.skillCategories.map(
              (category, categoryIndex) => (
                <Card
                  key={category.title}
                  className={`bg-gradient-card border-border/50 hover-lift ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                      <div className="w-2 h-8 bg-gradient-accent rounded-full mr-3"></div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {category.skills.map((skill) => {
                      const Icon = iconMap[skill.icon as keyof typeof iconMap];
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 py-1"
                        >
                          {Icon && <Icon className="text-accent" size={20} />}
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              )
            )}
          </div>

          {/* Additional Skills Tags */}
          <div
            className={`mt-16 text-center ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {portfolioData.skills.additionalExpertise.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {portfolioData.skills.additionalExpertise.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors hover-scale cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
