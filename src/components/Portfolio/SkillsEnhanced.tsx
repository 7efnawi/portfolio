import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import { staggerContainer, staggerItem } from "@/lib/animations";

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

const SkillsEnhanced = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              {portfolioData.skills.title}
            </motion.h2>
            <motion.div
              variants={staggerItem}
              className="w-20 h-1 bg-gradient-to-r from-accent to-orange mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              {portfolioData.skills.description}
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {portfolioData.skills.skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={staggerItem}>
                <Card className="bg-gradient-card/80 backdrop-blur border-border/50 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all h-full group">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl font-semibold text-foreground flex items-center">
                      <motion.div
                        className="w-2 h-6 sm:h-8 bg-gradient-accent rounded-full mr-3"
                        animate={{
                          scaleY: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: categoryIndex * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = iconMap[skill.icon as keyof typeof iconMap];
                      return (
                        <motion.div
                          key={skill.name}
                          className="flex items-center gap-3 py-1 group/skill"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          whileHover={{ x: 5 }}
                        >
                          {Icon && (
                            <motion.div
                              whileHover={{ rotate: 360, scale: 1.2 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="text-accent" size={20} />
                            </motion.div>
                          )}
                          <span className="text-sm sm:text-base font-medium text-foreground group-hover/skill:text-accent transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              {portfolioData.skills.additionalExpertise.title}
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {portfolioData.skills.additionalExpertise.items.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={staggerItem}
                  className="px-4 py-2 glass text-foreground rounded-full text-sm font-medium cursor-default relative overflow-hidden group"
                  whileHover={{
                    scale: 1.1,
                    y: -4,
                  }}
                  transition={{
                    delay: index * 0.02,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-orange/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">{skill}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsEnhanced;
