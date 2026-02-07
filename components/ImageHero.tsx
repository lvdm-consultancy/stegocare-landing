"use client";

import { motion } from "framer-motion";

export default function ImageHero() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Built for the realities of care work
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            From the back office to the patient&apos;s home, Stegocare works
            wherever your team does.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Large image placeholder representing caregivers at work */}
          <div className="relative aspect-[16/7] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
            {/* Abstract representation of care work */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 p-12 w-full max-w-4xl">
                {/* Office card */}
                <div className="bg-white p-6 shadow-lg">
                  <div className="w-10 h-10 bg-black/5 mb-4 flex items-center justify-center">
                    <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-black mb-1">Back Office</div>
                  <div className="text-xs text-gray-400">Planning & coordination</div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-gray-100 w-full" />
                    <div className="h-2 bg-gray-100 w-3/4" />
                    <div className="h-2 bg-gray-100 w-5/6" />
                  </div>
                </div>

                {/* Field card */}
                <div className="bg-white p-6 shadow-lg translate-y-4">
                  <div className="w-10 h-10 bg-accent/10 mb-4 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-black mb-1">In the Field</div>
                  <div className="text-xs text-gray-400">Mobile care delivery</div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-accent/20 w-full" />
                    <div className="h-2 bg-accent/15 w-4/5" />
                    <div className="h-2 bg-accent/10 w-2/3" />
                  </div>
                </div>

                {/* Compliance card */}
                <div className="bg-white p-6 shadow-lg">
                  <div className="w-10 h-10 bg-black/5 mb-4 flex items-center justify-center">
                    <svg className="w-5 h-5 text-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-black mb-1">Compliance</div>
                  <div className="text-xs text-gray-400">Automated & auditable</div>
                  <div className="mt-4 space-y-2">
                    <div className="h-2 bg-gray-100 w-full" />
                    <div className="h-2 bg-gray-100 w-full" />
                    <div className="h-2 bg-green-100 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-6 left-6 bg-white shadow-xl border border-gray-100 px-5 py-4 hidden lg:block"
          >
            <div className="text-2xl font-bold text-black">-60%</div>
            <div className="text-xs text-gray-400">Admin time saved</div>
          </motion.div>

          {/* Floating stat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute top-6 right-6 bg-white shadow-xl border border-gray-100 px-5 py-4 hidden lg:block"
          >
            <div className="text-2xl font-bold text-accent">100%</div>
            <div className="text-xs text-gray-400">Compliance rate</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
