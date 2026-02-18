import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00D4FF, #16FF00, #00D4FF)",
        boxShadow: "0 0 8px rgba(0, 212, 255, 0.5)",
      }}
    />
  );
};

export default ScrollProgress;
