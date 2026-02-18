import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  Code2,
  LayoutDashboard,
  BrainCircuit,
  LineChart,
  Activity,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    title: "Data Analytics",
    description:
      "Statistical analysis, EDA, data mining, and transforming raw data into actionable insights",
    icon: BarChart3,
    color: "#00D4FF",
  },
  {
    title: "Python & SQL",
    description:
      "Data cleaning, wrangling, ETL pipelines, and database optimization for scalable workflows",
    icon: Code2,
    color: "#16FF00",
  },
  {
    title: "BI & Dashboards",
    description:
      "Interactive Power BI dashboards, automated reporting, and KPI tracking for stakeholders",
    icon: LayoutDashboard,
    color: "#8B5CF6",
  },
];

const featuredProjects = [
  {
    title: "AuraSense Smart Context-Aware System",
    icon: BrainCircuit,
    color: "#00D4FF",
  },
  {
    title: "Retail Sales Data Analysis 2023",
    icon: LineChart,
    color: "#16FF00",
  },
  {
    title: "Sales Data Analysis",
    icon: Activity,
    color: "#8B5CF6",
  },
];

const AboutEnhanced = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-14 md:py-20 relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0, 212, 255, 0.07)" }}
      />

      <div className="container mx-auto px-5 md:px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* ── Section Header ─────────────────────────────── */}
          <motion.div
            className="text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-science">
              <span className="text-foreground">About</span>{" "}
              <span className="gradient-text-liquid">Me</span>
            </h2>

            <div
              className="w-16 md:w-20 h-1 mx-auto mb-6 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #00D4FF, #16FF00)",
              }}
            />
          </motion.div>

          {/* ── Bio Card ───────────────────────────────────── */}
          <motion.div
            className="glass-card p-5 md:p-8 mb-8 md:mb-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="space-y-5">
              {/* ─ Intro ─ */}
              <p className="text-sm md:text-base lg:text-lg text-foreground leading-relaxed text-center">
                Junior{" "}
                <span className="font-bold" style={{ color: "#00D4FF" }}>
                  Data Analyst
                </span>{" "}
                with over a year of hands-on experience turning raw data
                into{" "}
                <span
                  className="font-bold"
                  style={{
                    color: "#16FF00",
                    textShadow: "0 0 8px rgba(22,255,0,0.35)",
                  }}
                >
                  actionable business insights
                </span>
                .
              </p>

              {/* ─ Tech chips ─ */}
              <div className="flex flex-wrap justify-center gap-2">
                {["Python", "SQL", "Power BI", "Excel", "EDA", "ETL"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-xs md:text-sm font-medium px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(0, 212, 255, 0.08)",
                        border: "1px solid rgba(0, 212, 255, 0.25)",
                        color: "#00D4FF",
                      }}
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* ─ Value props: 2-col on desktop, stacked on mobile ─ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* What I Do */}
                <div
                  className="pl-4 space-y-1.5"
                  style={{ borderLeft: "2px solid rgba(0, 212, 255, 0.4)" }}
                >
                  <h4
                    className="text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ color: "#00D4FF" }}
                  >
                    What I Do
                  </h4>
                  {[
                    "Interactive dashboards & data visualization",
                    "Automated reporting workflows",
                    "Data mining, KPI tracking & analysis",
                  ].map((item) => (
                    <p
                      key={item}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </p>
                  ))}
                </div>

                {/* Core Strengths */}
                <div
                  className="pl-4 space-y-1.5"
                  style={{ borderLeft: "2px solid rgba(22, 255, 0, 0.4)" }}
                >
                  <h4
                    className="text-xs uppercase tracking-widest font-semibold mb-2"
                    style={{ color: "#16FF00" }}
                  >
                    Core Strengths
                  </h4>
                  {[
                    "Data cleaning, wrangling & transformation",
                    "Statistical analysis & EDA",
                    "Stakeholder collaboration & storytelling",
                  ].map((item) => (
                    <p
                      key={item}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              {/* ─ Education credit ─ */}
              <p className="text-xs md:text-sm text-muted-foreground/70 text-center pt-1">
                B.Sc. ICT —{" "}
                <span className="font-medium text-foreground/80">
                  New Cairo Technological University
                </span>{" "}
                · BTEC L3 Extended Diploma (DDM)
              </p>
            </div>
          </motion.div>

          {/* ── Highlight Cards ────────────────────────────── */}
          {/* Mobile: horizontal snap carousel | Desktop: 3-col grid */}
          <div
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
              -mx-5 px-5
              md:mx-0 md:px-0
              md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0
              scrollbar-none
            "
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2 },
                  }}
                  className="
                    glass-card p-5 md:p-6 text-center group cursor-default
                    min-w-[75vw] snap-center
                    md:min-w-0
                  "
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                      border: `1px solid ${item.color}40`,
                    }}
                  >
                    <Icon
                      className="w-7 h-7 md:w-8 md:h-8"
                      style={{ color: item.color }}
                    />
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-[#00D4FF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-normal">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* ── Quick Glance: Featured Projects ───────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 md:mt-12"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground/60 mb-3 md:mb-4 text-center md:text-left font-medium">
              Featured Work
            </p>

            {/* Mobile: compact vertical stack | Desktop: 3-col grid */}
            <div className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-4">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.a
                    key={project.title}
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.75 + index * 0.08,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      glass-card flex items-center gap-3
                      px-4 py-3 md:py-4
                      cursor-pointer group
                      active:scale-95 transition-transform
                    "
                  >
                    {/* Icon */}
                    <div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      <Icon
                        className="w-4 h-4 md:w-5 md:h-5"
                        style={{ color: project.color }}
                      />
                    </div>

                    {/* Title */}
                    <span className="text-sm font-medium text-foreground/90 group-hover:text-[#00D4FF] transition-colors truncate flex-1">
                      {project.title}
                    </span>

                    {/* Arrow */}
                    <ArrowRight
                      className="w-4 h-4 text-muted-foreground/40 group-hover:text-[#00D4FF] group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutEnhanced;
