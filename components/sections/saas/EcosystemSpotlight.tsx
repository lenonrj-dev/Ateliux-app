const ecosystem = [
  { title: "SwiftSwap", desc: "Pagamentos e reconciliacao com dashboards em tempo real." },
  { title: "AirForge", desc: "Orquestracao de dados e IA com supervisao humana." },
  { title: "WaveBridge", desc: "Integracoes B2B seguras com observabilidade." },
  { title: "VectorVault", desc: "Governanca e acesso granular para times distribuidos." },
  { title: "Stack61", desc: "Design system escalavel e performance otimizada." },
  { title: "DataHub", desc: "Pipelines, ETL e relatorios executivos." },
];

export function EcosystemSpotlight() {
  return (
    <section className="space-y-5 text-center">
      <h3 className="text-xl font-semibold text-white">Ecosystem Spotlight</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {ecosystem.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-cyan-300/10 bg-[#070f18]/70 p-5 text-left shadow-[0_15px_60px_-50px_rgba(0,223,255,0.4)]"
          >
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-2 text-sm text-slate-300/85">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
