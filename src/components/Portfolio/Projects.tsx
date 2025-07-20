import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
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

  const projects = [
    {
      title: "Smart Retail Analytics Platform",
      category: "Machine Learning",
      description: "AI-powered retail analytics platform that predicts customer behavior and optimizes inventory management using deep learning and computer vision.",
      technologies: ["Python", "TensorFlow", "OpenCV", "AWS", "PostgreSQL"],
      impact: "Increased sales by 23% and reduced inventory costs by 18%",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Predictive Maintenance System",
      category: "Data Science",
      description: "IoT sensor data analysis system that predicts equipment failures before they occur, reducing downtime and maintenance costs for manufacturing.",
      technologies: ["Python", "Scikit-learn", "Apache Kafka", "Docker", "Grafana"],
      impact: "Reduced unplanned downtime by 35% and maintenance costs by $1.2M",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "Financial Fraud Detection",
      category: "Deep Learning",
      description: "Real-time fraud detection system using ensemble learning and neural networks to identify suspicious transactions with 99.7% accuracy.",
      technologies: ["Python", "PyTorch", "Apache Spark", "Kubernetes", "MongoDB"],
      impact: "Prevented $5M+ in fraudulent transactions with 0.1% false positive rate",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Healthcare Analytics Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for healthcare providers to track patient outcomes, resource utilization, and operational efficiency metrics.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Tableau"],
      impact: "Improved patient care efficiency by 28% across 15 hospitals",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
    },
    {
      title: "Natural Language Processing API",
      category: "NLP",
      description: "Scalable NLP API for sentiment analysis, entity recognition, and text classification with multi-language support and real-time processing.",
      technologies: ["Python", "spaCy", "BERT", "FastAPI", "Redis", "Docker"],
      impact: "Processing 1M+ documents daily with 95% accuracy",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop"
    },
    {
      title: "Supply Chain Optimization",
      category: "Optimization",
      description: "AI-driven supply chain optimization system that reduces costs and improves delivery times using reinforcement learning algorithms.",
      technologies: ["Python", "TensorFlow", "OR-Tools", "GCP", "BigQuery"],
      impact: "Reduced logistics costs by 22% and improved delivery times by 15%",
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=600&h=400&fit=crop"
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of AI and data science solutions that have delivered measurable business impact
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`${
                  filter === category 
                    ? 'bg-gradient-primary text-primary-foreground' 
                    : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                } transition-all hover-scale`}
              >
                <Filter className="mr-2" size={16} />
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`bg-gradient-card border-border/50 hover-lift overflow-hidden group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="bg-accent/5 border-l-4 border-accent p-3 rounded">
                    <p className="text-sm font-medium text-foreground">
                      <strong>Impact:</strong> {project.impact}
                    </p>
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex-1">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-primary text-primary-foreground hover:bg-primary-light flex-1">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;