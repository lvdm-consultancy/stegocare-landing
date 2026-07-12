"use client";

import Image from "next/image";
import {
  CalendarRange,
  Check,
  FolderOpen,
  Landmark,
  Receipt,
  Route,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import planningShot from "@/public/screenshots/planning.png";
import mobileShot from "@/public/screenshots/mobilescreen.png";
import clientListShot from "@/public/screenshots/clientlist.png";
import invoiceShot from "@/public/screenshots/invoice.png";

function Bullets({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul
      className={`mt-7 gap-x-8 gap-y-3.5 ${
        columns ? "grid sm:grid-cols-2" : "grid"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint">
            <Check className="h-3 w-3 text-brand" strokeWidth={3} />
          </span>
          <span className="text-[15px] leading-snug text-ink-soft">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Chip({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <p className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-medium text-brand-deep">
      <Icon className="h-4 w-4" />
      {children}
    </p>
  );
}

export default function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="scroll-mt-20">
      {/* Planning — the flagship feature, screenshot right */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Chip icon={CalendarRange}>{t("planning.title")}</Chip>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("planning.tagline")}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              {t("planning.description")}
            </p>
            <Bullets items={t.raw("planning.bullets") as string[]} />
          </Reveal>
          <Reveal delay={0.15} className="lg:-mr-16 xl:-mr-24">
            <Image
              src={planningShot}
              alt={t("planning.tagline")}
              className="w-full drop-shadow-2xl"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
        </div>
      </div>

      {/* Mobile app — phone left */}
      <div className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.15} className="order-last lg:order-first">
              <div className="mx-auto w-60 overflow-hidden rounded-[2.6rem] border-[9px] border-navy bg-navy shadow-2xl sm:w-72">
                <Image
                  src={mobileShot}
                  alt={t("mobile.tagline")}
                  className="w-full"
                  sizes="288px"
                />
              </div>
            </Reveal>
            <Reveal>
              <Chip icon={Smartphone}>{t("mobile.title")}</Chip>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {t("mobile.tagline")}
              </h2>
              <p className="mt-5 leading-relaxed text-ink-soft">
                {t("mobile.description")}
              </p>
              <Bullets items={t.raw("mobile.bullets") as string[]} columns />
            </Reveal>
          </div>
        </div>
      </div>

      {/* The rest of the platform — card grid */}
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col rounded-3xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10">
            <Chip icon={FolderOpen}>{t("clients.title")}</Chip>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
              {t("clients.tagline")}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t("clients.description")}
            </p>
            <Bullets items={t.raw("clients.bullets") as string[]} />
            <div className="mt-8 max-h-48 overflow-hidden">
              <Image
                src={clientListShot}
                alt={t("clients.tagline")}
                className="w-full rounded-xl"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10">
            <Chip icon={Route}>{t("timeAndTravel.title")}</Chip>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
              {t("timeAndTravel.tagline")}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t("timeAndTravel.description")}
            </p>
            <Bullets items={t.raw("timeAndTravel.bullets") as string[]} />
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10">
            <Chip icon={Landmark}>{t("vesta.title")}</Chip>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
              {t("vesta.tagline")}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t("vesta.description")}
            </p>
            <Bullets items={t.raw("vesta.bullets") as string[]} />
          </Reveal>

          <Reveal delay={0.16} className="flex flex-col rounded-3xl bg-mist p-8 ring-1 ring-ink/5 sm:p-10">
            <Chip icon={Receipt}>{t("invoicing.title")}</Chip>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
              {t("invoicing.tagline")}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t("invoicing.description")}
            </p>
            <div className="mt-8 max-h-56 overflow-hidden">
              <Image
                src={invoiceShot}
                alt={t("invoicing.tagline")}
                className="w-full rounded-xl"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
