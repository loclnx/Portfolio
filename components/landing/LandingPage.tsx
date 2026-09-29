"use client";

import { useState } from "react";
import { landingContent, englishExperience, englishProfile, localizedProjects, peepReportUrl, skills, socialLinks, vietnameseExperience, vietnameseProfile, type Locale } from "../../data/landing-data";
import { SiteFooter } from "../layout/SiteFooter";
import { SiteHeader } from "../layout/SiteHeader";
import { AboutSection } from "../sections/AboutSection";
import { ContactSection } from "../sections/ContactSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import { HeroSection } from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";

export function LandingPage() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = landingContent[locale];
  const profile = locale === "vi" ? vietnameseProfile : englishProfile;
  const experience = locale === "vi" ? vietnameseExperience : englishExperience;

  return <main><SiteHeader copy={copy} locale={locale} onLocaleChange={setLocale} reportUrl={peepReportUrl} /><HeroSection copy={copy} profile={profile} socialLinks={socialLinks} /><AboutSection copy={copy} profile={profile} /><SkillsSection copy={copy} skills={skills} /><ProjectsSection copy={copy} projects={localizedProjects(locale)} /><ExperienceSection copy={copy} experience={experience} /><ContactSection copy={copy} profile={profile} reportUrl={peepReportUrl} /><SiteFooter backToTop={copy.backToTop} /></main>;
}
