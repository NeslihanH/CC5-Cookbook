# CC5 Cookbook - Resume Doc (single source of truth)

Read this first when resuming. Update after every milestone, before commit.
Universal working method: `../extension_playbook.md` (one directory above this
repo's parent). This file only holds what's specific to this project.

## What this is

A single-page reference app (SPA) for Reallusion's Character Creator 5 (CC5):
a searchable, categorized reference covering core character creation, rigging
and animation, pipeline/export, the closely-tied ecosystem (iClone, AccuRIG,
ActorCore, mocap), step-by-step recipes, skill-tiered best practices
(Beginner / Intermediate / Expert), a CC5-vs-CC4 diff, a glossary and a
shortcuts/UI reference. Browse + reference; not a replacement for hands-on
tutorials. Multilingual: English, Turkish, Chinese (Simplified), Spanish,
German.

Not affiliated with Reallusion. Content is independently researched from
official Reallusion sources (reallusion.com, manual.reallusion.com, forum and
magazine release notes) plus reputable trade press and community sources, but
**always written from scratch in our own words** - never copied or closely
paraphrased from Reallusion's manual or marketing copy - and marked Official
vs Community per entry.

## Hard rules

- Chat in Turkish; all shipped code/identifiers/comments/filenames in English.
- UI ships in five locales: `en`, `tr`, `zh`, `es`, `de`. English and Turkish
  content is built first and is always complete; `zh`/`es`/`de` are added in a
  later milestone and fall back to English until translated.
- No em-dash in user-facing strings.
- **Never copy or closely paraphrase Reallusion's official manual or marketing
  text.** Research to find the facts, then write an original explanation in
  our own words, in every language (translations must not read like machine
  output either). Cite Official vs Community per entry, same model as Suno
  Cookbook.
- Content depth follows what's practically useful, not the official manual's
  chapter structure or exhaustiveness - this is a curated reference, not a
  manual clone.
- No secrets, no backend, no API keys - this is a static client-only SPA.
- Reallusion trademarks (Character Creator, CC5, AccuRIG, SkinGen, iClone,
  ActorCore, etc.) are used only descriptively to refer to the product being
  documented, never implying endorsement.

## Locked stack

- Vite + React 19 + TypeScript.
- i18n: `i18next` + `react-i18next` (locale files in `src/i18n/locales`).
- No backend. No router (single page). Client-side search (diacritic-insensitive,
  to be added once content exists).
- Deploy target: GitHub Pages (static build via GitHub Actions, public repo).

## Repo layout

```
src/
  data/            content schema + datasets (one file per category)
    types.ts       FeatureEntry / Recipe / BestPractice / VersionDiffEntry /
                   GlossaryTerm / Shortcut / Category
    gettingStarted.ts coreCreation.ts riggingAnimation.ts pipelineExport.ts
    ecosystem.ts   (all FeatureEntry[], filled M2-M5 + a Getting Started
                   catch-up, 31 entries total)
    recipes.ts bestPractices.ts whatsNew.ts glossary.ts shortcuts.ts
                   (filled M6-M7: 6/9/2/27/13 entries)
    content.ts     aggregator: categories, featureEntries, exports, totals
                   (88 entries via `totalEntries`)
  i18n/            i18n config + locales/en.json, tr.json, zh.json, es.json, de.json
  hooks/           useTheme (light/dark), useLocalized (locale picker with
                   English fallback)
  lib/search.ts    diacritic-insensitive (Turkish-aware) search normalize +
                   matchesQuery helper
  components/      Header, CategoryNav, SearchBar, SkillFilter, Badge
    cards/         one renderer per ContentItem shape: FeatureCard,
                   RecipeCard, BestPracticeCard, GlossaryCard, ShortcutCard,
                   VersionDiffCard
  App.tsx          M8: real browse/search UI. Category tabs (with per-
                   category counts) drive which data array + card component
                   renders; search filters within the active category;
                   Best Practices additionally gets a skill-level filter.
  main.tsx index.css
```

Content datasets are localized per Decisions.md D4: prose fields are
`Localized` (`en`/`tr` required, `zh`/`es`/`de` optional); official Reallusion
terms (`FeatureEntry.name`, `GlossaryTerm.term`) stay plain English strings,
same as Suno Cookbook keeps Suno tag literals in English.

## How to run

```
npm install
npm run dev      # local dev server
npm run build    # tsc -b && vite build  (must pass before commit)
npm run preview  # serve the production build
```

## Status

- M0 scaffold + i18n + docs: DONE.
- M1 content schema/architecture: DONE. Types + one stub data file per
  category + aggregator (`src/data/content.ts`) + `useLocalized` hook. All
  data arrays are still empty - no CC5 content has been written yet.
- M2 Core Creation content: DONE. 7 `FeatureEntry` items in
  `src/data/coreCreation.ts` (HD Base Characters, HD Morphs, SkinGen, Smart
  Hair, Soft Cloth, PBR Materials, Digital Human Shader), EN+TR, researched
  from reallusion.com/manual.reallusion.com/magazine.reallusion.com and
  written from scratch. 7 matching terms added to
  `src/data/glossary.ts`. No version-diff entries yet (nothing CC4-specific
  came up in this batch).
- M3 Rigging & Animation content: DONE. 6 `FeatureEntry` items in
  `src/data/riggingAnimation.ts` (AccuRIG, Facial Profile/HD Facial Profile,
  MetaHuman-Compatible Rig, Characterization & Motion Retargeting, Motion
  Capture Compatibility, Smart Hair Physics), EN+TR, same research-from-
  official-sources process as M2. "Motion+" from the original roadmap wording
  is not a CC5 rigging mechanism; it turned out to be a real ActorCore
  content format, covered in M5 instead (see Decisions.md D9, corrected).
  M3's rigging/retargeting ground is covered by the Characterization/
  Retargeting and MetaHuman-Compatible Rig entries. 7 matching terms added to
  `src/data/glossary.ts` (now 13 total), including the
  Standard/Humanoid/Creature classification flagged as a TODO after M2.
- M4 Pipeline & Export content: DONE. 8 `FeatureEntry` items in
  `src/data/pipelineExport.ts` (Auto Setup for Unreal Engine/Unity/Blender/
  Maya & 3ds Max, ZBrush GoZ Bridge, Substance Painter Bridge, Omniverse/USD
  Pipeline, FBX Export), EN+TR, same research-from-official-sources process
  as M2/M3. Close iClone interop was deliberately left out (it shares CC5's
  project format rather than going through an export pipeline, so it fits
  Ecosystem/M5 better). 4 matching terms added to `src/data/glossary.ts`
  (now 17 total): Auto Setup, GoZ, UDIM, USD.
- M5 Ecosystem content: DONE. 5 `FeatureEntry` items in
  `src/data/ecosystem.ts` (iClone Interoperability, ActorCore, Content
  Store, Reallusion Hub, Licensing Tiers), EN+TR, same
  research-from-official-sources process as M2-M4, scoped per Decisions.md
  D7 (ecosystem tools covered only to the extent they connect to a CC5
  workflow). AccuRIG was not repeated here since it already has its own
  entry in Rigging & Animation (M3). Found and corrected a factual error
  from M3: "Motion+" is a real ActorCore motion format (see Decisions.md D9,
  corrected), now documented in the ActorCore entry and the `rlMotion`
  glossary term. Licensing Tiers deliberately avoids stating exact prices
  (they change and weren't independently confirmed on reallusion.com),
  describing the iContent/Standard and perpetual/365 structure instead. 4
  matching terms added to `src/data/glossary.ts` (now 21 total): ActorCore,
  Content Store, Reallusion Hub, iContent License.
- M6 Recipes content: DONE. 6 `Recipe` items in `src/data/recipes.ts` (Base
  Character to Unreal-Ready Character, ZBrush Sculpt Round Trip, Auto-Rigging
  a Custom/Scanned Model, Cloth Physics Setup, Facial Mocap Capture & Reuse,
  Substance Painter Texturing), EN+TR. No new research: each recipe links
  entries already documented in M2-M5 into an ordered sequence rather than
  re-explaining them, per the plan below.
- M7 content: DONE. 9 `BestPractice` items in `src/data/bestPractices.ts`
  (3 Beginner / 3 Intermediate / 3 Expert, building on facts already
  verified in M2-M6, no new research); 13 `Shortcut` items in
  `src/data/shortcuts.ts`, sourced from the CC5 manual's General Toolbar and
  Editor Mode Shortcuts pages (kept to unambiguous, general-purpose keys -
  several panel-specific single-letter shortcuts that meant different things
  per Modify panel tab were left out rather than risk stating them wrong); 6
  more glossary terms added (Standard License, Content Manager, Modify
  Panel, Control Rig, Live Link, MetaHuman Animator - now 27 total); and 2
  `VersionDiffEntry` items in `src/data/whatsNew.ts` (HD Facial Profile's
  160-to-390 slider expansion, MetaHuman-compatible skeleton), the only two
  CC4-vs-CC5 differences confirmed against official launch materials -
  plausible-sounding comparisons that weren't independently verified were
  left out. **This closes out the M2-M7 content phase**: all six data files
  (`coreCreation`, `riggingAnimation`, `pipelineExport`, `ecosystem`,
  `recipes`, `bestPractices`) plus `glossary`, `shortcuts` and `whatsNew` now
  hold real, EN+TR, research-backed content - 83 entries total via
  `totalEntries` in `src/data/content.ts`.
  Between M7 and M8, also filled `gettingStarted.ts` (5 entries), a gap the
  original M2-M7 milestone plan missed - `totalEntries` is now 88.
- M8 UI: DONE. `App.tsx` is now the real browse/search app: `CategoryNav`
  (10 tabs with live per-category counts, horizontally scrollable),
  `SearchBar` (diacritic-insensitive, Turkish-aware, filters within the
  active category via `src/lib/search.ts`), `SkillFilter` (Beginner/
  Intermediate/Expert, shown only for Best Practices), and one card
  component per `ContentItem` shape under `src/components/cards/`
  (FeatureEntry/Recipe/BestPractice/VersionDiff render as a card grid;
  Glossary/Shortcut render as a denser row list, since 27/13 dictionary-
  style entries don't suit big cards). `Header` was extracted from the old
  M0 App.tsx with no behavior change (brand, language switch, theme toggle,
  notice banner + GitHub link), plus a live entry-count stat. Official/
  Community badges, `newInCC5` badges and subgroup tags all wired in.
  Verified with a real headless-browser pass (Playwright, since
  `chromium-cli` wasn't available in this environment): every category,
  search-within-category, the skill filter, Turkish locale switch and dark
  mode all screenshot correctly with zero console errors. New i18n keys
  (`search.*`, `filter.*`, `card.*`, `stats.*`) added to both `en.json` and
  `tr.json`, kept in parity. The old M0 `roadmap-grid`/`roadmap-card` CSS
  and the unused `status.comingSoon` copy were removed/left unused rather
  than kept as dead weight.
- M9 translation pass to zh/es/de: DONE. All 39 UI copy keys in
  `zh.json`/`es.json`/`de.json` filled (previously empty `{}`), written
  natively per language, not machine-translated; `status.comingSoon`
  dropped as dead copy (unused since M8's `EmptyState` replaced it). All 88
  data entries across the 10 `src/data/*.ts` files now carry `zh`/`es`/`de`
  alongside `en`/`tr` on every `Localized` field, added via three parallel
  background agents split by file (not by language, to avoid concurrent
  edits to the same files): (1) `gettingStarted`/`coreCreation`/
  `riggingAnimation`, (2) `pipelineExport`/`ecosystem`/`recipes`, (3)
  `bestPractices`/`whatsNew`/`glossary`/`shortcuts`. `en`/`tr` values were
  never touched (verified by diffing text content, not just line count,
  against the pre-M9 commit).

  **QA note:** agent (2)'s `es`/`de` output for `pipelineExport.ts`,
  `ecosystem.ts` and `recipes.ts` had every Spanish accent and German
  umlaut/ß stripped (e.g. "esta" instead of "está", "Okosystem" instead of
  "Ökosystem") despite that agent self-reporting `npm run build`/`lint`
  passing, since neither catches language-orthography bugs. Caught by a
  manual grep for common unaccented Spanish/German words after the fact,
  not by trusting the agent's own "done" report. Fixed with a fourth,
  targeted agent that read each sentence and fixed accent placement based
  on grammar (blind find-and-replace is wrong here: Spanish "esta" without
  an accent is a legitimate word meaning "this"). Re-verified independently
  again afterward. Lesson: build/lint passing does not mean translated
  content is orthographically correct - that needs its own explicit check,
  every time, regardless of what a report claims.

  Full verification performed on the merged result: `npm run build` and
  `npm run lint` clean, zero em-dash characters across `src/data/*.ts`, all
  88 entries confirmed to have non-empty `zh`/`es`/`de` on every `Localized`
  field (script-checked, not sampled), zero duplicate `id`s, and `en`/`tr`
  text content byte-identical to the pre-M9 commit.
- M10 polish + trademark/English audit + deploy: CODE DONE, deploy pending
  a manual repo setting + push (see Next step). Audits all passed:
  - Trademark: the "unofficial / not affiliated / not endorsed by
    Reallusion" disclaimer plus the "Character Creator is a trademark of
    Reallusion Inc." attribution are present and correct in all 5 languages
    (`about.notice`, `footer.disclaimer`, `footer.trademark`); `LICENSE`
    (MIT) exists and the footer's MIT claim is accurate. Trademarks are used
    descriptively only. Compliant with the Hard rules.
  - English-literal audit: all 109 plain-English literal fields
    (`FeatureEntry.name`, `subgroup`, `GlossaryTerm.term`/`aliases`,
    `Shortcut.keys`, `Recipe.targetTool`) are pure ASCII, zero non-English
    leakage from the M9 translation pass (script-checked).
  - Bundle size: decided NOT to code-split. The single ~560KB/199KB-gzipped
    chunk is intentional (the whole 5-language dataset must be in memory for
    the instant browse/search/language-switch UX; splitting would add
    loading states for a marginal transfer win). Silenced the misleading
    Vite warning via `build.chunkSizeWarningLimit: 700` in `vite.config.ts`
    with an explanatory comment.
  - Fixed a real `vite preview` bug found during verification: the base was
    only set for `command === "build"`, so `preview` served the built HTML
    (which has `/CC5-Cookbook/` baked into asset URLs) from `/` and every
    asset 404'd - i.e. `npm run preview` never actually worked. Fixed by
    also applying the deploy base when Vite's `isPreview` is true. Does NOT
    affect the real GH Pages deploy (which always served under the correct
    base); it only unblocked local production-build verification.
  - Verified the production build end-to-end: served it via `npm run
    preview` under `/CC5-Cookbook/` and drove it headless (Playwright) -
    real content renders, category switch works, zero console errors, zero
    failed asset requests. This is the exact artifact GH Pages will serve.

## Next step

Deploy is the only thing left, and it needs two things that must be done by
the repo owner, not automatable from here:
1. **Enable GitHub Pages with "GitHub Actions" as the source** in the repo
   settings (github.com/NeslihanH/CC5-Cookbook -> Settings -> Pages ->
   Build and deployment -> Source: GitHub Actions). As of M10 the site at
   https://neslihanh.github.io/CC5-Cookbook/ returns 404, meaning Pages has
   not been deployed yet. The `.github/workflows/deploy.yml` (scaffolded in
   M0) is correct and will handle build+deploy once Pages is enabled.
2. **Push `main` to origin.** All of M1-M10 is committed locally but NOT yet
   pushed (origin still only has the M0 scaffold commit). Pushing to this
   public repo triggers `deploy.yml`, which builds and publishes the site.
   This is an outward-facing action (makes the site public), so confirm with
   the user before pushing.

After the first successful deploy, verify the live URL renders (not 404) and
spot-check a couple of languages/categories on the real Pages host. If the
site 404s after a green workflow run, the Pages source setting (step 1) is
the usual culprit.
