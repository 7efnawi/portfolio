import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateProgress(true), 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 88 },
        { name: "SQL", level: 92 },
        { name: "JavaScript", level: 80 },
        { name: "Scala", level: 75 }
      ]
    },
    {
      title: "ML/AI Frameworks",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 95 },
        { name: "Keras", level: 85 },
        { name: "XGBoost", level: 82 }
      ]
    },
    {
      title: "Data Tools & Platforms",
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 92 },
        { name: "Tableau", level: 88 },
        { name: "Power BI", level: 80 }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", level: 88 },
        { name: "Google Cloud", level: 82 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "MLOps", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent systems and extracting insights from data
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className={`bg-gradient-card border-border/50 hover-lift ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{animationDelay: `${categoryIndex * 0.1}s`}}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                    <div className="w-2 h-8 bg-gradient-accent rounded-full mr-3"></div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${animateProgress ? 'opacity-100' : 'opacity-0'}`}
                          style={{
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Time Series Analysis',
                'A/B Testing', 'Statistical Modeling', 'Data Mining', 'ETL Pipelines', 'API Development',
                'Agile Methodology', 'Git/GitHub', 'Jupyter Notebooks', 'Apache Airflow', 'MongoDB',
                'PostgreSQL', 'Redis', 'Elasticsearch', 'Kafka', 'CI/CD', 'Model Deployment'
              ].map((skill) => (
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