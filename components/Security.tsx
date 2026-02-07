"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Globe, Scale } from "lucide-react";
import { ComponentType } from "react";

interface SecurityBadge {
  icon: ComponentType<{ className?: string }>;
  label: string;
}

const badges: SecurityBadge[] = [
  { icon: Shield, label: "GDPR Compliant" },
  { icon: Lock, label: "End-to-End Encrypted" },
  { icon: Globe, label: "EU-Hosted (AWS)" },
  { icon: Scale, label: "NIS2 Ready" },
];

export default function Security() {
  return (
    <section
      id="security"
      className="relative py-28 lg:py-36 overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-100/80 to-orange-200/60" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Secure. Proven.
            <br />
            Ready to grow with you.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-12 mt-16"
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-black/20 flex items-center justify-center bg-white/60">
                <badge.icon className="w-7 h-7 text-black/70" />
              </div>
              <span className="text-sm font-medium text-black/80 border border-black/10 bg-white/60 px-3 py-1">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-end"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/70 border border-black/20 bg-white/60 px-5 py-2.5 hover:bg-white/80 transition-colors"
          >
            View more
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
