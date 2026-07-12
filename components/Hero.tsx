import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import SkyBackdrop from "./SkyBackdrop";
import { findHeroImage } from "./hero-image";
import { DEMO_PATH } from "./links";

/** Hand-drawn ellipse around the accent word, like a planner's pen circle. */
function CircledWord({ children }: { children: React.ReactNode }) {
  return (
    <em className="relative ml-1.5 inline-block px-1 font-serif font-medium italic">
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-[0.35em] -top-[0.18em] h-[calc(100%+0.36em)] w-[calc(100%+0.7em)]"
        viewBox="0 0 120 50"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M16 34 C 8 16, 48 4, 82 7 C 108 9, 118 22, 108 34 C 95 47, 38 48, 22 40 C 14 36, 15 27, 24 20"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.9"
        />
      </svg>
    </em>
  );
}

export default function Hero() {
  const t = useTranslations("hero");
  const tProof = useTranslations("socialProof");
  const locale = useLocale();
  const heroImage = findHeroImage();
  const onImage = Boolean(heroImage);

  return (
    <header className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <SkyBackdrop image={heroImage} />
      {onImage && (
        /* Soft vignette behind the copy so white text reads on any backdrop */
        <div
          aria-hidden
          className="absolute left-1/2 top-[42%] -z-[5] h-[72%] w-[130%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(12,45,88,0.38),transparent_72%)]"
        />
      )}

      {/* pb > pt biases the text block up into the clean sky */}
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 pb-28 pt-32 text-center sm:px-6 lg:pb-36">
        <h1
          className={`rise text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl ${
            onImage
              ? "text-white drop-shadow-[0_2px_18px_rgba(15,55,105,0.35)]"
              : "text-ink [&>em]:text-brand-deep"
          }`}
          style={{ animationDelay: "0.05s" }}
        >
          {t.rich("headline", {
            em: (chunks) => <CircledWord>{chunks}</CircledWord>,
          })}
        </h1>

        <p
          className={`rise mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg ${
            onImage
              ? "font-medium text-white [text-shadow:0_1px_4px_rgba(10,40,80,0.6),0_2px_20px_rgba(10,40,80,0.5)]"
              : "text-ink-soft"
          }`}
          style={{ animationDelay: "0.18s" }}
        >
          {t("subheadline")}
        </p>

        <div
          className="rise mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href={`/${locale}${DEMO_PATH}`}
            className="group flex items-center gap-1.5"
          >
            <span className="inline-flex items-center rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/35 ring-2 ring-white/80 transition-all group-hover:scale-[1.02] group-hover:bg-neutral-700">
              {t("ctaPrimary")}
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-xl shadow-black/35 ring-2 ring-white/80 transition-all group-hover:scale-[1.02] group-hover:bg-neutral-700">
              <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>

      {/* Social proof anchored at the base of the hero */}
      <div
        className="rise mx-auto w-full max-w-5xl px-4 pb-10 sm:px-6"
        style={{ animationDelay: "0.45s" }}
      >
        <p
          className={`text-center text-sm ${
            onImage
              ? "text-white/95 drop-shadow-[0_1px_8px_rgba(15,55,105,0.45)]"
              : "text-ink-soft"
          }`}
        >
          {tProof("tagline")}
        </p>
      </div>
    </header>
  );
}
