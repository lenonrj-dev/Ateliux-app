const faqs = [
  {
    question: "Quanto tempo leva para iniciar um projeto?",
    answer:
      "Após o briefing e validacao de escopo, iniciamos em 3 a 7 dias uteis. Para demandas urgentes, temos squads disponiveis para aceleracao.",
  },
  {
    question: "Vocês atendem clientes fora do Brasil?",
    answer:
      "Sim. Atendemos equipes no Brasil, EUA e Europa com times remotos e fuso adaptado. Toda documentacao e contratos podem ser feitos digitalmente.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Modelos flexiveis: escopo fechado, pacotes mensais ou horas controladas. Aceitamos pagamento em moeda local e emitimos NFe.",
  },
  {
    question: "Vocês fazem manutenção continua?",
    answer:
      "Sim. Oferecemos planos de suporte e evolucao continua, incluindo SRE, otimização de performance, melhorias de UX e roadmap conjunto.",
  },
  {
    question: "Podem apoiar na definicao de roadmap e produto?",
    answer:
      "Ajudamos em discovery, priorizacao e desenho de arquitetura para SaaS, e-commerce, sites e landing pages.",
  },
];

export function ContactFAQ() {
  return (
    <section className="relative isolate bg-transparent px-6 pb-20 lg:px-8">
      <div className="relative mx-auto max-w-5xl space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">FAQ</p>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">Duvidas frequentes</h3>
          <p className="text-base text-slate-300/85">
            Se nao encontrar sua pergunta aqui, fale conosco pelo formulario ou WhatsApp.
          </p>
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
          {faqs.map((item, idx) => (
            <div key={item.question} className="p-5 first:rounded-t-2xl last:rounded-b-2xl">
              <p className="text-base font-semibold text-white">{item.question}</p>
              <p className="mt-2 text-sm text-slate-300/85">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
