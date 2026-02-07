"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, ShieldCheck } from "lucide-react";
import { ComponentType } from "react";

interface Pillar {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const pillars: Pillar[] = [
  {
    icon: Monitor,
    title: "Back Office",
    description:
      "Planning, billing, HR, and compliance — all from one dashboard. No more switching between disconnected tools.",
    stat: "-60%",
    statLabel: "Admin time",
  },
  {
    icon: Smartphone,
    title: "In the Field",
    description:
      "Your caregivers get a mobile app that works offline. Log visits, track travel, and report incidents in seconds.",
    stat: "Real-time",
    statLabel: "Sync",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description:
      "Automated audit trails, government integrations, and regulatory reporting. Always audit-ready, zero effort.",
    stat: "100%",
    statLabel: "Compliance rate",
  },
];

export default function ImageHero() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Built for the realities of care work
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From the back office to the patient&apos;s home, Stegocare works
            wherever your team does.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-2xl mb-6">
                <pillar.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <div className="border-t border-gray-100 pt-4">
                <div className="text-2xl font-bold text-black">{pillar.stat}</div>
                <div className="text-xs text-gray-400 mt-0.5">{pillar.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
