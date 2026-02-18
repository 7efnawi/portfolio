import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Portfolio/Header";
import HeroMinimal from "@/components/Portfolio/HeroMinimal";
import MobileNav from "@/components/Portfolio/MobileNav";
import ScrollProgress from "@/components/Portfolio/ScrollProgress";

// Lazy-load below-the-fold components for code splitting
const AboutEnhanced = React.lazy(() => import("@/components/Portfolio/AboutEnhanced"));
const SkillsMinimal = React.lazy(() => import("@/components/Portfolio/SkillsMinimal"));
const ProjectsModern = React.lazy(() => import("@/components/Portfolio/ProjectsModern"));
const EducationMinimal = React.lazy(() => import("@/components/Portfolio/EducationMinimal"));
const CertificationsModern = React.lazy(() => import("@/components/Portfolio/CertificationsModern"));
const ContactMinimal = React.lazy(() => import("@/components/Portfolio/ContactMinimal"));
const Footer = React.lazy(() => import("@/components/Portfolio/Footer"));
const DataFieldBackground = React.lazy(() => import("@/components/Portfolio/DataFieldBackground"));

// Minimal fallback spinner
const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-[#00D4FF] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Subtle gradient divider between sections
const SectionDivider = () => (
  <div className="relative h-px mx-auto max-w-4xl">
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.15), rgba(22, 255, 0, 0.1), rgba(0, 212, 255, 0.15), transparent)",
      }}
    />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050a15] relative overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Data Field Animated Background */}
      <Suspense fallback={null}>
        <DataFieldBackground particleCount={15} showGrid={true} />
      </Suspense>

      <Header />
      <MobileNav />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <HeroMinimal />
        <Suspense fallback={<SectionLoader />}>
          <AboutEnhanced />
          <SectionDivider />
          <SkillsMinimal />
          <SectionDivider />
          <ProjectsModern />
          <SectionDivider />
          <EducationMinimal />
          <SectionDivider />
          <CertificationsModern />
          <SectionDivider />
          <ContactMinimal />
        </Suspense>
      </motion.main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
