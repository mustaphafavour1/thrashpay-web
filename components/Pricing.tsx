"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Plan = "weekly" | "monthly";

const plans: Record<
  Plan,
  {
    name: string;
    price: string;
    period: string;
    badge?: string;
    description: string;
    features: string[];
    cta: string;
  }
> = {
  weekly: {
    name: "Weekly",
    price: "₦4,500",
    period: "/ week",
    description: "Perfect for busy households that need consistent, frequent pickups.",
    features: [
      "1–2 pickups per week",
      "In-app scheduling",
      "Real-time packer tracking",
      "Push notifications",
      "Basic impact report",
      "Cancel anytime",
    ],
    cta: "Start Weekly Plan",
  },
  monthly: {
    name: "Monthly",
    price: "₦14,000",
    period: "/ month",
    badge: "Most Popular",
    description: "Flexible scheduling across the month with priority matching and full history.",
    features: [
      "Flexible pickup scheduling",
      "Priority packer assignment",
      "In-app scheduling",
      "Real-time packer tracking",
      "Full pickup history",
      "Monthly impact dashboard",
      "Push & SMS notifications",
      "Cancel anytime",
    ],
    cta: "Start Monthly Plan",
  },
};

export default function Pricing() {
  const [active, setActive] = useState<Plan>("monthly");

  return (
    <section id="pricing" className="py-28 px-6 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,241,53,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block font-body text-sm text-lime font-medium tracking-widest uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-display font-black text-5xl md:text-6xl text-offwhite">
            Pick a plan.
            <span className="text-offwhite/40"> Start clearing.</span>
          </h2>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-full bg-dark border border-dark-border gap-1">
            {(["weekly", "monthly"] as Plan[]).map((plan) => (
              <button
                key={plan}
                onClick={() => setActive(plan)}
                className={`relative px-8 py-2.5 rounded-full font-body font-medium text-sm transition-colors duration-200 capitalize ${
                  active === plan ? "text-dark" : "text-offwhite/50 hover:text-offwhite"
                }`}
              >
                {active === plan && (
                  <motion.div
                    layoutId="plan-bg"
                    className="absolute inset-0 rounded-full bg-lime"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{plan}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -20 }}
            transition={{ duration: 0.35 }}
            className="relative p-8 md:p-12 rounded-3xl bg-dark border border-dark-border overflow-hidden"
          >
            {plans[active].badge && (
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-body font-semibold bg-lime text-dark">
                  {plans[active].badge}
                </span>
              </div>
            )}

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(200,241,53,0.06) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="mb-6">
                <p className="font-body text-offwhite/50 mb-2">{plans[active].name} Plan</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display font-black text-6xl md:text-7xl text-lime">
                    {plans[active].price}
                  </span>
                  <span className="font-body text-offwhite/40 text-lg">{plans[active].period}</span>
                </div>
                <p className="font-body text-offwhite/60 max-w-md">{plans[active].description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {plans[active].features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-lime/15 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime" />
                    </div>
                    <span className="font-body text-sm text-offwhite/70">{f}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#"
                className="block w-full text-center py-4 rounded-2xl bg-lime text-dark font-display font-black text-lg hover:bg-lime/90 transition-colors shadow-[0_0_40px_rgba(200,241,53,0.25)]"
              >
                {plans[active].cta} →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
