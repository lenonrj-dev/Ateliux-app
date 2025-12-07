import { Cpu, Rocket, Rows, Sparkles, ShieldCheck, Workflow } from "lucide-react";

const features = [
  {
    title: "Sites e landings orientados a resultado.",
    desc: "Arquitetura, SEO tecnico, performance e copy focada em conversao.",
    icon: Sparkles,
  },
  {
    title: "Ecommerce pronto para operar.",
    desc: "Checkout otimizado, gateways, antifraude, frete e analytics conectados.",
    icon: Rocket,
  },
  {
    title: "Dashboards e paineis de gestao.",
    desc: "Metricas operacionais, KPIs e alertas com integracao a APIs e bases.",
    icon: Rows,
  },
  {
    title: "Seguranca e governanca.",
    desc: "Padroes de autenticacao, perfis de acesso e boas praticas desde o dia 1.",
    icon: ShieldCheck,
  },
  {
    title: "Automacoes e agentes de IA.",
    desc: "Fluxos para WhatsApp/Instagram, webhooks e integracoes para marketing e atendimento.",
    icon: Workflow,
  },
  {
    title: "Experiencia completa Ateliux.",
    desc: "Design system, conteudo e publicacao assistida com acompanhamento inicial.",
    icon: Cpu,
  },
];

export function PortfolioFeatures() {
  return (
    <section className="bg-[#05070d] px-6 pb-20 pt-12 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col mt-30 items-center gap-3 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]">
          O portfolio que entrega valor digital rapido
        </h2>
        <p className="text-sm text-slate-300/85 sm:text-base">
          Projetos pensados para gerar autoridade, conversao e operacao integrada, com suporte inicial incluso.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-[#0b0f18] p-5 text-left shadow-[0_20px_60px_-45px_rgba(0,0,0,0.8)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/8 text-white">
              <feature.icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-base font-semibold text-white">{feature.title}</p>
            <p className="text-sm text-slate-300/85">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
