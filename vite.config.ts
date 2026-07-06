import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves a project site under /<repo>/, so the build needs a
// matching base path. Locally (dev/preview) we keep "/". Override with
// VITE_BASE if the repo name or hosting path ever changes.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? process.env.VITE_BASE ?? "/CC5-Cookbook/" : "/",
  plugins: [react()],
}));
