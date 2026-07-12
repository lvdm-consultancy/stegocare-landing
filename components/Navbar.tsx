"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { DEMO_URL, LOGIN_URL } from "./links";

interface NavLink {
  labelKey: string;
  href: string;
}

const navLinks: NavLink[] = [
  { labelKey: "features", href: "#features" },
  { labelKey: "security", href: "#security" },
  { labelKey: "contact", href: "#contact" },
];

interface NavbarProps {
  /** White text while sitting on the hero image; turns solid on scroll. */
  light?: boolean;
}

export default function Navbar({ light = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("navbar");
  const locale = useLocale();
  const isLight = light && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(36,49,61,0.08)]"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href={`/${locale}`}
            className="flex items-center gap-2.5"
            aria-label="Stegocare home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/careville-logo-temp.png"
              alt="Stegocare logo"
              className="h-8 w-8 rounded"
            />
            <span
              className={`text-lg font-semibold tracking-tight ${
                isLight ? "text-white" : "text-ink"
              }`}
            >
              Stegocare
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`/${locale}${link.href}`}
                className={`text-sm font-medium transition-colors ${
                  isLight
                    ? "text-white/85 hover:text-white"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageSwitcher light={isLight} />
            <a
              href={LOGIN_URL}
              className={`hidden text-sm font-medium transition-colors md:inline ${
                isLight
                  ? "text-white/85 hover:text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {t("login")}
            </a>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center rounded-full bg-neutral-900 px-4.5 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-700 md:inline-flex ${
                isLight ? "ring-1 ring-white/40" : ""
              }`}
            >
              {t("requestDemo")}
            </a>
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-ink" />
              ) : (
                <Menu className={`h-5 w-5 ${isLight ? "text-white" : "text-ink"}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-ink/5 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/${locale}${link.href}`}
                  className="block rounded-lg px-3 py-3 font-medium text-ink-soft transition-colors hover:bg-mist hover:text-ink"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <div className="space-y-2 pt-3">
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-neutral-900 py-2.5 text-center font-medium text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("requestDemo")}
                </a>
                <a
                  href={LOGIN_URL}
                  className="block rounded-full py-2.5 text-center font-medium text-ink ring-1 ring-ink/15"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("login")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
