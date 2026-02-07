"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface SecurityBadge {
  icon: ReactNode;
  labelKey: string;
}

function starPolygonPoints(cx: number, cy: number, outerR: number): string {
  const innerR = outerR * 0.38;
  return Array.from({ length: 10 }, (_, j) => {
    const a = (j * 36 - 90) * (Math.PI / 180);
    const r = j % 2 === 0 ? outerR : innerR;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
}

function GDPRIcon() {
  const starPositions = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    return {
      cx: 32 + 22 * Math.cos(angle),
      cy: 32 + 22 * Math.sin(angle),
    };
  });

  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-black">
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
      {starPositions.map((pos, i) => (
        <polygon
          key={i}
          points={starPolygonPoints(pos.cx, pos.cy, 3.5)}
          fill="currentColor"
        />
      ))}
      <rect x="26" y="33" width="12" height="9" rx="1.5" fill="currentColor" />
      <path
        d="M28.5 33V29.5C28.5 27.6 30.1 26 32 26C33.9 26 35.5 27.6 35.5 29.5V33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function NIS2Icon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-black">
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="32"
        y="30"
        textAnchor="middle"
        fontSize="11"
        fontWeight="800"
        fill="currentColor"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        NIS2
      </text>
      <path
        d="M32 36L38 40V46C38 48.5 35.8 50.5 32 51.5C28.2 50.5 26 48.5 26 46V40L32 36Z"
        fill="currentColor"
      />
      <path
        d="M30 43L31.5 44.5L34 42"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const badges: SecurityBadge[] = [
  { icon: <GDPRIcon />, labelKey: "gdpr" },
  { icon: <NIS2Icon />, labelKey: "nis2" },
];

export default function Security() {
  const t = useTranslations("security");

  return (
    <section id="security" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden py-24 lg:py-36 px-4 sm:px-6 lg:px-8">
          {/* Gradient background matching reference: white to warm peach */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-[#E8A87C]/60" />

          <div className="relative max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight whitespace-pre-line">
            {t("heading")}
          </h2>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-10 lg:gap-16"
        >
          {badges.map((badge) => (
            <div
              key={badge.labelKey}
              className="flex flex-col items-center gap-4"
            >
              {badge.icon}
              <span className="text-sm font-medium text-black border border-black/10 bg-white/70 px-4 py-1.5">
                {t(`badges.${badge.labelKey}`)}
              </span>
            </div>
          ))}
        </motion.div>


          </div>
        </div>
      </div>
    </section>
  );
}
