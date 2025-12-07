const steps = [
  { title: "Discovery e blueprint", desc: "Escopo claro, KPIs, fontes de dados e fluxos de automacao mapeados." },
  { title: "Design e integracoes", desc: "UX dos paineis, conectores, APIs e camadas de seguranca configuradas." },
  { title: "Go live com acompanhamento", desc: "Dashboards e agentes em producao com observabilidade e ajustes iterativos." },
];

export function HowItWorks() {
  return (
    <section className="space-y-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Como entregamos</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="rounded-[18px] border border-cyan-300/12 bg-[#050c14]/80 p-5 text-left shadow-[0_12px_45px_-40px_rgba(0,223,255,0.35)]"
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-semibold text-cyan-50">
              {idx + 1}
            </div>
            <p className="text-sm font-semibold text-white">{step.title}</p>
            <p className="text-sm text-slate-300/85">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
