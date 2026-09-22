"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, List, X, ArrowRight } from "@phosphor-icons/react";

const navLinks = [
  { label: "Tính năng", href: "/#features" },
  { label: "Dashboard Demo", href: "/dashboard" },
  { label: "Mô phỏng", href: "/simulator" },
  { label: "Báo cáo", href: "/report" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <div className="glass-pill rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300 border border-white/[0.1] shadow-2xl shadow-black/80">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center group-hover:bg-emerald-500/30 group-hover:scale-105 transition-all">
            <Leaf className="text-emerald-400" size={16} weight="fill" />
          </div>
          <span className="font-semibold text-zinc-50 tracking-tight text-sm sm:text-base">
            Carbon<span className="text-emerald-400">Action</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="group px-4 py-1.5 text-xs font-semibold rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
          >
            <span>Xem Demo</span>
            <ArrowRight size={12} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-zinc-50 rounded-full hover:bg-white/[0.05]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 glass-pill rounded-3xl p-4 border border-white/[0.1] space-y-2 animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm text-zinc-300 hover:text-emerald-400 hover:bg-white/[0.05] rounded-full transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2.5 text-sm font-semibold text-center rounded-full bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors"
            >
              Xem Demo Ngay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

