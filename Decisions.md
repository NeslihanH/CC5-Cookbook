# Decisions (append-only architecture log)

## D1 - Product shape: broad reference library, original wording, not a manual clone

CC5 Cookbook covers CC5's full feature set and its closely-tied ecosystem
(iClone, AccuRIG, ActorCore, mocap), organized as browsable categories +
step-by-step recipes + skill-tiered best practices. Chosen after a multi-round
discussion with the user. Explicitly **not** a copy of Reallusion's official
manual: content depth follows what's practically useful, always written in
original wording, never mirroring the manual's chapter structure or copying
its text. Rationale: match Suno Cookbook's non-affiliated reference-library
spirit while covering CC5's larger, more technical feature surface, and avoid
copyright risk from reproducing manual content. The user was explicit and firm
about this after an earlier draft plan leaned too close to "manual-equivalent
depth" - corrected before any content was written.

## D2 - No backend, static client-only SPA, deployed to GitHub Pages

Like Suno Cookbook, there is no third-party API to call and no secrets to
hold; the app is pure bundled static content. GitHub Pages (via GitHub
Actions) is the deploy target, not Vercel: it's free, needs no external
dashboard/account, and this project has no serverless/backend surface that
would benefit from Vercel's function hosting. This also matches what Suno
Cookbook actually ships (its CLAUDE.md says "Vercel" but its committed
`.github/workflows/deploy.yml` deploys to GitHub Pages) - we just make the
choice explicit here instead of leaving stale docs.

## D3 - Stack: Vite + React 19 + TS, react-i18next (mirrors Suno Cookbook)

Same rationale as Suno Cookbook: fast dev/build, first-class TS, tiny static
output, i18next as the de-facto React i18n library with interpolation and
locale fallback built in. Internal/technical choice, not put to a vote.

## D4 - Five-locale content model, English + Turkish built first

Locales: `en`, `tr`, `zh` (Simplified Chinese), `es`, `de`. English and
Turkish are always complete; the other three are added in a later milestone
and fall back to English until translated. Language set is evidence-based, not
assumed - see Conversation.md Session 1 for the research. Findings: Chinese
(Simplified) has the strongest grassroots CC-specific community (Bilibili
tutorial ecosystem, unofficial localized builds, official site + UI support);
Spanish has strong organic tutorial/course demand with no official Reallusion
localization at all; German has official/institutional backing (localized
site, office, UI language) but thinner grassroots content. Japanese and Korean
were considered and rejected for this slot: despite an official Japanese UI
and a Japan office, no meaningful Japanese CC-specific tutorial ecosystem was
found - Japan's VTuber-model scene runs on VRoid/Live2D, not Character
Creator. Turkish is included unconditionally regardless of community size,
per the user's standing requirement.

## D5 - Content sourcing, originality, and Official/Community labeling

Content is compiled via research (official Reallusion sources first:
reallusion.com, manual.reallusion.com, forum/magazine release notes; then
reputable trade press and community sources for corroboration), but every
entry is **written from scratch** - never copied or closely paraphrased from
Reallusion's manual or marketing copy, in any of the five languages. Every
entry carries an `official` flag (Official/Community badge): some CC5 details
uncovered during research (exact internal system names, some parameter lists)
were only press-paraphrased or community-reported, not confirmed on an
official page - these are labeled Community/unverified rather than presented
as fact, same model as Suno Cookbook's D5.

## D6 - Best practices are skill-tiered, not a flat list

Best Practices are split into Beginner / Intermediate / Expert categories,
with many entries per tier. Rationale (user-requested): CC5's feature surface
spans complete beginners (first character) through production-pipeline
experts (multi-engine export, custom rigging), and a flat list would either
overwhelm beginners or bore experts.

## D7 - Scope includes CC5's closely-tied ecosystem, not CC5 alone

CC5 is frequently used inseparably from iClone (animation), AccuRIG
(rigging), ActorCore (content/motion marketplace) and various mocap devices.
The cookbook covers these to the extent they connect to a CC5 workflow (e.g.
exporting a CC5 character into iClone, ActorCore content licensing terms),
rather than being an iClone or ActorCore manual in their own right.

## D8 - Content schema: one shared FeatureEntry type for the five topic
categories, separate types for recipe/practice/glossary/shortcut/version-diff

