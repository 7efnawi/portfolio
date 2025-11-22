import { LucideIcon } from "lucide-react";

interface HeroData {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface HardSkill {
  name: string;
  iconUrl: string;
}

interface SoftSkill {
  name: string;
  icon: string;
}

interface SkillsData {
  title: string;
  description: string;
  hardSkills: HardSkill[];
  softSkills: SoftSkill[];
}

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  impact: string;
  github: string;
  demo: string;
  image: string;
}

interface ProjectsData {
  title: string;
  description: string;
  projectList: Project[];
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceData {
  title: string;
  description: string;
  experienceList: Experience[];
}

interface EducationItem {
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
}

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  link: string;
  icon?: string;
}

interface Publication {
  title: string;
  journal: string;
  date: string;
  link: string;
}

interface EducationData {
  title: string;
  description: string;
  educationList: EducationItem[];
  certifications: Certification[];
  publications: Publication[];
}

interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

interface SocialLink {
  icon: string;
  platform: string;
  url: string;
  username: string;
}

interface ContactData {
  title: string;
  description: string;
  formTitle: string;
  connectTitle: string;
  connectDescription: string;
  followMeTitle: string;
  contactInfo: ContactInfo[];
  socialLinks: SocialLink[];
}

interface PortfolioData {
  name: string;
  hero: HeroData;
  skills: SkillsData;
  projects: ProjectsData;
  experience: ExperienceData;
  education: EducationData;
  contact: ContactData;
}

// Import JSON controlled by Decap CMS and re-export to keep existing imports working
// Types remain above for editor intellisense; you can later enforce them with `as PortfolioData`.
// Note: resolveJsonModule is enabled in tsconfig.app.json
import jsonData from "./portfolio-data.json";

export const portfolioData = jsonData as unknown as PortfolioData;
