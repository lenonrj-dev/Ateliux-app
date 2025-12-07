import { Cpu, Layers, Shield, Zap } from "lucide-react";

const cards = [
  { title: "Dashboards sob medida", desc: "Arquitetura enxuta, dados confiaveis e tempo de resposta rapido.", icon: Zap },
  { title: "Integracoes prontas", desc: "APIs, SDKs e conectores para bancos de dados e SaaS existentes.", icon: Cpu },
  { title: "Seguranca e observabilidade", desc: "Logs, alertas e camadas de redundancia para operar com tranquilidade.", icon: Shield },
  { title: "IA com supervisao humana", desc: "Automacoes com validacao e trilhas de auditoria para cada fluxo.", icon: Layers },
];

export function LayerFeatures() {
  return (
    <section className="space-y-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Camada de dados e IA para operar</h3>
      <div className="relative overflow-hidden rounded-[22px] border border-cyan-300/10 bg-[#040b13]/70 p-6 shadow-[0_20px_80px_-70px_rgba(0,223,255,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,223,255,0.08),transparent_55%)]" />
        <div className="relative grid gap-4 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-[18px] border border-cyan-300/15 bg-[#050f17]/80 p-5 text-left shadow-[0_12px_45px_-40px_rgba(0,223,255,0.4)]"
            >
              <card.icon className="h-5 w-5 text-cyan-300" />
              <p className="mt-3 text-sm font-semibold text-white">{card.title}</p>
              <p className="text-sm text-slate-300/85">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
