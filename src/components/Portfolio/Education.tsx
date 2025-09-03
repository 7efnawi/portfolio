import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, BookOpen, ExternalLink, CheckCircle, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

              {portfolioData.education.educationList.map((edu) => (
                <Card
                  key={edu.degree}
                  className="bg-gradient-card/80 backdrop-blur border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <CardTitle className="text-lg font-semibold text-foreground">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-accent font-medium leading-tight mt-0.5">
                          {edu.specialization}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3 text-sm">
                      <div className="text-foreground/90">
                        <p className="font-medium">{edu.institution}</p>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} className="text-accent" />
                            <span>{edu.location}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-accent/40 text-accent bg-accent/10">
                            <Calendar size={14} />
                            <span className="font-medium">{edu.period}</span>
                          </span>
                        </div>
                      </div>
                      {edu.gpa ? (
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {edu.gpa}
                        </Badge>
                      ) : null}
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle size={16} className="text-accent mt-0.5" />
                          <span>{highlight}</span>
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

              {portfolioData.education.certifications.map((cert) => (
                <Card
                  key={cert.title}
                  className="bg-gradient-card/80 backdrop-blur border border-border/60 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-accent font-medium text-sm mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">
                        {cert.date}
                      </Badge>
                    </div>
                    {cert.credential && (
                      <p className="text-xs text-muted-foreground mb-3 font-mono truncate">
                        Credential ID: {cert.credential}
                      </p>
                    )}
                    {cert.link && (
                      <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:bg-primary-light mb-3">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} className="mr-2" /> View Credential
                        </a>
                      </Button>
                    )}
                    {Array.isArray((cert as any).skills) && (cert as any).skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {((cert as any).skills as string[]).map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-muted/70 backdrop-blur text-muted-foreground rounded-full text-xs border border-border/40"
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
