import { ArrowUpRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { DEMO_PATH } from "./links";

export default function ClosingCta() {
  const t = useTranslations("closingCta");
  const locale = useLocale();

  return (
    <section id="contact" className="scroll-mt-20 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink-soft sm:text-lg">
          {t("description")}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`/${locale}${DEMO_PATH}`}
            className="group flex items-center gap-1.5"
          >
            <span className="inline-flex items-center rounded-full bg-neutral-900 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-black/25 transition-all group-hover:scale-[1.02] group-hover:bg-neutral-700">
              {t("ctaPrimary")}
            </span>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg shadow-black/25 transition-all group-hover:scale-[1.02] group-hover:bg-neutral-700">
              <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
          <a
            href={`/${locale}/contact`}
            className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-ink shadow-sm ring-1 ring-ink/10 transition-colors hover:bg-neutral-50"
          >
            {t("ctaSecondary")}
          </a>
        </div>
      </div>
    </section>
  );
}
