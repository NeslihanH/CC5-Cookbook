import { useTranslation } from "react-i18next";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  const { t } = useTranslation();

  return (
    <div className="search-bar">
      <svg
        className="search-icon"
        viewBox="0 0 20 20"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="9" cy="9" r="6.5" />
        <line x1="14" y1="14" x2="18.5" y2="18.5" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t("search.placeholder")}
        aria-label={t("search.placeholder")}
      />
    </div>
  );
}
