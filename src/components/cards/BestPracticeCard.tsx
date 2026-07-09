import { useTranslation } from "react-i18next";
import type { BestPractice } from "../../data/types";
import { useLocalized } from "../../hooks/useLocalized";
import { OfficialBadge } from "../Badge";

export function BestPracticeCard({ practice }: { practice: BestPractice }) {
  const { t } = useTranslation();
  const localize = useLocalized();

  return (
    <article className="entry-card">
      <header className="entry-card-head">
        <h3 className="entry-card-title">{localize(practice.title)}</h3>
        <div className="entry-card-badges">
          <span className={`badge skill-badge-${practice.skillLevel}`}>
            {t(`skillLevel.${practice.skillLevel}`)}
          </span>
          <OfficialBadge official={practice.official} />
        </div>
      </header>
      <p className="entry-card-summary">
        <span className="entry-card-where-label">{t("card.rule")}:</span> {localize(practice.rule)}
      </p>
      <p className="entry-card-detail">{localize(practice.detail)}</p>
    </article>
  );
}
