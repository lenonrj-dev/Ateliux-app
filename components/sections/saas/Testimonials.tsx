const testimonials = [
  {
    name: "Sofia Mendes",
    role: "CPO, Retail SaaS",
    text: "A Ateliux entregou um painel completo com metricas em tempo recorde. Performance e seguranca impecaveis.",
  },
  {
    name: "Rafael Duarte",
    role: "CTO, Fintech B2B",
    text: "Integracoes criticas, auditoria e observabilidade desde o primeiro sprint. Operacao estavel em dias.",
  },
  {
    name: "Luiza Prado",
    role: "Head de Produto, HealthTech",
    text: "UX clara, onboarding suave e automacoes com IA supervisionada. Adocao interna disparou.",
  },
  {
    name: "Carlos Lima",
    role: "Founder, MarTech",
    text: "Camada de dados bem construida, escalabilidade e time dedicado que entende negocio.",
  },
  {
    name: "Ana Bezerra",
    role: "COO, Industria",
    text: "Squad Ateliux operando como time interno, com SLAs ageis e entregas continuas.",
  },
  {
    name: "Tiago Souza",
    role: "VP Engenharia, Marketplace",
    text: "Camada de APIs robusta, testes e seguranca by design. Zero downtime no go live.",
  },
];

export function Testimonials() {
  return (
    <section className="space-y-6 text-center">
      <h3 className="text-2xl font-semibold text-white">O que clientes dizem</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-cyan-300/15 bg-[#061018]/70 px-5 py-4 text-left shadow-[0_15px_60px_-50px_rgba(0,223,255,0.6)]"
          >
            <p className="text-xs text-cyan-200/80">Nota 5.0</p>
            <p className="mt-3 text-sm text-slate-200/90">{item.text}</p>
            <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
            <p className="text-xs text-slate-400">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
