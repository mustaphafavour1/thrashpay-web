"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type TabKey = "households" | "packers" | "companies";

const tabs: { key: TabKey; label: string; emoji: string }[] = [
  { key: "households", label: "Households", emoji: "🏘️" },
  { key: "packers", label: "Waste Packers", emoji: "🧑‍🔧" },
  { key: "companies", label: "Companies", emoji: "🏭" },
];

const tabContent: Record<
  TabKey,
  {
    steps: { icon: string; title: string; desc: string }[];
    highlight: { label: string; value: string }[];
    color: string;
  }
> = {
  households: {
    color: "#C8F135",
    steps: [
      { icon: "📋", title: "Subscribe", desc: "Choose a weekly or monthly plan that fits your household needs." },
      { icon: "📅", title: "Schedule", desc: "Pick your preferred pickup days directly in the app." },
      { icon: "🚐", title: "Packer Arrives", desc: "A verified packer is auto-matched and arrives on time." },
      { icon: "✅", title: "Waste Cleared", desc: "Your waste is gone. You get a confirmation and impact report." },
    ],
    highlight: [
      { label: "Avg. pickup time", value: "< 2 hrs" },
      { label: "Customer rating", value: "4.9 ★" },
      { label: "On-time rate", value: "97%" },
    ],
  },
  packers: {
    color: "#04CEFF",
    steps: [
      { icon: "📝", title: "Register", desc: "Sign up, verify your ID, and get onboarded in under 24 hours." },
      { icon: "🔔", title: "Get Job Alerts", desc: "Receive real-time notifications for nearby pickup requests." },
      { icon: "✅", title: "Accept Pickups", desc: "Choose jobs that fit your schedule and location." },
      { icon: "💳", title: "Get Paid", desc: "Earnings hit your wallet instantly after each completed job." },
    ],
    highlight: [
      { label: "Avg. monthly earnings", value: "₦85k" },
      { label: "Jobs per week", value: "12–20" },
      { label: "Payment delay", value: "0 days" },
    ],
  },
  companies: {
    color: "#B66032",
    steps: [
      { icon: "🔍", title: "Browse Materials", desc: "Search our marketplace for sorted, quality-verified recyclables." },
      { icon: "📦", title: "Request Bulk", desc: "Place bulk orders with delivery specs and timeline." },
      { icon: "🚛", title: "Receive Delivery", desc: "Materials are delivered sorted, weighed, and documented." },
      { icon: "🔄", title: "Reorder", desc: "Set up recurring orders and automate your supply chain." },
    ],
    highlight: [
      { label: "Material categories", value: "4+" },
      { label: "Lead time", value: "48–72 hrs" },
      { label: "Quality check", value: "100%" },
    ],
  },
};

export default function HowItWorks() {
  const [active, setActive] = useState<TabKey>("households");
  const content = tabContent[active];

  return (
    <section id="how-it-works" className="py-16 sm:py-28 px-4 sm:px-6 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% -10%, rgba(200,241,53,0.05) 0%, transparent 60%)",
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
          <span className="inline-block font-body text-xs sm:text-sm text-lime font-medium tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite">
            One platform.
            <br />
            <span className="text-offwhite/40">Three sides. Zero waste.</span>
          </h2>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1.5 rounded-2xl bg-dark border border-dark-border">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`relative px-6 py-3 rounded-xl font-body font-medium text-sm transition-all duration-200 ${
                  active === tab.key
                    ? "text-dark"
                    : "text-offwhite/50 hover:text-offwhite"
                }`}
              >
                {active === tab.key && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: content.color }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {content.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative p-6 rounded-2xl bg-dark border border-dark-border group hover:border-opacity-60 transition-all"
                >
                  {i < content.steps.length - 1 && (
                    <div
                      className="hidden md:block absolute top-1/2 -right-2 w-4 h-px"
                      style={{ background: content.color, opacity: 0.3 }}
                    />
                  )}
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <div
                    className="font-display font-black text-4xl mb-2"
                    style={{ color: content.color, opacity: 0.3 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display font-bold text-lg text-offwhite mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-offwhite/50 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {content.highlight.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-dark-border bg-dark"
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: content.color }}
                  />
                  <div>
                    <div className="font-display font-black text-2xl" style={{ color: content.color }}>
                      {h.value}
                    </div>
                    <div className="font-body text-xs text-offwhite/40">{h.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
