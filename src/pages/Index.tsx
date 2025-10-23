import { motion } from "framer-motion";
import HeaderEnhanced from "@/components/Portfolio/HeaderEnhanced";
import HeroRevolutionary from "@/components/Portfolio/HeroRevolutionary";
import SkillsConstellation from "@/components/Portfolio/SkillsConstellation";
import DataDashboard from "@/components/Portfolio/DataDashboard";
import ProjectsRevolutionary from "@/components/Portfolio/ProjectsRevolutionary";
import TimelineScroll from "@/components/Portfolio/TimelineScroll";
import ContactRevolutionary from "@/components/Portfolio/ContactRevolutionary";
import Footer from "@/components/Portfolio/Footer";
import ScrollProgress from "@/components/Portfolio/ScrollProgress";
import NeuralBackground from "@/components/Portfolio/NeuralBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <NeuralBackground />
      <ScrollProgress />
      <HeaderEnhanced />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroRevolutionary />
        <div className="container mx-auto px-4">
          <DataDashboard />
        </div>
        <SkillsConstellation />
        <ProjectsRevolutionary />
        <TimelineScroll />
        <ContactRevolutionary />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Index;
