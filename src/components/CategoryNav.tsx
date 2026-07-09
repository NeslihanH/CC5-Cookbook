import { useTranslation } from "react-i18next";
import type { CategoryId } from "../data/types";
import { categories } from "../data/content";

type Props = {
  activeCategory: CategoryId;
  onChange: (category: CategoryId) => void;
  countFor: (category: CategoryId) => number;
};

export function CategoryNav({ activeCategory, onChange, countFor }: Props) {
  const { t } = useTranslation();

  return (
    <nav className="category-nav" aria-label="Categories">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`category-btn${category.id === activeCategory ? " is-active" : ""}`}
          onClick={() => onChange(category.id)}
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
