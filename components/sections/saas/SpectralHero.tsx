export function SpectralHero() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[#040915] px-6 py-12 text-center shadow-[0_30px_90px_-60px_rgba(0,223,255,0.45)] lg:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,223,255,0.3),transparent_45%),radial-gradient(circle_at_20%_0%,rgba(0,223,255,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,223,255,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/15 via-[#040915]/50 to-[#040915]" />
      </div>
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Dashboards e automacoes</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]">
        Dashboards personalizados e agentes de IA supervisionada
      </h1>
      <p className="mt-3 text-sm text-cyan-50/80">
        Dados, integracoes e automacoes com estetica ciano, observabilidade e acompanhamento inicial para seu
        time operar com seguranca e clareza.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-[#021019] shadow-[0_0_25px_-10px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_35px_-8px_rgba(0,223,255,1)]">
          Falar com especialista
        </button>
        <button className="rounded-full border border-cyan-300/40 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/70 hover:bg-cyan-300/10">
          Ver casos
        </button>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-left text-sm text-slate-100 shadow-[0_20px_70px_-55px_rgba(0,223,255,0.4)]">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Dashboards e paineis</p>
          <p className="text-cyan-200 font-semibold">A partir de R$ 3.500,00</p>
          <p className="text-cyan-100/85">
            Acompanhamento inicial de 45 dias para ajustar metricas, campos, filtros e usabilidade diaria.
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-left text-sm text-slate-100 shadow-[0_20px_70px_-55px_rgba(0,223,255,0.4)]">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Automacoes e agentes de IA</p>
          <p className="text-cyan-200 font-semibold">A partir de R$ 2.000,00</p>
          <p className="text-cyan-100/85">
            30 dias monitorando fluxos, mensagens e gatilhos para otimizar respostas e reduzir falhas.
          </p>
        </div>
      </div>
    </section>
  );
}
