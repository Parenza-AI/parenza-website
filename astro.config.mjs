// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "static",
  // Inline page CSS into <head>: the stylesheet is small and most sessions are
  // a single page, so avoiding a render-blocking request wins on mobile — which
  // is where the majority of visitors arrive from.
  build: { inlineStylesheets: "always" },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en-US" } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
