"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plug, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Reveal from "./Reveal";
import stegocareLogo from "@/public/logos/careville-logo-temp.png";
import vestaLogo from "@/public/logos/vlaamse_overheid.jpg";
import liantisLogo from "@/public/logos/liantis.webp";
import ehealthLogo from "@/public/logos/ehealth.png";
import yukiLogo from "@/public/logos/yuki.svg";
import belraiLogo from "@/public/logos/belrai.png";
import awsLogo from "@/public/logos/aws.svg";
import type { StaticImageData } from "next/image";

interface IntegrationPartner {
  name: string;
  logo: StaticImageData;
  angle: number;
}

const STEP = 360 / 7;

const partners: IntegrationPartner[] = [
  { name: "Vesta", logo: vestaLogo, angle: 0 },
  { name: "Liantis", logo: liantisLogo, angle: STEP },
  { name: "eHealth", logo: ehealthLogo, angle: STEP * 2 },
  { name: "Yuki", logo: yukiLogo, angle: STEP * 3 },
  { name: "BelRAI", logo: belraiLogo, angle: STEP * 4 },
  { name: "AWS", logo: awsLogo, angle: STEP * 5 },
];

const PLUS_ANGLE = STEP * 6;
const RADIUS = 150;
const SIZE = RADIUS * 2 + 110;
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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 pt-10">
        {label}
      </div>
    </motion.div>
  );
}

/** Small dot that travels along a spoke line. */
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

function PartnerCircle({ partner }: { partner: IntegrationPartner }) {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 shadow-sm ring-1 ring-ink/10 transition-all group-hover:shadow-md group-hover:ring-ink/20">
      <Image
        src={partner.logo}
        alt={`${partner.name} logo`}
        className="h-full w-full object-contain opacity-60 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
        sizes="40px"
      />
    </div>
  );
}

export default function Integrations() {
  const t = useTranslations("integrations");

  const allAngles = [...partners.map((p) => p.angle), PLUS_ANGLE];

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <Reveal className="max-w-2xl">
            <p className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-sm font-medium text-brand-deep">
              <Plug className="h-4 w-4" />
              {t("title")}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("heading")}
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              {t("description")}
            </p>
          </Reveal>

          {/* Hub and spoke — desktop */}
          <div className="hidden justify-center md:flex">
            <div className="relative" style={{ width: SIZE, height: SIZE }}>
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
                      stroke="#c6d2dd"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                  );
                })}

                {partners.map((partner) => {
                  const pos = getXY(partner.angle);
                  return (
                    <g key={`dots-${partner.angle}`}>
                      <FlowDot
                        cx1={pos.x}
                        cy1={pos.y}
                        cx2={CENTER}
                        cy2={CENTER}
                        dur={2.8}
                        delay={partner.angle * 0.01}
                        color="#3274b4"
                      />
                      <FlowDot
                        cx1={CENTER}
                        cy1={CENTER}
                        cx2={pos.x}
                        cy2={pos.y}
                        dur={3.2}
                        delay={partner.angle * 0.01 + 1.4}
                        color="#8db8dd"
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
                  <span className="whitespace-nowrap text-xs font-semibold text-ink">
                    Stegocare
                  </span>
                }
              >
                <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white shadow-md ring-1 ring-ink/10">
                  <Image
                    src={stegocareLogo}
                    alt="Stegocare"
                    className="h-10 w-10 rounded"
                    sizes="40px"
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
                      <span className="whitespace-nowrap text-xs font-medium text-ink-soft transition-colors group-hover:text-ink">
                        {partner.name}
                      </span>
                    }
                  >
                    <PartnerCircle partner={partner} />
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
                    delay={0.7}
                    label={
                      <span className="whitespace-nowrap text-xs font-medium text-ink-soft/70">
                        {t("addMore")}
                      </span>
                    }
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-ink/15">
                      <Plus className="h-4 w-4 text-ink-soft/60" />
                    </div>
                  </Node>
                );
              })()}
            </div>
          </div>

          {/* Mobile — simple logo grid */}
          <Reveal delay={0.1} className="md:hidden">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="group flex flex-col items-center gap-2"
                >
                  <PartnerCircle partner={partner} />
                  <span className="text-xs font-medium text-ink-soft">
                    {partner.name}
                  </span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-ink/15">
                  <Plus className="h-4 w-4 text-ink-soft/60" />
                </div>
                <span className="text-xs font-medium text-ink-soft/70">
                  {t("addMore")}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
