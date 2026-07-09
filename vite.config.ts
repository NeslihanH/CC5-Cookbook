import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves a project site under /<repo>/, so the build needs a
// matching base path. The dev server keeps "/" for convenience; `preview`
// must use the deploy base too, otherwise it serves the built HTML (which
// has /CC5-Cookbook/ baked into its asset URLs) from "/" and every asset
// 404s. Override the path with VITE_BASE if the repo name ever changes.
// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? process.env.VITE_BASE ?? "/CC5-Cookbook/" : "/",
  plugins: [react()],
  build: {
    // The whole reference library (88 entries x 5 languages of prose) ships
    // in one chunk on purpose: this app's core UX is instant category
    // browsing, instant client-side search and instant language switching,
    // all of which depend on the full dataset already being in memory.
    // Code-splitting would trade that for loading states in exchange for a
    // marginal transfer-size win (~199 KB gzipped total is fine for a
    // static reference site). Raise the warning threshold rather than chase
    // a split that would hurt the experience.
    chunkSizeWarningLimit: 700,
  },
}));
