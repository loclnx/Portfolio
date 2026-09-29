import type { LandingCopy } from "../../data/landing-data";
import type { Profile } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

type AboutSectionProps = { copy: LandingCopy; profile: Profile };

export function AboutSection({ copy, profile }: AboutSectionProps) {
  const details = [profile.education, profile.graduation, profile.location, profile.focus];
  return <section className="section" id="about"><SectionHeading index="01" label={copy.sectionLabels[0]} title={copy.aboutTitle} /><div className="about"><p>{profile.about}</p><dl>{copy.details.map((name, index) => <div key={name}><dt>{name}</dt><dd>{details[index]}</dd></div>)}</dl></div></section>;
}
