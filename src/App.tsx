import { useMemo, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import type {
  CategoryId,
  FeatureEntry,
  GlossaryTerm,
  Recipe,
  BestPractice,
  Shortcut,
  SkillLevel,
  VersionDiffEntry,
} from "./data/types";
import {
  bestPractices,
  categories,
  compiledDate,
  featureEntries,
  glossaryTerms,
  recipes,
  shortcuts,
  totalEntries,
  whatsNewEntries,
} from "./data/content";
import { useLocalized } from "./hooks/useLocalized";
import { matchesQuery } from "./lib/search";
import { Header } from "./components/Header";
import { NoticeBanner } from "./components/NoticeBanner";
import { CategoryNav, type NavSelection } from "./components/CategoryNav";
import { SkillFilter } from "./components/SkillFilter";
import { FeatureCard } from "./components/cards/FeatureCard";
import { RecipeCard } from "./components/cards/RecipeCard";
import { BestPracticeCard } from "./components/cards/BestPracticeCard";
import { GlossaryCard } from "./components/cards/GlossaryCard";
import { ShortcutCard } from "./components/cards/ShortcutCard";
import { VersionDiffCard } from "./components/cards/VersionDiffCard";

function App() {
  const { t } = useTranslation();
  const localize = useLocalized();
  // "all" is the default scope so search works across every category from the
  // first keystroke, without needing to know which category an entry lives in.
  const [active, setActive] = useState<NavSelection>("all");
  const [query, setQuery] = useState("");
  const [skillLevel, setSkillLevel] = useState<SkillLevel | "all">("all");

  const handleSelect = (selection: NavSelection) => {
    setActive(selection);
    // Skill filter is Best-Practices-specific; reset it when the scope changes.
    // The query is intentionally kept so a search can carry across categories.
    setSkillLevel("all");
  };

  // Each list is filtered by the query (and, for practices, the skill level)
  // regardless of the active scope; the render step decides which categories
  // to actually show. This is what makes the default "all" search global.
  const featuresF = useMemo(
    () =>
      featureEntries.filter((e) =>
        matchesQuery(query, e.name, e.subgroup, localize(e.summary), localize(e.detail)),
      ),
    [query, localize],
  );
  const recipesF = useMemo(
    () =>
      recipes.filter((r) =>
        matchesQuery(
          query,
          localize(r.title),
          localize(r.goal),
          r.notes ? localize(r.notes) : undefined,
          ...r.steps.map(localize),
        ),
      ),
    [query, localize],
  );
  const practicesF = useMemo(
    () =>
      bestPractices
        .filter((p) => skillLevel === "all" || p.skillLevel === skillLevel)
        .filter((p) => matchesQuery(query, localize(p.title), localize(p.rule), localize(p.detail))),
    [query, skillLevel, localize],
  );
  const glossaryF = useMemo(
    () =>
      glossaryTerms
        .filter((g) => matchesQuery(query, g.term, localize(g.definition), ...(g.aliases ?? [])))
        .sort((a, b) => a.term.localeCompare(b.term)),
    [query, localize],
  );
  const shortcutsF = useMemo(
    () =>
      shortcuts.filter((s) =>
        matchesQuery(query, s.keys, localize(s.action), s.context && localize(s.context)),
      ),
    [query, localize],
  );
  const whatsNewF = useMemo(
    () =>
      whatsNewEntries.filter((w) =>
        matchesQuery(query, localize(w.area), localize(w.cc4), localize(w.cc5)),
      ),
    [query, localize],
  );

  const itemsFor = (id: CategoryId): unknown[] => {
    switch (id) {
      case "recipe":
        return recipesF;
      case "practice":
        return practicesF;
      case "whatsNew":
        return whatsNewF;
      case "glossary":
        return glossaryF;
      case "shortcut":
        return shortcutsF;
      default:
        return featuresF.filter((e) => e.category === id);
    }
  };

  const countFor = (selection: NavSelection): number => {
    if (selection === "all") return totalEntries;
    switch (selection) {
      case "recipe":
        return recipes.length;
      case "practice":
        return bestPractices.length;
      case "whatsNew":
        return whatsNewEntries.length;
      case "glossary":
        return glossaryTerms.length;
      case "shortcut":
        return shortcuts.length;
      default:
        return featureEntries.filter((e) => e.category === selection).length;
    }
  };

  const renderCards = (id: CategoryId, items: unknown[]): ReactNode => {
    switch (id) {
      case "recipe":
        return (
          <div className="entry-grid">
            {(items as Recipe[]).map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        );
      case "practice":
        return (
          <div className="entry-grid">
            {(items as BestPractice[]).map((p) => (
              <BestPracticeCard key={p.id} practice={p} />
            ))}
          </div>
        );
      case "whatsNew":
        return (
          <div className="entry-grid">
            {(items as VersionDiffEntry[]).map((e) => (
              <VersionDiffCard key={e.id} entry={e} />
            ))}
          </div>
        );
      case "glossary":
        return (
          <div className="glossary-list">
            {(items as GlossaryTerm[]).map((g) => (
              <GlossaryCard key={g.id} term={g} />
            ))}
          </div>
        );
      case "shortcut":
        return (
          <div className="shortcut-list">
            {(items as Shortcut[]).map((s) => (
              <ShortcutCard key={s.id} shortcut={s} />
            ))}
          </div>
        );
      default:
        return (
          <div className="entry-grid">
            {(items as FeatureEntry[]).map((e) => (
              <FeatureCard key={e.id} entry={e} />
            ))}
          </div>
        );
    }
  };

  const scope: CategoryId[] = active === "all" ? categories.map((c) => c.id) : [active];

  const sections = scope
    .map((id) => {
      const items = itemsFor(id);
      if (items.length === 0) return null;
      const cat = categories.find((c) => c.id === id);
      if (!cat) return null;
      return (
        <section key={id} className="cat-section">
          <h2 className="section-title">
            <span className="section-icon" aria-hidden="true">
              {cat.icon}
            </span>
            {t(cat.labelKey)}
            <span className="section-count">{items.length}</span>
          </h2>
          {renderCards(id, items)}
        </section>
      );
    })
    .filter(Boolean);

  const totalMatched = scope.reduce((n, id) => n + itemsFor(id).length, 0);

  return (
    <>
      <Header query={query} onQuery={setQuery} />
      <NoticeBanner />
      <div className="layout">
        <aside className="sidebar">
          <CategoryNav active={active} onSelect={handleSelect} countFor={countFor} />
        </aside>

        <main className="content">
          {active === "practice" && (
            <div className="toolbar">
              <SkillFilter value={skillLevel} onChange={setSkillLevel} />
            </div>
          )}

          {query && <p className="result-count">{t("search.resultCount", { count: totalMatched })}</p>}

          {sections.length ? sections : <EmptyState query={query} />}

          <footer className="app-footer">
            <p>{t("footer.disclaimer")}</p>
            <p>{t("footer.trademark")}</p>
            <p>{t("footer.verified", { date: compiledDate })}</p>
          </footer>
        </main>
      </div>
    </>
  );
}

function EmptyState({ query }: { query: string }) {
  const { t } = useTranslation();
  return (
    <div className="empty-state">
      <p className="empty-state-title">{t("search.noResultsTitle", { query })}</p>
      <p className="empty-state-hint">{t("search.noResultsHint")}</p>
    </div>
  );
}

export default App;
