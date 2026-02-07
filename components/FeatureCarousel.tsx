"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Contact,
  Receipt,
  Users,
  Smartphone,
} from "lucide-react";
import { ComponentType } from "react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "next-intl";

interface FeatureTab {
  id: string;
  translationKey: string;
  icon: ComponentType<{ className?: string }>;
  screenshot: string;
  screenshotAlt: string;
}

const featureTabs: FeatureTab[] = [
  {
    id: "planning",
    translationKey: "planning",
    icon: Calendar,
    screenshot: "/screenshots/planning-client.png",
    screenshotAlt: "Stegocare planning view with weekly schedule for care workers",
  },
  {
    id: "crm",
    translationKey: "crm",
    icon: Contact,
    screenshot: "/screenshots/clientlist.png",
    screenshotAlt: "Stegocare CRM view with client list and details",
  },
  {
    id: "billing",
    translationKey: "billing",
    icon: Receipt,
    screenshot: "/screenshots/invoice.png",
    screenshotAlt: "Stegocare billing view with invoices and payment status",
  },
  {
    id: "hr",
    translationKey: "hr",
    icon: Users,
    screenshot: "/screenshots/employee-detail.png",
    screenshotAlt: "Stegocare HR view with employee details and payroll data",
  },
  {
    id: "mobile",
    translationKey: "mobile",
    icon: Smartphone,
    screenshot: "/screenshots/mobilescreen.png",
    screenshotAlt: "Stegocare mobile app for field care workers",
  },
];

export default function FeatureCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = featureTabs[activeTab];
  const t = useTranslations("featureCarousel");

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
            {t("heading")}
          </h2>
        </AnimatedSection>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-gray-200 divide-x divide-gray-200">
            {featureTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "bg-white text-blue-600"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{t(`tabs.${tab.translationKey}.label`)}</span>
                {activeTab === index && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Feature content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-10">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-black mb-4">
                {t(`tabs.${activeFeature.translationKey}.headline`)}
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                {t(`tabs.${activeFeature.translationKey}.description`)}
              </p>
            </div>

            {/* Screenshot */}
            {activeFeature.id !== "mobile" && (
              <div className="max-w-4xl mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeFeature.screenshot}
                  alt={activeFeature.screenshotAlt}
                  className="w-full h-auto block drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
