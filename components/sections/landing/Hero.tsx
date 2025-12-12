"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { hoverLift, itemFadeUp, staggerContainer, tapPress } from "@/components/motion/presets";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-screen items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Image
        src="/hero_bg_ciano.png"
        alt="Fundo espacial em ciano da Ateliux"
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020308]/70 via-[#020308]/35 to-[#020308]/85" />

      <LazyMotion features={domAnimation}>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 pb-24 pt-40 text-center lg:px-8 lg:pb-28 lg:pt-44"
        >
          <m.div
            variants={itemFadeUp}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-[0_15px_45px_-25px_rgba(0,223,255,0.8)] backdrop-blur"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-[12px] font-bold text-primary ring-1 ring-primary/30">
              +
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-200">
              Solucoes em SaaS
            </span>
          </m.div>

          <div className="max-w-4xl space-y-6">
            <m.h1
              variants={itemFadeUp}
              id="hero-title"
              className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
            >
              Desenvolvimento de sites, ecommerces e
              <span className="block text-primary">produtos digitais com IA</span>
            </m.h1>
            <m.p
              variants={itemFadeUp}
              className="text-lg text-slate-200/85 sm:text-xl"
            >
              A Ateliux cria sites institucionais, landing pages de alta conversao, ecommerces completos,
              dashboards personalizados e automacoes com IA, sempre com performance, SEO tecnico e design ciano.
            </m.p>
          </div>

          <m.div variants={itemFadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <m.div whileHover={hoverLift} whileTap={tapPress} transition={{ duration: 0.2 }}>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Falar com o time
              </Link>
            </m.div>
            <m.div whileHover={hoverLift} whileTap={tapPress} transition={{ duration: 0.2 }}>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-primary/60 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Ver portfolio
              </Link>
            </m.div>
          </m.div>

          <m.div
            variants={itemFadeUp}
            className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200/80"
          >
            {[
              "SaaS sob medida",
              "Arquitetura escalavel",
              "Sprints ageis",
              "SEO tecnico e analytics",
              "Automacoes com IA",
            ].map((item) => (
              <m.span
                key={item}
                whileHover={hoverLift}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                {item}
              </m.span>
            ))}
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
