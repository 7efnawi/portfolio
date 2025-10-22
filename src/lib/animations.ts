import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromBottom: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 120,
    },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
  },
};

export const cardHover = {
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 30px rgba(var(--accent-rgb), 0.3)",
  transition: {
    duration: 0.2,
  },
};

export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const elasticSpring = {
  type: "spring" as const,
  damping: 15,
  stiffness: 100,
};

export const smoothSpring = {
  type: "spring" as const,
  damping: 25,
  stiffness: 120,
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
};

export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 75,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const shimmerVariants: Variants = {
  initial: { backgroundPosition: "-100% 0" },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(56, 189, 248, 0.3)",
    "0 0 40px rgba(56, 189, 248, 0.6)",
    "0 0 20px rgba(56, 189, 248, 0.3)",
  ],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const getStaggerDelay = (index: number, baseDelay: number = 0.1) => ({
  transition: {
    delay: index * baseDelay,
  },
});
