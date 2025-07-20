import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
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

  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      achievements: [
        "Led development of ML platform serving 10M+ daily predictions with 99.9% uptime",
        "Reduced model training time by 60% through optimized pipelines and distributed computing",
        "Mentored team of 5 junior data scientists and established ML best practices",
        "Deployed 15+ production models generating $3M+ annual revenue impact"
      ],
      technologies: ["Python", "TensorFlow", "Kubernetes", "AWS", "MLOps"]
    },
    {
      title: "Data Science Engineer",
      company: "Analytics Pro Inc.",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      achievements: [
        "Built real-time fraud detection system reducing false positives by 45%",
        "Developed customer churn prediction model with 88% accuracy, saving $2M annually",
        "Created automated reporting dashboards used by 200+ stakeholders",
        "Implemented A/B testing framework improving decision-making efficiency by 35%"
      ],
      technologies: ["Python", "Scikit-learn", "Apache Spark", "Tableau", "SQL"]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataWorks Solutions",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      achievements: [
        "Designed and deployed recommendation engine increasing user engagement by 28%",
        "Optimized existing ML models reducing inference latency by 40%",
        "Built ETL pipelines processing 1TB+ data daily with 99.8% reliability",
        "Collaborated with product teams to integrate ML features into core applications"
      ],
      technologies: ["Python", "PyTorch", "Docker", "Apache Airflow", "MongoDB"]
    },
    {
      title: "Data Analyst",
      company: "Insights Analytics",
      location: "Chicago, IL",
      period: "2018 - 2019",
      type: "Full-time",
      achievements: [
        "Conducted statistical analysis identifying $500K cost-saving opportunities",
        "Created predictive models for demand forecasting with 92% accuracy",
        "Automated monthly reporting reducing manual effort by 70%",
        "Presented findings to C-level executives driving strategic decisions"
      ],
      technologies: ["R", "SQL", "Tableau", "Excel", "Statistical Analysis"]
    }
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A track record of delivering high-impact AI and data science solutions across diverse industries
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-accent hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.title + exp.company}
                  className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-accent rounded-full border-4 border-background hidden md:block shadow-glow"></div>
                  
                  {/* Content */}
                  <div className="md:ml-20">
                    <Card className="bg-gradient-card border-border/50 hover-lift">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-accent font-medium mb-2">
                              {exp.company}
                            </p>
                          </div>
                          <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                            <div className="flex items-center mb-1">
                              <Calendar size={16} className="mr-2" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <TrendingUp size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                              <p className="text-muted-foreground leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium hover:bg-accent/10 hover:text-accent transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;