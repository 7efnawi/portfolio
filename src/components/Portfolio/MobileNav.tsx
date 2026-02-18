import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Home, User, Code2, FolderGit2, GraduationCap, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Work", icon: FolderGit2 },
  { id: "education", label: "Edu", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  // ── Scroll spy ──────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const offsets = navItems
      .map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        return { id: item.id, top: (el as HTMLElement).offsetTop - 200 };
      })
      .filter(Boolean) as { id: string; top: number }[];

    let current = "home";
    for (const section of offsets) {
      if (scrollY >= section.top) current = section.id;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Smooth scroll ───────────────────────────────────────────
  const scrollTo = (id: string) => {
    setActiveSection(id); // Optimistic update
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed left-1/2 -translate-x-1/2 z-50 flex md:hidden
                 items-center rounded-full p-1.5 gap-0.5"
      style={{
        bottom: "max(env(safe-area-inset-bottom, 0px), 6%)",
        background: "rgba(5, 10, 21, 0.55)",
        backdropFilter: "blur(48px)",
        WebkitBackdropFilter: "blur(48px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow:
          "0 8px 40px rgba(0, 0, 0, 0.45), 0 0 1px rgba(0, 212, 255, 0.15)",
      }}
    >
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const Icon = item.icon;

        return (
          <motion.button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            aria-label={item.label}
            whileTap={{ scale: 0.9 }}
            className="relative flex flex-col items-center justify-center
                       w-12 h-12 rounded-full transition-colors duration-200"
          >
            {/* Sliding active indicator */}
            {isActive && (
              <motion.div
                layoutId="mobileNavIndicator"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(22, 255, 0, 0.08))",
                  border: "1px solid rgba(0, 212, 255, 0.25)",
                  boxShadow: "0 0 12px rgba(0, 212, 255, 0.15)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 32,
                }}
              />
            )}

            {/* Icon + label */}
            <Icon
              size={18}
              className={`relative z-10 transition-colors duration-200 ${
                isActive ? "text-[#00D4FF]" : "text-white/45"
              }`}
            />
            <span
              className={`relative z-10 text-[9px] mt-0.5 font-medium transition-colors duration-200 ${
                isActive ? "text-[#00D4FF]" : "text-white/40"
              }`}
            >
              {item.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
};

export default MobileNav;
