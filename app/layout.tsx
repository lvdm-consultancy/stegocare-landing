import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
              founder: {
                "@type": "Organization",
                name: "LVDM Consultancy",
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
