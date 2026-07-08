// Core content schema for the CC5 Cookbook reference library.
// Official Reallusion terminology (feature names, glossary terms, panel
// paths) stays in English, since that's what a user sees inside the actual
// software. Human-facing prose is localized (en + tr always; zh/es/de land
// in a later milestone and fall back to English until translated).
//
// Every entry that states a fact carries an `official` flag: true means we
// verified it against an official Reallusion source (manual, product page,
// release notes); false means it's press-paraphrased or community-reported
// and should be presented as such, never as confirmed fact. See Decisions.md
// D5. All prose is written from scratch in our own words - never copied or
// closely paraphrased from Reallusion's docs (Decisions.md D1).

export type LocaleKey = "en" | "tr" | "zh" | "es" | "de";

export type Localized = {
  en: string;
  tr: string;
  zh?: string;
  es?: string;
  de?: string;
};

export type SkillLevel = "beginner" | "intermediate" | "expert";

export type CategoryId =
  | "gettingStarted"
  | "coreCreation"
  | "riggingAnimation"
  | "pipelineExport"
  | "ecosystem"
  | "recipe"
  | "practice"
  | "whatsNew"
  | "glossary"
  | "shortcut";

// A browsable feature/topic entry: Getting Started, Core Creation, Rigging &
// Animation, Pipeline & Export and Ecosystem entries all share this shape.
// This is the CC5 Cookbook equivalent of Suno Cookbook's TagItem, adapted for
// a tool with panels/features instead of copyable prompt tags.
export type FeatureEntry = {
  id: string;
  category: Extract<
    CategoryId,
    | "gettingStarted"
    | "coreCreation"
    | "riggingAnimation"
    | "pipelineExport"
    | "ecosystem"
  >;
  // Official Reallusion term, kept in English (e.g. "SkinGen", "AccuRIG").
  name: string;
  // Optional grouping within a category, e.g. "Smart Hair" -> "Physics".
  subgroup?: string;
  summary: Localized;
  detail: Localized;
  // Panel/menu path in the app, e.g. "Modify panel > Physics tab".
  whereToFind?: Localized;
  // true = genuinely new in CC5 vs CC4; omitted/false = carried over.
  newInCC5?: boolean;
  official: boolean;
};

export type Recipe = {
  id: string;
  category: "recipe";
  title: Localized;
  goal: Localized;
  // Ordered workflow steps, each one step's worth of instruction.
  steps: Localized[];
  // Optional export/interop target this recipe ends at, e.g. "Unreal Engine".
  targetTool?: string;
  notes?: Localized;
  official: boolean;
};

export type BestPractice = {
  id: string;
  category: "practice";
  skillLevel: SkillLevel;
  title: Localized;
  rule: Localized;
  detail: Localized;
  official: boolean;
};

export type VersionDiffEntry = {
  id: string;
  category: "whatsNew";
  area: Localized;
  cc4: Localized;
  cc5: Localized;
  official: boolean;
};

export type GlossaryTerm = {
  id: string;
  category: "glossary";
  // Official English term, e.g. "HD Facial Profile".
  term: string;
  aliases?: string[];
  definition: Localized;
  official: boolean;
};

export type Shortcut = {
  id: string;
  category: "shortcut";
  keys: string;
  action: Localized;
  context?: Localized;
};

// Union used by the search index / card renderer (finalized once the
// browse/search UI is built in M8).
export type ContentItem =
  | FeatureEntry
  | Recipe
  | BestPractice
  | VersionDiffEntry
  | GlossaryTerm
  | Shortcut;

export type Category = {
  id: CategoryId;
  // i18n key for the category label; resolved via react-i18next.
  labelKey: string;
  icon: string;
};
