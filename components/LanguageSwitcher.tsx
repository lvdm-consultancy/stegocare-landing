"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { routing } from "@/i18n/routing";

interface LocaleOption {
  flag: string;
  flagAlt: string;
  label: string;
}

const localeOptions: Record<string, LocaleOption> = {
  en: { flag: "/flags/gb.png", flagAlt: "United Kingdom flag", label: "EN" },
  fr: { flag: "/flags/fr.png", flagAlt: "France flag", label: "FR" },
  nl: { flag: "/flags/nl.png", flagAlt: "Netherlands flag", label: "NL" },
};

function Flag({ option }: { option: LocaleOption }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={option.flag}
      alt={option.flagAlt}
      className="h-3 w-[18px] rounded-[2px] object-cover ring-1 ring-black/10"
    />
  );
}

interface LanguageSwitcherProps {
  /** White text while sitting on the hero image. */
  light?: boolean;
}

export default function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
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
        className={`flex items-center gap-1 text-sm transition-colors px-2 py-1 ${
          light ? "text-white/85 hover:text-white" : "text-gray-600 hover:text-black"
        }`}
        aria-label="Switch language"
      >
        <Flag option={localeOptions[locale]} />
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
              <Flag option={localeOptions[loc]} />
              {localeOptions[loc].label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
