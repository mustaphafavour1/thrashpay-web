"use client";

import { motion } from "framer-motion";

const benefits = [
  { icon: "📦", text: "Steady, sorted recyclable supply" },
  { icon: "💰", text: "Reduced sourcing costs" },
  { icon: "✅", text: "Pre-vetted quality checks on every batch" },
  { icon: "🚛", text: "Bulk ordering with real-time delivery tracking" },
  { icon: "🔄", text: "Recurring supply contracts available" },
  { icon: "📊", text: "Supplier analytics and reporting dashboard" },
];

const materialCategories = [
  { name: "PET Plastic", volume: "2.4T / mo", tag: "High demand" },
  { name: "Cardboard", volume: "1.8T / mo", tag: "Available now" },
  { name: "Aluminium", volume: "0.6T / mo", tag: "Pre-order" },
  { name: "Wood waste", volume: "1.1T / mo", tag: "Available now" },
];

export default function ForCompanies() {
  return (
    <section id="companies" className="py-16 sm:py-28 px-4 sm:px-6 bg-dark-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(182,96,50,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-body text-xs sm:text-sm text-brown font-medium tracking-widest uppercase mb-5">
              For Companies
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-offwhite leading-tight mb-6">
              Your supply chain
              <br />
              <span className="text-offwhite/40">starts at the curb.</span>
            </h2>
            <p className="font-body text-offwhite/60 text-lg leading-relaxed mb-10">
              Stop scrambling for consistent recyclable input. TrashPay&apos;s B2B portal gives
              manufacturers direct access to a steady, sorted, and verified stream of materials —
              sourced from thousands of households every week.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-brown/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">{b.icon}</span>
                  </div>
                  <span className="font-body text-sm text-offwhite/70 leading-snug">{b.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brown text-offwhite font-display font-bold text-base hover:bg-brown/90 transition-colors shadow-[0_0_30px_rgba(182,96,50,0.25)]"
            >
              Apply as a Partner Company →
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-dark-border to-transparent">
              <div className="rounded-[22px] bg-dark overflow-hidden border border-dark-border">
                <div className="bg-dark-card border-b border-dark-border px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="font-body text-xs text-offwhite/30">TrashPay B2B Portal</span>
                  <div className="w-16" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="font-body text-xs text-offwhite/40 mb-1">Company Account</p>
                      <p className="font-display font-bold text-offwhite">Zenith Plastics Ltd.</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-lime/10 border border-lime/30">
                      <span className="font-body text-xs text-lime font-medium">Verified Partner</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: "Orders", value: "24" },
                      { label: "Total kg", value: "8.4T" },
                      { label: "Saved", value: "₦240k" },
                    ].map((s) => (
                      <div key={s.label} className="p-3 rounded-xl bg-dark-card border border-dark-border text-center">
                        <div className="font-display font-black text-xl text-lime">{s.value}</div>
                        <div className="font-body text-xs text-offwhite/40 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="font-body text-xs text-offwhite/40 mb-3 font-medium uppercase tracking-wider">
                    Available Materials
                  </p>
                  <div className="space-y-2.5">
                    {materialCategories.map((m, i) => (
                      <motion.div
                        key={m.name}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="flex items-center justify-between p-3 rounded-xl bg-dark-card border border-dark-border"
                      >
                        <div>
                          <p className="font-body text-sm font-medium text-offwhite">{m.name}</p>
                          <p className="font-body text-xs text-offwhite/40">{m.volume}</p>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-body font-medium ${
                            m.tag === "High demand"
                              ? "bg-brown/15 text-brown"
                              : m.tag === "Available now"
                              ? "bg-lime/10 text-lime"
                              : "bg-electric/10 text-electric"
                          }`}
                        >
                          {m.tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <button className="mt-4 w-full py-3 rounded-xl bg-brown text-offwhite font-body font-semibold text-sm hover:bg-brown/90 transition-colors">
                    Place Bulk Order
                  </button>
                </div>
              </div>
            </div>

            <div
              className="absolute -inset-4 rounded-3xl blur-3xl opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, #B66032, transparent)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
