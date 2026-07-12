import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr", "nl"],
  defaultLocale: "nl",
  pathnames: {
    "/": "/",
    "/demo": "/demo",
    "/contact": "/contact",
    "/privacy": "/privacy",
    "/terms": "/terms",
    // Localized base segment for the feature detail pages; slug values are
    // localized per feature in components/feature-pages.ts.
    "/features/[slug]": {
      en: "/features/[slug]",
      nl: "/functies/[slug]",
      fr: "/fonctionnalites/[slug]",
    },
  },
});
