import type { Category } from "./types";
import { gettingStartedEntries } from "./gettingStarted";
import { coreCreationEntries } from "./coreCreation";
import { riggingAnimationEntries } from "./riggingAnimation";
import { pipelineExportEntries } from "./pipelineExport";
import { ecosystemEntries } from "./ecosystem";
import { recipes } from "./recipes";
import { bestPractices } from "./bestPractices";
import { whatsNewEntries } from "./whatsNew";
import { glossaryTerms } from "./glossary";
import { shortcuts } from "./shortcuts";

// Category order drives the left navigation.
export const categories: Category[] = [
  { id: "gettingStarted", labelKey: "nav.gettingStarted", icon: "\u{1F680}" },
  { id: "coreCreation", labelKey: "nav.coreCreation", icon: "\u{1F3A8}" },
  { id: "riggingAnimation", labelKey: "nav.riggingAnimation", icon: "\u{1F9B4}" },
  { id: "pipelineExport", labelKey: "nav.pipelineExport", icon: "\u{1F517}" },
  { id: "ecosystem", labelKey: "nav.ecosystem", icon: "\u{1F6D2}" },
  { id: "recipe", labelKey: "nav.recipes", icon: "\u{1F4D6}" },
  { id: "practice", labelKey: "nav.bestPractices", icon: "\u{2705}" },
  { id: "whatsNew", labelKey: "nav.whatsNew", icon: "\u{1F195}" },
  { id: "glossary", labelKey: "nav.glossary", icon: "\u{1F4DA}" },
  { id: "shortcut", labelKey: "nav.shortcuts", icon: "\u{2328}\u{FE0F}" },
];

// All browsable feature/topic entries in one flat array.
export const featureEntries = [
  ...gettingStartedEntries,
  ...coreCreationEntries,
  ...riggingAnimationEntries,
  ...pipelineExportEntries,
  ...ecosystemEntries,
];

export { recipes, bestPractices, whatsNewEntries, glossaryTerms, shortcuts };

// Total count of reference entries (for the header stat, once shown).
export const totalEntries =
  featureEntries.length +
  recipes.length +
  bestPractices.length +
  whatsNewEntries.length +
  glossaryTerms.length +
  shortcuts.length;

// Date the content snapshot was compiled (shown in the footer once content
// exists).
export const compiledDate = "2026-07";
