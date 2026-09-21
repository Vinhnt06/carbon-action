import Link from "next/link";
import {
  Gauge,
  Crosshair,
  Sliders,
  Shield,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeatureBento() {
  const emissionsData = [52, 47, 55, 58, 61, 54, 49, 53, 50, 56, 59, 41];

  return (
    <section id="features" className="py-28 bg-[#0f1416] relative overflow-hidden">
      {/* Background ambient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <span>Đột Phá Công Nghệ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-50 leading-[1.1]">
              Tính năng thiết kế cho <span className="gradient-emerald font-serif italic font-normal">quyết định</span>, không chỉ báo cáo
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Không dừng ở việc tính toán — Carbon Action tự động kết nối dữ liệu từ chuỗi cung ứng với các phương án giảm thải khả thi nhất.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid — Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cell 1 — Large: Dashboard */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <div className="double-bezel rounded-[2.5rem] p-8 bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-emerald-500/40 transition-all group h-full flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                        <Gauge size={20} className="text-emerald-400" weight="duotone" />
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Module 01</span>
                    </div>
                    <h3 className="text-zinc-50 font-bold text-2xl tracking-tight">Carbon Dashboard</h3>
                    <p className="text-zinc-400 text-sm mt-1 max-w-md leading-relaxed">
                      Toàn bộ bức tranh phát thải trên 1 màn hình trực quan — tổng quan, xu hướng theo tháng và phân rã theo Scope 1, 2, 3.
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="hidden sm:inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-4 py-2 rounded-full transition-all"
                  >
                    <span>Mở Dashboard</span> <ArrowRight size={12} weight="bold" />
                  </Link>
                </div>

                {/* Mini dashboard viz preview */}
                <div className="bg-[#131a1e] border border-white/[0.06] rounded-2xl p-5 space-y-4 shadow-xl mt-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Scope 1", val: "180t", color: "emerald" },
                      { label: "Scope 2", val: "320t", color: "cyan" },
                      { label: "Scope 3", val: "95t", color: "violet" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className={`rounded-xl p-3 ${
                          s.color === "emerald"
                            ? "bg-emerald-500/10 border border-emerald-500/20"
                            : s.color === "cyan"
                            ? "bg-cyan-500/10 border border-cyan-500/20"
                            : "bg-violet-500/10 border border-violet-500/20"
                        }`}
                      >
                        <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-wider">{s.label}</p>
                        <p
                          className={`font-bold font-mono text-base mt-0.5 ${
                            s.color === "emerald"
                              ? "text-emerald-400"
                              : s.color === "cyan"
                              ? "text-cyan-400"
                              : "text-violet-400"
                          }`}
                        >
                          {s.val}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                      <span>Phát thải 12 tháng (tCO₂e)</span>
                      <span className="font-mono text-emerald-400">Target -15%</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {emissionsData.map((v, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all duration-300 hover:opacity-100"
                          style={{
                            height: `${(v / 65) * 100}%`,
                            background: i === emissionsData.length - 1 ? "#10b981" : "rgba(255, 255, 255, 0.08)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Cell 2 — Hotspot */}
          <ScrollReveal delay={200}>
            <div className="double-bezel rounded-[2.5rem] p-8 bg-gradient-to-b from-amber-500/[0.03] to-transparent border-amber-500/20 hover:border-amber-500/40 transition-all h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-6">
                  <Crosshair size={20} className="text-amber-400" weight="duotone" />
                </div>
                <h3 className="text-zinc-50 font-bold text-2xl tracking-tight mb-2">Carbon Hotspot</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Tự động phát hiện chính xác nguồn phát thải trọng yếu nhất để doanh nghiệp tập trung nguồn lực can thiệp.
                </p>
              </div>

              {/* Hotspot mini viz */}
              <div className="bg-[#131a1e] border border-amber-500/20 rounded-2xl p-4 space-y-3">
                {[
                  { name: "Điện lưới tiêu thụ", pct: 44.5, color: "emerald" },
                  { name: "Nhiên liệu Diesel", pct: 15.9, color: "amber" },
                  { name: "Khí Gas lò nướng", pct: 11.4, color: "cyan" },
                ].map((h) => (
                  <div key={h.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-zinc-300 font-medium">{h.name}</span>
                      <span className="text-xs font-mono text-amber-400 font-bold">{h.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-zinc-800/80 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          h.color === "emerald"
                            ? "bg-emerald-500"
                            : h.color === "amber"
                            ? "bg-amber-400"
                            : "bg-cyan-500"
                        }`}
                        style={{ width: `${h.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Cell 3 — Action Simulator */}
          <ScrollReveal delay={300}>
            <div className="double-bezel rounded-[2.5rem] p-8 bg-gradient-to-b from-cyan-500/[0.03] to-transparent border-cyan-500/20 hover:border-cyan-500/40 transition-all h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-6">
                  <Sliders size={20} className="text-cyan-400" weight="duotone" />
                </div>
                <h3 className="text-zinc-50 font-bold text-2xl tracking-tight mb-2">Action Simulator</h3>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Nhập ngân sách đầu tư → nhận ngay đề xuất danh mục hành động giảm carbon có ROI & Payback cao nhất.
                </p>
              </div>

              <div>
                {/* Mini ROI preview */}
                <div className="bg-[#131a1e] border border-cyan-500/20 rounded-2xl p-4 space-y-3 mb-4">
                  {[
                    { name: "Solar 100kWp", co2: "78t", payback: "4.3 năm", bar: 82 },
                    { name: "Inverter biến tần", co2: "42t", payback: "3.2 năm", bar: 95 },
                    { name: "Đổi LED nhà máy", co2: "14t", payback: "2.0 năm", bar: 60 },
                  ].map((r) => (
                    <div key={r.name} className="flex items-center justify-between gap-2">
                      <span className="text-xs text-zinc-300 w-28 truncate">{r.name}</span>
                      <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-cyan-400"
                          style={{ width: `${r.bar}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono text-cyan-400 font-semibold w-14 text-right">{r.payback}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/simulator"
                  className="inline-flex items-center gap-2 text-cyan-400 text-xs font-semibold hover:text-cyan-300 transition-colors"
                >
                  <span>Chạy Simulator Chi Tiết</span> <ArrowRight size={12} weight="bold" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Cell 4 — Transparent EF */}
          <ScrollReveal delay={400} className="md:col-span-2">
            <div className="double-bezel rounded-[2.5rem] p-8 bg-gradient-to-r from-emerald-950/30 via-white/[0.02] to-transparent border-emerald-500/20 hover:border-emerald-500/40 transition-all h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                    <Shield size={20} className="text-emerald-400" weight="duotone" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">Độ Tin Cậy Cao</span>
                </div>
                <h3 className="text-zinc-50 font-bold text-2xl tracking-tight mb-2">Hệ Số Phát Thải Minh Bạch 100%</h3>
                <p className="text-zinc-400 text-sm max-w-xl leading-relaxed mb-6">
                  Mọi phép tính trong Carbon Action đều gắn chặt với bộ hệ số phát thải chuẩn quốc tế và Việt Nam. Truy xuất được nguồn gốc và năm cập nhật.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { ef: "0.8712 kgCO₂e/kWh", src: "Bộ TN&MT Việt Nam (2024)" },
                  { ef: "2.567 kgCO₂e/L", src: "IPCC AR6 Guidelines (2021)" },
                  { ef: "0.1195 kgCO₂e/tkm", src: "GLEC Framework (2023)" },
                ].map((r) => (
                  <div key={r.ef} className="bg-[#131a1e] border border-white/[0.06] rounded-2xl p-4">
                    <p className="text-xs font-mono text-emerald-400 font-bold">{r.ef}</p>
                    <p className="text-[11px] text-zinc-500 mt-1">{r.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Cell 5 — Report */}
          <ScrollReveal delay={500} className="md:col-span-3">
            <div className="double-bezel rounded-[2.5rem] p-8 bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-white/20 transition-all">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <svg viewBox="0 0 32 32" className="w-7 h-7 text-emerald-400" fill="currentColor">
                    <path d="M6 4h13l7 7v17H6V4zm12 0v8h8" fillOpacity="0" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 16h12M10 20h8M10 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-zinc-50 font-bold text-xl">Xuất Báo Cáo Carbon Chuẩn Kiểm Toán</h3>
                  <p className="text-zinc-400 text-sm mt-0.5">
                    Tạo báo cáo chi tiết phục vụ hồ sơ vay vốn xanh, kiểm toán ESG hoặc nộp cho đối tác mua hàng quốc tế.
                  </p>
                </div>
              </div>
              <Link
                href="/report"
                className="flex-shrink-0 inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-zinc-100 font-semibold px-6 py-3 rounded-full text-xs transition-all border border-white/10"
              >
                <span>Xem Báo Cáo Mẫu</span>
                <ArrowRight size={14} weight="bold" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

