import { englishExperience, englishProfile, localizedProjects, peepReportUrl, skills, socialLinks, vietnameseExperience, vietnameseProfile, type LandingCopy, type Locale } from "../../data/landing-data";
import { SiteFooter } from "../layout/SiteFooter";
import { LocaleHtmlLanguage } from "./LocaleHtmlLanguage";
import { SiteHeader } from "../layout/SiteHeader";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

type LandingPageProps = { copy: LandingCopy; locale: Locale };

export function LandingPage({ copy, locale }: LandingPageProps) {
  const profile = locale === "vi" ? vietnameseProfile : englishProfile;
  const experience = locale === "vi" ? vietnameseExperience : englishExperience;

  return <main><LocaleHtmlLanguage /><SiteHeader copy={copy} reportUrl={peepReportUrl} /><HeroSection copy={copy} profile={profile} socialLinks={socialLinks} /><AboutSection copy={copy} profile={profile} /><SkillsSection copy={copy} skills={skills} /><ProjectsSection copy={copy} projects={localizedProjects(locale)} /><ExperienceSection copy={copy} experience={experience} /><ContactSection copy={copy} profile={profile} reportUrl={peepReportUrl} /><SiteFooter backToTop={copy.backToTop} /></main>;
}
