## hero
title: TrashPay
subtitle: A marketing site for a waste-to-value platform, built section by section with Next.js and Framer Motion, then rebuilt where the first pass didn't hold up.
tags: Next.js 16, Framer Motion 12, Tailwind CSS v4, TypeScript

---

## quote
"The first draft looked right and ran badly; the second round was mostly about noticing that and fixing it before shipping it as done."

---

## metricsRow
- 11 sections, one continuous scroll page
- 13 components, 2,141 lines of TSX
- 10 commits across 3 rounds of revision
- 2 canvas particle systems, both throttled to 30fps
- 0 external image requests after the performance pass (down from 12+)
- 1 custom two-layer text animation (outline-to-fill sweep)

---

## processTimeline
title: How the build actually moved

- step: Initial build
  detail: All 11 sections scaffolded in one pass — Hero, Problem, How It Works, Features, Impact Numbers, Materials, Pricing, For Companies, Social Proof, CTA Banner, Footer. Color system and type pairing (Syne display, Teachers body) locked in as Tailwind v4 theme tokens.
- step: First revision pass
  detail: Nine separate fixes landed in one commit after review — hero type size capped with a clamp(), the Problem section's three cards reworked from a simple fade-in into a stacked-then-separating entrance, and the Impact Numbers section rebuilt from plain count-up text into a two-layer outline-then-fill sweep.
- step: Animation timing corrected
  detail: The outline-to-fill sweep shipped too fast to read. Fill duration went from 1s to 3.2s and the stagger between metrics from 0.55s to 1.8s, with the easing curve changed to a custom bezier so the sweep reads as deliberate rather than flickery.
- step: Copy and layout condensed
  detail: For Companies went from six benefit rows with emoji icons and two-sentence descriptions to six plain-text pill chips — a naming and information-density call, not just a style pass. Materials grid was pinned to a minimum height so cards expanding on hover no longer reflow the section around them.
- step: Performance audit and rewrite
  detail: The hero's particle canvas was drawing emoji glyphs via fillText, which forces a full system font fallback per particle per frame. Rewritten to draw plain rotated rectangles instead, cut the particle count from 40 to 28, capped both canvases at 30fps by timestamp delta, and added an IntersectionObserver so neither one draws while scrolled off-screen. Separately, every testimonial photo and avatar was swapped from live Unsplash URLs to CSS-only placeholders and initials badges, removing all external image requests from the page.
- step: Content and asset cleanup
  detail: A duplicate "For Companies" button was pulled from the navbar once it was noticed the nav link already went to the same place. The real logo was uploaded partway through and wired into the navbar and footer in place of a text mark, then resized down after it first rendered oversized.

---

## sideBySideCards
title: Two decisions that changed shape mid-build

- title: Impact numbers — from static to two-layer
  body: Started as a simple count-up. Became a stroked-outline number that fills with color left to right on scroll, one metric after another, once a plain count felt too static for a page about turning waste into value.
- title: For Companies — from icon rows to chips
  body: Six benefits started as icon-plus-sentence rows down the page. Compressed to plain-text pill chips once the row format read as padding rather than information; the shorter form forced each benefit down to a phrase that had to earn its place.

---

## imageGallery
- placeholder: Hero section, mid-scroll into view
  why: The particle canvas and the outline-to-fill headline only read correctly in motion; a static capture won't show why the rewrite from emoji-based particles to plain shapes mattered.
- placeholder: Screen recording of the Impact Numbers section scrolling into view
  why: This is the section that went through an explicit timing correction (1s to 3.2s fill, 0.55s to 1.8s stagger). The before/after is a pacing difference that only exists in motion.
- placeholder: Problem section, before and mid-separation
  why: The three cards start stacked with the center card offset lower, then spring apart on scroll. A single still loses the entrance; two frames a beat apart would carry it.
- placeholder: For Companies section, current chip layout
  why: Shows the final six-chip benefit row next to the condensed two-sentence intro, the end state of the copy-and-layout condensing pass.

---

## richText
This was a self-directed build, not a client engagement, so there's no user data or business outcome to report. What's real is the revision record: a first pass that looked complete, a review that caught three separate problems in it (timing, density, and raw runtime cost), and a second pass that fixed all three rather than polishing around them. The performance pass in particular came from profiling the actual page rather than guessing — the emoji-particle rewrite alone was the difference between a hero that stuttered on scroll and one that didn't.
