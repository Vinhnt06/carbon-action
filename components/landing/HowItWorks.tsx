import {
  Database,
  Calculator,
  ChartPie,
  FlowArrow,
  Sliders,
  MapTrifold,
  FileText,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    id: "01",
    icon: Database,
    name: "Carbon Data Center",
    desc: "Tập trung dữ liệu điện, gas, diesel, vận tải, sản lượng & chất thải vào một điểm dữ liệu duy nhất.",
    color: "emerald",
    featured: true,
  },
  {
    id: "02",
    icon: Calculator,
    name: "Carbon Calculator",
    desc: "Tự động quy đổi ra CO₂e theo chuẩn GHG Protocol với hệ số phát thải Việt Nam & quốc tế minh bạch.",
    color: "cyan",
  },
  {
    id: "03",
    icon: ChartPie,
    name: "Carbon Dashboard",
    desc: "Trực quan hóa bức tranh phát thải tổng thể, phân rã Scope 1-2-3 và xu hướng theo thời gian thực.",
    color: "emerald",
  },
  {
    id: "04",
    icon: FlowArrow,
    name: "Carbon Hotspot",
    desc: "Tự động phát hiện 20% nguồn phát thải lớn nhất chiếm 80% tác động để tối ưu nguồn lực.",
    color: "amber",
  },
  {
    id: "05",
    icon: Sliders,
    name: "Action Simulator",
    desc: "Mô phỏng bài toán đầu tư theo ngân sách — so sánh CO₂ cắt giảm, tiết kiệm OPEX và thời gian hoàn vốn.",
    color: "cyan",
  },
  {
    id: "06",
    icon: MapTrifold,
    name: "Action Plan",
    desc: "Lập kế hoạch hành động giảm thải theo quý với mục tiêu đo lường được và KPI phân bổ rõ ràng.",
    color: "emerald",
  },
  {
    id: "07",
    icon: FileText,
    name: "Carbon Report",
    desc: "Xuất báo cáo carbon chuẩn quốc tế phục vụ hồ sơ vay vốn xanh, ESG audit và chuỗi cung ứng.",
    color: "emerald",
  },
];

const colorMap = {
  emerald: {
    icon: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
    badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 bg-[#0f1416] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <span>Quy Trình Khép Kín</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-50 leading-[1.1]">
              7 Bước Từ Dữ Liệu Thô Đến <span className="gradient-emerald font-serif italic font-normal">Hành Động Khả Thi</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Carbon Action không chỉ tính toán con số — chúng tôi kết nối dữ liệu vận hành thành lộ trình giảm thải có hiệu quả kinh tế rõ ràng.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Layout — Featured Step 1 + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Hero Step 1 */}
          <ScrollReveal delay={100} className="lg:col-span-1">
            <div className="double-bezel double-bezel-emerald rounded-[2.5rem] p-8 h-full flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                    <Database size={24} className="text-emerald-400" weight="duotone" />
                  </div>
                  <span className="font-mono text-2xl font-bold text-emerald-400/40 group-hover:text-emerald-400 transition-colors">
                    01
                  </span>
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 rounded-full">
                    Khởi Đầu Chuẩn Xác
                  </span>
                  <h3 className="text-zinc-50 font-bold text-2xl tracking-tight">Carbon Data Center</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Tập trung toàn bộ dữ liệu tiêu thụ điện, dầu diesel, khí gas, cước vận tải và sản lượng nhà máy vào một kho dữ liệu duy nhất.
                  </p>
                </div>
              </div>
              <div className="pt-8 border-t border-emerald-500/20 mt-8 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">Tự động kết nối hóa đơn</span>
                <ArrowRight size={16} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </ScrollReveal>

          {/* Remaining 6 Steps Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.slice(1).map((step, index) => {
              const colors = colorMap[step.color as keyof typeof colorMap];
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.id} delay={150 + index * 50}>
                  <div className="double-bezel rounded-[2rem] p-6 bg-white/[0.015] hover:border-emerald-500/30 transition-all h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-2xl ${colors.bg} border flex items-center justify-center`}>
                          <Icon size={20} className={colors.icon} weight="duotone" />
                        </div>
                        <span className="font-mono text-sm font-bold text-zinc-600 group-hover:text-emerald-400 transition-colors">
                          {step.id}
                        </span>
                      </div>
                      <h3 className="text-zinc-50 font-bold text-lg mb-1.5 tracking-tight">{step.name}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

