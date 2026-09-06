import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";

/**
 * Canonical section definition for the portfolio single-page architecture.
 * Acts as the single deep source of truth for section IDs, labels, icons, and navigation links.
 */
export interface SectionItem {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
  icon: LucideIcon;
}

export const SECTIONS: readonly SectionItem[] = [
  { id: "home", label: "Home", shortLabel: "Home", href: "#home", icon: Home },
  { id: "about", label: "About", shortLabel: "About", href: "#about", icon: User },
  { id: "experience", label: "Experience", shortLabel: "Exp", href: "#experience", icon: Briefcase },
  { id: "skills", label: "Skills", shortLabel: "Skills", href: "#skills", icon: Code2 },
  { id: "projects", label: "Projects", shortLabel: "Work", href: "#projects", icon: FolderGit2 },
  { id: "education", label: "Education", shortLabel: "Edu", href: "#education", icon: GraduationCap },
  { id: "contact", label: "Contact", shortLabel: "Contact", href: "#contact", icon: Mail },
] as const;

/**
 * Interface for desktop capsule header navigation items.
 */
export const getHeaderNavItems = () =>
  SECTIONS.map(({ href, label }) => ({ href, label }));

/**
 * Interface for mobile bottom bar navigation items.
 */
export const getMobileNavItems = () =>
  SECTIONS.map(({ id, shortLabel, icon }) => ({ id, label: shortLabel, icon }));

/**
 * Interface for footer navigation links.
 */
export const getFooterNavItems = () =>
  SECTIONS.map(({ href, label }) => ({ href, label }));
