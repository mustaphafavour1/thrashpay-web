"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { AppleLogo, GooglePlayLogo } from "@phosphor-icons/react";

// Pre-built color strings avoid template-literal allocation in the draw loop
const LIME_COLORS = Array.from({ length: 8 }, (_, i) =>
  `rgba(200,241,53,${(0.08 + i * 0.035).toFixed(3)})`
);

function MiniParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles = Array.from({ length: 22 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.8 + 0.8,
      colorIdx: Math.floor(Math.random() * LIME_COLORS.length),
    }));

    let raf = 0;
    let lastTime = 0;
    const FRAME_MS = 1000 / 30;
    let visible = true;

    const observer = new IntersectionObserver(
      ([e]) => { visible = e.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const draw = (ts: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible) return;
      const elapsed = ts - lastTime;
      if (elapsed < FRAME_MS) return;
      lastTime = ts - (elapsed % FRAME_MS);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = LIME_COLORS[p.colorIdx];
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
  );
}

export default function CTABanner() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-dark relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0D1F0A 0%, #0D2710 25%, #061A0D 50%, #0A1D12 75%, #0D1F0A 100%)",
          }}
        />
        {/* Static ambient glow — no ongoing JS animation */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 60% at 30% 40%, rgba(200,241,53,0.12) 0%, transparent 60%)",
          }}
        />

        <MiniParticles />

        <div className="relative z-10 py-14 sm:py-20 px-6 sm:px-10 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block font-body text-xs sm:text-sm text-lime/70 font-medium tracking-widest uppercase mb-5 sm:mb-6">
              Get Started Today
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite leading-tight mb-4 sm:mb-6">
              Your clean environment
              <br />
              <span className="text-lime">is one tap away.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-offwhite/60 mb-10 sm:mb-12 max-w-lg mx-auto">
              Available on Android and iOS. Free to download. Start your first pickup in minutes.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              {/*
                App Store badge: upload a file named "app-store-badge.png" to /public/
                Google Play badge: upload a file named "google-play-badge.png" to /public/
              */}
              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-offwhite/20 hover:border-offwhite/40 hover:bg-dark/80 transition-all hover:scale-105 bg-dark/60 backdrop-blur-sm"
              >
                <AppleLogo size={28} weight="fill" className="text-offwhite flex-shrink-0" />
                <div className="text-left">
                  <div className="font-body text-[10px] text-offwhite/50 leading-none mb-0.5">Download on the</div>
                  <div className="font-display font-bold text-offwhite text-base leading-tight">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-offwhite/20 hover:border-offwhite/40 hover:bg-dark/80 transition-all hover:scale-105 bg-dark/60 backdrop-blur-sm"
              >
                <GooglePlayLogo size={28} weight="fill" className="text-offwhite flex-shrink-0" />
                <div className="text-left">
                  <div className="font-body text-[10px] text-offwhite/50 leading-none mb-0.5">Get it on</div>
                  <div className="font-display font-bold text-offwhite text-base leading-tight">Google Play</div>
                </div>
              </a>
            </div>

            <p className="font-body text-xs sm:text-sm text-offwhite/30">
              Join 500+ households already subscribed
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
