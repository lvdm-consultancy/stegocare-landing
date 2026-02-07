import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Stegocare — Reliable Care, Simplified",
  description:
    "One platform to manage your planning, HR, billing, and administration. Built for modern Belgian care teams.",
  keywords: [
    "healthcare management",
    "care planning",
    "Belgian healthcare",
    "HR management",
    "billing automation",
    "BelRAI",
    "VESTA",
    "care organizations",
  ],
  openGraph: {
    title: "Stegocare — Reliable Care, Simplified",
    description:
      "One platform to manage your planning, HR, billing, and administration. Built for modern Belgian care teams.",
    type: "website",
    locale: "en_BE",
    siteName: "Stegocare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stegocare — Reliable Care, Simplified",
    description:
      "One platform to manage your planning, HR, billing, and administration. Built for modern Belgian care teams.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
