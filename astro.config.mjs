// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import icon from "astro-icon";

export default defineConfig({
  site: "https://www.cs-leasing.com/",
  output: "static",

  integrations: [
    react(),
    icon(),
    robotsTxt(),
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es-MX",
          en: "en-US",
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
