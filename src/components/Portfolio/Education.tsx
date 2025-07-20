import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  const education = [
    {
      degree: "Master of Science in Computer Science",
      specialization: "Machine Learning & AI",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2018",
      gpa: "3.9/4.0",
      highlights: [
        "Thesis: 'Deep Reinforcement Learning for Autonomous Systems'",
        "Graduate Research Assistant - AI Lab",
        "Relevant Coursework: Deep Learning, Computer Vision, NLP, Statistical Learning"
      ]
    },
    {
      degree: "Bachelor of Science in Data Science",
      specialization: "Statistics & Mathematics",
      institution: "UC Berkeley",
      location: "Berkeley, CA",
      period: "2012 - 2016",
      gpa: "3.8/4.0",
      highlights: [
        "Summa Cum Laude",
        "President of Data Science Student Association",
        "Capstone: Predictive Analytics for Smart City Infrastructure"
      ]
    }
  ];

  const certifications = [
    {
      title: "Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "2023",
      credential: "GCP-MLE-2023-001",
      skills: ["MLOps", "TensorFlow", "Google Cloud AI"]
    },
    {
      title: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "AWS-MLS-2022-001",
      skills: ["SageMaker", "AWS AI Services", "ML Deployment"]
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera - Andrew Ng",
      date: "2021",
      credential: "COURSERA-DL-2021",
      skills: ["Neural Networks", "CNN", "RNN", "Optimization"]
    },
    {
      title: "Certified Analytics Professional (CAP)",
      issuer: "INFORMS",
      date: "2020",
      credential: "CAP-2020-001",
      skills: ["Analytics Methodology", "Model Building", "Deployment"]
    }
  ];

  const publications = [
    {
      title: "Ethical Considerations in Automated Decision-Making Systems",
      journal: "AI Ethics Journal",
      year: "2023",
      doi: "10.1000/ai.ethics.2023.001",
      citations: 45
    },
    {
      title: "Scalable Deep Learning for Time Series Forecasting",
      journal: "Journal of Machine Learning Research",
      year: "2022",
      doi: "10.1000/jmlr.2022.001",
      citations: 128
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Education & Credentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in AI, machine learning, and data science
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <GraduationCap className="text-accent mr-3" size={28} />
                Academic Background
              </h3>
              
              {education.map((edu, index) => (
                <Card key={edu.degree} className="bg-gradient-card border-border/50 hover-lift">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-accent font-medium">{edu.specialization}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-start text-sm">
                      <div>
                        <p className="font-medium text-foreground">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-muted-foreground">{edu.period}</p>
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-start">
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
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{animationDelay: '0.4s'}}>
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                <Award className="text-orange mr-3" size={28} />
                Professional Certifications
              </h3>
              
              {certifications.map((cert, index) => (
                <Card key={cert.title} className="bg-gradient-card border-border/50 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                        <p className="text-accent font-medium text-sm">{cert.issuer}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="border-accent text-accent">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 font-mono">
                      ID: {cert.credential}
                    </p>
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
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.6s'}}>
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
              <BookOpen className="text-accent mr-3" size={28} />
              Publications & Research
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((pub, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;