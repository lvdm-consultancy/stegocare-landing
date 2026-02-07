"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavLink {
  labelKey: string;
  href: string;
}

const navLinks: NavLink[] = [
  { labelKey: "features", href: "#features" },
  { labelKey: "integrations", href: "#integrations" },
  { labelKey: "security", href: "#security" },
  { labelKey: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("navbar");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-white"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Stegocare home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/careville-logo-temp.png" alt="Stegocare logo" className="w-8 h-8 rounded" />
            <span className="text-lg font-semibold tracking-tight text-black">
              Stegocare
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black transition-colors"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="hidden md:inline-flex text-sm text-gray-600 hover:text-black transition-colors px-4 py-2 border border-gray-200 hover:border-gray-300"
            >
              {t("signIn")}
            </a>
            <a
              href="https://calendly.com/simon-lvdmconsultancy/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium hover:bg-primary-light transition-colors"
            >
              {t("bookDemo")}
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-black" />
              ) : (
                <Menu className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-600 font-medium py-3 px-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href="#contact"
                  className="block text-center text-sm text-gray-600 py-2.5 border border-gray-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("signIn")}
                </a>
                <a
                  href="https://calendly.com/simon-lvdmconsultancy/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-black text-white font-medium py-2.5"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("bookDemo")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
