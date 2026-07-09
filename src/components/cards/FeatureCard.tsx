import { useTranslation } from "react-i18next";
import type { FeatureEntry } from "../../data/types";
import { useLocalized } from "../../hooks/useLocalized";
import { OfficialBadge, TagBadge } from "../Badge";

export function FeatureCard({ entry }: { entry: FeatureEntry }) {
  const { t } = useTranslation();
  const localize = useLocalized();

  return (
    <article className="entry-card">
      <header className="entry-card-head">
        <h3 className="entry-card-title">{entry.name}</h3>
        <div className="entry-card-badges">
          {entry.subgroup && <TagBadge>{entry.subgroup}</TagBadge>}
          {entry.newInCC5 && <span className="badge badge-new">{t("card.newInCC5")}</span>}
          <OfficialBadge official={entry.official} />
        </div>
      </header>
      <p className="entry-card-summary">{localize(entry.summary)}</p>
      <p className="entry-card-detail">{localize(entry.detail)}</p>
      {entry.whereToFind && (
        <p className="entry-card-where">
          <span className="entry-card-where-label">{t("card.whereToFind")}:</span>{" "}
          {localize(entry.whereToFind)}
        </p>
      )}
    </article>
  );
}
