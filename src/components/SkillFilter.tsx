import { useTranslation } from "react-i18next";
import type { SkillLevel } from "../data/types";

const LEVELS: SkillLevel[] = ["beginner", "intermediate", "expert"];

type Props = {
  value: SkillLevel | "all";
  onChange: (value: SkillLevel | "all") => void;
};

export function SkillFilter({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <div className="skill-filter" role="group" aria-label={t("filter.allLevels")}>
      <button
        type="button"
        className={`skill-btn${value === "all" ? " is-active" : ""}`}
        onClick={() => onChange("all")}
      >
        {t("filter.allLevels")}
      </button>
      {LEVELS.map((level) => (
        <button
          key={level}
          type="button"
          className={`skill-btn skill-btn-${level}${value === level ? " is-active" : ""}`}
          onClick={() => onChange(level)}
        >
          {t(`skillLevel.${level}`)}
        </button>
      ))}
    </div>
  );
}
