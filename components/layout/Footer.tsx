import Link from "next/link";
import {
  GithubLogo,
  Leaf,
  EnvelopeSimple,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

const footerLinks = {
  product: [
    { label: "Dashboard Demo", href: "/dashboard" },
    { label: "Giả lập đầu tư", href: "/simulator" },
    { label: "Báo cáo Carbon", href: "/report" },
  ],
  company: [
    { label: "Về Carbon Action", href: "/#about" },
    { label: "Tính năng", href: "/#features" },
    { label: "Bảng giá", href: "/#pricing" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Leaf className="text-emerald-400" size={16} weight="fill" />
              </div>
              <span className="font-semibold text-zinc-50 tracking-tight">
                Carbon<span className="text-emerald-400">Action</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Nền tảng ra quyết định giảm phát thải carbon cho doanh nghiệp SME
              - từ đo lường đến hành động có ROI rõ ràng.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-xs text-zinc-600 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1">
                Gen G 2026
              </span>
              <span className="text-xs text-zinc-600 bg-zinc-900 border border-zinc-800 rounded-full px-3 py-1">
                GreenU
              </span>
              <span className="text-xs text-emerald-600 bg-emerald-500/5 border border-emerald-500/20 rounded-full px-3 py-1">
                Demo MVP
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-zinc-50 text-sm font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-zinc-50 text-sm font-semibold mb-4">Dự án</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:carbonaction@example.com"
                  className="text-zinc-500 hover:text-emerald-400 text-sm transition-colors flex items-center gap-1"
                >
                  <EnvelopeSimple size={14} />
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © 2025 Carbon Action. Demo prototype — Dữ liệu mô phỏng cho mục đích trình bày.
          </p>
          <p className="text-zinc-700 text-xs">
            Xây dựng cho cuộc thi{" "}
            <span className="text-zinc-500">Đại sứ Gen G 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
