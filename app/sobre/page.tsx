import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Sobre - Ateliux | Desenvolvimento de sites ecommerce e automacoes",
  description:
    "Conheca a Ateliux: studio digital que cria sites, landing pages, ecommerce, dashboards e automacoes com IA do conceito ao deploy.",
};

export default function SobrePage() {
  const services = [
    {
      title: "Site institucional profissional",
      desc: "Posiciona a marca, SEO tecnico, performance e conteudo pronto para gerar autoridade e leads.",
    },
    {
      title: "Landing page de alta conversao",
      desc: "LPs modulares com pixels, testes e copy orientada a conversao para lancamentos e captacao.",
    },
    {
      title: "Ecommerce completo",
      desc: "Checkout otimizado, gateways, antifraude, frete e CRM integrados para operar com escala.",
    },
    {
      title: "Dashboards e paineis de gestao",
      desc: "KPIs, alertas e acessos governados para decidir rapido com dados claros e confiaveis.",
    },
    {
      title: "Automacoes e agentes de IA",
      desc: "Fluxos para WhatsApp/Instagram, bots supervisionados e integracoes para atendimento e marketing.",
    },
  ];

  const steps = [
    { title: "Descoberta e briefing", desc: "Entendemos objetivo, publico, canais e restricoes." },
    { title: "Planejamento e arquitetura", desc: "Definimos escopo, integracoes e base tecnica." },
    { title: "Design e experiencia do usuario", desc: "Wireframes, UI ciano e copy orientada a conversao." },
    { title: "Desenvolvimento e integracoes", desc: "Next.js, TypeScript, Tailwind, APIs e automacoes." },
    { title: "Testes, deploy e acompanhamento", desc: "Qualidade, SEO, monitoramento e suporte inicial." },
  ];

  const diferenciais = [
    "Foco em resultado de negocio, conversao e operacao real",
    "Stack moderna: Next.js, TypeScript, Tailwind, automacoes e IA supervisionada",
    "Acompanhamento pos deploy com ajustes finos e monitoramento",
    "Comunicacao clara, sprints curtos e playbooks de entrega",
    "Projetos preparados para escalar com seguranca e observabilidade",
  ];

  const personas = [
    "Pequenos negocios e empresas em crescimento",
    "Empreendedores e criadores que precisam de presenca digital profissional",
    "Lojas online que buscam performance e automacao de vendas",
    "Times de produto que precisam de dashboards e integracoes B2B",
    "Empresas que querem automatizar atendimento e marketing com IA",
  ];

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-28 lg:px-8 lg:pt-32">
        <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0b101a] via-[#080c14] to-[#05070d] p-10 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,223,255,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(90,130,255,0.15),transparent_35%)]" />
          <div className="relative space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Sobre a Ateliux</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Studio digital para sites, ecommerce e automacoes com IA
            </h1>
            <p className="max-w-3xl text-base text-slate-200/90">
              Atuamos do conceito ao deploy criando sites institucionais, landing pages, ecommerce, dashboards,
              automacoes e agentes de IA. Entregamos experiencias rapidas, seguras e prontas para converter,
              com visual ciano e processo claro.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
                aria-label="Falar com a Ateliux"
              >
                Falar com a Ateliux
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-primary/60 hover:bg-primary/10"
              >
                Ver portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-white">Quem somos</h2>
          <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-70px_rgba(0,0,0,0.65)] md:grid-cols-2">
            <p className="text-base text-slate-200/90">
              A Ateliux e um studio de desenvolvimento digital focado em construir projetos sob medida. Unimos
              design moderno, codigo bem estruturado e automacoes inteligentes para acelerar resultados.
            </p>
            <p className="text-base text-slate-200/90">
              Trabalhamos com projetos escalaveis, integracoes claras e arquitetura pronta para crescer. Cada
              entrega vem com acompanhamento inicial para ajustar performance, conversao e operacao diaria.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
          <h2 className="text-3xl font-semibold text-white">O que oferecemos</h2>
          <p className="text-slate-300/85">
            Solucoes completas para presenca digital, vendas e automacao, usando Next.js, TypeScript e IA.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#0a0f18] p-5 shadow-[0_20px_70px_-55px_rgba(0,0,0,0.8)]"
              >
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-white">Como trabalhamos</h2>
            <p className="text-slate-300/85">
              Metodologia em passos claros para entregar rapido com previsibilidade e qualidade.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-[#0c111b] p-5 shadow-[0_18px_60px_-50px_rgba(0,0,0,0.75)]"
              >
                <h3 className="text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300/85">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Nossos diferenciais</h2>
          <div className="rounded-2xl border border-white/10 bg-[#0a0f18] p-6 shadow-[0_20px_70px_-60px_rgba(0,0,0,0.75)]">
            <ul className="space-y-2 text-sm text-slate-200/90">
              {diferenciais.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">Para quem e a Ateliux</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_-55px_rgba(0,0,0,0.75)]">
            <ul className="grid gap-3 md:grid-cols-2">
              {personas.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-200/90">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-3 rounded-[22px] border border-white/10 bg-gradient-to-br from-primary/15 via-[#0a101a] to-[#05070d] p-8 text-center shadow-[0_25px_80px_-65px_rgba(0,0,0,0.8)]">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Pronto para iniciar um projeto?</h2>
          <p className="text-sm text-slate-200/85">
            Vamos planejar seu site, ecommerce, dashboard ou automacao com IA e colocar em producao com seguranca.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
            >
              Quero iniciar um projeto
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-primary/60 hover:bg-primary/10"
            >
              Ver portfolio
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
