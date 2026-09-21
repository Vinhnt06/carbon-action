import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon Action — Nền tảng Ra Quyết Định Giảm Phát Thải Carbon",
  description:
    "Carbon Action giúp doanh nghiệp SME chuyển từ 'biết mình phát thải' sang 'biết cần hành động ở đâu' — thông qua dữ liệu, phân tích hotspot và mô phỏng ROI.",
  keywords: [
    "carbon action",
    "carbon management",
    "ESG",
    "giảm phát thải",
    "CO2",
    "SME",
    "SaaS",
  ],
  openGraph: {
    title: "Carbon Action",
    description: "Nền tảng Ra Quyết Định Giảm Phát Thải Carbon cho Doanh Nghiệp",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
