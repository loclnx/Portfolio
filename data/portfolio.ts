export interface Profile {
  role: string;
  email: string;
  github: string;
  summary: string;
  about: string;
  education: string;
  graduation: string;
  location: string;
  focus: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  profile: Profile;
  socialLinks: SocialLink[];
  skills: SkillGroup[];
  projects: Project[];
  experience: Experience;
}
