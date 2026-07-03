# TrashPay Website — Build Session Log

**Branch:** `claude/amazing-faraday-eyycn6`  
**Repo:** `mustaphafavour1/thrashpay-web`  
**Date:** 2026-07-03  
**Exchanges:** 9 · **Commits:** 9

---

## 01 — Initial Brief

**Stack:** Next.js 16 App Router + Framer Motion 12 + Tailwind CSS v4 + TypeScript  
**Fonts:** Syne Bold (display) · Teachers (body) via `next/font/google`

### Color Tokens

| Token | Value | Role |
|-------|-------|------|
| `--color-lime` | `#C8F135` | Primary CTA, accents |
| `--color-brown` | `#B66032` | B2B / warm accent |
| `--color-electric` | `#04CEFF` | Tech / highlight |
| `--color-offwhite` | `#F4F1EA` | Body text |
| `--color-dark` | `#0D0D0D` | Page background |
| `--color-dark-card` | `#141414` | Card backgrounds |
| `--color-dark-border` | `#222222` | Dividers |

### 11 Sections Built

| # | Section | Key interaction |
|---|---------|----------------|
| 1 | Hero | Canvas particle animation, staggered headline reveal, floating stat badges |
| 2 | The Problem | 3-card scroll reveal with animated count-up numbers |
| 3 | How It Works | 3-tab switcher (Households / Packers / Companies) |
| 4 | Features | Asymmetric bento grid, hover tilt + detail reveal |
| 5 | Impact Numbers | Eased count-up animation on scroll |
| 6 | Materials | Hover tooltips reveal buyer info |
| 7 | Pricing | Weekly/Monthly toggle, animated card swap |
| 8 | For Companies | Two-col split with interactive B2B portal mockup |
| 9 | Social Proof | Auto-cycling testimonials + infinite photo marquee |
| 10 | CTA Banner | Particle canvas + app store buttons |
| 11 | Footer | Links, socials, live status indicator |

✅ Build passed · Committed & pushed — `46d50f6`

---

## 02 — UI Refinements + Mobile Responsiveness

- Hero headline capped at **80px** using `clamp(38px, 8vw, 80px)`
- "Our job." → "**Our Job.**" (capital J)
- Problem cards: start stacked, spread apart on scroll — left/right enter from centre (x: ±105%), middle card starts 50px lower (y: 50)
- Impact Numbers: hero stat (`12,000 kg`) centred on top row, 4 sub-stats in grid below; text starts as **outline-only**, fills lime left→right via sequential `clipPath` sweep
- Materials: **4px border-radius**; divider lines only by default; full card (bg + border + glow) appears on hover; description reveals on hover
- Pricing CTA changed to "Join Waitlist" (smaller, left-aligned); teaser text on the right: *"Commit to join TrashPay when we launch and be the first to turn your trash to cash."*
- App store buttons: `AppleLogo` + `GooglePlayLogo` from `@phosphor-icons/react`
- All sections: `px-4 sm:px-6`, `py-16 sm:py-28`, responsive heading scales, grids stack on mobile

### Stacked cards animation

```ts
const stackedInitial = [
  { x: "105%",  y: 0  },  // left card shifts right toward centre
  { x: 0,      y: 50 },  // centre card starts 50px lower
  { x: "-105%", y: 0  },  // right card shifts left toward centre
]
// All animate to { x: 0, y: 0 } on parent useInView trigger
// spring: stiffness 90, damping 18
```

### Outline → fill animation

```tsx
// Bottom layer — always visible outline
<span style={{ WebkitTextStroke: "1.5px #C8F135", color: "transparent" }}>
  {value}
</span>
// Top layer — sweeps left→right via clipPath
<motion.span
  initial={{ clipPath: "inset(0 100% 0 0)" }}
  animate={{ clipPath: "inset(0 0% 0 0)" }}
  transition={{ duration: FILL_DURATION, delay: fillDelay }}
/>
```

✅ Build passed · Committed & pushed — `5692ce4`

---

## 03 — Second Round of Adjustments

