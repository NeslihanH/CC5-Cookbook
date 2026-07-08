import { useTranslation } from "react-i18next";
import type { Localized, LocaleKey } from "../data/types";

// Returns a picker that resolves a Localized value to the active language,
// falling back to English if a translation is missing.
export function useLocalized() {
  const { i18n } = useTranslation();
  const lang = (i18n.language.slice(0, 2) as LocaleKey) || "en";
  return (value: Localized): string => value[lang] ?? value.en;
}
