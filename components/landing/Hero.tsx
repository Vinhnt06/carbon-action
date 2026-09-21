"use client";

import Link from "next/link";
import { ArrowRight, Play, Shield, Database, ChartBar } from "@phosphor-icons/react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Mini inline dashboard preview component
function MiniDashboard() {
  const bars = [78, 52, 89, 63, 44, 95, 71, 58, 82, 67, 75, 48];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer subtle glow */}
      <div className="absolute -inset-2 bg-emerald-500/10 rounded-[3rem] blur-2xl pointer-events-none" />

      {/* Double bezel frame */}
      <div className="double-bezel rounded-[2.5rem] p-2 bg-white/[0.02]">
        {/* Inner dashboard card */}
        <div className="bg-[#13191c] border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06] bg-black/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-zinc-500 font-mono ml-2">carbon-action.app/dashboard</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">Live Demo</span>
          </div>

          <div className="p-6 space-y-5">
            {/* Title */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-400 font-medium mb-0.5">Tổng phát thải năm 2026</p>
                <p className="text-3xl font-bold font-mono text-zinc-50 tracking-tight">
                  595{" "}
                  <span className="text-xs font-normal text-zinc-500">tCO₂e/năm</span>
                </p>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 shadow-sm">
                <span className="text-xs text-emerald-400 font-mono font-semibold">↓ 8.5% YoY</span>
              </div>
            </div>

            {/* Scope pills */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Scope 1", val: "180", color: "emerald" },
                { label: "Scope 2", val: "320", color: "cyan" },
                { label: "Scope 3", val: "95", color: "violet" },
              ].map((s) => (
                <div
                  key={s.label}
                  className={`rounded-2xl p-3 ${
                    s.color === "emerald"
                      ? "bg-emerald-500/10 border border-emerald-500/20"
                      : s.color === "cyan"
                      ? "bg-cyan-500/10 border border-cyan-500/20"
                      : "bg-violet-500/10 border border-violet-500/20"
                  }`}
                >
                  <p
                    className={`text-[10px] font-mono uppercase tracking-wider mb-1 ${
                      s.color === "emerald"
                        ? "text-emerald-400/80"
                        : s.color === "cyan"
                        ? "text-cyan-400/80"
                        : "text-violet-400/80"
                    }`}
                  >
                    {s.label}
                  </p>
                  <p
                    className={`text-base font-bold font-mono ${
                      s.color === "emerald"
                        ? "text-emerald-400"
                        : s.color === "cyan"
                        ? "text-cyan-400"
                        : "text-violet-400"
                    }`}
                  >
                    {s.val} <span className="text-[10px] font-normal opacity-70">t</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Mini bar chart */}
            <div className="bg-white/[0.015] border border-white/[0.04] p-3.5 rounded-2xl">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] text-zinc-400">Xu hướng 12 tháng</p>
                <span className="text-[10px] font-mono text-emerald-400">Đang tối ưu</span>
              </div>
              <div className="flex items-end gap-1.5 h-16 pt-2">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all duration-700 hover:opacity-100 opacity-80"
                    style={{
                      height: `${h}%`,
                      background:
                        i === bars.length - 1
                          ? "linear-gradient(to top, #10b981, #34d399)"
                          : i >= bars.length - 3
                          ? "rgba(16, 185, 129, 0.4)"
                          : "rgba(255, 255, 255, 0.08)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Hotspot alert */}
            <div className="flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-400 font-bold text-xs">!</span>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-amber-300 font-semibold">Carbon Hotspot Phát Hiện</p>
                <p className="text-xs text-zinc-400 truncate">Điện lưới tiêu thụ chiếm 44.5% tổng lượng carbon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden mesh-gradient">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12 lg:py-20">
          {/* Left — Content */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={100}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 text-xs font-semibold tracking-wide uppercase font-mono">
                  Gen G 2026 · Giải Pháp Đột Phá
                </span>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={200}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] leading-[0.95] text-zinc-50">
                Từ dữ liệu
                <br />
                đến <span className="gradient-emerald italic font-serif font-normal">hành động</span>
                <br />
                giảm carbon
              </h1>
              <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl font-normal">
                Nền tảng đo lường & mô phỏng chuyên sâu giúp doanh nghiệp SME tự động xác định{" "}
                <span className="text-zinc-100 font-medium underline decoration-emerald-500/40 underline-offset-4">carbon hotspot</span>,
                tối ưu phương án giảm thải và ra quyết định đầu tư xanh minh bạch.
              </p>
            </ScrollReveal>

            {/* CTAs */}
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/dashboard"
                  className="group inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] text-sm"
                >
                  <span>Khám Phá Dashboard</span>
                  <div className="w-6 h-6 rounded-full bg-zinc-950/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </Link>
                <Link
                  href="/simulator"
                  className="inline-flex items-center gap-2.5 border border-white/10 hover:border-emerald-500/40 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-200 hover:text-white px-7 py-3.5 rounded-full backdrop-blur-md transition-all duration-300 text-sm"
                >
                  <Play size={16} weight="fill" className="text-emerald-400" />
                  <span>Chạy Simulator</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust signals */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/[0.06]">
                {[
                  { icon: <Shield size={16} weight="duotone" />, text: "Hệ số GHGP minh bạch" },
                  { icon: <Database size={16} weight="duotone" />, text: "Chuẩn Scope 1, 2, 3" },
                  { icon: <ChartBar size={16} weight="duotone" />, text: "Tính ROI & Payback 5 năm" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                    <span className="text-emerald-400">{item.icon}</span>
                    {item.text}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Mini Dashboard */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ScrollReveal delay={300} className="w-full">
              <MiniDashboard />
            </ScrollReveal>
          </div>
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={500}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 pb-8 border-t border-white/[0.08] mt-8">
            {[
              { value: 1500, suffix: "+", label: "tCO₂e tiềm năng cắt giảm / năm", prefix: "" },
              { value: 75, suffix: "%", label: "Gross Margin SaaS tiềm năng", prefix: "" },
              { value: 30, suffix: "", label: "SME mục tiêu trong năm 1", prefix: "" },
            ].map((stat) => (
              <div key={stat.label} className="double-bezel p-6 rounded-3xl bg-white/[0.015] text-center group hover:border-emerald-500/30 transition-all">
                <div className="text-3xl md:text-5xl font-bold font-mono gradient-emerald tracking-tight">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="text-zinc-400 text-xs font-medium mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

