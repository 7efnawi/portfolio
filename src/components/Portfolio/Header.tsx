import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  // ── Scroll spy + expand detection ──────────────────────────
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 60);

    const offsets = navItems
      .map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return null;
        return {
          href: item.href,
          top: (el as HTMLElement).offsetTop - 140,
        };
      })
      .filter(Boolean) as { href: string; top: number }[];

    let current = "#home";
    for (const section of offsets) {
      if (scrollY >= section.top) current = section.href;
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Smooth scroll helper ─────────────────────────────────────
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // ── Close mobile menu on resize ──────────────────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center px-4">
      {/* ── Persistent Floating Glass Capsule ──────────────── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.1 }}
        className="relative flex items-center"
        style={{
          marginTop: 24,
          borderRadius: 9999,
          background: "rgba(5, 10, 21, 0.55)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(0, 212, 255, 0.12)",
          boxShadow:
            "0 8px 32px rgba(0, 212, 255, 0.1), 0 0 1px rgba(22, 255, 0, 0.08)",
          padding: "8px 14px",
        }}
      >
        {/* ── Logo ──────────────────────────────────────────── */}
        <button
          onClick={() => scrollTo("#home")}
          aria-label="Go to top"
          className="flex items-center justify-center w-9 h-9 rounded-full
                     bg-gradient-to-br from-[#00D4FF] to-[#16FF00]
                     text-[#050a15] font-bold text-lg select-none shrink-0
                     shadow-md shadow-[#00D4FF]/25
                     transition-transform duration-200 hover:scale-110"
        >
          Y
        </button>

        {/* ── Desktop Links ─────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 ml-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href} className="relative">
                <button
                  onClick={() => scrollTo(item.href)}
                  className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full
                             transition-colors duration-200
                             ${isActive
                               ? "text-[#00D4FF]"
                               : "text-white/55 hover:text-white/90"
                             }`}
                >
                  {item.label}
                </button>

                {/* Animated active pill */}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(0, 212, 255, 0.08)",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── Spacer (push Hire Me to the right when expanded) */}
        <div className="flex-1" />

        {/* ── Hire Me (desktop) ──────────────────────────────── */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#contact");
          }}
          className="hidden md:inline-flex ml-3 px-5 py-1.5 rounded-full
                     text-sm font-semibold shrink-0
                     bg-gradient-to-r from-[#00D4FF] to-[#16FF00]
                     text-[#050a15]
                     transition-all duration-200
                     hover:shadow-lg hover:shadow-[#00D4FF]/25
                     active:scale-95"
        >
          Hire Me
        </a>

        {/* ── Mobile Hamburger ───────────────────────────────── */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center w-9 h-9
                     rounded-full text-white/70 hover:text-[#00D4FF]
                     hover:bg-[#00D4FF]/10 transition-colors duration-200 ml-auto"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* ── Mobile Dropdown ─────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 left-4 right-4
                       rounded-2xl p-2 md:hidden"
            style={{
              background: "rgba(5, 10, 21, 0.88)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(0, 212, 255, 0.12)",
              boxShadow:
                "0 16px 48px rgba(0, 0, 0, 0.5), 0 0 1px rgba(0, 212, 255, 0.15)",
            }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`relative w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                             transition-colors duration-200
                             ${isActive
                               ? "text-[#00D4FF] bg-[#00D4FF]/8"
                               : "text-white/55 hover:text-white hover:bg-white/5"
                             }`}
                  style={
                    isActive
                      ? { background: "rgba(0, 212, 255, 0.08)" }
                      : undefined
                  }
                >
                  {item.label}
                </button>
              );
            })}
            <div className="mt-1 px-2 pb-1">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="block w-full text-center px-4 py-2.5 rounded-xl
                           text-sm font-semibold text-[#050a15]
                           transition-all duration-200
                           bg-gradient-to-r from-[#00D4FF] to-[#16FF00]
                           hover:shadow-lg hover:shadow-[#00D4FF]/20
                           active:scale-[0.98]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
