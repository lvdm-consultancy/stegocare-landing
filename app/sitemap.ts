import { MetadataRoute } from "next";
import {
  FEATURE_PAGES,
  featurePath,
  type Locale,
} from "@/components/feature-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stegocare.be";
  const locales: Locale[] = ["en", "nl", "fr"];
  const routes = ["", "/demo", "/contact", "/terms", "/privacy"];

  const sitemap: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.5,
      });
    });
  });

  FEATURE_PAGES.forEach((feature) => {
    locales.forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}${featurePath(locale, feature.key)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  });

  return sitemap;
}
