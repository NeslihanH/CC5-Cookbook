// Diacritic-insensitive, Turkish-aware search normalization. Handles the
// Latin combining diacritics (NFD strip) plus Turkish's dotless/dotted i
// pair, which NFD alone does not fold since ı (dotless i) has no
// combining form of "i".
const COMBINING_MARKS = /[̀-ͯ]/g;

export function normalizeForSearch(value: string): string {
  return value
    .toLocaleLowerCase("tr")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .toLowerCase();
}

export function matchesQuery(query: string, ...fields: (string | undefined)[]): boolean {
  const needle = normalizeForSearch(query.trim());
  if (!needle) return true;
  return fields.some((field) => field && normalizeForSearch(field).includes(needle));
}
