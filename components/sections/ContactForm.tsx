"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

const businessSizes = ["Autonomo", "Pequena empresa", "Media empresa", "Grande empresa"];
const projectTypes = [
  "SaaS",
  "Site institucional",
  "E-commerce",
  "Dashboard / Painel",
  "Blog",
  "Landing page",
  "Outro",
];
const budgets = ["ate R$ 5.000", "R$ 5.000 – R$ 15.000", "acima de R$ 15.000"];

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setState("loading");
    setMessage("");

    const payload = Object.fromEntries(formData.entries());

    if (!payload.nome || !payload.email || !payload.projeto) {
      setState("error");
      setMessage("Preencha nome, e-mail e tipo de projeto.");
      return false;
    }

    const email = String(payload.email);
    if (!email.includes("@") || !email.includes(".")) {
      setState("error");
      setMessage("Insira um e-mail valido.");
      return false;
    }

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar");
      }

      setState("success");
      setMessage("Recebemos seu contato. Responderemos em ate 24h uteis.");
      return true;
    } catch (error) {
      console.error(error);
      setState("error");
      setMessage("Nao foi possivel enviar agora. Tente novamente em instantes.");
      return false;
    }
  }

  return (
    <section id="contato-form" className="relative isolate bg-transparent px-6 pb-20 lg:px-8">
      <div className="relative mx-auto grid max-w-6xl gap-10 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] lg:grid-cols-[1.05fr,0.95fr] lg:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Briefing rapido
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Conte-nos sobre o seu projeto
          </h2>
          <p className="text-base text-slate-300/85">
            Preencha os campos e enviaremos uma resposta personalizada com prazos, estimativas e o proximo
            passo. Mantemos tudo em ciano: claro, direto e seguro.
          </p>
          <ul className="space-y-2 text-sm text-slate-300/80">
            <li>• Atendimento 24/7 para clientes ativos e SLAs dedicados.</li>
            <li>• Times multidisciplinares para SaaS, e-commerce, sites e landing pages.</li>
            <li>• Suporte na definicao de escopo, integrações e roadmap.</li>
          </ul>
        </div>

        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const ok = await handleSubmit(data);
            if (ok) {
              form.reset();
            }
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Nome completo*
              <input
                name="nome"
                required
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="Ana Silva"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              E-mail*
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="contato@empresa.com"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Empresa
              <input
                name="empresa"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="Nome da empresa (opcional)"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Tamanho do negocio
              <select
                name="porte"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                defaultValue={businessSizes[1]}
              >
                {businessSizes.map((size) => (
                  <option key={size} value={size} className="bg-[#0a0f18]">
                    {size}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Tipo de projeto*
              <select
                name="projeto"
                required
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                defaultValue=""
              >
                <option value="" disabled className="bg-[#0a0f18] text-slate-400">
                  Selecione
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-[#0a0f18]">
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Orcamento estimado
              <select
                name="orcamento"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                defaultValue=""
              >
                <option value="" className="bg-[#0a0f18] text-slate-400">
                  Escolha uma faixa
                </option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget} className="bg-[#0a0f18]">
                    {budget}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Prazo desejado
              <input
                name="prazo"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="Ex.: 4-8 semanas"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-200">
              Como nos conheceu?
              <input
                name="referencia"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
                placeholder="Indicacao, redes sociais, pesquisa..."
              />
            </label>
          </div>

          <label className="flex flex-col gap-2 text-sm text-slate-200">
            Descricao do projeto / ideia
            <textarea
              name="descricao"
              rows={4}
              className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/30"
              placeholder="Contexto, objetivo, publico, funcionalidades-chave e integrações desejadas."
            />
          </label>

          <label className="flex items-start gap-3 text-sm text-slate-200/90">
            <input
              type="checkbox"
              name="consentimento"
              className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-2 focus:ring-primary/40"
            />
            <span>
              Autorizo contato da Ateliux e concordo com a politica de privacidade para andamento do projeto.
            </span>
          </label>

          <button
            type="submit"
            disabled={state === "loading"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)] disabled:opacity-70"
          >
            {state === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Enviar proposta
              </>
            )}
          </button>

          {state === "success" && (
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <CheckCircle className="h-4 w-4" /> {message || "Recebemos seu contato."}
            </p>
          )}
          {state === "error" && (
            <p className="text-sm font-semibold text-[#ff6b6b]">
              {message || "Ocorreu um erro. Tente novamente."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
