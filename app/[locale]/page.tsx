import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LandingPage } from "../../components/landing/LandingPage";
import { isLocale, locales, type LandingCopy } from "../../data/landing-data";

type LocalePageProps = PageProps<"/[locale]">;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return { title: t("title"), description: t("description") };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const t = await getTranslations("Landing");
  const copy: LandingCopy = {
    navigation: [t("navigation.about"), t("navigation.skills"), t("navigation.projects"), t("navigation.experience"), t("navigation.contact")],
    sectionLabels: [t("sectionLabels.about"), t("sectionLabels.skills"), t("sectionLabels.projects"), t("sectionLabels.experience")],
    details: [t("details.education"), t("details.graduation"), t("details.location"), t("details.focus")],
    aboutTitle: t("aboutTitle"), skillsTitle: t("skillsTitle"), projectsTitle: t("projectsTitle"), experienceTitle: t("experienceTitle"), viewProjects: t("viewProjects"), getInTouch: t("getInTouch"), email: t("email"), peep: t("peep"), backToTop: t("backToTop"), contactDescription: t("contactDescription"),
    contactTitle: [t("contactTitle.first"), t("contactTitle.emphasis")], heroGreeting: t("heroGreeting"), languageLabel: t("languageLabel"), reportLabel: t("reportLabel"), mobileMenuLabel: t("mobileMenuLabel"), contactLabel: t("contactLabel"), portraitLabels: [t("portrait.building"), t("portrait.software"), t("portrait.role")],
  };

  return <LandingPage copy={copy} locale={locale} />;
}
