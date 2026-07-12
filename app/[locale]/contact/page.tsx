import type { Metadata } from "next";
import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, ExternalLink, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { CONTACT_URL, DEMO_PATH } from "@/components/links";
import { routing } from "@/i18n/routing";
import teamShot from "@/public/lvdm-collegues-pictures/siemen-and-simon.jpg";
import workingShot from "@/public/lvdm-collegues-pictures/working.jpg";

const OFFICE_ADDRESS = ["Brain Embassy", "Kipdorpbrug 10", "2000 Antwerpen"];
const OFFICE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Brain+Embassy+Kipdorpbrug+10+2000+Antwerpen";
const COMPANY_WEBSITE = "https://lvdmconsultancy.com";
const CONTACT_EMAIL = CONTACT_URL.replace("mailto:", "");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        "nl-BE": "/nl/contact",
        "fr-BE": "/fr/contact",
        "en-BE": "/en/contact",
        "x-default": "/nl/contact",
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations("contactPage");

  return (
    <>
      <Navbar />
      <main>
        {/* Header band */}
        <div className="border-b border-ink/5 bg-mist">
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-32 sm:px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t("heading")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {t("intro")}
            </p>
          </div>
        </div>

        {/* People + ways to reach us */}
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[6fr_5fr] lg:gap-20">
            <Reveal>
              {/* Mail */}
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                  <Mail className="h-5 w-5 text-brand-deep" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink">
                    {t("mail.title")}
                  </h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {t("mail.body")}
                  </p>
                  <a
                    href={CONTACT_URL}
                    className="mt-3 inline-block text-xl font-semibold tracking-tight text-brand-deep underline decoration-brand/30 decoration-2 underline-offset-4 transition-colors hover:text-brand sm:text-2xl"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-4 text-[15px] text-ink-soft">
                    {t("mail.demoHint")}{" "}
                    <a
                      href={`/${locale}${DEMO_PATH}`}
                      className="group inline-flex items-center gap-1 font-semibold text-brand-deep transition-colors hover:text-brand"
                    >
                      {t("mail.demoLink")}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </p>
                </div>
              </div>

              {/* Visit */}
              <div className="mt-12 flex items-start gap-4">
                <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                  <MapPin className="h-5 w-5 text-brand-deep" />
                </span>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink">
                    {t("visit.title")}
                  </h2>
                  <p className="mt-2 leading-relaxed text-ink-soft">
                    {t("visit.body")}
                  </p>
                  <address className="mt-3 text-[17px] font-medium not-italic leading-relaxed text-ink">
                    {OFFICE_ADDRESS.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={OFFICE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep transition-colors hover:text-brand"
                  >
                    {t("visit.maps")}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* The people you'll talk to */}
            <Reveal delay={0.15} className="relative pb-14 pr-8">
              <Image
                src={teamShot}
                alt={t("photoAlt")}
                className="w-full rounded-3xl object-cover shadow-xl ring-1 ring-ink/10"
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
              />
              <div className="absolute -bottom-0 right-0 w-2/5 rotate-[3deg]">
                <Image
                  src={workingShot}
                  alt=""
                  className="w-full rounded-2xl object-cover shadow-2xl ring-4 ring-white"
                  sizes="20vw"
                  placeholder="blur"
                />
              </div>
            </Reveal>
          </div>

          {/* Company details band */}
          <Reveal className="mt-16 lg:mt-24">
            <div className="grid gap-8 rounded-3xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10 md:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-tint">
                  <Building2 className="h-4.5 w-4.5 text-brand-deep" />
                </span>
                <div>
                  <h2 className="text-sm font-medium text-ink-soft">
                    {t("company.title")}
                  </h2>
                  <p className="mt-2 font-semibold text-ink">{t("company.name")}</p>
                  <p className="text-[15px] text-ink-soft">{t("company.vat")}</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-ink-soft">
                  {t("company.seatLabel")}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink">
                  {t("company.seat")}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {t("company.note")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-ink-soft">
                  {t("company.websiteLabel")}
                </h3>
                <a
                  href={COMPANY_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 inline-flex items-center gap-1.5 font-semibold text-brand-deep transition-colors hover:text-brand"
                >
                  lvdmconsultancy.com
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
