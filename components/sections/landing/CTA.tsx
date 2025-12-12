"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { hoverLift, itemFadeUp, staggerContainer, tapPress } from "@/components/motion/presets";

export function CTA() {
  return (
    <section className="relative isolate bg-[#020308] px-6 pb-20 pt-6 lg:px-8">
      <LazyMotion features={domAnimation}>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto flex w-full max-w-6xl justify-center"
        >
          <m.div
            variants={itemFadeUp}
            className="relative w-full overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)]"
            style={{ aspectRatio: "2.2 / 1" }}
          >
            <Image
              src="/hero_bg_ciano.png"
              alt="Fundo ciano Ateliux"
              fill
              priority={false}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020308]/40 via-[#020308]/55 to-[#020308]/70" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-6 text-center sm:px-12">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Inicie seu <span className="text-primary">trial gratuito</span> hoje
              </h2>
              <p className="max-w-2xl text-sm text-slate-200/80 sm:text-base">
                Destrave o potencial completo dos seus dados com a plataforma de SaaS analytics da Ateliux,
                criada para equipes que precisam de velocidade e precisao.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <m.div whileHover={hoverLift} whileTap={tapPress}>
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
                  >
                    Baixar app
                  </Link>
                </m.div>
                <m.div whileHover={hoverLift} whileTap={tapPress}>
                  <Link
                    href="/saas"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-primary/50 hover:bg-primary/10"
                  >
                    Falar com vendas
                  </Link>
                </m.div>
              </div>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
