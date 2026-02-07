"use client";

import { motion } from "framer-motion";

interface Plate {
  d: string;
  color: string;
  delay: number;
}

const plates: Plate[] = [
  { d: "M140 190 L165 130 L195 190 Z", color: "#22C55E", delay: 0.55 },
  { d: "M190 185 L220 95 L255 185 Z", color: "#38BDF8", delay: 0.6 },
  { d: "M250 178 L285 78 L325 178 Z", color: "#F59E0B", delay: 0.65 },
  { d: "M320 170 L355 70 L395 170 Z", color: "#6366F1", delay: 0.7 },
  { d: "M390 175 L420 90 L455 175 Z", color: "#EC4899", delay: 0.75 },
  { d: "M450 185 L475 120 L505 185 Z", color: "#14B8A6", delay: 0.8 },
];

export default function StegoHeroIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto" aria-hidden="true">
      <svg
        viewBox="0 0 640 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="stego-body" x1="120" y1="120" x2="520" y2="260">
            <stop offset="0" stopColor="#0F172A" />
            <stop offset="1" stopColor="#1E293B" />
          </linearGradient>
          <linearGradient id="stego-belly" x1="160" y1="210" x2="520" y2="260">
            <stop offset="0" stopColor="#1F2937" />
            <stop offset="1" stopColor="#111827" />
          </linearGradient>
        </defs>

        {/* Tail with thagomizer */}
        <path
          d="M70 220 C40 215 20 190 35 170 C55 140 90 145 120 165"
          stroke="#0F172A"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 168 L18 145 L30 175 Z"
          fill="#0F172A"
        />
        <path
          d="M52 160 L32 130 L44 165 Z"
          fill="#0F172A"
        />

        {/* Body */}
        <path
          d="M120 170
             C150 120 230 105 310 110
             C360 85 450 90 510 130
             C560 155 585 195 560 222
             C520 266 420 270 320 255
             C230 244 170 250 130 240
             C105 234 95 208 120 170 Z"
          fill="url(#stego-body)"
        />

        {/* Belly shadow */}
        <path
          d="M165 210 C220 230 350 235 480 220 C455 246 370 258 295 252 C230 246 190 238 165 210 Z"
          fill="url(#stego-belly)"
        />

        {/* Legs */}
        <rect x="180" y="215" width="46" height="62" rx="12" fill="#0B1220" />
        <rect x="255" y="220" width="48" height="64" rx="12" fill="#0B1220" />
        <rect x="360" y="218" width="48" height="62" rx="12" fill="#0B1220" />
        <rect x="440" y="212" width="52" height="70" rx="14" fill="#0B1220" />

        {/* Head + neck */}
        <path
          d="M505 130 C545 122 575 132 592 154 C600 166 595 182 580 188 C560 196 530 194 505 184 Z"
          fill="#0F172A"
        />
        <circle cx="565" cy="160" r="4" fill="#F8FAFC" />
        <circle cx="565" cy="160" r="2" fill="#0F172A" />
        <path d="M590 170 L610 172" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" />

        {/* Plates */}
        {plates.map((plate, i) => (
          <motion.path
            key={i}
            d={plate.d}
            fill={plate.color}
            initial={{ scale: 0, opacity: 0, originX: "50%", originY: "100%" }}
            animate={{ scale: 1, opacity: 0.95 }}
            transition={{
              delay: plate.delay,
              duration: 0.45,
              type: "spring" as const,
              stiffness: 200,
              damping: 16,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
