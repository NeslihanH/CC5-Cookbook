import { useTranslation } from "react-i18next";
import { SUPPORTED_LOCALES } from "./i18n";
import { useTheme } from "./hooks/useTheme";

const LOCALE_LABEL: Record<string, string> = {
  en: "EN",
  tr: "TR",
  zh: "中文",
  es: "ES",
  de: "DE",
};

const NAV_KEYS = [
  "gettingStarted",
  "coreCreation",
  "riggingAnimation",
  "pipelineExport",
  "ecosystem",
  "recipes",
  "bestPractices",
  "whatsNew",
  "glossary",
  "shortcuts",
] as const;

function App() {
  const { t, i18n } = useTranslation();
  const { theme, toggle } = useTheme();

  return (
    <>
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
        <div className="notice-banner">
          <span className="notice-text">{t("about.notice")}</span>
        </div>
      </header>

      <main className="layout">
        <div className="roadmap-grid">
          {NAV_KEYS.map((key) => (
            <div className="roadmap-card" key={key}>
              <h2 className="roadmap-title">{t(`nav.${key}`)}</h2>
              <p className="roadmap-status">{t("status.comingSoon")}</p>
            </div>
          ))}
        </div>

        <footer className="app-footer">
          <p>{t("footer.disclaimer")}</p>
          <p>{t("footer.trademark")}</p>
        </footer>
      </main>
    </>
  );
}

export default App;
