"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const columns = [
    {
      titleKey: "navigation",
      links: [
        { labelKey: "home", href: "#" },
        { labelKey: "features", href: "#features" },
        { labelKey: "security", href: "#security" },
        { labelKey: "contact", href: "#contact" }
      ]
    },
    {
      titleKey: "product",
      links: [
        { labelKey: "planning", href: "#features" },
        { labelKey: "crm", href: "#features" },
        { labelKey: "billing", href: "#features" },
        { labelKey: "hrPayroll", href: "#features" },
        { labelKey: "mobileApp", href: "#features" }
      ]
    },
    {
      titleKey: "integrations",
      links: [
        { label: "Vesta", href: "#integrations" },
        { label: "Liantis", href: "#integrations" },
        { label: "eHealth", href: "#integrations" },
        { label: "BelRAI", href: "#integrations" },
        { label: "itsme\u00ae", href: "#integrations" }
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-100" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/careville-logo-temp.png"
                alt="Stegocare logo"
                className="w-7 h-7 rounded"
              />
              <span className="text-lg font-semibold tracking-tight text-black">
                Stegocare
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Link columns */}
          {columns.map((column) => (
            <div key={column.titleKey}>
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                {t(column.titleKey)}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => {
                  const label =
                    "labelKey" in link ? t(link.labelKey) : link.label;
                  return (
                    <li key={label}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-black transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              {t("privacyPolicy")}
            </a>
            <a
              href="/terms"
              className="text-sm text-gray-400 hover:text-black transition-colors"
            >
              {t("termsOfService")}
            </a>
            <div className="hidden">v0.1</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
