// @ts-check
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next(), react()],
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});
