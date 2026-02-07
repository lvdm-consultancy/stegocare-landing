"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

interface IntegrationPartner {
  name: string;
  logo: string;
  angle: number;
}

const partners: IntegrationPartner[] = [
  { name: "VESTA", logo: "/logos/vlaamse_overheid.jpg", angle: 0 },
  { name: "Liantis", logo: "/logos/liantis.webp", angle: 60 },
  { name: "eHealth", logo: "/logos/ehealth.png", angle: 120 },
  { name: "BelRAI", logo: "/logos/belrai.png", angle: 180 },
  { name: "itsme", logo: "/logos/itsme.webp", angle: 240 },
];

const PLUS_ANGLE = 300;
const RADIUS = 140;
const SIZE = RADIUS * 2 + 100;
const CENTER = SIZE / 2;

function getXY(angle: number) {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  };
}

function Node({
  x,
  y,
  delay,
  children,
  label,
  className = "",
}: {
  x: number;
  y: number;
  delay: number;
  children: React.ReactNode;
  label: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`absolute z-10 ${className}`}
      style={{ left: x, top: y }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 pt-[34px]">
        {label}
      </div>
    </motion.div>
  );
}

/** Small dot that travels along a spoke line and back. */
function FlowDot({
  cx1,
  cy1,
  cx2,
  cy2,
  dur,
  delay,
  color,
}: {
  cx1: number;
  cy1: number;
  cx2: number;
  cy2: number;
  dur: number;
  delay: number;
  color: string;
}) {
  const pathD = `M${cx1},${cy1} L${cx2},${cy2}`;

  return (
    <circle r="2.5" fill={color} opacity="0">
      <animateMotion
        path={pathD}
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.4 0 0.2 1"
        keyTimes="0;1"
      />
      <animate
        attributeName="opacity"
        values="0;0.8;0.8;0"
        keyTimes="0;0.1;0.85;1"
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
}

export default function IntegrationLogos() {
  const t = useTranslations("integrationLogos");

  const allAngles = [...partners.map((p) => p.angle), PLUS_ANGLE];

  return (
    <section id="integrations" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: side by side */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              {t("sectionLabel")}
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight">
              {t("heading")}
            </h2>
          </motion.div>

          {/* Right — hub and spoke */}
          <div className="flex justify-center">
            <div className="relative" style={{ width: SIZE, height: SIZE }}>
              {/* Lines + animated dots */}
              <svg
                className="absolute inset-0"
                width={SIZE}
                height={SIZE}
                viewBox={`0 0 ${SIZE} ${SIZE}`}
              >
                {allAngles.map((angle) => {
                  const pos = getXY(angle);
                  return (
                    <line
                      key={angle}
                      x1={CENTER}
                      y1={CENTER}
                      x2={pos.x}
                      y2={pos.y}
                      stroke="#d1d5db"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  );
                })}

                {/* Data flow dots — only on partner spokes */}
                {partners.map((partner) => {
                  const pos = getXY(partner.angle);
                  return (
                    <g key={`dots-${partner.angle}`}>
                      {/* Inward dot */}
                      <FlowDot
                        cx1={pos.x}
                        cy1={pos.y}
                        cx2={CENTER}
                        cy2={CENTER}
                        dur={2.8}
                        delay={partner.angle * 0.01}
                        color="#38bdf8"
                      />
                      {/* Outward dot */}
                      <FlowDot
                        cx1={CENTER}
                        cy1={CENTER}
                        cx2={pos.x}
                        cy2={pos.y}
                        dur={3.2}
                        delay={partner.angle * 0.01 + 1.4}
                        color="#34d399"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Center hub */}
              <Node
                x={CENTER}
                y={CENTER}
                delay={0.1}
                label={
                  <span className="text-[11px] font-semibold text-black whitespace-nowrap">
                    Stegocare
                  </span>
                }
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logos/careville-logo-temp.png"
                    alt="Stegocare"
                    className="w-9 h-9 rounded"
                  />
                </div>
              </Node>

              {/* Partner nodes */}
              {partners.map((partner, index) => {
                const pos = getXY(partner.angle);
                return (
                  <Node
                    key={partner.name}
                    x={pos.x}
                    y={pos.y}
                    delay={0.2 + index * 0.08}
                    className="group"
                    label={
                      <span className="text-[11px] font-medium text-gray-500 group-hover:text-black transition-colors whitespace-nowrap">
                        {partner.name}
                      </span>
                    }
                  >
                    <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center p-2.5 group-hover:border-gray-400 group-hover:shadow-md transition-all">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all"
                      />
                    </div>
                  </Node>
                );
              })}

              {/* Plus node */}
              {(() => {
                const pos = getXY(PLUS_ANGLE);
                return (
                  <Node
                    x={pos.x}
                    y={pos.y}
                    delay={0.65}
                    label={
                      <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">
                        {t("addMore")}
                      </span>
                    }
                  >
                    <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                  </Node>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
              {t("sectionLabel")}
            </p>
            <h2 className="font-serif text-3xl font-bold text-black leading-tight">
              {t("heading")}
            </h2>
          </motion.div>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/careville-logo-temp.png"
                alt="Stegocare"
                className="w-8 h-8 rounded"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center p-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {partner.name}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <Plus className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-xs font-medium text-gray-400">
                {t("addMore")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
