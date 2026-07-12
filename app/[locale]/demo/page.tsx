import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CalendarCheck, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "demoPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/demo`,
      languages: {
        "nl-BE": "/nl/demo",
        "fr-BE": "/fr/demo",
        "en-BE": "/en/demo",
        "x-default": "/nl/demo",
      },
    },
  };
}

const highlightIcons = [Clock, CalendarCheck, MessageCircle];

export default async function DemoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("demoPage");
  const highlights = t.raw("highlights") as string[];

  return (
    <>
      <Navbar />
      <main>
        <div className="border-b border-ink/5 bg-mist">
          <div className="mx-auto max-w-4xl px-4 pb-14 pt-32 sm:px-6">
            <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t("heading")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {t("intro")}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item, i) => {
              const Icon = highlightIcons[i % highlightIcons.length];
              return (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                    <Icon className="h-4.5 w-4.5 text-brand-deep" />
                  </span>
                  <p className="text-sm leading-snug text-ink-soft">{item}</p>
                </div>
              );
            })}
          </div>

          <DemoForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
