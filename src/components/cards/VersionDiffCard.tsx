import { useTranslation } from "react-i18next";
import type { VersionDiffEntry } from "../../data/types";
import { useLocalized } from "../../hooks/useLocalized";
import { OfficialBadge } from "../Badge";

export function VersionDiffCard({ entry }: { entry: VersionDiffEntry }) {
  const { t } = useTranslation();
  const localize = useLocalized();

  return (
    <article className="entry-card">
      <header className="entry-card-head">
        <h3 className="entry-card-title">{localize(entry.area)}</h3>
        <OfficialBadge official={entry.official} />
      </header>
      <div className="diff-grid">
        <div className="diff-col diff-col-cc4">
          <div className="diff-col-label">{t("card.cc4")}</div>
          <p>{localize(entry.cc4)}</p>
        </div>
        <div className="diff-col diff-col-cc5">
          <div className="diff-col-label">{t("card.cc5")}</div>
          <p>{localize(entry.cc5)}</p>
        </div>
      </div>
    </article>
  );
}
