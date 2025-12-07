type ContactPrefill = {
  service?: string;
  goal?: string;
  complexity?: string;
  sales?: boolean;
  enabled?: boolean;
};

export function ContactFormSection({ prefill }: { prefill: ContactPrefill }) {
  const introMensagem = prefill?.enabled
    ? `Projeto: ${prefill.service || "Projeto Ateliux"}${prefill.goal ? ` | Objetivo: ${prefill.goal}` : ""}${
        prefill.complexity ? ` | Complexidade: ${prefill.complexity}` : ""
      }`
    : "";
  const mensagemPadrao = prefill?.enabled
    ? `Quero avancar com ${prefill.service || "um projeto"}${prefill.goal ? ` focado em ${prefill.goal}` : ""}${
        prefill.complexity ? `, complexidade ${prefill.complexity}` : ""
      }.`
    : "";

  return (
    <section className="w-full bg-transparent pb-16 text-center">
      <p className="text-lg text-white">
        Estamos prontos para entender seu projeto. Preencha seus dados e retornaremos com proximos passos rapidos.
      </p>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-[680px] rounded-[10px] border border-[#1b1b1b] bg-[#111111]">
          <div className="space-y-3 p-4 text-left">
            {prefill?.enabled && (
              <div className="space-y-2 rounded-[8px] border border-white/10 bg-white/5 px-3 py-3 text-xs text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-300">
                  Projeto pre preenchido
                </p>
                <div className="flex flex-wrap gap-2">
                  {prefill.service && <span className="rounded-full bg-white/10 px-2 py-1">Servico: {prefill.service}</span>}
                  {prefill.goal && <span className="rounded-full bg-white/10 px-2 py-1">Objetivo: {prefill.goal}</span>}
                  {prefill.complexity && (
                    <span className="rounded-full bg-white/10 px-2 py-1">Complexidade: {prefill.complexity}</span>
                  )}
                  {prefill.sales && <span className="rounded-full bg-white/10 px-2 py-1">Falar com vendas</span>}
                </div>
                <p className="text-slate-200/80">
                  Ajuste se desejar. Mantivemos apenas seus dados pessoais em branco para voce completar.
                </p>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Nome completo *</label>
              <input
                className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                placeholder="Ex.: Ana Silva"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Email *</label>
              <input
                className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                placeholder="Ex.: contato@empresa.com"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Telefone *</label>
              <input
                className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                placeholder="Ex.: +55 11 90000-0000"
                type="tel"
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Servico</label>
                <input
                  className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                  placeholder="Selecione um servico"
                  defaultValue={prefill?.service || ""}
                  readOnly
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Objetivo</label>
                <input
                  className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                  placeholder="Qual o objetivo?"
                  defaultValue={prefill?.goal || ""}
                  readOnly
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Complexidade</label>
              <input
                className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                placeholder="Simples, intermediaria ou avancada"
                defaultValue={prefill?.complexity || ""}
                readOnly
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] uppercase tracking-[0.08em] text-slate-400">Mensagem</label>
              <textarea
                rows={4}
                className="w-full rounded-[6px] border border-[#1f1f1f] bg-[#141414] px-3 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none"
                placeholder="Conte o que voce precisa, prazos e restricoes."
                defaultValue={[introMensagem, mensagemPadrao].filter(Boolean).join(" - ")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center gap-3">
        <label className="flex items-center gap-2 text-xs text-slate-300/80">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-[#2a2a2a] bg-[#0f0f0f] text-white focus:ring-1 focus:ring-white/40"
          />
          Concordo com o tratamento dos meus dados pessoais.
        </label>
        <button className="flex h-9 items-center justify-center rounded-full bg-white px-5 text-xs font-semibold text-black shadow-[0_8px_25px_-12px_rgba(0,0,0,0.8)]">
          Enviar
        </button>
      </div>
    </section>
  );
}
