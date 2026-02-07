"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextBlock {
  text: string;
}

const textBlocks: TextBlock[] = [
  {
    text: "Your care management was built to store data. Not understand it.",
  },
  {
    text: "And every system you add hides one more piece of the picture. Schedules. Billing. Compliance. HR.",
  },
  {
    text: "The context you need to deliver quality care never reaches the people who need it most.",
  },
];

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
  return (
    <section className="py-28 lg:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {textBlocks.map((block, index) => (
            <RevealBlock key={index} text={block.text} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
