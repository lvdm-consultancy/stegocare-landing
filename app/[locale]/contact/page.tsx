import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, ExternalLink, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_URL, DEMO_PATH } from "@/components/links";
import { routing } from "@/i18n/routing";

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

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-3xl bg-mist p-8 ring-1 ring-ink/5">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint">
        <Icon className="h-5 w-5 text-brand-deep" />
      </span>
      <h2 className="mt-5 text-xl font-semibold tracking-tight text-ink">{title}</h2>
      {children}
    </div>
  );
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
        <div className="border-b border-ink/5 bg-mist">
          <div className="mx-auto max-w-4xl px-4 pb-14 pt-32 sm:px-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {t("heading")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {t("intro")}
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card icon={MapPin} title={t("visit.title")}>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {t("visit.body")}
              </p>
              <address className="mt-4 text-[15px] not-italic leading-relaxed text-ink">
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
                className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-deep transition-colors hover:text-brand"
              >
                {t("visit.maps")}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>

            <Card icon={Mail} title={t("mail.title")}>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {t("mail.body")}
              </p>
              <a
                href={CONTACT_URL}
                className="mt-4 text-[15px] font-medium text-brand-deep transition-colors hover:text-brand"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-auto pt-5 text-sm text-ink-soft">
                {t("mail.demoHint")}{" "}
                <a
                  href={`/${locale}${DEMO_PATH}`}
                  className="group inline-flex items-center gap-1 font-semibold text-brand-deep transition-colors hover:text-brand"
                >
                  {t("mail.demoLink")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </p>
            </Card>

            <Card icon={Building2} title={t("company.title")}>
              <dl className="mt-3 space-y-2 text-[15px] leading-relaxed">
                <div>
                  <dd className="font-medium text-ink">{t("company.name")}</dd>
                  <dd className="text-ink-soft">{t("company.vat")}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-ink">{t("company.seatLabel")}</dt>
                  <dd className="text-ink-soft">{t("company.seat")}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {t("company.note")}
              </p>
              <p className="mt-auto pt-5 text-sm">
                <span className="text-ink-soft">{t("company.websiteLabel")}: </span>
                <a
                  href={COMPANY_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-deep transition-colors hover:text-brand"
                >
                  lvdmconsultancy.com
                </a>
              </p>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
