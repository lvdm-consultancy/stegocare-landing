import { Inter, Playfair_Display } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://stegocare.be" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Stegocare",
              description:
                "Next-generation integrated healthcare management platform for Belgian care organizations.",
              url: "https://stegocare.be",
              logo: "https://stegocare.be/logos/careville-logo-temp.png",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                availableLanguage: ["English", "Dutch", "French"],
              },
              founder: {
                "@type": "Organization",
                name: "LVDM Consultancy",
              },
              areaServed: {
                "@type": "Country",
                name: "Belgium",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Healthcare Management Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "SoftwareApplication",
                      name: "Stegocare Platform",
                      applicationCategory: "HealthApplication",
                      operatingSystem: "Web, iOS, Android",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
