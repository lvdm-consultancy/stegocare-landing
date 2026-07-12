import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Builders from "@/components/Builders";
import ClosingCta from "@/components/ClosingCta";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "nl-BE": "/nl",
        "fr-BE": "/fr",
        "en-BE": "/en",
        "x-default": "/nl",
      },
    },
  };
}

export default function Home() {
  return (
    <>
      <Navbar light />
      <main>
        <Hero />
        <Features />
        <Integrations />
        <Security />
        <Builders />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
