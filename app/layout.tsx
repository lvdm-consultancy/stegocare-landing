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

const JSONLD_DESCRIPTION: Record<string, string> = {
  nl: "Software voor gezinszorg en thuiszorg: planning, cliëntdossiers, tijdsregistratie, Vesta-rapportering en facturatie in één platform.",
  fr: "Logiciel pour les services d'aide aux familles et de soins à domicile : planification, dossiers clients, enregistrement du temps, rapports Vesta et facturation dans une seule plateforme.",
  en: "Software for family and home care organisations: scheduling, client files, time registration, Vesta reporting and invoicing in one platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const description = JSONLD_DESCRIPTION[locale] ?? JSONLD_DESCRIPTION.nl;

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#3274b4" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Stegocare",
                description,
                url: "https://stegocare.be",
                logo: "https://stegocare.be/logos/careville-logo-temp.png",
                founder: [
                  {
                    "@type": "Organization",
                    name: "LVDM Consultancy",
                    url: "https://lvdmconsultancy.com",
                  },
                  {
                    "@type": "Organization",
                    name: "Gezinszorg Villers",
                    url: "https://www.gezinszorgvillers.be/",
                  },
                ],
                areaServed: {
                  "@type": "Country",
                  name: "Belgium",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Stegocare",
                description,
                url: "https://stegocare.be",
                applicationCategory: "HealthApplication",
                operatingSystem: "Web, iOS, Android",
                inLanguage: ["nl", "fr", "en"],
                publisher: {
                  "@type": "Organization",
                  name: "LVDM Consultancy",
                },
              },
            ]),
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
