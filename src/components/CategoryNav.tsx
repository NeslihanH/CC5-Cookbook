import { useTranslation } from "react-i18next";
import type { CategoryId } from "../data/types";
import { categories } from "../data/content";

export type NavSelection = CategoryId | "all";

type Props = {
  active: NavSelection;
  onSelect: (selection: NavSelection) => void;
  countFor: (selection: NavSelection) => number;
};

export function CategoryNav({ active, onSelect, countFor }: Props) {
  const { t } = useTranslation();

  return (
    <nav className="category-nav" aria-label="Categories">
      <button
        type="button"
        className={`category-btn${active === "all" ? " is-active" : ""}`}
        onClick={() => onSelect("all")}
      >
        <span className="category-icon" aria-hidden="true">
          {"✨"}
        </span>
        <span className="category-label">{t("nav.all")}</span>
        <span className="category-count">{countFor("all")}</span>
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-btn${category.id === active ? " is-active" : ""}`}
          onClick={() => onSelect(category.id)}
        >
          <span className="category-icon" aria-hidden="true">
            {category.icon}
          </span>
          <span className="category-label">{t(category.labelKey)}</span>
          <span className="category-count">{countFor(category.id)}</span>
        </button>
      ))}
    </nav>
  );
}
