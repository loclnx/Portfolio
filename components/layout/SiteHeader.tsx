import type { LandingCopy } from "../../data/landing-data";
import { LanguageSwitcher } from "./LanguageSwitcher";

const sectionIds = ["about", "skills", "projects", "experience", "contact"];
type SiteHeaderProps = { copy: LandingCopy; reportUrl: string };

export function SiteHeader({ copy, reportUrl }: SiteHeaderProps) {
  return <header className="header"><a className="brand" href="#home">LXL<span>.</span></a><Navigation copy={copy} reportUrl={reportUrl} /><details className="mobile-menu"><summary aria-label={copy.mobileMenuLabel}>☰</summary><div><Navigation copy={copy} reportUrl={reportUrl} /></div></details><LanguageSwitcher label={copy.languageLabel} /></header>;
}

function Navigation({ copy, reportUrl }: Pick<SiteHeaderProps, "copy" | "reportUrl">) {
  return <nav>{sectionIds.map((id, index) => <a href={`#${id}`} key={id}>{copy.navigation[index]}</a>)}<a href={reportUrl} target="_blank" rel="noreferrer">{copy.reportLabel} ↗</a></nav>;
}
