const faqs = [
  { q: "Quanto tempo para iniciar um projeto?", a: "Em media de 3 a 7 dias uteis apos briefing e validacao de escopo." },
  { q: "Voces atendem fora do Brasil?", a: "Sim, atendemos EUA e Europa com times remotos e fusos adaptados." },
  { q: "Fazem manutencao continua?", a: "Oferecemos planos de suporte, evolucao e SRE conforme necessidade." },
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
          {faqs.map((item) => (
            <div key={item.q} className="p-5 first:rounded-t-2xl last:rounded-b-2xl">
              <p className="text-base font-semibold text-white">{item.q}</p>
              <p className="mt-2 text-sm text-slate-300/85">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
