"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { routing } from "@/i18n/routing";

interface LocaleOption {
  flag: string;
  label: string;
}

const localeOptions: Record<string, LocaleOption> = {
  en: { flag: "🇬🇧", label: "EN" },
  fr: { flag: "🇫🇷", label: "FR" },
  nl: { flag: "", label: "NL" },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setIsOpen(false);
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors px-2 py-1"
        aria-label="Switch language"
      >
        <span className="leading-none">{localeOptions[locale].flag}</span>
        {localeOptions[locale].label}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-sm z-50">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm transition-colors ${
                loc === locale
                  ? "text-black font-medium bg-gray-50"
                  : "text-gray-600 hover:bg-gray-50 hover:text-black"
              }`}
            >
              <span className="leading-none">{localeOptions[loc].flag}</span>
              {localeOptions[loc].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