- Impact fill animation slowed: duration `1s → 3.2s`, stagger `0.55s → 1.8s`, custom ease `[0.16, 1, 0.3, 1]`
- Materials grid: `items-start + minHeight: 340px` so section height never jumps on card hover
- Footer: gradient background `linear-gradient(160deg, #181818 → #060606)` + radial lime tint (4.5% opacity) at bottom-right corner
- For Companies: body copy condensed to 2 sentences; 6 benefit items redesigned as pill chips (no icons, `flex-wrap gap-2`); layout gap increased to `gap-20` on desktop

✅ Build passed · Committed & pushed — `94fbceb`

---

## 04 — Remove Hero Location Badge

Removed the "Now live in 4 cities across Nigeria" pill badge `<motion.div>` block from `Hero.tsx`.

✅ Committed & pushed — `6893aa7`

---

## 05 — Performance Optimisation

| Issue | Severity | Fix |
|-------|----------|-----|
| Emoji `fillText` in canvas | Critical | Replaced with `fillRect` rotated squares (~100× faster) |
| Two unthrottled RAF loops at 60fps+ | High | Capped both to 30fps via timestamp delta |
| Canvas animating off-screen | High | `IntersectionObserver` pauses both canvases when not visible |
| 12+ Unsplash image requests | High | Pure CSS gradient placeholders + CSS initials avatars |
| Infinite `backgroundPosition` animation | Medium | Converted to static CSS gradient |
| Missing font `display: swap` | Medium | Added swap; Syne cut 4→2 weights; Teachers cut 4→3 |
| Template literals in draw loops | Low | Pre-computed all color strings as static arrays |

### ParticleCanvas rewrite

```ts
// Before: ctx.fillText(emoji, 0, 0)  — forces system font stack, ~100× heavier
// After:  ctx.fillRect(...)           — cheap rotated squares

const FRAME_MS = 1000 / 30;                        // 30fps cap
if (elapsed < FRAME_MS) return;

const observer = new IntersectionObserver(          // pause when off-screen
  ([entry]) => { visible = entry.isIntersecting; }
);

const COLORS = ["rgba(200,241,53,", "rgba(4,206,255,", ...]; // pre-allocated
```

✅ Build passed · Committed & pushed — `fac89e3`

---

## 06 — Navbar Cleanup

Removed the duplicate "For Companies" ghost button from the navbar top-right. The nav link already covers it. Only the "Subscribe Now" lime button remains as the CTA.

✅ Committed & pushed — `f8af5fb`

---

## 07 — Logo Upload

User uploaded the actual TrashPay logo to `public/logo.png`.

- `Navbar.tsx` — replaced text/icon placeholder with `<Image src="/logo.png" priority />`
- `Footer.tsx` — same replacement in footer brand area

✅ Committed & pushed — `2b1f5aa`

---

## 08 — Logo Size Reduction

Logo appeared too large. Reduced both instances to approximately half size.

```tsx
// Before
className="h-9 w-auto"   // Navbar (36px)
className="h-10 w-auto"  // Footer (40px)

// After
className="h-5 w-auto"   // Both (20px)
```

✅ Committed & pushed — `f64626f`

---

## Commit History

| Hash | Message |
|------|---------|
| `46d50f6` | feat: build complete TrashPay website with Next.js and Framer Motion |
| `5692ce4` | fix: apply UI refinements and full mobile responsiveness |
| `94fbceb` | fix: impact fill speed, materials height, phosphor icons, footer gradient, companies text |
| `6893aa7` | remove 'now live in 4 cities' badge from hero |
| `fac89e3` | perf: eliminate jank sources across all animated sections |
| `f8af5fb` | remove duplicate 'For Companies' button from navbar |
| `a4f3444` | public/logo.png uploaded |
| `2b1f5aa` | replace text logo with logo.png in navbar and footer |
| `f64626f` | reduce logo size to h-5 in navbar and footer |

---

## Final File Structure

```
thrashpay-web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── ParticleCanvas.tsx
│   ├── Hero.tsx
│   ├── Problem.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── ImpactNumbers.tsx
│   ├── Materials.tsx
│   ├── Pricing.tsx
│   ├── ForCompanies.tsx
│   ├── SocialProof.tsx
│   ├── CTABanner.tsx
│   └── Footer.tsx
├── public/
│   └── logo.png
├── package.json
└── tsconfig.json
```

## Dependencies

```json
{
  "next": "16.2.9",
  "react": "19.2.4",
  "framer-motion": "^12.40.0",
  "@phosphor-icons/react": "latest",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```
