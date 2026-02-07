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

interface FeatureTab {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  headline: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
}

const featureTabs: FeatureTab[] = [
  {
    id: "planning",
    label: "Planning",
    icon: Calendar,
    headline: "Dynamic scheduling that adapts in real-time",
    description:
      "Push notifications keep field workers and planners perfectly synced. Schedule changes propagate instantly, reducing no-shows and miscommunication.",
    screenshot: "/screenshots/planning-client.png",
    screenshotAlt: "Stegocare planning view with weekly schedule for care workers",
  },
  {
    id: "crm",
    label: "CRM",
    icon: Contact,
    headline: "All your clients in one place",
    description:
      "Manage client profiles, track care history, and access key information instantly. Everything your team needs to deliver personalized care.",
    screenshot: "/screenshots/clientlist.png",
    screenshotAlt: "Stegocare CRM view with client list and details",
  },
  {
    id: "billing",
    label: "Billing",
    icon: Receipt,
    headline: "Automated billing with zero manual errors",
    description:
      "Handle mid-month rate changes, travel time calculations, and Belgian healthcare billing standards automatically. Full regulatory compliance built in.",
    screenshot: "/screenshots/invoice.png",
    screenshotAlt: "Stegocare billing view with invoices and payment status",
  },
  {
    id: "hr",
    label: "HR & Payroll",
    icon: Users,
    headline: "Single source of truth for your team",
    description:
      "Performance data flows directly to Liantis and Hora via API. No more double data entry, no more payroll errors. Save hours every month.",
    screenshot: "/screenshots/employee-detail.png",
    screenshotAlt: "Stegocare HR view with employee details and payroll data",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    headline: "Built for caregivers in the field",
    description:
      "Log interventions, track kilometers via GPS, and report incidents in seconds. Everything syncs back to the office instantly.",
    screenshot: "/screenshots/mobilescreen.png",
    screenshotAlt: "Stegocare mobile app for field care workers",
  },
];

export default function FeatureCarousel() {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = featureTabs[activeTab];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
            Everything your care organization needs
          </h2>
        </AnimatedSection>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-gray-200 divide-x divide-gray-200">
            {featureTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="Previous feature"
          >
            &larr;
          </button>
          {featureTabs.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-8 h-8 flex items-center justify-center text-sm font-medium border transition-colors ${
                activeTab === index
                  ? "border-black text-black"
                  : "border-gray-200 text-gray-400 hover:border-gray-400"
              }`}
              style={{ borderRadius: "50%" }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => setActiveTab(Math.min(featureTabs.length - 1, activeTab + 1))}
            className="text-gray-400 hover:text-black transition-colors"
            aria-label="Next feature"
          >
            &rarr;
          </button>
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
                {activeFeature.headline}
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                {activeFeature.description}
              </p>
            </div>

            {/* Screenshot */}
            <div className={`max-w-4xl mx-auto ${activeFeature.id === "mobile" ? "max-w-xs" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeFeature.screenshot}
                alt={activeFeature.screenshotAlt}
                className="w-full h-auto block drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
