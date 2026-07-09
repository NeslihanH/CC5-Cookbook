import { useTranslation } from "react-i18next";

export function OfficialBadge({ official }: { official: boolean }) {
  const { t } = useTranslation();
  return (
    <span className={`badge ${official ? "badge-official" : "badge-community"}`}>
      {official ? t("badge.official") : t("badge.community")}
    </span>
  );
}

export function TagBadge({ children }: { children: string }) {
  return <span className="badge badge-tag">{children}</span>;
}
