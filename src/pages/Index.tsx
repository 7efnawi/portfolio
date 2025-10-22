import { motion } from "framer-motion";
import HeaderEnhanced from "@/components/Portfolio/HeaderEnhanced";
import HeroEnhanced from "@/components/Portfolio/HeroEnhanced";
import AboutEnhanced from "@/components/Portfolio/AboutEnhanced";
import SkillsEnhanced from "@/components/Portfolio/SkillsEnhanced";
import ProjectsEnhanced from "@/components/Portfolio/ProjectsEnhanced";
import EducationEnhanced from "@/components/Portfolio/EducationEnhanced";
import ContactEnhanced from "@/components/Portfolio/ContactEnhanced";
import Footer from "@/components/Portfolio/Footer";
import ScrollProgress from "@/components/Portfolio/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ScrollProgress />
      <HeaderEnhanced />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroEnhanced />
        <AboutEnhanced />
        <SkillsEnhanced />
        <ProjectsEnhanced />
        <EducationEnhanced />
        <ContactEnhanced />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
