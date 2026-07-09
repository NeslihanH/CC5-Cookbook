import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import type { CategoryId, SkillLevel } from "./data/types";
import {
  bestPractices,
  compiledDate,
  featureEntries,
  glossaryTerms,
  recipes,
  shortcuts,
  whatsNewEntries,
} from "./data/content";
import { useLocalized } from "./hooks/useLocalized";
import { matchesQuery } from "./lib/search";
import { Header } from "./components/Header";
import { CategoryNav } from "./components/CategoryNav";
import { SearchBar } from "./components/SearchBar";
import { SkillFilter } from "./components/SkillFilter";
import { FeatureCard } from "./components/cards/FeatureCard";
import { RecipeCard } from "./components/cards/RecipeCard";
import { BestPracticeCard } from "./components/cards/BestPracticeCard";
import { GlossaryCard } from "./components/cards/GlossaryCard";
import { ShortcutCard } from "./components/cards/ShortcutCard";
import { VersionDiffCard } from "./components/cards/VersionDiffCard";

const FEATURE_CATEGORIES: CategoryId[] = [
  "gettingStarted",
  "coreCreation",
  "riggingAnimation",
  "pipelineExport",
  "ecosystem",
];

function EmptyState({ query }: { query: string }) {
  const { t } = useTranslation();
  return (
    <div className="empty-state">
      <p className="empty-state-title">{t("search.noResultsTitle", { query })}</p>
      <p className="empty-state-hint">{t("search.noResultsHint")}</p>
    </div>
  );
}

function App() {
  const { t } = useTranslation();
  const localize = useLocalized();
  const [activeCategory, setActiveCategory] = useState<CategoryId>("gettingStarted");
  const [query, setQuery] = useState("");
  const [skillLevel, setSkillLevel] = useState<SkillLevel | "all">("all");

  const handleCategoryChange = (category: CategoryId) => {
    setActiveCategory(category);
    setQuery("");
    setSkillLevel("all");
  };

  const countFor = (category: CategoryId): number => {
    switch (category) {
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
        return featureEntries.filter((entry) => entry.category === category).length;
    }
  };

  const filteredFeatures = useMemo(() => {
    if (!FEATURE_CATEGORIES.includes(activeCategory)) return [];
    return featureEntries
      .filter((entry) => entry.category === activeCategory)
      .filter((entry) =>
        matchesQuery(query, entry.name, entry.subgroup, localize(entry.summary), localize(entry.detail)),
      );
  }, [activeCategory, query, localize]);

  const filteredRecipes = useMemo(() => {
    if (activeCategory !== "recipe") return [];
    return recipes.filter((recipe) =>
      matchesQuery(query, localize(recipe.title), localize(recipe.goal), ...recipe.steps.map(localize)),
    );
  }, [activeCategory, query, localize]);

  const filteredPractices = useMemo(() => {
    if (activeCategory !== "practice") return [];
    return bestPractices
      .filter((practice) => skillLevel === "all" || practice.skillLevel === skillLevel)
      .filter((practice) => matchesQuery(query, localize(practice.title), localize(practice.rule), localize(practice.detail)));
  }, [activeCategory, query, skillLevel, localize]);

  const filteredGlossary = useMemo(() => {
    if (activeCategory !== "glossary") return [];
    return glossaryTerms
      .filter((term) => matchesQuery(query, term.term, localize(term.definition), ...(term.aliases ?? [])))
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [activeCategory, query, localize]);

  const filteredShortcuts = useMemo(() => {
    if (activeCategory !== "shortcut") return [];
    return shortcuts.filter((shortcut) =>
      matchesQuery(query, shortcut.keys, localize(shortcut.action), shortcut.context && localize(shortcut.context)),
    );
  }, [activeCategory, query, localize]);

  const filteredWhatsNew = useMemo(() => {
    if (activeCategory !== "whatsNew") return [];
    return whatsNewEntries.filter((entry) =>
      matchesQuery(query, localize(entry.area), localize(entry.cc4), localize(entry.cc5)),
    );
  }, [activeCategory, query, localize]);

  return (
    <>
      <Header />
      <main className="layout">
        <CategoryNav activeCategory={activeCategory} onChange={handleCategoryChange} countFor={countFor} />

        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} />
          {activeCategory === "practice" && <SkillFilter value={skillLevel} onChange={setSkillLevel} />}
        </div>

        {FEATURE_CATEGORIES.includes(activeCategory) &&
          (filteredFeatures.length ? (
            <div className="entry-grid">
              {filteredFeatures.map((entry) => (
                <FeatureCard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          ))}

        {activeCategory === "recipe" &&
          (filteredRecipes.length ? (
            <div className="entry-grid">
              {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          ))}

        {activeCategory === "practice" &&
          (filteredPractices.length ? (
            <div className="entry-grid">
              {filteredPractices.map((practice) => (
                <BestPracticeCard key={practice.id} practice={practice} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          ))}

        {activeCategory === "whatsNew" &&
          (filteredWhatsNew.length ? (
            <div className="entry-grid">
              {filteredWhatsNew.map((entry) => (
                <VersionDiffCard key={entry.id} entry={entry} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          ))}

        {activeCategory === "glossary" &&
          (filteredGlossary.length ? (
            <div className="glossary-list">
              {filteredGlossary.map((term) => (
                <GlossaryCard key={term.id} term={term} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          ))}

        {activeCategory === "shortcut" &&
          (filteredShortcuts.length ? (
            <div className="shortcut-list">
              {filteredShortcuts.map((shortcut) => (
                <ShortcutCard key={shortcut.id} shortcut={shortcut} />
              ))}
            </div>
          ) : (
            <EmptyState query={query} />
          ))}

        <footer className="app-footer">
          <p>{t("footer.disclaimer")}</p>
          <p>{t("footer.trademark")}</p>
          <p>{t("footer.verified", { date: compiledDate })}</p>
        </footer>
      </main>
    </>
  );
}

export default App;
