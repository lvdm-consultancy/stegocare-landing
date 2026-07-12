import { existsSync } from "node:fs";
import path from "node:path";

/** First matching Figma export dropped into /public/backgrounds wins. */
export function findHeroImage(): string | null {
  const candidates = ["hero.jpg", "hero.jpeg", "hero.png", "hero.webp"];
  for (const file of candidates) {
    if (existsSync(path.join(process.cwd(), "public", "backgrounds", file))) {
      return `/backgrounds/${file}`;
    }
  }
  return null;
}