`Getting Started`, `Core Creation`, `Rigging & Animation`, `Pipeline &
Export` and `Ecosystem` all browse the same way (a named feature/concept with
a summary, a fuller explanation, and where to find it in the app), so they
share one `FeatureEntry` type instead of five near-duplicate types - this
mirrors Suno Cookbook's single `TagItem` type covering six of its nine
categories. `Recipe`, `BestPractice`, `VersionDiffEntry`, `GlossaryTerm` and
`Shortcut` have distinct shapes (ordered steps; skill tier; before/after
diff; term+definition; key combo) so they stay separate types. Official
Reallusion terminology (`FeatureEntry.name`, `GlossaryTerm.term`) is stored as
a plain English string, never localized, because that's what the term looks
like inside the actual software - localizing it would make the cookbook
harder to cross-reference against the app. One stub data file per category
(all exporting empty arrays) is committed in M1 so the M2-M7 content
milestones each touch one file instead of a monolith.

## D9 (corrected in M5) - "Motion+" is a real ActorCore product, but an
Ecosystem/content topic, not a Rigging & Animation mechanism

CLAUDE.md's early M3 outline listed "Motion+/retargeting" as a topic to
cover. M3's research found no CC5 rigging feature called "Motion+" and
concluded (wrongly) that the name did not exist at all; M3 covered the real
rigging mechanisms instead (Characterization, HumanIK-based retargeting,
CC5's MetaHuman-compatible skeleton), which was the right content call, but
the "does not exist" claim was wrong. M5 research turned up Motion+ (Motion
Plus): a real ActorCore Motion Store format that bundles body motion with
facial animation (and optionally paired props) in one asset, corresponding
to the `.iMotionPlus` file already documented in the `rlMotion` glossary
entry. It belongs with ActorCore/Ecosystem content, not CC5's own rigging
mechanics, since it is a purchasable motion asset format rather than
something CC5 itself does. Lesson for later milestones: "no feature by this
name in the area I searched" is not the same as "this name does not exist in
the product" - a name search must cover the wider Reallusion ecosystem
(ActorCore, iClone) before concluding a roadmap term is a misnomer.

## D10 (post-launch) - UI: left vertical sidebar + global "All"-default
search, sidebar counts follow the query

The M8 UI showed one category at a time with search scoped to the active
category. That failed the core reference-tool case: if you don't know which
category an entry lives in, you can't find it. Post-launch, the nav became a
left vertical sidebar (Suno-Cookbook style) with an "All" scope that is the
default, so search spans every category from the first keystroke and results
render as stacked per-category sections. The sidebar per-category counts are
derived from the same filtered lists the sections use, so a query narrows
every count (they are full totals when the box is empty). Findability beats a
tidy single-category view for this kind of tool; the model mirrors Suno
Cookbook's All-view + header search. The search itself lives in the header as
a full-width sticky row (always visible while scrolling).

## D11 (post-launch) - The "CC5 vs CC4" nav label is localized per language

Product names (CC5, CC4) stay English everywhere (per D4), but the connector
word is localized rather than left as a blanket English "vs". In Turkish,
"vs." is the standard abbreviation for "vesaire" (etc.), so "CC5 vs CC4"
misreads as "CC5 etcetera CC4"; Turkish uses "CC5 - CC4 Farkları"
(differences). Chinese uses "CC5 对比 CC4" (对比 = comparison); German uses
"CC5 vs. CC4" (period per German convention); en/es keep "vs" (idiomatic in
both). Lesson: an internationally-borrowed abbreviation ("vs" from Latin
versus) can collide with a native word in one language - don't assume it is
safe in every locale just because it is common in several.

## D12 (post-launch) - The unofficial/trademark disclaimer stays prominent,
not omnipresent

Considered making the "unofficial / not affiliated with or endorsed by
Reallusion" notice a sticky, always-on-screen banner "to be safer". Decided
against it: a trademark/affiliation disclaimer needs to be present and
reasonably visible, not on screen every moment. The site already carries a
prominent top banner (before any content), a footer disclaimer, and a LICENSE
trademark note - the standard, sufficient setup for an unofficial reference.
Making the full banner sticky would inflate the header (brand + search +
banner) and eat content space on every scroll for no real legal gain, and
persistent banners invite banner-blindness anyway. Keep it as-is.
