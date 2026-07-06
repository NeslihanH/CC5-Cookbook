# Conversation (running narrative)

## Session 1 (2026-07-06)

User asked to start a new "CC5 Cookbook" project (Reallusion's Character
Creator 5), following `../extension_playbook.md`'s workflow and mirroring
Suno Cookbook's standards exactly ("imzam gibi olsun" - it should feel like
our signature).

Read `extension_playbook.md` (universal plugin/extension methodology) and
Suno Cookbook's triple docs + full config (package.json, vite.config.ts,
tsconfig*, .oxlintrc.json, .gitignore, LICENSE, .github/workflows/deploy.yml,
index.html, src/i18n, src/index.css, hooks) to establish the exact standard to
mirror. Noted Suno Cookbook's CLAUDE.md says "Vercel" but its shipped workflow
actually deploys to GitHub Pages at neslihanh.github.io/Suno-Cookbook/.

Ran four parallel research agents against official Reallusion sources
(reallusion.com, manual.reallusion.com, magazine/courses/discussions.
reallusion.com) covering: core creation (HD Morphs, SkinGen, Smart Hair, Smart
Cloth, Digital Human Shader), rigging/animation (AccuRIG, HD Facial Profile,
Motion+/retargeting, mocap), pipeline/ecosystem (iClone, Unreal/Unity/Blender/
Maya/3ds Max/ZBrush/Substance Painter/Omniverse, Content Store/Marketplace/
ActorCore, licensing), and UI/workflow (panel layout, shortcuts, learning
resources, system requirements). Established CC5 launched 2025-08-27 ($299
perpetual / $479 Deluxe, plus a 2026-01 subscription model), and mapped what's
genuinely new vs CC4 (HD Character Base, HD Facial Profile, ActorMIXER,
first-party Maya/Marmoset plugins, MetaHuman skeleton parity). Several
specific claims (e.g. "Sticky Lips System" naming) came back flagged as
press-paraphrased rather than manual-confirmed - carried into D5's
Official/Community labeling requirement.

Ran a fifth research pass specifically on CC5/Reallusion community language
distribution (forum locales, YouTube/Bilibili tutorial volume, official site
localization, VTuber-community signal) to pick non-EN/TR locales on evidence
rather than assumption. Result: Chinese (Simplified) and Spanish show the
strongest grassroots community evidence; German has official/institutional
backing; Japanese and Korean turned out weaker than assumed (Japan's VTuber
scene runs on VRoid/Live2D, not CC) - see Decisions.md D4.

Decided via multi-round discussion (Decisions.md D1-D7): public
GitHub-Pages-deployed reference SPA, same stack as Suno Cookbook, covering
CC5 + its closely-tied ecosystem, five locales (en/tr/zh/es/de, en+tr first),
skill-tiered (Beginner/Intermediate/Expert) best practices with plenty of
practical tips per tier.

Two corrections from the user during planning, both folded into Decisions.md
before any content was written:
1. Initial plan proposed "comprehensive manual-equivalent" depth - user
   pushed back hard: content must never be copied or closely paraphrased from
   Reallusion's docs, in any language, and should not try to mirror the
   manual's structure/exhaustiveness. Research like Suno Cookbook did, then
   write everything in our own words.
2. Initial deploy-target proposal was Vercel (matching Suno Cookbook's
   CLAUDE.md) - user asked why, given there's no backend. Corrected to GitHub
   Pages, which is also what Suno Cookbook actually ships despite its docs.

Built M0 in this session: full config mirroring Suno Cookbook (package.json,
tsconfig*, vite.config.ts with GitHub Pages base path, .oxlintrc.json,
.gitignore, LICENSE with Reallusion trademark disclaimer, GitHub Actions
deploy workflow), a distinct visual identity (teal/amber gradient instead of
Suno's purple/pink, to keep each product's brand separate per the playbook's
multi-product guidance), i18n wired for all five locales (en/tr fully written,
zh/es/de stubbed empty and falling back to English), and a placeholder
App shell (brand, language switch, theme toggle, unofficial-project notice,
a roadmap grid previewing the ten planned categories).

Next: M1 - design the content schema (Feature, Recipe, BestPractice-with-
skill-level, GlossaryTerm, Shortcut, VersionDiff types) and lock the final
category tree before writing any actual CC5 content.
