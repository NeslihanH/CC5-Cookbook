import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES } from "../i18n";
import { useTheme } from "../hooks/useTheme";
import { totalEntries } from "../data/content";
import { SearchBar } from "./SearchBar";

const LOCALE_LABEL: Record<string, string> = {
  en: "EN",
  tr: "TR",
  zh: "中文",
  es: "ES",
  de: "DE",
};

type Props = {
  query: string;
  onQuery: (value: string) => void;
};

export function Header({ query, onQuery }: Props) {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();

  return (
    <header className="app-header">
      <div className="header-top">
        <div className="brand">
          <div className="brand-mark" aria-hidden="true">
            🎭
          </div>
          <div>
            <h1 className="brand-title">{t("app.title")}</h1>
            <p className="brand-tagline">{t("app.tagline")}</p>
          </div>
        </div>
        <div className="header-controls">
          <span className="entry-count">{t("stats.entryCount", { count: totalEntries })}</span>
          <div className="lang-switch" role="group" aria-label="Language">
            {SUPPORTED_LOCALES.map((locale) => (
              <button
                key={locale}
                type="button"
                className={`lang-btn${i18n.language === locale ? " is-active" : ""}`}
                onClick={() => void i18n.changeLanguage(locale)}
              >
                {LOCALE_LABEL[locale]}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-btn"
            onClick={toggle}
            aria-label={theme === "dark" ? t("theme.toggleToLight") : t("theme.toggleToDark")}
            title={theme === "dark" ? t("theme.toggleToLight") : t("theme.toggleToDark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div className="header-search">
        <SearchBar value={query} onChange={onQuery} />
      </div>
    </header>
  );
}
