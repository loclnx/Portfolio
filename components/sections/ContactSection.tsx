import type { LandingCopy } from "../../data/landing-data";
import type { Profile } from "../../data/portfolio";

type ContactSectionProps = { copy: LandingCopy; profile: Profile; reportUrl: string };

export function ContactSection({ copy, profile, reportUrl }: ContactSectionProps) {
  return <section className="contact" id="contact"><p className="eyebrow">05 / LET&apos;S CONNECT</p><h2>{copy.contactTitle[0]} <em>{copy.contactTitle[1]}</em></h2><p>{copy.contactDescription}</p><div className="actions"><a className="button" href={`mailto:${profile.email}`}>{copy.email} ↗</a><a className="outline" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><small><a href={reportUrl} target="_blank" rel="noreferrer">{copy.peep} ↗</a></small></section>;
}
