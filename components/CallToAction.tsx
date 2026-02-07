"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const t = useTranslations("callToAction");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Blurred background image effect */}
      <div className="absolute inset-0 bg-gray-50" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(circle, #4B87CF 0%, #93B8E8 40%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, #6BA3D6 0%, transparent 70%)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight mb-6 whitespace-pre-line">
            {t("heading")}
          </h2>
          <p className="text-lg text-black/50 mb-10 max-w-xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>

          {/* Email signup form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder={t("emailPlaceholder")}
              required
              disabled={status === "loading"}
              className="flex-1 px-4 py-3.5 bg-white/80 border border-black/10 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:bg-white transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white font-medium text-sm hover:bg-primary-light transition-colors disabled:opacity-60"
            >
              {status === "loading" && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              {status === "success" && <Check className="w-4 h-4" />}
              {status === "success" ? t("subscribed") : t("stayUpdated")}
            </button>
          </form>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-sm text-black/60 mb-8">
              {t("thankYou")}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 mb-8">{errorMessage}</p>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto mb-6">
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-xs text-black/40 uppercase tracking-wider">
              {t("or")}
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          {/* Book a demo */}
          <a
            href="https://calendly.com/simon-lvdmconsultancy/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-black/20 bg-white/60 text-black font-medium text-sm hover:bg-white/80 transition-colors"
          >
            {t("bookDemo")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
