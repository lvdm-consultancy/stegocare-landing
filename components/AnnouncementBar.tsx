"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#002A4F] text-white text-center py-2.5 px-10 text-sm">
      <p className="font-medium">
        First version launches in August
        <a
          href="#contact"
          className="inline-flex items-center gap-1 ml-2 underline underline-offset-2 decoration-white/40 hover:decoration-white transition-colors"
        >
          Get early access
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
