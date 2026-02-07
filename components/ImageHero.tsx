"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, ShieldCheck } from "lucide-react";
import { ComponentType } from "react";
import { useTranslations } from "next-intl";

interface PillarDef {
  icon: ComponentType<{ className?: string }>;
  translationKey: string;
  accent: string;
}

const pillars: PillarDef[] = [
  { icon: Monitor, translationKey: "backOffice", accent: "border-blue-600" },
  { icon: Smartphone, translationKey: "field", accent: "border-emerald-500" },
  { icon: ShieldCheck, translationKey: "compliance", accent: "border-amber-500" },
];

export default function ImageHero() {
  const t = useTranslations("imageHero");

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
            {t("heading")}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.translationKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white border-l-4 ${pillar.accent} p-8 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <pillar.icon className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-semibold text-black">
                    {t(`pillars.${pillar.translationKey}.title`)}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t(`pillars.${pillar.translationKey}.description`)}
                </p>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-black">
                  {t(`pillars.${pillar.translationKey}.stat`)}
                </span>
                <span className="text-sm text-gray-400">
                  {t(`pillars.${pillar.translationKey}.statLabel`)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
