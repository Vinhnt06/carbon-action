import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import FeatureBento from "@/components/landing/FeatureBento";
import Pricing from "@/components/landing/Pricing";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureBento />
        <Pricing />

        {/* CTA Section */}
        <section className="py-24 bg-zinc-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-emerald-950/40 to-zinc-900 border border-emerald-500/20 rounded-3xl p-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-50 mb-4">
                Sẵn sàng xem Carbon Action hoạt động?
              </h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
                Khám phá demo tương tác với dữ liệu mô phỏng thực tế của một công ty sản xuất nhựa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-8 py-4 rounded-xl transition-colors"
                >
                  Xem Dashboard Demo
                  <ArrowRight size={16} weight="bold" />
                </Link>
                <Link
                  href="/simulator"
                  className="inline-flex items-center gap-2 border border-zinc-600 hover:border-zinc-400 text-zinc-300 px-8 py-4 rounded-xl transition-colors"
                >
                  Giả lập đầu tư
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
