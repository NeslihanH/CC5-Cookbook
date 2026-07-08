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
    ecosystem.ts   (all FeatureEntry[], empty until M2-M5)
    recipes.ts bestPractices.ts whatsNew.ts glossary.ts shortcuts.ts
                   (empty until M6-M7)
    content.ts     aggregator: categories, featureEntries, exports, totals
  i18n/            i18n config + locales/en.json, tr.json, zh.json, es.json, de.json
  hooks/           useTheme (light/dark), useLocalized (locale picker with
                   English fallback)
  App.tsx          current: placeholder shell (brand, language switch, theme,
                   roadmap cards). Will grow into browse/search/category layout
                   in M8, once `src/data/` holds real content.
  main.tsx index.css
```

Content datasets are localized per Decisions.md D4: prose fields are
`Localized` (`en`/`tr` required, `zh`/`es`/`de` optional); official Reallusion
terms (`FeatureEntry.name`, `GlossaryTerm.term`) stay plain English strings,
same as Suno Cookbook keeps Suno tag literals in English.

Component breakout (`Header`, `CategoryNav`, cards, etc.) happens in M8, once
there is real content to render.

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
- M8 UI (browse, search, category nav, skill-level filter, copy, language
  switch, theme): NOT STARTED. Note from mid-M5: the user checked the local
  dev server and (correctly) couldn't see any of the content written so far -
  `App.tsx` still only renders the M0 placeholder roadmap cards and never
  reads `src/data/content.ts`. This is expected per the M8 plan, not a bug;
  confirmed with the user to keep writing M6-M7 content first rather than
  build an early preview UI. Now that M2-M7 are done, M8 is what makes all
  of it visible.
- M9 translation pass to zh/es/de: NOT STARTED.
- M10 polish + trademark/English audit + deploy: NOT STARTED.

## Next step

M8: build the real browse/search UI in `App.tsx` (and break it into
components - `Header`, `CategoryNav`, cards per content type - per the
"Component breakout" note above). Needs: category navigation over
`categories` from `src/data/content.ts`, card rendering for each of the 6
`ContentItem` shapes (`FeatureEntry`, `Recipe`, `BestPractice`,
`VersionDiffEntry`, `GlossaryTerm`, `Shortcut`), client-side diacritic-
insensitive search per the repo layout notes, a skill-level filter for Best
Practices, Official/Community badges (`badge.official`/`badge.community`
keys already exist in the locale files), and `useLocalized` (already built
in M1) wired into every card. Existing theme/language switch and the M0
notice banner should carry over largely as-is.
