"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Before TrashPay, we had to beg different collectors to come. Now I schedule a pickup in 30 seconds and they're here. My compound is always clean.",
    name: "Adaeze O.",
    role: "Household subscriber, Lagos",
    initials: "AO",
    color: "#04CEFF",
    stars: 5,
  },
  {
    quote:
      "I used to depend on random jobs at the dumpsite. Now I get consistent work, I know exactly what I'll earn, and payments land immediately. This changed my life.",
    name: "Emeka T.",
    role: "Waste Packer, Abuja",
    initials: "ET",
    color: "#C8F135",
    stars: 5,
  },
  {
    quote:
      "We reduced our raw material procurement costs by 30% within two months. The quality is consistent and delivery is reliable. TrashPay is a serious B2B play.",
    name: "Toyin A.",
    role: "Operations Lead, Zenith Plastics",
    initials: "TA",
    color: "#B66032",
    stars: 5,
  },
  {
    quote:
      "My children get to see that their waste has value. The impact report showing how much we recycled each month is something we actually look forward to.",
    name: "Bola M.",
    role: "Household subscriber, Port Harcourt",
    initials: "BM",
    color: "#04CEFF",
    stars: 5,
  },
];

// CSS-only placeholder cards — zero network requests
const photoSlots = [
  { bg: "from-lime/10 to-dark-card",    label: "Household",     accent: "#C8F135" },
  { bg: "from-brown/15 to-dark-card",   label: "Waste Packer",  accent: "#B66032" },
  { bg: "from-electric/10 to-dark-card",label: "Community",     accent: "#04CEFF" },
  { bg: "from-lime/8 to-dark-card",     label: "Recycling",     accent: "#C8F135" },
  { bg: "from-brown/10 to-dark-card",   label: "Collection",    accent: "#B66032" },
  { bg: "from-electric/8 to-dark-card", label: "Impact",        accent: "#04CEFF" },
];

const trustBadges = [
  { icon: "🔒", label: "Secure Payments" },
  { icon: "✅", label: "Verified Packers" },
  { icon: "📍", label: "Real-time Tracking" },
  { icon: "🛡️", label: "Data Protected" },
];

export default function SocialProof() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-28 px-4 sm:px-6 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgba(4,206,255,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block font-body text-xs sm:text-sm text-electric font-medium tracking-widest uppercase mb-4">
            Social Proof
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-offwhite">
            Real people.{" "}
            <span className="text-offwhite/40">Real pickups.</span>
            <br />
            Real impact.
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="relative p-7 sm:p-10 md:p-12 rounded-3xl bg-dark-card border border-dark-border overflow-hidden min-h-[200px] flex flex-col justify-between">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(4,206,255,0.05) 0%, transparent 60%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                <div className="text-2xl text-electric/25 font-display font-black mb-4">&ldquo;</div>
                <p className="font-body text-base sm:text-lg text-offwhite/80 leading-relaxed mb-6">
                  {testimonials[current].quote}
                </p>
                <div className="flex items-center gap-4">
                  {/* CSS initials avatar — no image requests */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-display font-black text-sm"
                    style={{
                      background: testimonials[current].color + "20",
                      color: testimonials[current].color,
                      border: `1px solid ${testimonials[current].color}30`,
                    }}
                  >
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm sm:text-base text-offwhite">
                      {testimonials[current].name}
                    </p>
                    <p className="font-body text-xs text-offwhite/40">{testimonials[current].role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                      <span key={i} className="text-lime text-xs">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-7 bg-electric" : "w-1.5 bg-dark-border"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CSS photo strip — no external image requests */}
        <div className="relative overflow-hidden mb-14 sm:mb-16">
          <div className="flex gap-3 animate-marquee-pause">
            {[...photoSlots, ...photoSlots].map((slot, i) => (
              <div
                key={i}
                className={`flex-shrink-0 w-52 sm:w-64 h-36 sm:h-44 rounded-2xl overflow-hidden bg-gradient-to-br ${slot.bg} border border-dark-border flex flex-col items-center justify-center gap-2`}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: slot.accent + "20" }}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: slot.accent + "60" }}
                  />
                </div>
                <span className="font-body text-xs text-offwhite/30 tracking-wide">{slot.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl border border-dark-border bg-dark-card"
            >
              <span className="text-lg">{b.icon}</span>
              <span className="font-body text-xs sm:text-sm font-medium text-offwhite/70">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
