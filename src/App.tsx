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
          <a
            href="https://github.com/NeslihanH"
            target="_blank"
            rel="noreferrer"
            className="notice-github"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
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
