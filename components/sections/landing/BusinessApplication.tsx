"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

import { hoverLift, itemFadeUp, staggerContainer, tapPress } from "@/components/motion/presets";

const features = [
  {
    title: "Insights de clientes",
    description: "Analise as interacoes dos clientes em todos os pontos de contato com o seu produto.",
    icon: "/icone_config.png",
  },
  {
    title: "Metricas de produto",
    description: "Acompanhe o desempenho do seu produto em tempo real com dashboards ciano.",
    icon: "/icone_grafico.png",
  },
  {
    title: "Otimizacao de campanhas",
    description: "Meca o sucesso das campanhas com taxas de conversao e engajamento consistentes.",
    icon: "/icone_alvo.png",
  },
];

export function BusinessApplication() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020308] px-6 py-20 lg:px-8">
      <LazyMotion features={domAnimation}>
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 text-center"
        >
          <m.button
            variants={itemFadeUp}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur"
          >
            Controle total das suas demandas
          </m.button>

          <div className="space-y-4">
            <m.h2 variants={itemFadeUp} className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Aplicacao de negocios <span className="text-primary">Ateliux</span>
            </m.h2>
            <m.p variants={itemFadeUp} className="text-base text-slate-300/80 sm:text-lg">
              Nossos clientes adoram como a Ateliux simplifica processos, conecta dados e acelera a entrega
              de produtos digitais.
            </m.p>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <m.article
                key={feature.title}
                variants={itemFadeUp}
                transition={{ delay: 0.05 * index }}
                whileHover={hoverLift}
                whileTap={tapPress}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/[0.02] p-6 text-left shadow-[0_20px_70px_-45px_rgba(0,0,0,0.8)] ring-1 ring-transparent transition hover:border-primary/30 hover:shadow-[0_25px_80px_-50px_rgba(0,223,255,0.45)] hover:ring-primary/30"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-70" />
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    <Image
                      src={feature.icon}
                      alt={`Icone ${feature.title}`}
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </span>
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300/80">{feature.description}</p>
              </m.article>
            ))}
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
