export function WhatIsSpectral() {
  return (
    <section className="relative overflow-hidden rounded-[22px] border border-cyan-300/12 bg-[#040a12]/80 p-6 text-center shadow-[0_20px_80px_-70px_rgba(0,223,255,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,223,255,0.12),transparent_55%)]" />
      <div className="relative space-y-4">
        <h3 className="text-2xl font-semibold text-white">Plataforma Ateliux para dados e IA</h3>
        <p className="text-sm text-slate-200/85">
          Dashboards, automacoes e agentes com IA supervisionada, conectados a APIs e fontes criticas, com
          governanca, observabilidade e UX premium para squads e board.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cyan-200/80">
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">Dashboards</span>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">APIs e ETL</span>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">Observabilidade</span>
          <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">Automacao com IA</span>
        </div>
      </div>
    </section>
  );
}
