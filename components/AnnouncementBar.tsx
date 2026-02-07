"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations("announcementBar");

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#002A4F] text-white text-center py-2.5 px-10 text-sm">
      <p className="font-medium">
        {t("message")}
        <a
          href="#contact"
          className="inline-flex items-center gap-1 ml-2 underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors"
        >
          {t("cta")}
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors"
        aria-label={t("dismiss")}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
