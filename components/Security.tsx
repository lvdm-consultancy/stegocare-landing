"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SecurityBadge {
  icon: ReactNode;
  label: string;
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
          points={starPolygonPoints(pos.cx, pos.cy, 2.2)}
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

function ISO27001Icon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-black">
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="32"
        y="25"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="currentColor"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        ISO
      </text>
      <text
        x="32"
        y="36"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="currentColor"
        style={{ fontFamily: "system-ui, sans-serif" }}
      >
        27001
      </text>
      <circle cx="32" cy="48" r="5" stroke="currentColor" strokeWidth="1" />
      <ellipse
        cx="32"
        cy="48"
        rx="2.5"
        ry="5"
        stroke="currentColor"
        strokeWidth="0.7"
      />
      <line
        x1="27"
        y1="48"
        x2="37"
        y2="48"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

function EUHostedIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 text-black">
      <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M42 28A14 14 0 0 0 22 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24.5 24L22 28L25.5 29"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 36A14 14 0 0 0 42 36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M39.5 40L42 36L38.5 35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
  { icon: <GDPRIcon />, label: "GDPR Compliant" },
  { icon: <NIS2Icon />, label: "NIS2 Compliant" },
];

export default function Security() {
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
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
            Secure. Proven.
            <br />
            Ready to grow with you.
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
              key={badge.label}
              className="flex flex-col items-center gap-4"
            >
              {badge.icon}
              <span className="text-sm font-medium text-black border border-black/10 bg-white/70 px-4 py-1.5">
                {badge.label}
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
