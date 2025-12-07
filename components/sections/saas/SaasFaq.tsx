const faqs = [
  { q: "Quanto tempo para lancar um MVP SaaS?", a: "De 4 a 8 semanas, dependendo do escopo e integracoes." },
  { q: "Voces operam como time dedicado?", a: "Sim. Atuamos como squad interno com PO/Tech Lead, designers e engenheiros." },
  { q: "Como funciona a supervisao de IA?", a: "Agentes com validacao humana, logs e revisoes periodicas para garantir seguranca." },
  { q: "Quais SLAs voces oferecem?", a: "Suporte critico 24/7 e tempos de resposta combinados por contrato." },
  { q: "Cuidam de deploy e observabilidade?", a: "Sim. CI/CD, monitoramento, alertas e playbooks fazem parte das entregas." },
];

export function SaasFaq() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-white text-center">Perguntas frequentes</h3>
      <div className="space-y-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="overflow-hidden rounded-xl border border-cyan-300/10 bg-[#060c13]/70 shadow-[0_12px_45px_-40px_rgba(0,223,255,0.4)]"
          >
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60">
              {item.q}
            </summary>
            <div className="px-4 pb-3 text-sm text-slate-300/85">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
