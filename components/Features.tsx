"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    id: "pickups",
    icon: "📅",
    title: "Scheduled Pickups",
    short: "Pick your days. We handle the rest.",
    detail:
      "Set recurring pickup schedules that fit your life. Modify, pause, or reschedule with a tap. No missed collections.",
    size: "large",
    accent: "#C8F135",
    bg: "from-lime/10 to-transparent",
  },
  {
    id: "payments",
    icon: "💳",
    title: "In-app Payments",
    short: "Card, transfer or wallet. Fast and secure.",
    detail:
      "Pay seamlessly via card, bank transfer, or wallet. Every transaction is encrypted and instant.",
    size: "large",
    accent: "#04CEFF",
    bg: "from-electric/10 to-transparent",
  },
  {
    id: "matching",
    icon: "📍",
    title: "Smart Packer Matching",
    short: "Nearest verified packer auto-assigned in seconds.",
    detail:
      "Our algorithm matches you with the closest available, highest-rated packer automatically.",
    size: "small",
    accent: "#C8F135",
    bg: "from-lime/8 to-transparent",
  },
  {
    id: "marketplace",
    icon: "📦",
    title: "Material Marketplace",
    short: "Companies browse and order sorted recyclables.",
    detail:
      "A live B2B marketplace where manufacturers source sorted, verified recyclables at transparent prices.",
    size: "small",
    accent: "#B66032",
    bg: "from-brown/10 to-transparent",
  },
  {
    id: "earnings",
    icon: "📊",
    title: "Earnings Dashboard",
    short: "Packers track every job and payout in real time.",
    detail:
      "Full earnings history, pending jobs, and lifetime impact — all in one clean dashboard.",
    size: "small",
    accent: "#04CEFF",
    bg: "from-electric/8 to-transparent",
  },
  {
    id: "notifications",
    icon: "🔔",
    title: "Live Notifications",
    short: "Pickup reminders, confirmations and alerts.",
    detail:
      "Never miss a pickup or payment. Push and SMS notifications keep every party in sync.",
    size: "small",
    accent: "#C8F135",
    bg: "from-lime/8 to-transparent",
  },
];

export default function Features() {
  const [hovered, setHovered] = useState<string | null>(null);

  const large = features.filter((f) => f.size === "large");
  const small = features.filter((f) => f.size === "small");

  return (
    <section id="features" className="py-16 sm:py-28 px-4 sm:px-6 bg-dark relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(4,206,255,0.04) 0%, transparent 60%)",
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
            Features
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite">
            Built for every side
            <br />
            <span className="text-offwhite/40">of the equation.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {large.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onHoverStart={() => setHovered(f.id)}
              onHoverEnd={() => setHovered(null)}
              className="lg:col-span-1 relative p-8 rounded-3xl bg-dark-card border border-dark-border overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-1"
              style={{ minHeight: 280 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.bg} opacity-0 transition-opacity duration-400 ${hovered === f.id ? "opacity-100" : ""}`}
              />
              <motion.div
                animate={{ rotate: hovered === f.id ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-5xl mb-6"
              >
                {f.icon}
              </motion.div>
              <h3 className="font-display font-black text-2xl text-offwhite mb-2">{f.title}</h3>
              <p className="font-body text-offwhite/50 text-sm leading-relaxed mb-4">{f.short}</p>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hovered === f.id ? 1 : 0,
                  height: hovered === f.id ? "auto" : 0,
                }}
                className="font-body text-sm text-offwhite/70 leading-relaxed overflow-hidden"
              >
                {f.detail}
              </motion.p>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)`,
                  opacity: hovered === f.id ? 1 : 0,
                }}
              />
            </motion.div>
          ))}

          {small.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              onHoverStart={() => setHovered(f.id)}
              onHoverEnd={() => setHovered(null)}
              className="relative p-6 rounded-3xl bg-dark-card border border-dark-border overflow-hidden cursor-default transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.bg} opacity-0 transition-opacity duration-400 ${hovered === f.id ? "opacity-100" : ""}`}
              />
              <motion.div
                animate={{ rotate: hovered === f.id ? 10 : 0, scale: hovered === f.id ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-3xl mb-4"
              >
                {f.icon}
              </motion.div>
              <h3 className="font-display font-bold text-xl text-offwhite mb-2">{f.title}</h3>
              <p className="font-body text-offwhite/50 text-sm leading-relaxed">{f.short}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${f.accent}, transparent)`,
                  opacity: hovered === f.id ? 1 : 0,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
