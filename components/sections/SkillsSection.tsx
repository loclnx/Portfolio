import type { LandingCopy } from "../../data/landing-data";
import type { SkillGroup } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

type SkillsSectionProps = { copy: LandingCopy; skills: SkillGroup[] };

export function SkillsSection({ copy, skills }: SkillsSectionProps) {
  return <section className="section tinted" id="skills"><SectionHeading index="02" label={copy.sectionLabels[1]} title={copy.skillsTitle} /><div className="skill-grid">{skills.map((skill, index) => <article className="skill" key={skill.category}><span>0{index + 1}</span><h3>{skill.category}</h3><p>{skill.items.join(" · ")}</p></article>)}</div></section>;
}
