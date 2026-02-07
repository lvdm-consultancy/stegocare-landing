"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FileSignature,
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
  mockup: FeatureMockup;
}

interface FeatureMockupStat {
  label: string;
  value: string;
  sub: string;
}

interface FeatureMockupRow {
  name: string;
  time: string;
  status: string;
  statusColor: string;
}

interface FeatureMockup {
  stats: FeatureMockupStat[];
  rows: FeatureMockupRow[];
}

const featureTabs: FeatureTab[] = [
  {
    id: "planning",
    label: "Planning",
    icon: Calendar,
    headline: "Dynamic scheduling that adapts in real-time",
    description:
      "Push notifications keep field workers and planners perfectly synced. Schedule changes propagate instantly, reducing no-shows and miscommunication.",
    mockup: {
      stats: [
        { label: "Active Clients", value: "247", sub: "+12% this month" },
        { label: "Today's Visits", value: "38", sub: "On schedule" },
        { label: "Utilization", value: "94%", sub: "Above target" },
      ],
      rows: [
        { name: "Maria V.", time: "08:00 - 09:30", status: "Completed", statusColor: "text-green-600 bg-green-50" },
        { name: "Jan D.", time: "10:00 - 11:00", status: "In Progress", statusColor: "text-blue-600 bg-blue-50" },
        { name: "Sophie L.", time: "11:30 - 12:30", status: "Scheduled", statusColor: "text-gray-500 bg-gray-50" },
        { name: "Pieter K.", time: "14:00 - 15:00", status: "Scheduled", statusColor: "text-gray-500 bg-gray-50" },
      ],
    },
  },
  {
    id: "intake",
    label: "Digital Intake",
    icon: FileSignature,
    headline: "Paperless onboarding with legal signatures",
    description:
      "Replace F51 paper forms with fully digital workflows. Clients sign via itsme® or Belgian eID — legally binding, instant, and fully auditable.",
    mockup: {
      stats: [
        { label: "Forms Completed", value: "156", sub: "This month" },
        { label: "Avg. Time", value: "4 min", sub: "-60% vs paper" },
        { label: "Signature Rate", value: "100%", sub: "itsme® / eID" },
      ],
      rows: [
        { name: "Intake: Maria V.", time: "Today, 08:12", status: "Signed", statusColor: "text-green-600 bg-green-50" },
        { name: "Intake: Jan D.", time: "Today, 09:45", status: "Signed", statusColor: "text-green-600 bg-green-50" },
        { name: "Intake: Sophie L.", time: "Today, 10:30", status: "Pending", statusColor: "text-amber-600 bg-amber-50" },
        { name: "Intake: Pieter K.", time: "Yesterday", status: "Signed", statusColor: "text-green-600 bg-green-50" },
      ],
    },
  },
  {
    id: "billing",
    label: "Billing",
    icon: Receipt,
    headline: "Automated billing with zero manual errors",
    description:
      "Handle mid-month rate changes, travel time calculations, and Belgian healthcare billing standards automatically. Full regulatory compliance built in.",
    mockup: {
      stats: [
        { label: "Invoiced", value: "€84K", sub: "This month" },
        { label: "Compliance", value: "100%", sub: "All checks passed" },
        { label: "Processing", value: "< 1 day", sub: "Avg. turnaround" },
      ],
      rows: [
        { name: "Invoice #2024-0847", time: "€2,340.00", status: "Paid", statusColor: "text-green-600 bg-green-50" },
        { name: "Invoice #2024-0846", time: "€1,890.00", status: "Paid", statusColor: "text-green-600 bg-green-50" },
        { name: "Invoice #2024-0845", time: "€3,120.00", status: "Sent", statusColor: "text-blue-600 bg-blue-50" },
        { name: "Invoice #2024-0844", time: "€2,670.00", status: "Draft", statusColor: "text-gray-500 bg-gray-50" },
      ],
    },
  },
  {
    id: "hr",
    label: "HR & Payroll",
    icon: Users,
    headline: "Single source of truth for your team",
    description:
      "Performance data flows directly to Liantis and Hora via API. No more double data entry, no more payroll errors. Save hours every month.",
    mockup: {
      stats: [
        { label: "Team Members", value: "52", sub: "Active" },
        { label: "Payroll Sync", value: "Auto", sub: "Via Liantis API" },
        { label: "Time Saved", value: "12h", sub: "Per month" },
      ],
      rows: [
        { name: "Lisa Janssens", time: "Nurse", status: "Active", statusColor: "text-green-600 bg-green-50" },
        { name: "Tom Peeters", time: "Caregiver", status: "Active", statusColor: "text-green-600 bg-green-50" },
        { name: "Emma De Wit", time: "Nurse", status: "On Leave", statusColor: "text-amber-600 bg-amber-50" },
        { name: "Bram Claes", time: "Coordinator", status: "Active", statusColor: "text-green-600 bg-green-50" },
      ],
    },
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: Smartphone,
    headline: "Built for caregivers in the field",
    description:
      "Log interventions, track kilometers via GPS, and report incidents in seconds. Everything syncs back to the office instantly.",
    mockup: {
      stats: [
        { label: "Visits Logged", value: "342", sub: "This week" },
        { label: "GPS Tracked", value: "1,240 km", sub: "Auto-logged" },
        { label: "Incidents", value: "2", sub: "Reported" },
      ],
      rows: [
        { name: "Visit: Maria V.", time: "08:00 - 09:25", status: "Logged", statusColor: "text-green-600 bg-green-50" },
        { name: "Visit: Jan D.", time: "10:05 - 10:58", status: "Logged", statusColor: "text-green-600 bg-green-50" },
        { name: "Travel: 12.4 km", time: "Auto-tracked", status: "Synced", statusColor: "text-blue-600 bg-blue-50" },
        { name: "Visit: Sophie L.", time: "11:30 - ...", status: "In Progress", statusColor: "text-blue-600 bg-blue-50" },
      ],
    },
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

            {/* Dashboard mockup */}
            <div className="max-w-4xl mx-auto">
              {/* Browser chrome */}
              <div className="bg-gray-100 p-3 flex items-center gap-2 border border-gray-200 border-b-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 bg-white h-7 mx-16 flex items-center px-3">
                  <span className="text-xs text-gray-400">
                    app.stegocare.be/{activeFeature.id}
                  </span>
                </div>
              </div>

              {/* Dashboard body */}
              <div className="bg-white p-6 lg:p-8 border border-gray-200">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {activeFeature.mockup.stats.map((stat) => (
                    <div key={stat.label} className="bg-gray-50 p-4">
                      <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mb-1">
                        {stat.label}
                      </div>
                      <div className="text-2xl font-bold text-black">{stat.value}</div>
                      <div className="text-[11px] text-accent mt-1">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table rows */}
                <div className="border border-gray-100">
                  <div className="grid grid-cols-3 gap-4 px-4 py-2 bg-gray-50 text-[11px] font-medium text-gray-400 uppercase tracking-wider">
                    <span>Name</span>
                    <span>Details</span>
                    <span>Status</span>
                  </div>
                  {activeFeature.mockup.rows.map((row) => (
                    <div
                      key={row.name}
                      className="grid grid-cols-3 gap-4 px-4 py-3 border-t border-gray-100 text-sm"
                    >
                      <span className="text-gray-800 font-medium">{row.name}</span>
                      <span className="text-gray-500">{row.time}</span>
                      <span>
                        <span className={`inline-flex px-2 py-0.5 text-xs font-medium ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
