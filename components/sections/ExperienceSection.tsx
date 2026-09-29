import type { LandingCopy } from "../../data/landing-data";
import type { Experience } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

type ExperienceSectionProps = { copy: LandingCopy; experience: Experience };

export function ExperienceSection({ copy, experience }: ExperienceSectionProps) {
  return <section className="section experience" id="experience"><SectionHeading index="04" label={copy.sectionLabels[3]} title={copy.experienceTitle} /><article><p>{experience.period}</p><div><h3>{experience.role}</h3><b>{experience.company}</b><p>{experience.description}</p></div></article></section>;
}
