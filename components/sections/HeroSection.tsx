import type { LandingCopy } from "../../data/landing-data";
import type { Profile, SocialLink } from "../../data/portfolio";

type HeroSectionProps = { copy: LandingCopy; profile: Profile; socialLinks: SocialLink[] };

export function HeroSection({ copy, profile, socialLinks }: HeroSectionProps) {
  return <section className="hero" id="home"><div className="copy"><p className="eyebrow">{profile.role}</p><h1>{copy.heroGreeting} <em>Lê Nguyễn<br />Xuân Lộc.</em></h1><p className="lead">{profile.summary}</p><div className="actions"><a className="button" href="#projects">{copy.viewProjects} ↓</a><a className="email" href={`mailto:${profile.email}`}>{copy.getInTouch} ↗</a></div><div className="socials">{socialLinks.map((link) => <a href={link.href} key={link.label} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined}>{link.label} ↗</a>)}</div></div><div className="portrait" aria-hidden="true"><div className="orb" /><div className="portrait-card"><small>{copy.portraitLabels[0]}</small><strong>LXL</strong><small>{copy.portraitLabels[1]}</small></div><span>{copy.portraitLabels[2]}</span></div></section>;
}
