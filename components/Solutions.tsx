"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Calendar,
  FileSignature,
  Receipt,
  Users,
  Smartphone,
  Database,
} from "lucide-react";
import { ComponentType } from "react";
import { useTranslations } from "next-intl";

interface SolutionDef {
  icon: ComponentType<{ className?: string }>;
  translationKey: string;
}

const solutions: SolutionDef[] = [
  { icon: Calendar, translationKey: "planning" },
  { icon: FileSignature, translationKey: "intake" },
  { icon: Receipt, translationKey: "billing" },
  { icon: Users, translationKey: "hr" },
  { icon: Smartphone, translationKey: "mobile" },
  { icon: Database, translationKey: "government" },
];

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            {t("sectionLabel")}
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
            {t("heading")}
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.translationKey} delay={index * 0.08}>
              <div className="bg-white p-8 h-full group hover:bg-gray-50 transition-colors">
                <solution.icon className="w-6 h-6 text-black mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">
                  {t(`items.${solution.translationKey}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`items.${solution.translationKey}.description`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
