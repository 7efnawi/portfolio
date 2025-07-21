import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/lib/portfolio-data";

const Education = () => {
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
    <section id="education" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {portfolioData.education.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {portfolioData.education.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <GraduationCap className="text-accent mr-3" size={28} />
                Academic Background
              </h3>

              {portfolioData.education.educationList.map((edu, index) => (
                <Card
                  key={edu.degree}
                  className="bg-gradient-card border-border/50 hover-lift"
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-accent font-medium">
                      {edu.specialization}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-start text-sm">
                      <div>
                        <p className="font-medium text-foreground">
                          {edu.institution}
                        </p>
                        <p className="text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">{edu.period}</p>
                        <Badge
                          variant="secondary"
                          className="bg-accent/10 text-accent"
                        >
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="text-accent mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div
              className={`space-y-6 ${
                isVisible ? "animate-fade-in-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Award className="text-orange mr-3" size={28} />
                Professional Certifications
              </h3>

              {portfolioData.education.certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="bg-gradient-card border-border/50 hover-lift"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-accent font-medium text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className="border-accent text-accent"
                        >
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 font-mono">
                      ID: {cert.credential}
                    </p>
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mb-3"
                      >
                        <button
                          type="button"
                          className="px-4 py-2 bg-accent text-accent-foreground rounded-2xl font-semibold shadow hover:bg-accent/80 transition-colors transform-gpu hover:scale-105 duration-200"
                        >
                          Show Credential
                        </button>
                      </a>
                    )}
                    {Array.isArray(cert.skills) && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          {/* <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <BookOpen className="text-accent mr-3" size={28} />
              Publications & Research
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.education.publications.map((pub, index) => (
                <Card key={pub.title} className="bg-gradient-card border-border/50 hover-lift">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2 leading-tight">
                      {pub.title}
                    </h4>
                    <p className="text-accent font-medium text-sm mb-2">{pub.journal}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{pub.year}</span>
                      <span>{pub.citations} citations</span>
                    </div>
                    <div className="mt-3 flex items-center text-xs text-muted-foreground">
                      <ExternalLink size={14} className="mr-1" />
                      DOI: {pub.doi}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Education;
