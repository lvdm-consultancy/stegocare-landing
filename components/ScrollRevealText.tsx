"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const blockKeys = ["block1", "block2", "block3"] as const;

function RevealBlock({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#d1d5db", "#000000"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ color }}
      className={`${index === 0 ? "font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight" : "text-xl sm:text-2xl lg:text-3xl leading-relaxed"}`}
    >
      {text}
    </motion.div>
  );
}

export default function ScrollRevealText() {
  const t = useTranslations("scrollRevealText");

  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {blockKeys.map((key, index) => (
            <RevealBlock key={key} text={t(key)} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
