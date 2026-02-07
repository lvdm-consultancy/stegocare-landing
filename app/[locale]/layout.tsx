import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Stegocare",
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
    "thuiszorg",
    "zorgmanagement",
    "planning software",
    "healthcare software Belgium",
    "eHealth integration",
    "care worker scheduling",
  ],
  authors: [{ name: "LVDM Consultancy" }],
  creator: "LVDM Consultancy",
  publisher: "Stegocare",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stegocare.be"),
  alternates: {
    canonical: "/",
    languages: {
      "en-BE": "/en",
      "nl-BE": "/nl",
      "fr-BE": "/fr",
    },
  },
  openGraph: {
    title: "Stegocare",
    description:
      "One platform to manage your planning, HR, billing, and administration. Built for modern Belgian care teams.",
    type: "website",
    locale: "en_BE",
    siteName: "Stegocare",
    url: "https://stegocare.be",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stegocare",
    description:
      "One platform to manage your planning, HR, billing, and administration. Built for modern Belgian care teams.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
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
