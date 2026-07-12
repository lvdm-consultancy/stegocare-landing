"use client";

import { useRef, useState } from "react";
import Script from "next/script";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

// Cloudflare's public always-pass test site key; used when no real key is set (dev).
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA";

const EMPLOYEE_RANGES = ["1-20", "21-50", "51-100", "100+"];

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-xl border-0 bg-white px-4 py-3 text-[15px] text-ink shadow-sm ring-1 ring-ink/10 placeholder:text-ink-soft/60 focus:outline-none focus:ring-2 focus:ring-brand";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function DemoForm() {
  const t = useTranslations("demoPage.form");
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          organisation: data.get("organisation"),
          employees: data.get("employees"),
          message: data.get("message"),
          website: data.get("website"),
          turnstileToken: data.get("cf-turnstile-response"),
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-mist p-10 text-center ring-1 ring-ink/5">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint">
          <CheckCircle2 className="h-6 w-6 text-brand" />
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          {t("successTitle")}
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative rounded-3xl bg-mist p-6 ring-1 ring-ink/5 sm:p-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t("firstName")} htmlFor="firstName">
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className={inputClass}
            />
          </Field>
          <Field label={t("lastName")} htmlFor="lastName">
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className={inputClass}
            />
          </Field>
          <Field label={t("email")} htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
          </Field>
          <Field label={t("organisation")} htmlFor="organisation">
            <input
              id="organisation"
              name="organisation"
              type="text"
              required
              autoComplete="organization"
              className={inputClass}
            />
          </Field>
        </div>

        <div className="mt-5">
          <Field label={t("employees")} htmlFor="employees">
            <select id="employees" name="employees" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                {t("employeesPlaceholder")}
              </option>
              {EMPLOYEE_RANGES.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-5">
          <Field label={t("message")} htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("messagePlaceholder")}
              className={inputClass}
            />
          </Field>
        </div>

        {/* Honeypot — invisible to humans, tempting for bots */}
        <div className="absolute left-[-9999px] top-auto" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="mt-6">
          <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} />
        </div>

        {status === "error" && (
          <p className="mt-4 text-sm font-medium text-red-600">{t("error")}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="group mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-neutral-700 disabled:opacity-60"
        >
          {status === "sending" ? t("sending") : t("submit")}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>

        <p className="mt-4 text-xs leading-relaxed text-ink-soft">{t("privacy")}</p>
      </form>
    </>
  );
}
