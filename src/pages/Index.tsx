import { useEffect } from "react";
import Header from "@/components/Portfolio/Header";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Skills from "@/components/Portfolio/Skills";
import Projects from "@/components/Portfolio/Projects";
import Education from "@/components/Portfolio/Education";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  useEffect(() => {
    // Add scroll reveal functionality
    const revealElements = document.querySelectorAll(
      '[class*="animate-fade-in"]'
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
