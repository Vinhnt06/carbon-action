"use client";

import Link from "next/link";
import { companyInfo, summaryMetrics, hotspots, scopeBreakdown } from "@/lib/data/mock-emissions";
import { Warning, Leaf, ArrowLeft } from "@phosphor-icons/react";

export default function ReportPage() {
  const roadmap = [
    {
      quarter: "Q1 2026",
      actions: ["Thay LED toàn bộ nhà xưởng", "Phân loại tái chế phế liệu nhựa"],
      co2: 25,
      capex: 205,
      savings: 107,
    },
    {
      quarter: "Q2 2026",
      actions: ["Nâng cấp máy nén khí Inverter", "Hệ thống BMS quản lý năng lượng"],
      co2: 97,
      capex: 830,
      savings: 280,
    },
    {
      quarter: "Q3 2026",
      actions: ["Lắp điện mặt trời áp mái 100kWp"],
      co2: 78,
      capex: 1200,
      savings: 280,
    },
    {
      quarter: "Q4 2026",
      actions: ["Chuyển gas lò ép sang CNG", "Thu hồi nhiệt lò ép"],
      co2: 45,
      capex: 840,
      savings: 233,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f1416]">
      {/* Header */}
      <div className="border-b border-white/[0.08] bg-[#131a1e]/80 backdrop-blur-sm sticky top-0 z-10 print:static print:border-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-zinc-500 hover:text-zinc-300 transition-colors">
              <ArrowLeft size={16} />
            </Link>
            <div>
              <p className="text-zinc-500 text-xs">Module 7</p>
              <h1 className="text-zinc-50 font-semibold">Carbon Performance Report</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/simulator"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1"
            >
              Giả lập đầu tư
            </Link>
            <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 flex items-center gap-1">
              <Warning size={10} /> Báo cáo mẫu
            </span>
            <button
              onClick={() => {
                const data = [
                  ['Chỉ số', 'Giá trị', 'Đơn vị'],
                  ['Tổng phát thải', '595', 'tCO₂e'],
                  ['Cường độ carbon', '2.38', 'tCO₂e/tấn SP'],
                  ['Cắt giảm vs Baseline 2025', '-55', 'tCO₂e'],
                  ['Scope 1', '180', 'tCO₂e'],
                  ['Scope 2', '320', 'tCO₂e'],
                  ['Scope 3', '95', 'tCO₂e'],
                ];
                const csv = data.map(r => r.join(',')).join('\n');
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'carbon-report-2025.csv';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="text-xs border border-cyan-700 hover:border-cyan-500 text-cyan-400 hover:text-cyan-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              Xuất CSV
            </button>
            <button
              onClick={() => window.print()}
              className="text-xs border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-zinc-200 px-3 py-1.5 rounded-lg transition-colors"
            >
              In PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Company Header */}
        <div className="bg-gradient-to-br from-emerald-950/40 to-zinc-900 border border-emerald-500/20 rounded-2xl p-8">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <Leaf size={16} className="text-emerald-400" weight="fill" />
                </div>
                <span className="text-zinc-400 text-sm">Carbon Action Platform</span>
              </div>
              <h2 className="text-2xl font-bold text-zinc-50 mb-1">{companyInfo.name}</h2>
              <p className="text-zinc-400">{companyInfo.industry}</p>
            </div>
            <div className="text-right">
              <p className="text-zinc-500 text-sm">Kỳ báo cáo</p>
              <p className="text-zinc-50 font-semibold">{companyInfo.period}</p>
              <p className="text-zinc-600 text-xs mt-1">{companyInfo.reportDate}</p>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-emerald-500/10">
            {[
              { label: "Tổng phát thải", val: `${summaryMetrics.totalEmissions}`, unit: "tCO₂e" },
              { label: "Cường độ carbon", val: `${summaryMetrics.intensity}`, unit: "tCO₂e/tấn SP" },
              { label: "Giảm so với baseline", val: `${summaryMetrics.reduction}`, unit: "tCO₂e (-8.5%)" },
              { label: "Phương pháp", val: "GHG Protocol", unit: "Corporate Standard" },
            ].map((m) => (
              <div key={m.label}>
                <p className="text-zinc-500 text-xs mb-1">{m.label}</p>
                <p className="text-zinc-50 font-bold font-mono">{m.val}</p>
                <p className="text-zinc-600 text-xs">{m.unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scope Summary Table */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-800">
            <h3 className="text-zinc-50 font-semibold">Kiểm kê phát thải theo Scope</h3>
            <p className="text-zinc-500 text-xs mt-1">GHG Protocol Corporate Accounting Standard</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                {["Scope", "Mô tả", "Nguồn phát thải chính", "tCO₂e/năm", "% Tổng"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs text-zinc-500 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              <tr className="hover:bg-zinc-800/30">
                <td className="px-5 py-4">
                  <span className="bg-emerald-500/10 text-emerald-400 rounded-full px-2 py-0.5 text-xs">Scope 1</span>
                </td>
                <td className="px-5 py-4 text-zinc-400 text-sm">Phát thải trực tiếp</td>
                <td className="px-5 py-4 text-zinc-500 text-xs">Diesel, Gas LPG</td>
                <td className="px-5 py-4 text-zinc-50 font-mono">{scopeBreakdown.scope1.total}</td>
                <td className="px-5 py-4 text-zinc-400 text-sm">
                  {Math.round((scopeBreakdown.scope1.total / summaryMetrics.totalEmissions) * 100)}%
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/30">
                <td className="px-5 py-4">
                  <span className="bg-cyan-500/10 text-cyan-400 rounded-full px-2 py-0.5 text-xs">Scope 2</span>
                </td>
                <td className="px-5 py-4 text-zinc-400 text-sm">Phát thải gián tiếp — năng lượng</td>
                <td className="px-5 py-4 text-zinc-500 text-xs">Điện lưới (EF: 0.8712 kgCO₂e/kWh)</td>
                <td className="px-5 py-4 text-zinc-50 font-mono">{scopeBreakdown.scope2.total}</td>
                <td className="px-5 py-4 text-zinc-400 text-sm">
                  {Math.round((scopeBreakdown.scope2.total / summaryMetrics.totalEmissions) * 100)}%
                </td>
              </tr>
              <tr className="hover:bg-zinc-800/30">
                <td className="px-5 py-4">
                  <span className="bg-violet-500/10 text-violet-400 rounded-full px-2 py-0.5 text-xs">Scope 3</span>
                </td>
                <td className="px-5 py-4 text-zinc-400 text-sm">Phát thải chuỗi giá trị</td>
                <td className="px-5 py-4 text-zinc-500 text-xs">Vận tải, rác thải</td>
                <td className="px-5 py-4 text-zinc-50 font-mono">{scopeBreakdown.scope3.total}</td>
                <td className="px-5 py-4 text-zinc-400 text-sm">
                  {Math.round((scopeBreakdown.scope3.total / summaryMetrics.totalEmissions) * 100)}%
                </td>
              </tr>
              <tr className="bg-zinc-800/30">
                <td className="px-5 py-4 font-semibold text-zinc-50" colSpan={3}>Tổng cộng</td>
                <td className="px-5 py-4 text-emerald-400 font-bold font-mono text-lg">
                  {summaryMetrics.totalEmissions}
                </td>
                <td className="px-5 py-4 text-zinc-300">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Action Roadmap */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-zinc-800">
            <h3 className="text-zinc-50 font-semibold">Lộ trình hành động giảm phát thải</h3>
            <p className="text-zinc-500 text-xs mt-1">Action Plan 2026 — theo quý, căn cứ kết quả Giả lập đầu tư. Baseline hiện tại: 595 tCO₂e/năm (2025)</p>
          </div>
          <div className="p-6 space-y-4">
            {roadmap.map((q, i) => (
              <div key={q.quarter} className="flex gap-4">
                {/* Timeline dot */}
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    i === 0
                      ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                      : "border-zinc-700 bg-zinc-800 text-zinc-500"
                  }`}>
                    {i + 1}
                  </div>
                  {i < roadmap.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800 mt-2 mb-0" />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-zinc-50 font-medium text-sm">{q.quarter}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 text-xs font-mono">-{q.co2}t CO₂e</span>
                      <span className="text-cyan-400 text-xs font-mono">+{q.savings}M/năm</span>
                      <span className="text-zinc-500 text-xs font-mono">{q.capex}M CapEx</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {q.actions.map((action) => (
                      <span
                        key={action}
                        className="text-xs bg-zinc-800 border border-zinc-700 text-zinc-400 rounded-lg px-2.5 py-1"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total impact */}
          <div className="border-t border-zinc-800 px-6 py-5 bg-zinc-800/30">
            <div className="flex flex-wrap gap-6 justify-between">
              <div>
                <p className="text-zinc-500 text-xs">Tổng CO₂ giảm sau 2026</p>
                <p className="text-emerald-400 font-bold font-mono text-xl">
                  -{roadmap.reduce((s, q) => s + q.co2, 0)} tCO₂e/năm
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs">Tổng tiết kiệm OPEX/năm</p>
                <p className="text-cyan-400 font-bold font-mono text-xl">
                  +{roadmap.reduce((s, q) => s + q.savings, 0)}M VND
                </p>
              </div>
              <div>
                <p className="text-zinc-500 text-xs">Tổng đầu tư</p>
                <p className="text-zinc-200 font-bold font-mono text-xl">
                  {roadmap.reduce((s, q) => s + q.capex, 0)}M VND
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-zinc-50 font-semibold mb-3">Phương pháp & Nguồn hệ số phát thải</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { key: "Chuẩn kiểm kê", val: "GHG Protocol Corporate Accounting Standard" },
              { key: "Hệ số điện lưới Việt Nam", val: "0.8712 kgCO₂e/kWh — Bộ TN&MT 2024" },
              { key: "Hệ số diesel", val: "2.567 kgCO₂e/lít — IPCC AR6 2021" },
              { key: "Hệ số LPG", val: "2.154 kgCO₂e/kg — IPCC AR6 2021" },
              { key: "Hệ số vận tải", val: "0.1195 kgCO₂e/tkm — GLEC 2023" },
              { key: "Phạm vi báo cáo", val: "Operational control approach" },
            ].map((r) => (
              <div key={r.key} className="flex justify-between gap-2 py-2 border-b border-zinc-800 last:border-0">
                <span className="text-zinc-500 text-xs">{r.key}</span>
                <span className="text-zinc-300 text-xs text-right font-mono">{r.val}</span>
              </div>
            ))}
          </div>
          <p className="text-zinc-600 text-xs mt-4">
            ⚠️ Báo cáo này là dữ liệu mô phỏng cho mục đích demo — không phải kiểm kê thực tế.
            Carbon Action · Demo MVP · Gen G 2026 · GreenU
          </p>
        </div>
      </div>
    </div>
  );
}
