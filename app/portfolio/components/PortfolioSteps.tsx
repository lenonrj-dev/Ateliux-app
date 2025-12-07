const steps = [
  {
    title: "Escolha o tipo de projeto",
    desc: "Site, landing, ecommerce, dashboard ou automacao com IA.",
  },
  {
    title: "Receba uma primeira sugestao",
    desc: "Definimos estrutura, integracoes e foco de conversao.",
  },
  {
    title: "Alinhe com o time Ateliux",
    desc: "Ajustamos requisitos, UX e conteudo para seu mercado.",
  },
  {
    title: "Publicacao guiada",
    desc: "Publicamos, monitoramos e otimizamos performance e SEO.",
  },
];

export function PortfolioSteps() {
  return (
    <section className="bg-[#0b0e15] px-6 pb-12 pt-10 lg:px-8">
      <div className="mx-auto mt-20 max-w-6xl space-y-8">
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/5 bg-[#0d1018] p-5 text-left shadow-[0_20px_60px_-50px_rgba(0,0,0,0.8)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-slate-200">
                {idx + 1}
              </div>
              <p className="text-base font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-sm text-slate-300/80">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap mb-20 items-center justify-center gap-3">
          <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0b0f18] shadow-[0_10px_40px_-25px_rgba(255,255,255,0.6)] transition hover:translate-y-[-1px]">
            Ver sugest\u00e3o agora
          </button>
          <button className="rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:translate-y-[-1px]">
            Falar com vendas
          </button>
        </div>
      </div>
    </section>
  );
}
