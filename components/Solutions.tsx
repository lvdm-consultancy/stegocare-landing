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
  accent: string;
  iconBg: string;
}

const solutions: SolutionDef[] = [
  {
    icon: Calendar,
    translationKey: "planning",
    accent: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500",
  },
  {
    icon: FileSignature,
    translationKey: "intake",
    accent: "from-violet-500/10 to-violet-600/5",
    iconBg: "bg-violet-500",
  },
  {
    icon: Receipt,
    translationKey: "billing",
    accent: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Users,
    translationKey: "hr",
    accent: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-500",
  },
  {
    icon: Smartphone,
    translationKey: "mobile",
    accent: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-500",
  },
  {
    icon: Database,
    translationKey: "government",
    accent: "from-cyan-500/10 to-cyan-600/5",
    iconBg: "bg-cyan-500",
  },
];

export default function Solutions() {
  const t = useTranslations("solutions");

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
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

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.translationKey} delay={index * 0.06}>
              <BentoCard solution={solution} t={t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

interface TranslationFn {
  (key: string): string;
}

function BentoCard({
  solution,
  t,
}: {
  solution: SolutionDef;
  t: TranslationFn;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg h-full">
      {/* Gradient accent */}
      <div
        className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${solution.accent} blur-2xl opacity-0 transition-opacity group-hover:opacity-100`}
      />

      <div className="relative">
        <div
          className={`${solution.iconBg} inline-flex items-center justify-center rounded-xl p-2 mb-4`}
        >
          <solution.icon className="w-4 h-4 text-white" />
        </div>

        <h3 className="font-semibold text-black mb-2 text-[15px]">
          {t(`items.${solution.translationKey}.title`)}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          {t(`items.${solution.translationKey}.description`)}
        </p>
      </div>
    </div>
  );
}
