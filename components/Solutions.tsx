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

interface Solution {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const solutions: Solution[] = [
  {
    icon: Calendar,
    title: "Real-Time Planning",
    description:
      "Push notifications keep field workers and planners synced. Schedule changes propagate instantly.",
  },
  {
    icon: FileSignature,
    title: "Digital Intake & QES",
    description:
      "Legally binding signatures via itsme® and Belgian eID. Fully digital, fully auditable.",
  },
  {
    icon: Receipt,
    title: "Automated Billing",
    description:
      "Mid-month rate changes, travel time, and Belgian healthcare billing — all handled automatically.",
  },
  {
    icon: Users,
    title: "HR & Payroll Sync",
    description:
      "Performance data flows directly to Liantis and Hora via API. No double entry.",
  },
  {
    icon: Smartphone,
    title: "Mobile for Caregivers",
    description:
      "Log interventions, track kilometers via GPS, and report incidents in seconds.",
  },
  {
    icon: Database,
    title: "Government Integration",
    description:
      "Automatic BelRAI score retrieval and real-time VESTA data exchange.",
  },
];

export default function Solutions() {
  return (
    <section className="py-20 lg:py-28 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
            The Solution
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
            One platform to replace them all
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Stegocare brings planning, intake, billing, HR, and compliance
            into a single system built for Belgian care organizations.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {solutions.map((solution, index) => (
            <AnimatedSection key={solution.title} delay={index * 0.08}>
              <div className="bg-white p-8 h-full group hover:bg-gray-50 transition-colors">
                <solution.icon className="w-6 h-6 text-black mb-4" />
                <h3 className="text-lg font-semibold text-black mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
