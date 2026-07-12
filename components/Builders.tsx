"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import teamShot from "@/public/lvdm-collegues-pictures/siemen-and-simon.jpg";
import workingShot from "@/public/lvdm-collegues-pictures/working.jpg";

export default function Builders() {
  const t = useTranslations("builders");

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://lvdmconsultancy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-deep transition hover:bg-brand hover:text-white"
            >
              LVDM Consultancy
            </a>
            <span className="font-serif text-lg italic text-ink-soft">&times;</span>
            <a
              href="https://www.gezinszorgvillers.be/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-tint px-4 py-2 text-sm font-semibold text-brand-deep transition hover:bg-brand hover:text-white"
            >
              Gezinszorg Villers
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative pb-12 pl-10">
          <Image
            src={teamShot}
            alt={t("imageAlt")}
            className="w-full rounded-3xl object-cover shadow-xl ring-1 ring-ink/10"
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
          />
          <div className="absolute -bottom-0 left-0 w-2/5 rotate-[-3deg]">
            <Image
              src={workingShot}
              alt=""
              className="w-full rounded-2xl object-cover shadow-2xl ring-4 ring-white"
              sizes="20vw"
              placeholder="blur"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
