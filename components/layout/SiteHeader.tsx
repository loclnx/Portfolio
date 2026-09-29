import type { LandingCopy, Locale } from "../../data/landing-data";

const sectionIds = ["about", "skills", "projects", "experience", "contact"];
type SiteHeaderProps = { copy: LandingCopy; locale: Locale; onLocaleChange: (locale: Locale) => void; reportUrl: string };

export function SiteHeader({ copy, locale, onLocaleChange, reportUrl }: SiteHeaderProps) {
  const targetLocale: Locale = locale === "en" ? "vi" : "en";
  return <header className="header"><a className="brand" href="#home">LXL<span>.</span></a><Navigation copy={copy} reportUrl={reportUrl} /><a className="button small" href="#projects">{copy.viewProjects} ↗</a><details className="mobile-menu"><summary aria-label="Open menu">☰</summary><div><Navigation copy={copy} reportUrl={reportUrl} /></div></details><button className="language-switch" aria-label={copy.languageLabel} onClick={() => onLocaleChange(targetLocale)}>🌐 {locale.toUpperCase()}</button></header>;
}

function Navigation({ copy, reportUrl }: Pick<SiteHeaderProps, "copy" | "reportUrl">) {
  return <nav>{sectionIds.map((id, index) => <a href={`#${id}`} key={id}>{copy.navigation[index]}</a>)}<a href={reportUrl} target="_blank" rel="noreferrer">PEEP Report ↗</a></nav>;
}
