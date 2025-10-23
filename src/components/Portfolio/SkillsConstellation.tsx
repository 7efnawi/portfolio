import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import * as Icons from "lucide-react";
import { Card } from "@/components/ui/card";

interface SkillNode {
  name: string;
  x: number;
  y: number;
  icon: string;
  category: string;
  scale: number;
}

const SkillsConstellation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allSkills: SkillNode[] = [];
  const categories = portfolioData.skills.skillCategories.map((cat) => cat.title);

  portfolioData.skills.skillCategories.forEach((category, catIndex) => {
    const radius = 150 + catIndex * 80;
    const angleStep = (Math.PI * 2) / category.skills.length;

    category.skills.forEach((skill, index) => {
      const angle = angleStep * index + catIndex * 0.5;
      allSkills.push({
        name: skill.name,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        icon: skill.icon,
        category: category.title,
        scale: 1 + (catIndex * 0.2),
      });
    });
  });

  const filteredSkills = selectedCategory
    ? allSkills.filter((skill) => skill.category === selectedCategory)
    : allSkills;

  return (
    <section ref={ref} id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
          >
            <Icons.Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Interactive Skill Map</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{portfolioData.skills.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {portfolioData.skills.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedCategory === null
                ? "bg-accent text-accent-foreground"
                : "bg-card border border-accent/20 hover:bg-accent/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Skills
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-card border border-accent/20 hover:bg-accent/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative h-[600px] md:h-[800px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <svg className="absolute inset-0 w-full h-full">
                {filteredSkills.map((skill, index) =>
                  filteredSkills.slice(index + 1).map((otherSkill, otherIndex) => {
                    const distance = Math.sqrt(
                      Math.pow(skill.x - otherSkill.x, 2) +
                        Math.pow(skill.y - otherSkill.y, 2)
                    );
                    if (distance < 200) {
                      return (
                        <motion.line
                          key={`${index}-${otherIndex}`}
                          x1="50%"
                          y1="50%"
                          x2="50%"
                          y2="50%"
                          initial={{
                            x1: `calc(50% + ${skill.x}px)`,
                            y1: `calc(50% + ${skill.y}px)`,
                            x2: `calc(50% + ${skill.x}px)`,
                            y2: `calc(50% + ${skill.y}px)`,
                          }}
                          animate={{
                            x1: `calc(50% + ${skill.x}px)`,
                            y1: `calc(50% + ${skill.y}px)`,
                            x2: `calc(50% + ${otherSkill.x}px)`,
                            y2: `calc(50% + ${otherSkill.y}px)`,
                          }}
                          transition={{ duration: 0.8, delay: index * 0.02 }}
                          stroke="hsl(var(--accent))"
                          strokeWidth="1"
                          opacity={0.2}
                        />
                      );
                    }
                    return null;
                  })
                )}
              </svg>

              {filteredSkills.map((skill, index) => {
                const IconComponent = Icons[skill.icon as keyof typeof Icons] || Icons.Circle;
                return (
                  <motion.div
                    key={skill.name}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: skill.x,
                      y: skill.y,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.03,
                      type: "spring",
                      stiffness: 100,
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div
                      className="relative cursor-pointer"
                      whileHover={{ scale: 1.3, zIndex: 50 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-orange/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center shadow-lg"
                        animate={
                          hoveredSkill === skill.name
                            ? {
                                boxShadow: "0 0 30px rgba(94, 234, 212, 0.6)",
                              }
                            : {}
                        }
                      >
                        <IconComponent className="w-6 h-6 text-accent" />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={
                          hoveredSkill === skill.name
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 10 }
                        }
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap"
                      >
                        <Card className="px-3 py-2 bg-card/90 backdrop-blur-sm border-accent/20">
                          <p className="text-sm font-medium">{skill.name}</p>
                          <p className="text-xs text-muted-foreground">{skill.category}</p>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            Hover over skills to explore • Click categories to filter
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsConstellation;
