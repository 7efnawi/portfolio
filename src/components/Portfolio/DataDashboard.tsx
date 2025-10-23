import { motion } from "framer-motion";
import { TrendingUp, Activity, Zap, Target } from "lucide-react";

const DataDashboard = () => {
  const metrics = [
    { icon: TrendingUp, label: "Growth Rate", value: "156%", color: "accent" },
    { icon: Activity, label: "Active Projects", value: "12", color: "orange" },
    { icon: Zap, label: "Skills Mastered", value: "30+", color: "accent" },
    { icon: Target, label: "Accuracy", value: "98.5%", color: "orange" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-16"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`relative p-6 rounded-2xl border-2 bg-card/50 backdrop-blur-sm ${
            metric.color === "accent"
              ? "border-accent/20 hover:border-accent/40"
              : "border-orange/20 hover:border-orange/40"
          } transition-all cursor-pointer group`}
        >
          <motion.div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 ${
              metric.color === "accent" ? "bg-accent" : "bg-orange"
            }`}
            animate={{
              opacity: [0, 0.1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <div
              className={`p-3 rounded-xl inline-flex mb-4 ${
                metric.color === "accent" ? "bg-accent/10" : "bg-orange/10"
              }`}
            >
              <metric.icon
                className={`w-6 h-6 ${
                  metric.color === "accent" ? "text-accent" : "text-orange"
                }`}
              />
            </div>
            <motion.p
              className={`text-3xl font-bold mb-2 ${
                metric.color === "accent" ? "text-accent" : "text-orange"
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {metric.value}
            </motion.p>
            <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
          </div>

          <motion.div
            className={`absolute bottom-0 left-0 h-1 ${
              metric.color === "accent" ? "bg-accent" : "bg-orange"
            } rounded-b-2xl`}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default DataDashboard;
