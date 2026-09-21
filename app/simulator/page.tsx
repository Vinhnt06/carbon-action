"use client";

import { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  actionOptions,
  filterByBudget,
  rankByROI,
  rankByCO2,
  rankByPayback,
  calculateNPV,
} from "@/lib/data/action-options";
import {
  Lightning,
  Truck,
  Recycle,
  Factory,
  Warning,
  ArrowLeft,
  ArrowRight,
  SlidersHorizontal,
} from "@phosphor-icons/react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const categoryIcons: Record<string, React.ReactNode> = {
  energy: <Lightning size={18} weight="duotone" />,
  transport: <Truck size={18} weight="duotone" />,
  process: <Factory size={18} weight="duotone" />,
  waste: <Recycle size={18} weight="duotone" />,
};

const difficultyColors: Record<string, string> = {
  easy: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  hard: "text-red-400 bg-red-500/10 border-red-500/20",
};

const difficultyLabels: Record<string, string> = {
  easy: "Dễ triển khai",
  medium: "Khá phức tạp",
  hard: "Quy mô lớn",
};

export default function SimulatorPage() {
  const [budget, setBudget] = useState(800); // triệu VND
  const [sortBy, setSortBy] = useState<"roi" | "co2" | "payback">("roi");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filteredAndSorted = useMemo(() => {
    const filtered = filterByBudget(actionOptions, budget);
    if (sortBy === "roi") return rankByROI(filtered);
    if (sortBy === "co2") return rankByCO2(filtered);
    return rankByPayback(filtered);
  }, [budget, sortBy]);

  const top3 = filteredAndSorted.slice(0, 3);

  const totalCO2 = filteredAndSorted.reduce((s, a) => s + a.co2ReductionTpa, 0);
  const totalSavings = filteredAndSorted.reduce((s, a) => s + a.annualOpexSavings, 0);
  const totalCapex = filteredAndSorted.reduce((s, a) => s + a.capex, 0);

  const chartData = top3.map((a) => ({
    name: a.name.split(" ").slice(0, 3).join(" "),
    CO2: a.co2ReductionTpa,
    Tiết_kiệm: a.annualOpexSavings,
    CapEx: a.capex,
    payback: a.paybackYears,
  }));

  return (
    <div className="min-h-screen bg-[#0f1416] text-zinc-100 pb-20">
      {/* Top Header */}
      <div className="border-b border-white/[0.08] bg-[#131a1e]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <ArrowLeft size={16} className="text-zinc-400" />
            </Link>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">Module 05</p>
              <h1 className="text-zinc-50 font-bold text-base sm:text-lg flex items-center gap-2">
                <span>Action Simulator — Mô Phỏng Đầu Tư</span>
                <SlidersHorizontal size={16} className="text-emerald-400" />
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1"
            >
              Mở Dashboard
            </Link>
            <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 flex items-center gap-1.5 font-mono">
              <Warning size={12} /> Interactive Demo
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Controls — 4 Cols */}
          <div className="lg:col-span-4 space-y-6">
            <ScrollReveal>
              {/* Budget Slider */}
              <div className="double-bezel rounded-[2.5rem] p-6 bg-white/[0.015] space-y-6">
                <div>
                  <h2 className="text-zinc-50 font-bold text-lg">Ngân Sách Đầu Tư (CapEx)</h2>
                  <p className="text-zinc-400 text-xs mt-0.5">
                    Kéo thanh để mô phỏng danh mục phương án tối ưu
                  </p>
                </div>

                <div className="text-center py-4 bg-black/40 border border-white/[0.06] rounded-2xl">
                  <span className="text-5xl font-bold font-mono gradient-emerald tracking-tight">{budget}</span>
                  <span className="text-zinc-400 text-xs font-mono ml-2">triệu VND</span>
                </div>

                <div className="space-y-2">
                  <input
                    type="range"
                    min={50}
                    max={2000}
                    step={50}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex justify-between text-zinc-500 font-mono text-xs">
                    <span>50M VND</span>
                    <span>2,000M VND</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              {/* Sort Pills */}
              <div className="double-bezel rounded-[2.5rem] p-6 bg-white/[0.015] space-y-3">
                <h2 className="text-zinc-50 font-bold text-base mb-2">Tiêu Chí Xếp Hạng</h2>
                <div className="space-y-2">
                  {[
                    { key: "roi", label: "Tỷ suất ROI năm đầu cao nhất" },
                    { key: "co2", label: "Khả năng giảm CO₂ lớn nhất" },
                    { key: "payback", label: "Thời gian hoàn vốn nhanh nhất" },
                  ].map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setSortBy(opt.key as typeof sortBy)}
                      className={`w-full text-left px-4 py-3 rounded-full text-xs font-medium transition-all ${
                        sortBy === opt.key
                          ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-sm"
                          : "border border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              {/* Portfolio Total */}
              <div className="double-bezel rounded-[2.5rem] p-6 bg-white/[0.015] space-y-4">
                <div>
                  <h2 className="text-zinc-50 font-bold text-base">Tổng Quan Portfolio Đề Xuất</h2>
                  <p className="text-zinc-400 text-xs mt-0.5">Nếu triển khai toàn bộ {filteredAndSorted.length} phương án khả thi</p>
                </div>
                <div className="space-y-3 pt-2">
                  {[
                    { label: "Tổng CO₂ giảm / năm", val: `${totalCO2} tCO₂e`, color: "emerald" },
                    { label: "Tiết kiệm OPEX / năm", val: `${totalSavings}M VND`, color: "cyan" },
                    { label: "Tổng CapEx đầu tư", val: `${totalCapex}M VND`, color: "zinc" },
                  ].map((m) => (
                    <div key={m.label} className="flex justify-between items-center bg-black/30 border border-white/[0.04] p-3 rounded-2xl">
                      <span className="text-zinc-400 text-xs">{m.label}</span>
                      <span
                        className={`text-sm font-mono font-bold ${
                          m.color === "emerald"
                            ? "text-emerald-400"
                            : m.color === "cyan"
                            ? "text-cyan-400"
                            : "text-zinc-200"
                        }`}
                      >
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Results — 8 Cols */}
          <div className="lg:col-span-8 space-y-6">
            <ScrollReveal delay={100}>
              {/* Top 3 Chart */}
              <div className="double-bezel rounded-[2.5rem] p-6 bg-white/[0.015]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-zinc-50 font-bold text-lg">
                      Top {Math.min(3, filteredAndSorted.length)} Phương Án Tối Ưu Cho Ngân Sách {budget}M
                    </h2>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      So sánh hiệu quả cắt giảm CO₂ vs Số tiền OPEX tiết kiệm hàng năm
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    {filteredAndSorted.length} phương án khả thi
                  </span>
                </div>

                {top3.length > 0 ? (
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={chartData} margin={{ right: 12 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
                      <XAxis
                        dataKey="name"
                        tick={{ fill: "#71717a", fontSize: 11 }}
                        axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                        tickLine={false}
                      />
                      <YAxis tick={{ fill: "#71717a", fontSize: 11 }} axisLine={false} tickLine={false} width={35} />
                      <Tooltip
                        contentStyle={{
                          background: "#0c0c0e",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "16px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="CO2" fill="#10b981" radius={[6, 6, 0, 0]} name="CO₂ giảm (t/năm)" />
                      <Bar dataKey="Tiết_kiệm" fill="#06b6d4" radius={[6, 6, 0, 0]} name="Tiết kiệm OPEX (M/năm)" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-40 flex items-center justify-center text-zinc-500 text-sm">
                    Không có phương án nào phù hợp với mức ngân sách {budget}M VND
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Action Cards List */}
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {filteredAndSorted.map((action) => (
                  <div
                    key={action.id}
                    onClick={() => setSelectedId(selectedId === action.id ? null : action.id)}
                    className={`double-bezel rounded-[2.5rem] p-6 cursor-pointer transition-all duration-300 ${
                      selectedId === action.id
                        ? "double-bezel-emerald bg-emerald-950/20 scale-[1.01]"
                        : "bg-white/[0.015] hover:border-emerald-500/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                          {categoryIcons[action.category]}
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-zinc-50 font-bold text-base">{action.name}</h3>
                            {action.tag && (
                              <span className="text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-2.5 py-0.5 uppercase">
                                {action.tag}
                              </span>
                            )}
                            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${difficultyColors[action.difficulty]}`}>
                              {difficultyLabels[action.difficulty]}
                            </span>
                          </div>
                          <p className="text-zinc-400 text-xs leading-relaxed">{action.description}</p>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-zinc-50 font-mono font-bold text-lg">{action.capex}M</p>
                        <p className="text-zinc-500 text-[10px] uppercase font-mono">CapEx Đầu Tư</p>
                      </div>
                    </div>

                    {/* Metrics row */}
                    <div className="mt-5 grid grid-cols-3 gap-3 pt-4 border-t border-white/[0.06]">
                      <div className="bg-black/30 p-3 rounded-2xl text-center">
                        <p className="text-emerald-400 font-mono font-bold text-xl">
                          {action.co2ReductionTpa}t
                        </p>
                        <p className="text-zinc-400 text-[11px] mt-0.5">CO₂ cắt giảm/năm</p>
                      </div>
                      <div className="bg-black/30 p-3 rounded-2xl text-center">
                        <p className="text-cyan-400 font-mono font-bold text-xl">
                          {action.annualOpexSavings}M
                        </p>
                        <p className="text-zinc-400 text-[11px] mt-0.5">Tiết kiệm/năm</p>
                      </div>
                      <div className="bg-black/30 p-3 rounded-2xl text-center">
                        <p className="text-zinc-100 font-mono font-bold text-xl">
                          {action.paybackYears} năm
                        </p>
                        <p className="text-zinc-400 text-[11px] mt-0.5">Thời gian hoàn vốn</p>
                      </div>
                    </div>

                    {/* Expanded details panel */}
                    {selectedId === action.id && (
                      <div className="mt-5 pt-5 border-t border-emerald-500/20 space-y-4 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-[#0b0b0d] border border-white/[0.08] rounded-2xl p-4">
                            <p className="text-zinc-400 text-xs mb-1">Dòng Tiền Thuần NPV 5 Năm (Lãi suất 8%)</p>
                            <p
                              className={`font-mono text-xl font-bold ${
                                calculateNPV(action.capex, action.annualOpexSavings) > 0
                                  ? "text-emerald-400"
                                  : "text-red-400"
                              }`}
                            >
                              +{calculateNPV(action.capex, action.annualOpexSavings).toFixed(0)}M VND
                            </p>
                          </div>
                          <div className="bg-[#0b0b0d] border border-white/[0.08] rounded-2xl p-4">
                            <p className="text-zinc-400 text-xs mb-1">Tỷ Suất Sinh Lời ROI Năm 1</p>
                            <p className="text-cyan-400 font-mono text-xl font-bold">
                              {((action.annualOpexSavings / action.capex) * 100).toFixed(1)}%
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-zinc-400 bg-white/[0.02] p-3 rounded-xl">
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Tác động trực tiếp: <strong>{action.scope}</strong></span>
                          </span>
                          <span className="font-mono text-emerald-400">Sẵn sàng lập kế hoạch</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}

