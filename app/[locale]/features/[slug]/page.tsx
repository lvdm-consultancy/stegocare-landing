import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingCta from "@/components/ClosingCta";
import Reveal from "@/components/Reveal";
import {
  FEATURE_PAGES,
  featurePath,
  findFeatureBySlug,
  type Locale,
} from "@/components/feature-pages";
import { routing } from "@/i18n/routing";

interface FeaturePageParams {
  locale: Locale;
  slug: string;
}

interface FeatureSection {
  title: string;
  body: string;
}

interface FeatureFaqItem {
  q: string;
  a: string;
}

export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  return FEATURE_PAGES.map((feature) => ({
    slug: feature.slugs[locale],
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<FeaturePageParams>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const feature = findFeatureBySlug(locale, slug);
  if (!feature) return {};

  const t = await getTranslations({ locale, namespace: "featurePages" });
  const title = t(`${feature.key}.metaTitle`);
  const description = t(`${feature.key}.metaDescription`);

  return {
    title,
    description,
    alternates: {
      canonical: featurePath(locale, feature.key),
      languages: {
        "nl-BE": featurePath("nl", feature.key),
        "fr-BE": featurePath("fr", feature.key),
        "en-BE": featurePath("en", feature.key),
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Stegocare",
      url: featurePath(locale, feature.key),
    },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<FeaturePageParams>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();
  const feature = findFeatureBySlug(locale, slug);
  if (!feature) notFound();

  setRequestLocale(locale);

  const t = await getTranslations("featurePages");
  const tFeatures = await getTranslations("features");

  const key = feature.key;
  const Icon = feature.icon;
  const phoneShots = feature.shots.filter((s) => s.phone);
  const desktopShots = feature.shots.filter((s) => !s.phone);
  const sections = t.raw(`${key}.sections`) as FeatureSection[];
  const faq = t.raw(`${key}.faq`) as FeatureFaqItem[];
  const bullets = tFeatures.has(`${key}.bullets`)
    ? (tFeatures.raw(`${key}.bullets`) as string[])
    : undefined;
  const related = FEATURE_PAGES.filter((f) => f.key !== key);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        {/* Header band */}
        <div className="border-b border-ink/5 bg-mist">
          <div className="mx-auto max-w-4xl px-4 pb-14 pt-32 sm:px-6">
            <a
              href={`/${locale}#features`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("common.allFeatures")}
            </a>
            <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-medium text-brand-deep">
              <Icon className="h-4 w-4" />
              {tFeatures(`${key}.title`)}
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {tFeatures(`${key}.tagline`)}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {t(`${key}.intro`)}
            </p>
          </div>
        </div>

        {/* Screenshots */}
        {desktopShots.length > 0 ? (
          <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
            <Reveal>
              <Image
                src={desktopShots[0].image}
                alt={tFeatures(`${key}.tagline`)}
                className="w-full drop-shadow-2xl"
                sizes="(min-width: 1024px) 1024px, 100vw"
                priority
              />
            </Reveal>
          </div>
        ) : (
          phoneShots.length > 0 && (
            <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6">
              <Reveal className="flex flex-wrap items-start justify-center gap-8">
                {phoneShots.map((shot, i) => (
                  <div
                    key={i}
                    className="w-52 overflow-hidden rounded-[2.4rem] border-[8px] border-navy bg-navy shadow-2xl sm:w-60"
                  >
                    <Image
                      src={shot.image}
                      alt={tFeatures(`${key}.tagline`)}
                      className="w-full"
                      sizes="240px"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </Reveal>
            </div>
          )
        )}

        {/* Story sections */}
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="leading-relaxed text-ink-soft">
            {tFeatures(`${key}.description`)}
          </p>
          {sections.map((section) => (
            <Reveal key={section.title} className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {section.body}
              </p>
            </Reveal>
          ))}

          {/* Additional screenshots */}
          {desktopShots.slice(1).map((shot, i) => (
            <Reveal key={i} className="mt-14">
              <Image
                src={shot.image}
                alt={tFeatures(`${key}.tagline`)}
                className="w-full drop-shadow-xl"
                sizes="(min-width: 768px) 768px, 100vw"
              />
            </Reveal>
          ))}

          {/* Highlights */}
          {bullets && bullets.length > 0 && (
            <Reveal className="mt-14 rounded-3xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10">
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                {t("common.highlightsTitle")}
              </h2>
              <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                      <Check className="h-3 w-3 text-brand" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] leading-snug text-ink-soft">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* FAQ */}
          <Reveal className="mt-14">
            <h2 className="text-2xl font-semibold tracking-tight text-ink">
              {t("common.faqTitle")}
            </h2>
            <div className="mt-6 divide-y divide-ink/10 rounded-2xl bg-mist px-6 ring-1 ring-ink/5 sm:px-8">
              {faq.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="pb-5 leading-relaxed text-ink-soft">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Related features */}
        <div className="border-t border-ink/5 bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold tracking-tight text-ink">
              {t("common.relatedTitle")}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((f) => {
                const RelatedIcon = f.icon;
                return (
                  <a
                    key={f.key}
                    href={featurePath(locale, f.key)}
                    className="group flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink/5 transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                      <RelatedIcon className="h-5 w-5 text-brand-deep" />
                    </span>
                    <span className="text-[15px] font-medium leading-snug text-ink">
                      {tFeatures(`${f.key}.tagline`)}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
