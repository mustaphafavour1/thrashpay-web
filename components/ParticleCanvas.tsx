"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotSpeed: number;
  colorIdx: number;
}

// Pre-computed color palette — avoids string interpolation in the draw loop
const COLORS = [
  "rgba(200,241,53,",   // lime
  "rgba(4,206,255,",    // electric
  "rgba(182,96,50,",    // brown
  "rgba(244,241,234,",  // offwhite
];

const PARTICLE_COUNT = 28;
const TARGET_FPS = 30;
const FRAME_MS = 1000 / TARGET_FPS;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 6 + 3,
      opacity: Math.random() * 0.35 + 0.08,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      colorIdx: Math.floor(Math.random() * COLORS.length),
    }));

    const cx = () => canvas.width / 2;
    const cy = () => canvas.height / 2;
    const GRAVITY = 0.000055;
    const MAX_DIST_SQ = 280 * 280;

    let rafId = 0;
    let lastTime = 0;
    let visible = true;

    // Pause when hero section is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => { visible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const draw = (ts: number) => {
      rafId = requestAnimationFrame(draw);
      if (!visible) return;

      const elapsed = ts - lastTime;
      if (elapsed < FRAME_MS) return;
      lastTime = ts - (elapsed % FRAME_MS);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = cx();
      const centerY = cy();

      for (const p of particles) {
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < 60 * 60) {
          // Respawn at a random edge instead of teleporting
          const edge = Math.floor(Math.random() * 4);
          if (edge === 0) { p.x = Math.random() * canvas.width; p.y = -20; }
          else if (edge === 1) { p.x = canvas.width + 20; p.y = Math.random() * canvas.height; }
          else if (edge === 2) { p.x = Math.random() * canvas.width; p.y = canvas.height + 20; }
          else { p.x = -20; p.y = Math.random() * canvas.height; }
          p.vx = (Math.random() - 0.5) * 0.35;
          p.vy = (Math.random() - 0.5) * 0.35;
          continue;
        }

        // Gravity pull toward center (skip sqrt — use distSq approximation)
        const clampedSq = Math.min(distSq, MAX_DIST_SQ);
        const dist = Math.sqrt(clampedSq); // only one sqrt per particle per frame
        const force = GRAVITY * dist;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
        p.vx *= 0.992;
        p.vy *= 0.992;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;

        // Cheap rotated square — fillRect is 100× faster than emoji fillText
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = COLORS[p.colorIdx] + p.opacity + ")";
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }

      // Soft glow at center
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 70);
      grad.addColorStop(0, "rgba(200,241,53,0.10)");
      grad.addColorStop(1, "rgba(200,241,53,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);
      ctx.fill();
    };

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.75 }}
    />
  );
}
