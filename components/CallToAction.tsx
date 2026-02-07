"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Blurred background image effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Stop patching systems.
            <br />
            Start delivering care.
          </h2>
          <p className="text-lg text-black/50 mb-10 max-w-xl mx-auto leading-relaxed">
            You can&apos;t build tomorrow&apos;s care organization with yesterday&apos;s tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@stegocare.be"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-black text-white font-medium text-sm hover:bg-primary-light transition-colors"
            >
              Book a demo
            </a>
            <a
              href="mailto:sales@stegocare.be"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-black/20 bg-white/60 text-black font-medium text-sm hover:bg-white/80 transition-colors"
            >
              Talk to sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
