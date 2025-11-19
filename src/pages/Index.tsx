import { motion } from "framer-motion";
import HeaderMinimal from "@/components/Portfolio/HeaderMinimal";
import HeroMinimal from "@/components/Portfolio/HeroMinimal";
import SkillsMinimal from "@/components/Portfolio/SkillsMinimal";
import ProjectsMinimal from "@/components/Portfolio/ProjectsMinimal";
import EducationMinimal from "@/components/Portfolio/EducationMinimal";
import ContactMinimal from "@/components/Portfolio/ContactMinimal";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderMinimal />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroMinimal />
        <SkillsMinimal />
        <ProjectsMinimal />
        <EducationMinimal />
        <ContactMinimal />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
