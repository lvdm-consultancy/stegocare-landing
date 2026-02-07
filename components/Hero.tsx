"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

const rotatingWordKeys = ["simplified", "unified", "digitized"] as const;


export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const t = useTranslations("hero");

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWordKeys.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentWordKey = rotatingWordKeys[wordIndex];

  return (
    <section className="relative pt-40 pb-16 lg:pt-48 lg:pb-20 bg-gradient-to-b from-white via-white to-gray-100 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-600 tracking-wide uppercase mb-8"
        >
          {t("badge")}
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-[1.05] tracking-tight"
        >
          {t("headlineStart")}
          <br />
          <span className="inline-block relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block"
              >
                {t(`rotatingWords.${currentWordKey}`)}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* Decorative line under headline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 mx-auto w-16 h-[2px] bg-black/15"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg lg:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/simon-lvdmconsultancy/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-black text-white font-medium text-sm hover:bg-primary-light transition-colors"
          >
            {t("bookDemo")}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-700 font-medium text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {t("howItWorks")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Device Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-24 relative"
        >
          <div className="relative">
            {/* Desktop Screenshot */}
            <div className="relative z-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/planning.png"
                alt="Stegocare planning view — weekly schedule for care workers with appointments, availability, and real-time status"
                className="w-full h-auto block drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
                loading="eager"
              />
            </div>

            {/* Mobile Phone Mockup — stays in Dutch (design element) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute -right-4 sm:right-2 lg:right-8 -bottom-8 lg:-bottom-12 z-20 w-[140px] sm:w-[155px] lg:w-[195px]"
            >
              {/* Phone outer frame */}
              <div className="bg-[#1a1a1a] rounded-[2.2rem] lg:rounded-[2.8rem] p-[5px] lg:p-[7px] shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)]">
                {/* Phone inner screen */}
                <div className="bg-[#f6f6f8] rounded-[1.9rem] lg:rounded-[2.4rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-3 lg:px-4 pt-1.5 lg:pt-2 pb-0">
                    <span className="text-[5px] lg:text-[7px] font-semibold text-black">9:41</span>
                    <div className="flex items-center gap-0.5">
                      <div className="flex gap-px items-end">
                        <div className="w-[1px] h-[3px] lg:w-[2px] lg:h-[4px] bg-black rounded-[0.5px]" />
                        <div className="w-[1px] h-[4px] lg:w-[2px] lg:h-[5px] bg-black rounded-[0.5px]" />
                        <div className="w-[1px] h-[5px] lg:w-[2px] lg:h-[6px] bg-black rounded-[0.5px]" />
                        <div className="w-[1px] h-[6px] lg:w-[2px] lg:h-[7px] bg-black rounded-[0.5px]" />
                      </div>
                      <svg className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                      </svg>
                      <div className="w-3 h-[5px] lg:w-3.5 lg:h-[6px] border border-black rounded-[1.5px] relative">
                        <div className="absolute inset-[0.5px] right-[1px] bg-black rounded-[0.5px]" />
                        <div className="absolute -right-[1.5px] top-[1px] w-[1px] h-[2px] lg:h-[3px] bg-black rounded-r-full" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic island */}
                  <div className="flex justify-center pt-0.5 pb-0.5">
                    <div className="w-10 lg:w-14 h-[10px] lg:h-[13px] bg-black rounded-full" />
                  </div>

                  {/* App Content */}
                  <div className="px-2.5 lg:px-3 pb-1 lg:pb-1.5">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-1.5 lg:mb-2">
                      <div className="flex items-center gap-1 lg:gap-1.5">
                        <div className="relative">
                          <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-teal-200 flex items-center justify-center text-[4px] lg:text-[6px] font-bold text-teal-700">S</div>
                          <div className="absolute bottom-0 right-0 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-green-500 rounded-full border border-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-[4px] lg:text-[6px] font-medium text-gray-400 uppercase tracking-wider">Maandag, 12 Juni</div>
                          <div className="text-[7px] lg:text-[9px] font-bold text-gray-900 leading-none">Dag Sarah,</div>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-red-500 rounded-full" />
                      </div>
                    </div>

                    {/* Volgende Afspraak */}
                    <div className="flex items-center justify-between mb-1 lg:mb-1.5">
                      <div className="text-[6px] lg:text-[8px] font-bold text-gray-800 text-left">Volgende Afspraak</div>
                      <span className="text-[4px] lg:text-[6px] font-medium text-[#1754cf] bg-[#1754cf]/10 px-1 py-0.5 rounded">Nu Bezig</span>
                    </div>

                    {/* Appointment Card */}
                    <div className="bg-white rounded-lg lg:rounded-xl p-1.5 lg:p-2 shadow-sm border border-gray-100 mb-1.5 lg:mb-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-6 h-6 lg:w-8 lg:h-8 bg-blue-50 rounded-bl-full -mr-1 -mt-1" />
                      <div className="relative">
                        <div className="flex gap-1 lg:gap-1.5 items-center mb-1 lg:mb-1.5">
                          <div className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-gray-200 flex-shrink-0 flex items-center justify-center text-[4px] lg:text-[6px] font-bold text-gray-500">MJ</div>
                          <div className="text-left">
                            <div className="text-[6px] lg:text-[8px] font-bold text-gray-900 leading-tight">Mvr. Jansen</div>
                            <div className="flex items-center gap-0.5 text-[5px] lg:text-[7px] text-gray-400">
                              <svg className="w-1.5 h-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                              </svg>
                              09:00 - 10:30
                            </div>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-0.5 bg-gray-50 p-1 lg:p-1.5 rounded border border-gray-100 mb-1 lg:mb-1.5">
                          <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <div className="text-left">
                            <div className="text-[5px] lg:text-[7px] font-semibold text-gray-800">Kerkstraat 12</div>
                            <div className="text-[4px] lg:text-[6px] text-gray-400">3000 Leuven &bull; 2.4 km</div>
                          </div>
                        </div>

                        {/* Start button */}
                        <div className="bg-[#1754cf] text-white text-[5px] lg:text-[7px] font-bold py-1 lg:py-1.5 rounded-md text-center flex items-center justify-center gap-0.5">
                          <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                          Start Interventie
                        </div>
                      </div>
                    </div>

                    {/* Snelmenu */}
                    <div className="text-[6px] lg:text-[8px] font-bold text-gray-800 mb-1 lg:mb-1.5 text-left">Snelmenu</div>
                    <div className="grid grid-cols-2 gap-1 lg:gap-1.5">
                      <div className="flex flex-col items-center gap-0.5 lg:gap-1 py-1.5 lg:py-2 bg-white rounded-lg border border-gray-200 relative">
                        <div className="absolute top-0.5 right-0.5 lg:top-1 lg:right-1 w-1 h-1 lg:w-1.5 lg:h-1.5 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-blue-50 text-[#1754cf] flex items-center justify-center">
                          <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                        </div>
                        <span className="text-[5px] lg:text-[7px] font-bold text-gray-700">Planning</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 lg:gap-1 py-1.5 lg:py-2 bg-white rounded-lg border border-gray-200">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                          <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L17.657 17.657M6.343 17.657l-.707.707M18.364 6.343l.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </div>
                        <span className="text-[5px] lg:text-[7px] font-bold text-gray-700">Verlof</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 lg:gap-1 py-1.5 lg:py-2 bg-white rounded-lg border border-gray-200">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                          <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <span className="text-[5px] lg:text-[7px] font-bold text-gray-700">Ziekte</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5 lg:gap-1 py-1.5 lg:py-2 bg-white rounded-lg border border-gray-200">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                          <svg className="w-1.5 h-1.5 lg:w-2 lg:h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                          </svg>
                        </div>
                        <span className="text-[5px] lg:text-[7px] font-bold text-gray-700">Incidenten</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="flex justify-around px-2.5 lg:px-3 pt-1 lg:pt-1.5 pb-0.5 border-t border-gray-200">
                    <div className="flex flex-col items-center gap-0.5">
                      <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-[#1754cf]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                      </svg>
                      <span className="text-[4px] lg:text-[6px] text-[#1754cf] font-bold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 relative">
                      <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <div className="absolute top-0 right-0 w-1 h-1 bg-[#1754cf] rounded-full border border-[#f6f6f8]" />
                      <span className="text-[4px] lg:text-[6px] text-gray-400 font-medium">Berichten</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-[4px] lg:text-[6px] text-gray-400 font-medium">Profiel</span>
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center pb-2 lg:pb-2.5">
                    <div className="w-20 lg:w-28 h-1 bg-black rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Labels */}
          <div className="flex justify-center gap-8 mt-8 lg:mt-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B2B4B]" />
              <span className="text-xs text-gray-500">{t("backOffice")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              <span className="text-xs text-gray-500">{t("mobileApp")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
