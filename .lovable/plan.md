# GIAM SAC — Visual Foundation & Design System

A premium industrial B2B foundation: graphite blacks, brushed steel, welding-orange accents, cinematic motion. Built on the existing TanStack Start + React + Tailwind v4 stack (the project is not Next.js — same React/Tailwind/Framer toolchain, so the design system ports 1:1).

## Stack note
Project is **TanStack Start** (not Next.js). I'll keep React + Tailwind CSS v4 + Framer Motion as requested. If you specifically need Next.js, say so and I'll flag the migration scope separately.

## 1. Design tokens (`src/styles.css`)

**Color system** (oklch, dark-first):
- `--background` graphite black `oklch(0.16 0.005 240)`
- `--surface` steel `oklch(0.21 0.006 240)`
- `--surface-raised` brushed steel `oklch(0.26 0.008 240)`
- `--foreground` warm white `oklch(0.96 0.005 80)`
- `--muted-foreground` steel mist `oklch(0.68 0.01 240)`
- `--border` hairline `oklch(0.32 0.008 240)`
- `--accent` welding orange `oklch(0.72 0.19 47)`
- `--accent-glow` molten `oklch(0.78 0.21 50)`
- `--accent-ember` deep ember `oklch(0.55 0.18 40)`

**Gradients & effects:**
- `--gradient-steel` brushed metal sheen
- `--gradient-weld` orange glow radial
- `--gradient-graphite` deep vignette
- `--shadow-industrial` heavy cast shadow
- `--shadow-weld` orange bloom for accents
- `--texture-brushed` SVG noise overlay

**Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192 px — generous industrial rhythm.

**Radius:** mostly sharp. `--radius: 2px`. Cards 4px. Pills only for status chips.

## 2. Typography

- **Display / H1–H2:** Neue Haas Grotesk Display fallback → `Archivo` (heavy, tight tracking -0.02em, uppercase for eyebrows)
- **Body:** `Inter` 400/500
- **Mono / technical labels:** `JetBrains Mono` for spec readouts, coordinates, part numbers
- Type scale: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 72 / 96 / 128
- Eyebrow pattern: mono uppercase 12px + orange 1px rule

## 3. Grid & layout

- 12-column grid, 24px gutter, max-width 1440px
- Section padding: 128px desktop / 64px mobile
- Persistent technical grid background (1px lines @ 4% opacity, 80px cells) toggleable per section
- Corner ticks (L-shaped 12px marks) framing hero and key cards — blueprint feel

## 4. Components to scaffold

- **Navbar:** fixed, 72px, graphite with bottom hairline; left wordmark, center nav with mono labels, right CTA "Request Quote" (orange outline → fill on hover); scroll-state shrinks to 56px and adds backdrop blur
- **Buttons:**
  - `primary` solid orange, sharp corners, weld-glow shadow on hover
  - `secondary` brushed-steel with hairline border
  - `ghost` mono label + animated arrow + underline ink-sweep
- **Cards:** brushed-steel surface, 1px border, corner ticks, subtle inner highlight top edge
- **Section header:** mono eyebrow + orange rule + display heading + lead paragraph
- **Spec block:** mono key/value rows with dotted leaders
- **Stat counter:** large display number + mono unit + ember underline
- **Footer:** dark graphite, blueprint grid, mono columns

## 5. Background & lighting system

Layered, composable backgrounds (React components):
- `<GraphiteBackdrop/>` base color + vignette
- `<BrushedSteel/>` SVG noise + horizontal streak gradient
- `<TechnicalGrid/>` thin grid with fade mask
- `<WeldGlow x y/>` radial orange bloom, low opacity
- `<SmokeLayer/>` slow drifting blurred gradients (Framer Motion, 30–60s loops)
- `<LightingShaft/>` diagonal soft beam from top-right, low opacity

Lighting direction: **top-right key light**, cool fill from left, ember rim from bottom on hero elements.

## 6. Motion language (Framer Motion)

Principles: weight, inertia, restraint. No bounce. Easing `[0.22, 1, 0.36, 1]` (industrial heft) and `[0.65, 0, 0.35, 1]` for transitions.

- **Reveal:** 24px translate-up + opacity, 700ms, stagger 80ms
- **Section transitions:** parallax depth on scroll (0.85x bg, 1x mid, 1.05x fg)
- **Hover:** buttons → weld-glow shadow bloom (300ms), cards → 2px lift + accent border pulse
- **Cursor accents** (desktop): tiny mono coordinate readout follows cursor over hero
- **Number counters:** monotonic ease-out, 1.4s
- **Page transitions:** graphite curtain wipe, 500ms
- Reduced-motion: replace transforms with opacity-only

## 7. Industrial decorative elements

SVG components with slow Framer Motion loops, `position: absolute`, low opacity (8–14%):
- `<FloatingGear size rpm/>` — counter-rotating pairs, 40–80s rotations
- `<BoltCluster/>` — hex bolt grid, parallax on scroll
- `<MetallicRing/>` — concentric rings with dashed inner stroke
- `<WireframeBlock/>` — isometric technical line drawings
- `<IndustrialLines/>` — long horizontal hairlines that draw in on scroll
- `<NutScatter/>` — depth-layered, mouse-parallax

Rules: max 2 decorative layers per section, never over text, always behind a vignette mask.

## 8. File structure

```text
src/
  styles.css                       tokens, gradients, textures
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      Section.tsx
    backgrounds/
      GraphiteBackdrop.tsx
      BrushedSteel.tsx
      TechnicalGrid.tsx
      WeldGlow.tsx
      SmokeLayer.tsx
      LightingShaft.tsx
    industrial/
      FloatingGear.tsx
      BoltCluster.tsx
      MetallicRing.tsx
      WireframeBlock.tsx
      IndustrialLines.tsx
    ui/                            (existing shadcn, restyled via tokens)
    primitives/
      Eyebrow.tsx
      SectionHeader.tsx
      SpecBlock.tsx
      StatCounter.tsx
      CornerTicks.tsx
  lib/
    motion.ts                      shared variants, easings
  routes/
    index.tsx                      foundation showcase (hero + component gallery)
```

## 9. Showcase page (`/`)

Single page demonstrating the foundation: hero with welding glow + floating gears, typography specimen, button matrix, card variants, spec block, stat row, section transition demo, footer. Acts as the design-system reference; real marketing pages get built on top later.

## 10. Out of scope (for this pass)

- Final marketing copy and real imagery (placeholders + image-gen prompts only)
- Subpages (Services, Projects, About, Contact) — foundation first, then routes
- CMS / backend / forms

## Technical notes

- Tailwind v4 `@theme inline` block in `src/styles.css` exposes every token as utility (`bg-surface`, `text-accent`, `shadow-weld`, etc.)
- Framer Motion installed via `bun add framer-motion`
- Fonts via `@import` from Google Fonts in `styles.css` (Archivo, Inter, JetBrains Mono)
- All decorative SVGs inline for tint control; `prefers-reduced-motion` respected globally via a `useReducedMotion` wrapper in `lib/motion.ts`
- No new colors written inline in components — tokens only
