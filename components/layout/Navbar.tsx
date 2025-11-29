"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "SaaS", href: "/saas" },
  { label: "E-commerce", href: "/ecommerce" },
  { label: "Sites institucionais", href: "/sites-institucionais" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shellStyles = isScrolled
    ? "border-b border-white/10 bg-[#05070f]/80 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
    : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${shellStyles}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-white"
          aria-label="Pagina inicial Ateliux"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
            A
          </span>
          <div className="leading-tight">
            <span className="block text-sm text-slate-200">Ateliux</span>
            <span className="block text-xs text-primary">Experiencias digitais</span>
          </div>
        </Link>

        <nav className="hidden flex-nowrap items-center justify-center gap-6 text-sm text-slate-200/90 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-1 transition hover:text-white hover:underline underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-nowrap items-center gap-3">
          <Link
            href="/portfolio"
            className="hidden whitespace-nowrap rounded-full border border-primary/50 px-4 py-2 text-sm font-medium text-white transition hover:border-primary hover:bg-primary/10 lg:inline-flex"
          >
            Ver portfolio
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
          >
            Falar com o time
          </Link>
        </div>
      </div>
    </header>
  );
}
