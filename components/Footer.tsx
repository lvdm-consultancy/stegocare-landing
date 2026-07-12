"use client";

import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navbar");
  const locale = useLocale();

  const navLinks = [
    { label: tNav("features"), href: `/${locale}#features` },
    { label: tNav("security"), href: `/${locale}#security` },
    { label: tNav("contact"), href: `/${locale}/contact` },
  ];

  return (
    <footer className="relative isolate overflow-hidden" role="contentinfo">
      <div aria-hidden className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/backgrounds/footer.jpg"
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_58%]"
        />
        {/* Scrim so links and legal text stay readable over the painting */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/55 to-navy/80" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <a
              href={`/${locale}`}
              className="flex items-center gap-2.5"
              aria-label="Stegocare home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/careville-logo-temp.png"
                alt="Stegocare logo"
                className="h-7 w-7 rounded"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                Stegocare
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">
              {t("tagline")}
            </p>
          </div>

          <nav aria-label={t("navigation")}>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-sm text-white/75">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`/${locale}/privacy`}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {t("privacyPolicy")}
            </a>
            <a
              href={`/${locale}/terms`}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {t("termsOfService")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
