"use client";

import AnimatedSection from "./AnimatedSection";

interface IntegrationPartner {
  name: string;
  logo: string;
}

const partners: IntegrationPartner[] = [
  {
    name: "VESTA  ",
    logo: "/logos/vlaamse_overheid.jpg",
  },
  {
    name: "Liantis",
    logo: "/logos/liantis.webp",
  },
  {
    name: "eHealth",
    logo: "/logos/ehealth.png",
  },
  {
    name: "BelRAI",
    logo: "/logos/belrai.png",
  },
  {
    name: "itsme",
    logo: "/logos/itsme.webp",
  },
];

export default function IntegrationLogos() {
  return (
    <section id="integrations" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            Trusted Integrations
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
            Seamlessly connected to the platforms you rely on
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 bg-white border border-gray-200 flex items-center justify-center p-4 group-hover:border-gray-300 transition-colors">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                  />
                </div>
                <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600 transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
