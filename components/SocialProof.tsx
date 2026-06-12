"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Before TrashPay, we had to beg different collectors to come. Now I schedule a pickup in 30 seconds and they're here. My compound is always clean.",
    name: "Adaeze O.",
    role: "Household subscriber, Lagos",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    quote:
      "I used to depend on random jobs at the dumpsite. Now I get consistent work, I know exactly what I'll earn, and payments land immediately. This changed my life.",
    name: "Emeka T.",
    role: "Waste Packer, Abuja",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    quote:
      "We reduced our raw material procurement costs by 30% within two months. The quality is consistent and delivery is reliable. TrashPay is a serious B2B play.",
    name: "Toyin A.",
    role: "Operations Lead, Zenith Plastics",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
  {
    quote:
      "My children get to see that their waste has value. The impact report showing how much we recycled each month is something we actually look forward to.",
    name: "Bola M.",
    role: "Household subscriber, Port Harcourt",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    stars: 5,
  },
];

const photos = [
  "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1542601906897-b4e6379c4b54?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop",
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
    <section className="py-28 px-6 bg-dark relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <span className="inline-block font-body text-sm text-electric font-medium tracking-widest uppercase mb-4">
            Social Proof
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-offwhite">
            Real people.{" "}
            <span className="text-offwhite/40">Real pickups.</span>
            <br />
            Real impact.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 max-w-3xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-dark-card border border-dark-border overflow-hidden min-h-[220px] flex flex-col justify-between">
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className="text-3xl text-electric/30 font-display font-black mb-4">&ldquo;</div>
                <p className="font-body text-lg text-offwhite/80 leading-relaxed mb-6">
                  {testimonials[current].quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-dark-border flex-shrink-0">
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-display font-bold text-offwhite">{testimonials[current].name}</p>
                    <p className="font-body text-sm text-offwhite/40">{testimonials[current].role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                      <span key={i} className="text-lime text-sm">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-electric" : "w-1.5 bg-dark-border"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <div className="relative overflow-hidden mb-16">
          <div className="flex gap-4 animate-marquee-pause">
            {[...photos, ...photos].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-64 h-44 rounded-2xl overflow-hidden bg-dark-card border border-dark-border"
              >
                <Image
                  src={src}
                  alt="Community photo"
                  width={256}
                  height={176}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {trustBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-dark-border bg-dark-card"
            >
              <span className="text-xl">{b.icon}</span>
              <span className="font-body text-sm font-medium text-offwhite/70">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
