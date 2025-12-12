"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Docs", href: "/docs" },
];

const mobileQuickLinks = [
  { label: "Produtos", href: "/saas" },
  ...navItems,
];

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [productsPinned, setProductsPinned] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  useEffect(() => {
    setProductsOpen(false);
    setProductsPinned(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const shellStyles = isScrolled
    ? "border-b border-white/10 bg-[#05070f]/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
    : "bg-transparent";

  return (
    <LazyMotion features={domAnimation}>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${shellStyles}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link
            href="/"
            className="group relative flex items-center gap-2 text-lg font-semibold text-white"
            aria-label="Pagina inicial Ateliux"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 transition group-hover:shadow-[0_0_25px_-12px_rgba(0,223,255,0.9)]">
              A
            </span>
            <div className="leading-tight">
              <span className="block text-sm text-slate-200">Ateliux</span>
              <span className="block text-xs text-primary">Experiencias digitais</span>
            </div>
          </Link>

          <nav className="hidden flex-nowrap items-center justify-center gap-3 text-sm text-slate-200/90 lg:flex">
            {navItems.slice(0, 2).map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <m.div key={item.href} className="relative">
                  {active && (
                    <m.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5"
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <Link
                    href={item.href}
                    className="relative z-10 whitespace-nowrap rounded-full px-3 py-2 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="relative inline-flex items-center gap-1">
                      {item.label}
                      <m.span
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-primary"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </m.div>
              );
            })}

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
              <m.button
                type="button"
                ref={triggerRef}
                whileHover={{ y: -1 }}
                className="relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-slate-200 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                aria-haspopup="true"
                aria-expanded={productsOpen}
                onClick={() => {
                  setProductsOpen((v) => !v);
                  setProductsPinned((v) => !v);
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
                <span className="relative inline-flex items-center gap-1">
                  Produtos
                  <ChevronDown
                    className={`h-3 w-3 transition ${productsOpen ? "rotate-180 text-primary" : "text-slate-400"}`}
                  />
                </span>
                {productsOpen && (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/5"
                    transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                    aria-hidden
                  />
                )}
              </m.button>
              <AnimatePresence>
                {productsOpen && (
                  <m.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full z-50 mt-3 w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#050b16]/95 shadow-[0_20px_60px_-30px_rgba(0,223,255,0.6)] backdrop-blur"
                  >
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
                  </m.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.slice(2).map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <m.div key={item.href} className="relative">
                  {active && (
                    <m.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/5"
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                  <Link
                    href={item.href}
                    className="relative z-10 whitespace-nowrap rounded-full px-3 py-2 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="relative inline-flex items-center gap-1">
                      {item.label}
                      <m.span
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-primary"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </m.div>
              );
            })}
          </nav>

          <div className="hidden flex-nowrap items-center gap-3 lg:flex">
            <Link
              href="/portfolio"
              className="whitespace-nowrap rounded-full border border-primary/50 px-4 py-2 text-sm font-medium text-white transition hover:border-primary hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ver portfolio
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ae9ff]"
            >
              Falar com o time
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ae9ff]"
            >
              Contato
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-[0_10px_40px_-30px_rgba(0,0,0,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
              className="lg:hidden"
            >
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              />
              <m.div
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="fixed left-1/2 top-20 z-50 w-[94vw] max-w-md -translate-x-1/2 space-y-4 rounded-3xl border border-white/10 bg-[#060912]/95 p-5 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.85)] backdrop-blur"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {mobileQuickLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left text-sm font-semibold text-white transition hover:border-primary/60 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                  {productLinks.slice(0, 4).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3 py-2 transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <div className="flex items-center justify-between text-white">
                        <span className="font-semibold">{item.label}</span>
                        <ChevronDown className="h-3.5 w-3.5 -rotate-90 text-primary" />
                      </div>
                      <p className="text-xs text-slate-300/80">{item.description}</p>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/portfolio"
                    className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-medium text-white transition hover:border-primary/60 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Ver portfolio
                  </Link>
                  <Link
                    href="/contato"
                    className="flex-1 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ae9ff]"
                  >
                    Falar com o time
                  </Link>
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
