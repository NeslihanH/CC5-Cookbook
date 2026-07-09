import { useTranslation } from "react-i18next";
import type { Recipe } from "../../data/types";
import { useLocalized } from "../../hooks/useLocalized";
import { OfficialBadge, TagBadge } from "../Badge";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { t } = useTranslation();
  const localize = useLocalized();

  return (
    <article className="entry-card">
      <header className="entry-card-head">
        <h3 className="entry-card-title">{localize(recipe.title)}</h3>
        <div className="entry-card-badges">
          {recipe.targetTool && <TagBadge>{recipe.targetTool}</TagBadge>}
          <OfficialBadge official={recipe.official} />
        </div>
      </header>
      <p className="entry-card-summary">
        <span className="entry-card-where-label">{t("card.goal")}:</span> {localize(recipe.goal)}
      </p>
      <div className="recipe-steps-label">{t("card.steps")}</div>
      <ol className="recipe-steps">
        {recipe.steps.map((step, i) => (
          <li key={i}>{localize(step)}</li>
        ))}
      </ol>
      {recipe.notes && (
        <p className="entry-card-where">
          <span className="entry-card-where-label">{t("card.notes")}:</span> {localize(recipe.notes)}
        </p>
      )}
    </article>
  );
}
