import Link from "next/link";
import { Check, ArrowRight, Sparkle } from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "12",
    period: "triệu / năm",
    description: "Lý tưởng cho SME bắt đầu kiểm kê carbon & làm quen tiêu chuẩn",
    highlight: false,
    features: [
      "Tối đa 3 nguồn phát thải chính",
      "Carbon Dashboard tiêu chuẩn",
      "Báo cáo PDF hàng năm",
      "Kiểm kê Scope 1 & Scope 2",
      "Hỗ trợ qua Email & Document",
    ],
    cta: "Chọn Gói Starter",
  },
  {
    name: "Professional",
    price: "30",
    period: "triệu / năm",
    description: "Đầy đủ tính năng cho doanh nghiệp quản lý & cắt giảm carbon chủ động",
    highlight: true,
    features: [
      "Không giới hạn nguồn phát thải",
      "Dashboard chuyên sâu + Hotspot Alert",
      "Giả lập đầu tư theo ngân sách",
      "Kiểm kê Scope 1, Scope 2 & Scope 3",
      "Lập Action Plan chi tiết theo quý",
      "Xuất báo cáo PDF + Excel kiểm toán",
      "Hỗ trợ kỹ thuật ưu tiên 24/7",
    ],
    cta: "Dùng Thử Phổ Biến Nhất",
  },
  {
    name: "Enterprise",
    price: "60–120",
    period: "triệu / năm",
    description: "Giải pháp tùy biến toàn diện cho tập đoàn nhiều nhà máy và KCN",
    highlight: false,
    features: [
      "Tất cả tính năng của gói Professional",
      "Quản lý Multi-site (nhiều nhà máy)",
      "API kết nối hệ thống ERP / MES",
      "Tích hợp đơn vị kiểm toán ESG độc lập",
      "Tùy chỉnh hệ số phát thải theo ngành",
      "Chuyên gia cố vấn riêng đồng hành",
      "Cam kết SLA 99.9% Uptime",
    ],
    cta: "Liên Hệ Tư Vấn",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#0f1416] relative overflow-hidden">
      {/* Background glow behind middle card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <span>Đầu Tư Thông Minh</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-50 leading-[1.1]">
              Bảng Giá Thuê Bao <span className="gradient-emerald font-serif italic font-normal">Minh Bạch</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              Mô hình B2B SaaS theo năm tối ưu chi phí. Tối ưu hóa chi phí vận hành và thu hồi vốn đầu tư chỉ từ{" "}
              <span className="text-zinc-100 font-semibold underline decoration-emerald-500/40">năm đầu tiên</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={100 + index * 100}>
              <div
                className={`relative rounded-[2.5rem] p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.highlight
                    ? "double-bezel double-bezel-emerald md:-translate-y-4 shadow-2xl shadow-emerald-500/20 bg-gradient-to-b from-emerald-950/40 via-[#0c0c0e] to-[#08080a]"
                    : "double-bezel bg-white/[0.015] hover:border-white/20"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-emerald-500 text-zinc-950 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1.5 shadow-lg shadow-emerald-500/30 uppercase font-mono tracking-wide">
                      <Sparkle size={12} weight="fill" />
                      Lựa Chọn Ưu Việt
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-8">
                    <h3 className="text-zinc-50 font-bold text-2xl mb-2 tracking-tight">{plan.name}</h3>
                    <p className="text-zinc-400 text-xs min-h-[32px] leading-relaxed">{plan.description}</p>
                    <div className="mt-6 flex items-baseline gap-1.5">
                      <span className="text-5xl font-bold font-mono text-zinc-50 tracking-tight">{plan.price}</span>
                      <span className="text-zinc-400 text-xs font-medium">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8 border-t border-white/[0.06] pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlight ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-zinc-400"}`}>
                          <Check size={12} weight="bold" />
                        </div>
                        <span className="text-zinc-300 text-xs leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/dashboard"
                  className={`w-full py-3.5 rounded-full text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    plan.highlight
                      ? "bg-emerald-500 hover:bg-emerald-400 text-zinc-950 shadow-emerald-500/20 hover:scale-[1.02]"
                      : "border border-white/10 hover:border-white/30 text-zinc-200 hover:bg-white/5"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Setup & Partnership Info */}
        <ScrollReveal delay={400}>
          <div className="mt-12 double-bezel rounded-3xl p-6 bg-white/[0.01] text-center max-w-3xl mx-auto">
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              <span className="text-emerald-400 font-semibold">Phí Setup Ban Đầu:</span> 5 – 15 triệu / lần (khởi tạo kho dữ liệu & chuẩn hóa nguồn)
              <span className="mx-2 text-zinc-700">|</span>
              <span className="text-cyan-400 font-semibold">Đối Tác Tư Vấn ESG:</span> Chiết khấu 10 – 15% cho đơn vị giới thiệu
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

