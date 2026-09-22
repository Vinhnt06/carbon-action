"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { monthlyEmissions, donutData, scopeBreakdown, summaryMetrics, hotspots } from "@/lib/data/mock-emissions";
import {
  TrendDown,
  TrendUp,
  Minus,
  Warning,
  Leaf,
  ArrowLeft,
} from "@phosphor-icons/react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Custom tooltip
const ChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0e0e11] border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-md">
        <p className="text-zinc-400 text-xs mb-2 font-mono">{label}</p>
        {payload.map((p: any) => (
          <div key={p.name} className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: p.color }} />
            <span className="text-zinc-400 text-xs">{p.name}:</span>
            <span className="text-zinc-50 text-xs font-mono font-bold">
              {p.value} tCO₂e
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Metric card
function MetricCard({
  label,
  value,
  unit,
  trend,
  trendValue,
}: {
  label: string;
  value: string | number;
  unit: string;
  trend?: "up" | "down" | "stable";
  trendValue?: string;
}) {
  return (
    <div className="double-bezel rounded-[2rem] p-6 bg-white/[0.015] hover:border-emerald-500/30 transition-all">
      <p className="text-zinc-400 text-xs font-medium mb-3">{label}</p>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-4xl font-bold font-mono text-zinc-50 tracking-tight">{value}</p>
          <p className="text-zinc-500 text-xs mt-1 font-mono">{unit}</p>
        </div>
        {trend && trendValue && (
          <div
            className={`flex items-center gap-1 text-xs font-mono px-3 py-1 rounded-full ${
              trend === "down"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : trend === "up"
                ? "bg-red-500/15 text-red-400 border border-red-500/30"
                : "bg-white/5 text-zinc-400 border border-white/10"
            }`}
          >
            {trend === "down" ? (
              <TrendDown size={12} weight="bold" />
            ) : trend === "up" ? (
              <TrendUp size={12} weight="bold" />
            ) : (
              <Minus size={12} />
            )}
            <span>{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const total = summaryMetrics.totalEmissions;

  return (
    <div className="min-h-screen bg-[#0f1416] text-zinc-100 pb-20">
      {/* Glass Top Bar */}
      <div className="border-b border-white/[0.08] bg-[#131a1e]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
              <ArrowLeft size={16} className="text-zinc-400" />
            </Link>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase font-mono tracking-wider">Carbon Action Platform</p>
              <h1 className="text-zinc-50 font-bold text-base sm:text-lg flex items-center gap-2">
                <span>Công ty TNHH Nhựa Bình Dương</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/simulator"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1"
            >
              Giả lập đầu tư
            </Link>
            <Link
              href="/report"
              className="text-xs font-semibold text-zinc-300 hover:text-zinc-100 transition-colors bg-white/[0.04] border border-white/10 rounded-full px-3 py-1"
            >
              Báo cáo
            </Link>
            <span className="text-xs text-zinc-400 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1 font-mono">
              Năm 2025
            </span>
            <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 flex items-center gap-1.5 font-mono">
              <Warning size={12} /> Live Demo
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Metric Cards Row */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              label="Tổng phát thải carbon"
              value="595"
              unit="tCO₂e / năm"
              trend="down"
              trendValue="↓ 8.5%"
            />
            <MetricCard
              label="Cường độ carbon"
              value="2.38"
              unit="tCO₂e / tấn SP"
              trend="down"
              trendValue="↓ 5.2%"
            />
            <MetricCard
              label="Cắt giảm vs Baseline 2025"
              value="-55"
              unit="tCO₂e thực tế"
              trend="down"
              trendValue="Baseline 650t"
            />
            <MetricCard
              label="Tổng sản lượng"
              value="250"
              unit="tấn SP / năm"
              trend="up"
              trendValue="↑ 3.1%"
            />
          </div>
        </ScrollReveal>

        {/* Scope Breakdown + Donut */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Donut Chart */}
            <div className="double-bezel rounded-[2.5rem] p-6 bg-white/[0.015]">
              <h2 className="text-zinc-50 font-bold text-lg mb-1">Cơ Cấu Phát Thải Scope</h2>
              <p className="text-zinc-400 text-xs mb-6">Theo tiêu chuẩn GHG Protocol</p>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {donutData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload?.[0]) {
                        const d = payload[0].payload;
                        return (
                          <div className="bg-[#0e0e11] border border-white/10 rounded-xl px-3 py-2 text-xs">
                            <p style={{ color: d.color }} className="font-bold">{d.name}</p>
                            <p className="text-zinc-300 font-mono">{d.value} tCO₂e</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Legend */}
              <div className="space-y-2.5 mt-4 pt-4 border-t border-white/[0.06]">
                {donutData.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.color }} />
                      <span className="text-zinc-300 text-xs">{d.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-50 text-xs font-mono font-bold">{d.value}t</span>
                      <span className="text-zinc-500 text-xs font-mono">
                        {Math.round((d.value / total) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Line Chart */}
            <div className="lg:col-span-2 double-bezel rounded-[2.5rem] p-6 bg-white/[0.015]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-zinc-50 font-bold text-lg">Diễn Biến Phát Thải 12 Tháng</h2>
                  <p className="text-zinc-400 text-xs mt-0.5">Tổng tCO₂e biến động theo thời gian thực năm 2025</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                  Cập nhật T12/2025
                </span>
              </div>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={monthlyEmissions} margin={{ right: 12 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "#71717a", fontSize: 11 }}
                    axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "#71717a", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    width={30}
                  />
                  <Tooltip content={<ChartTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="#10b981"
                    strokeWidth={2.5}
                    dot={{ fill: "#10b981", r: 4, strokeWidth: 0 }}
                    activeDot={{ r: 6, fill: "#34d399" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </ScrollReveal>

        {/* Source Breakdown Bar Chart */}
        <ScrollReveal delay={200}>
          <div className="double-bezel rounded-[2.5rem] p-6 bg-white/[0.015]">
            <h2 className="text-zinc-50 font-bold text-lg mb-1">Phân Tích Chi Tiết Theo Nguồn Nhiên Liệu</h2>
            <p className="text-zinc-400 text-xs mb-6">Xác định các cấu phần đóng góp chính trong từng tháng</p>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={monthlyEmissions} margin={{ right: 12 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#71717a", fontSize: 11 }}
                  axisLine={{ stroke: "rgba(255, 255, 255, 0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#71717a", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={30}
                />
                <Tooltip content={<ChartTooltip />} />
                <Bar dataKey="electricity" stackId="a" fill="#06b6d4" name="Điện lưới" />
                <Bar dataKey="diesel" stackId="a" fill="#10b981" name="Dầu Diesel" />
                <Bar dataKey="gas" stackId="a" fill="#8b5cf6" name="Khí Gas" />
                <Bar dataKey="transport" stackId="a" fill="#f59e0b" name="Vận tải" />
                <Bar dataKey="waste" stackId="a" fill="#52525b" radius={[4, 4, 0, 0]} name="Rác thải" />
              </BarChart>
            </ResponsiveContainer>
            {/* Legend */}
            <div className="flex flex-wrap gap-5 mt-4 pt-4 border-t border-white/[0.06]">
              {[
                { color: "#06b6d4", name: "Điện lưới" },
                { color: "#10b981", name: "Dầu Diesel" },
                { color: "#8b5cf6", name: "Khí Gas" },
                { color: "#f59e0b", name: "Vận tải" },
                { color: "#52525b", name: "Rác thải" },
              ].map((l) => (
                <div key={l.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: l.color }} />
                  <span className="text-zinc-300 text-xs font-medium">{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Carbon Hotspot Table */}
        <ScrollReveal delay={250}>
          <div className="double-bezel rounded-[2.5rem] overflow-hidden bg-white/[0.015]">
            <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <h2 className="text-zinc-50 font-bold text-lg">Danh Sách Carbon Hotspot (Trọng Yếu)</h2>
                </div>
                <p className="text-zinc-400 text-xs">Xác định tự động theo cây phân tích Pareto: 20% nguồn phát thải chiếm &gt;80% tổng cường độ carbon</p>
              </div>
              <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 font-mono font-semibold">
                Phân tích tự động
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/[0.06] bg-black/20">
                    {["#", "Nguồn phát thải", "Phân loại Scope", "tCO₂e / năm", "% Đóng góp", "Xu hướng", "Hệ số EF", "Nguồn tham chiếu"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-5 py-3.5 text-xs text-zinc-400 font-semibold"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {hotspots.map((h) => (
                    <tr key={h.rank} className="hover:bg-white/[0.03] transition-colors">
                      <td className="px-5 py-4">
                        <span className="text-zinc-500 font-mono text-xs">{h.rank}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-zinc-100 font-medium text-sm">{h.source}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`text-xs font-mono px-3 py-1 rounded-full border ${
                            h.scope === "Scope 1"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : h.scope === "Scope 2"
                              ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                              : "bg-violet-500/10 text-violet-400 border-violet-500/20"
                          }`}
                        >
                          {h.scope}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-zinc-50 font-mono font-bold text-sm">{h.emissions}</span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full bg-emerald-500"
                              style={{ width: `${h.pct}%` }}
                            />
                          </div>
                          <span className="text-zinc-300 font-mono text-xs">{h.pct}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`flex items-center gap-1 text-xs font-mono ${
                            h.trend === "down"
                              ? "text-emerald-400"
                              : h.trend === "up"
                              ? "text-red-400"
                              : "text-zinc-500"
                          }`}
                        >
                          {h.trend === "down" ? (
                            <TrendDown size={12} weight="bold" />
                          ) : h.trend === "up" ? (
                            <TrendUp size={12} weight="bold" />
                          ) : (
                            <Minus size={12} />
                          )}
                          <span>{h.trendPct}%</span>
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-zinc-400 font-mono text-xs">{h.ef}</span>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-zinc-500 text-xs">{h.efSource}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

