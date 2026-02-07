"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function CallToAction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  };

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
            You can&apos;t build tomorrow&apos;s care organization with
            yesterday&apos;s tools.
          </p>

          {/* Email signup form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              placeholder="Enter your email for updates"
              required
              disabled={status === "loading"}
              className="flex-1 px-4 py-3.5 bg-white/80 border border-black/10 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-black/30 focus:bg-white transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-black text-white font-medium text-sm hover:bg-primary-light transition-colors disabled:opacity-60"
            >
              {status === "loading" && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              {status === "success" && <Check className="w-4 h-4" />}
              {status === "success" ? "Subscribed" : "Stay updated"}
            </button>
          </form>

          {/* Status messages */}
          {status === "success" && (
            <p className="text-sm text-black/60 mb-8">
              Thanks! We&apos;ll keep you in the loop.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 mb-8">{errorMessage}</p>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto mb-6">
            <div className="flex-1 h-px bg-black/10" />
            <span className="text-xs text-black/40 uppercase tracking-wider">
              or
            </span>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          {/* Book a demo */}
          <a
            href="https://calendly.com/simon-lvdmconsultancy/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-black/20 bg-white/60 text-black font-medium text-sm hover:bg-white/80 transition-colors"
          >
            Book a demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
