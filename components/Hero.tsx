"use client";

import { motion, type Easing } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

const statBadges = [
  { label: "Active Subscribers", value: "500+" },
  { label: "Tonnes Collected", value: "12" },
  { label: "Verified Packers", value: "80" },
];

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    x: [0, i % 2 === 0 ? 6 : -6, 0],
    transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: "easeInOut" as Easing,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,241,53,0.06) 0%, rgba(13,13,13,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 20%, rgba(4,206,255,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <ParticleCanvas />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-lime/30 bg-lime/5 text-lime text-sm font-body font-medium mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          Now live in 4 cities across Nigeria
        </motion.div>

        <div className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-offwhite"
          >
            Your trash.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lime"
          >
            Our job.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-offwhite/60"
          >
            Their raw material.
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="max-w-2xl mx-auto font-body text-lg md:text-xl text-offwhite/60 leading-relaxed mb-12"
        >
          TrashPay connects households, waste packers, and recycling companies
          on one platform — turning everyday waste into steady income and clean
          communities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="#pricing"
            className="group px-8 py-4 bg-lime text-dark font-display font-bold text-base rounded-full hover:bg-lime/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(200,241,53,0.3)]"
          >
            Subscribe Now →
          </a>
          <a
            href="#companies"
            className="px-8 py-4 border border-offwhite/20 text-offwhite font-display font-bold text-base rounded-full hover:border-offwhite/50 hover:bg-offwhite/5 transition-all duration-200"
          >
            For Companies
          </a>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {statBadges.map((badge, i) => (
            <motion.div
              key={badge.label}
              custom={i}
              variants={floatVariants}
              animate="animate"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.15 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-dark-border bg-dark-card backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
              <div className="text-left">
                <div className="font-display font-black text-xl text-offwhite leading-none">
                  {badge.value}
                </div>
                <div className="font-body text-xs text-offwhite/50 mt-0.5">
                  {badge.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs text-offwhite/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-offwhite/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
