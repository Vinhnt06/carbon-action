---
name: Carbon Action Design System
version: 2.1.0
theme: carbon-graphite
created: 2026-09-21

tokens:
  colors:
    background:
      base: "carbon-base (#0f1416)"
      surface: "carbon-surface (#141a1e)"
      elevated: "carbon-elevated (#1a2227)"
      border: "white/[0.08] (rgba(255,255,255,0.08))"
    text:
      primary: "zinc-50 (#fafafa)"
      secondary: "zinc-400 (#a1a1aa)"
      muted: "zinc-500 (#71717a)"
    accent:
      primary: "emerald-500 (#10b981)"
      primaryLight: "emerald-400 (#34d399)"
      primaryDim: "emerald-500/10 (rgba(16,185,129,0.10))"
    data:
      scope1: "emerald-500 (#10b981)"
      scope2: "cyan-500 (#06b6d4)"
      scope3: "violet-500 (#8b5cf6)"
      positive: "emerald-400 (#34d399)"
      negative: "red-400 (#f87171)"
      neutral: "zinc-400 (#a1a1aa)"

  typography:
    fontSans: "Geist, ui-sans-serif, system-ui"
    fontMono: "Geist Mono, ui-monospace, monospace"
    scale:
      display: "text-6xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95]"
      h1: "text-4xl md:text-6xl font-bold tracking-tight"
      h2: "text-2xl md:text-4xl font-semibold tracking-tight"
      h3: "text-xl font-semibold"
      body: "text-base text-zinc-400 leading-relaxed"
      small: "text-sm text-zinc-500"
      mono: "font-mono text-emerald-400 tabular-nums"
      metric: "text-3xl md:text-5xl font-bold font-mono tabular-nums"

  spacing:
    sectionPad: "py-24 md:py-36"
    containerWidth: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

  rounding:
    card: "rounded-[2rem]"
    button: "rounded-full"
    badge: "rounded-full"
    input: "rounded-full"

  shadows:
    card: "shadow-2xl shadow-black/60"
    glow: "shadow-emerald-500/20"

  animation:
    dials:
      DESIGN_VARIANCE: 9
      MOTION_INTENSITY: 8
      VISUAL_DENSITY: 6
    transitions:
      default: "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
      slow: "transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
    motionPreset: "opacity: 0→1, y: 32→0, filter: blur(8px)→blur(0px)"

  components:
    card:
      base: "double-bezel rounded-[2rem]"
      glass: "glass-pill rounded-[2rem]"
      hover: "hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
    button:
      primary: "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-full px-6 py-3 transition-all duration-300 shadow-lg shadow-emerald-500/20"
      ghost: "border border-white/10 hover:border-white/30 text-zinc-200 rounded-full px-6 py-3 backdrop-blur-md transition-all duration-300"
    badge:
      scope1: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-mono"
      scope2: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-mono"
      scope3: "bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full text-xs font-mono"

rationale: |
  Carbon Action redesign v2.1 - Carbon Graphite & Charcoal Theme.
  
  Key changes:
  - CARBON CHARCOAL BASE (#0f1416): Deep organic carbon slate gray instead of pure AI black, giving a rich industrial software feel.
  - SURFACE CARDS (#141a1e & #1a2227): Subtle contrast layering between background and interactive components.
  - FLOATING PILL NAVBAR: Fixed glass pill header with blurred backdrop and sleek borders.
  - ROUNDED PILL BUTTONS: Modern high-end software look (rounded-full).
  - DOUBLE-BEZEL CARDS: Nested borders with soft carbon shadows giving depth to data visualizations.
---


