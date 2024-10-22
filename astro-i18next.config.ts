import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "nl",
  locales: ["nl", "en"],
  routes: {
    en: {
      "over-webmoov": "about",
      blog: "blog",
      diensten: "services",
    },
  },
  i18nextServer: {
    debug: true,
  },
};

export default config;
