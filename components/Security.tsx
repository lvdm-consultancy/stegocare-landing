"use client";

import { FileSearch, Lock, Server, Shield, ShieldCheck, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";

const bulletIcons = [Lock, UserCheck, FileSearch, Server];

export default function Security() {
  const t = useTranslations("security");
  const bullets = t.raw("bullets") as string[];

  return (
    <section id="security" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="overflow-hidden rounded-[2.5rem] bg-navy px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-16">
            <div>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {t("title")}
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">
                {t("description")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25">
                  <ShieldCheck className="h-4 w-4 text-[#8db8dd]" />
                  {t("badges.gdpr")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25">
                  <Shield className="h-4 w-4 text-[#8db8dd]" />
                  {t("badges.nis2")}
                </span>
              </div>
            </div>
            <div className="grid content-center gap-4 sm:grid-cols-2">
              {bullets.map((bullet, index) => {
                const Icon = bulletIcons[index % bulletIcons.length];
                return (
                  <div
                    key={bullet}
                    className="rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10"
                  >
                    <Icon className="h-5 w-5 text-[#8db8dd]" />
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {bullet}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
