import { useEffect, useRef, useState } from "react";

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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="text-lg text-muted-foreground max-w-4xl mx-auto text-left space-y-4">
              <p className="leading-relaxed">
                I'm <span className="font-semibold text-foreground">Yousef Mahmoud</span>, a professional <span className="font-semibold text-accent">Data Analyst</span> with 1+ year of hands-on experience in Python, SQL, and Power BI. I specialize in transforming raw data into clear, actionable insights through:
              </p>
              
              <ul className="space-y-3 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">📊</span>
                  <span><strong className="text-foreground">Data Visualization & Dashboards</strong> (Power BI, Matplotlib, Seaborn)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">🗄️</span>
                  <span><strong className="text-foreground">Database Management & SQL Queries</strong> for reporting and optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">🐍</span>
                  <span><strong className="text-foreground">Python for Data Analysis</strong> (pandas, NumPy, scikit-learn)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">📈</span>
                  <span><strong className="text-foreground">Statistical Analysis & Reporting</strong> to support decision-making</span>
                </li>
              </ul>

              <p className="leading-relaxed pt-2">
                Currently, I'm in my third year studying <span className="font-semibold text-foreground">Information and Communication Technology</span> with a strong academic record, and I also hold a <span className="font-semibold text-foreground">Pearson BTEC International Level 3 Extended Diploma in Electrical and Electronics Engineering (DDM)</span>.
              </p>

              <p className="leading-relaxed text-accent font-medium pt-2">
                💡 My goal is simple: help businesses and individuals make smarter, data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
