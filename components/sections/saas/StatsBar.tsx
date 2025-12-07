const stats = [
  { label: "Clientes SaaS e B2B", value: "100+" },
  { label: "Disponibilidade", value: "99.99%" },
  { label: "Usuarios atendidos", value: "99M+" },
];

export function StatsBar() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-10 rounded-2xl border border-cyan-300/10 bg-[#050c14]/60 px-6 py-6 text-center">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-1">
          <p className="text-3xl font-semibold text-white">{stat.value}</p>
          <p className="text-sm text-slate-300/80">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
