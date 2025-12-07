"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";

const productLinks = [
  { label: "SaaS", href: "/saas", description: "Plataforma completa para produtos digitais." },
  { label: "Ecommerce", href: "/ecommerce", description: "Lojas headless e checkouts otimizados." },
  { label: "Sites institucionais", href: "/sites-institucionais", description: "Presenca premium e conteudo editorial." },
  { label: "Landing pages", href: "/landing-pages", description: "LPs de alta conversao, testes rapidos e pixels." },
  { label: "Portfolio", href: "/portfolio", description: "Casos reais de SaaS, ecommerce e sites." },
  { label: "Blog (produto)", href: "/blog-produto", description: "SEO editorial, CRM e automacoes para conteudo." },
];

const navItems = [
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [productsPinned, setProductsPinned] = useState(false);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const handleProductsMouseLeave = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (productsPinned) return;
    const next = e.relatedTarget as Node | null;
    if (!productsRef.current?.contains(next)) setProductsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (productsOpen && target && !productsRef.current?.contains(target)) {
        setProductsOpen(false);
        setProductsPinned(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [productsOpen]);

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
          <Link
            href="/"
            className="whitespace-nowrap rounded-full px-3 py-1 transition hover:text-white hover:underline underline-offset-8"
          >
            Inicio
          </Link>
          <Link
            href="/sobre"
            className="whitespace-nowrap rounded-full px-3 py-1 transition hover:text-white hover:underline underline-offset-8"
          >
            Sobre
          </Link>
          <div
            className="relative"
            ref={productsRef}
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={handleProductsMouseLeave}
            onFocus={() => setProductsOpen(true)}
            onBlur={(e) => {
              const next = e.relatedTarget as Node | null;
              if (!productsPinned && !productsRef.current?.contains(next)) setProductsOpen(false);
            }}
          >
            <button
              type="button"
              ref={triggerRef}
              className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 transition hover:text-white hover:underline underline-offset-8"
              aria-haspopup="true"
              aria-expanded={productsOpen}
              onClick={() => {
                setProductsOpen(true);
                setProductsPinned(true);
              }}
              onKeyDown={(e) => {
                if (["Enter", " "].includes(e.key)) {
                  e.preventDefault();
                  setProductsOpen((v) => !v);
                  setProductsPinned(false);
                  itemRefs.current[0]?.focus();
                }
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setProductsOpen(true);
                  itemRefs.current[0]?.focus();
                }
              }}
            >
              Produtos
              <span className={`text-[10px] transition ${productsOpen ? "rotate-180" : ""}`}>v</span>
            </button>
            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#050b16]/95 shadow-[0_20px_60px_-30px_rgba(0,223,255,0.6)] backdrop-blur">
                <div className="border-b border-white/5 px-4 py-3 text-xs uppercase tracking-[0.2em] text-primary/80">
                  Produtos
                </div>
                <div className="flex flex-col divide-y divide-white/5">
                  {productLinks.map((item, idx) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={(el) => {
                        itemRefs.current[idx] = el;
                      }}
                      className="flex flex-col gap-1 px-4 py-3 text-left transition hover:bg-primary/10 focus:outline-none focus-visible:bg-primary/10"
                      onClick={() => {
                        setProductsOpen(false);
                        setProductsPinned(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Escape") {
                          e.preventDefault();
                          setProductsOpen(false);
                          setProductsPinned(false);
                          triggerRef.current?.focus();
                        }
                        if (e.key === "ArrowDown") {
                          e.preventDefault();
                          const next = (idx + 1) % productLinks.length;
                          itemRefs.current[next]?.focus();
                        }
                        if (e.key === "ArrowUp") {
                          e.preventDefault();
                          const prev = (idx - 1 + productLinks.length) % productLinks.length;
                          itemRefs.current[prev]?.focus();
                        }
                      }}
                    >
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                      <span className="text-xs text-slate-300/80">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
      <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto px-6 pb-3 text-sm text-slate-200/90 lg:hidden">
        {[
          { label: "Inicio", href: "/" },
          { label: "Sobre", href: "/sobre" },
          { label: "Produtos", href: "/saas" },
          ...navItems,
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full border border-white/10 px-3 py-1 transition hover:border-primary/60 hover:bg-primary/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
