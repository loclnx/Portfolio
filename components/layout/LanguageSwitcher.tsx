"use client";

import { useLocale } from "next-intl";
import type { Locale } from "../../data/landing-data";
import { usePathname, useRouter } from "../../i18n/navigation";

const languageOptions: ReadonlyArray<{ locale: Locale; label: string }> = [
  { locale: "vi", label: "VI" },
  { locale: "en", label: "EN" },
];

export function LanguageSwitcher({ label }: { label: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return <div className="language-switcher" aria-label={label}>
    {languageOptions.map((option) => <button aria-pressed={option.locale === locale} className="language-switch" disabled={option.locale === locale} key={option.locale} onClick={() => router.replace(pathname, { locale: option.locale })} type="button">{option.label}</button>)}
  </div>;
}
