import type { LandingCopy } from "../../data/landing-data";
import type { Project } from "../../data/portfolio";
import projectStyles from "../../app/projects.module.css";
import { SectionHeading } from "../ui/SectionHeading";

type ProjectsSectionProps = { copy: LandingCopy; projects: Project[] };

export function ProjectsSection({ copy, projects }: ProjectsSectionProps) {
  return <section className="section" id="projects"><SectionHeading index="03" label={copy.sectionLabels[2]} title={copy.projectsTitle} /><div className={projectStyles.projects}>{projects.map((project, index) => <article className={projectStyles.project} key={project.name}><div className={`${projectStyles.visual} visual visual-${index}`}><span>0{index + 1}</span><i /></div><div className={`${projectStyles.body} project-body`}><p className="role">{project.role}</p><h3>{project.name}</h3><p>{project.description}</p><ul>{project.tech.map((item) => <li key={item}>{item}</li>)}</ul><div>{project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></div></article>)}</div></section>;
}
