import { useTranslation } from "react-i18next";
import type { GlossaryTerm } from "../../data/types";
import { useLocalized } from "../../hooks/useLocalized";
import { OfficialBadge } from "../Badge";

export function GlossaryCard({ term }: { term: GlossaryTerm }) {
  const { t } = useTranslation();
  const localize = useLocalized();

  return (
    <article className="glossary-row">
      <div className="glossary-row-head">
        <h3 className="glossary-term">{term.term}</h3>
        <OfficialBadge official={term.official} />
      </div>
      {term.aliases && term.aliases.length > 0 && (
        <p className="glossary-aliases">
          {t("card.aliases")}: {term.aliases.join(", ")}
        </p>
      )}
      <p className="glossary-definition">{localize(term.definition)}</p>
    </article>
  );
}
