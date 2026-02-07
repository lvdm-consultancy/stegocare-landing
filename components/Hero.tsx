"use client";

import { motion } from "framer-motion";
import StegoHeroIllustration from "./StegoHeroIllustration";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600 tracking-wide uppercase mb-8"
        >
          Healthcare Management Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[1.05] tracking-tight"
        >
          Reliable care,
          <br />
          simplified.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
        >
          Stegocare takes on the complexity, so your team can focus on what only
          humans can do. Planning done. Billing handled. Compliance covered.
          You get more capacity with the same team.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-black text-white font-medium text-sm hover:bg-primary-light transition-colors"
          >
            Book a demo
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-gray-200 text-gray-700 font-medium text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            How it works
          </a>
        </motion.div>

        {/* Stegosaurus illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 lg:mt-20"
        >
          <StegoHeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
