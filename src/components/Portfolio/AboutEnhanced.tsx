import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const AboutEnhanced = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="py-20 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h2
              variants={staggerItem}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              About Me
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="w-20 h-1 bg-gradient-to-r from-accent to-orange mx-auto mb-6 rounded-full"
            />

            <motion.p
              variants={staggerItem}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              I am a student at{" "}
              <motion.span
                className="text-accent font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block" }}
              >
                New Cairo Technological University
              </motion.span>{" "}
              (ICT department), specializing in artificial intelligence and data
              science. I hold a{" "}
              <motion.span
                className="text-accent font-semibold"
                whileHover={{ scale: 1.05 }}
                style={{ display: "inline-block" }}
              >
                Pearson BTEC International Level 3 Extended Diploma
              </motion.span>{" "}
              in Electrical and Electronic Engineering (Triple-grade{" "}
              <motion.span
                className="text-orange font-bold"
                whileHover={{ scale: 1.1 }}
                style={{ display: "inline-block" }}
              >
                DISTINCTION DISTINCTION MERIT
              </motion.span>
              ). My goal is to leverage my skills in AI and data science to
              contribute to innovative projects.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              {
                title: "AI & Data Science",
                description: "Passionate about machine learning, deep learning, and data analysis",
                icon: "🤖",
              },
              {
                title: "Problem Solver",
                description: "Love tackling complex challenges with innovative solutions",
                icon: "💡",
              },
              {
                title: "Continuous Learner",
                description: "Always exploring new technologies and methodologies",
                icon: "📚",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="glass p-6 rounded-lg text-center group cursor-default"
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutEnhanced;
