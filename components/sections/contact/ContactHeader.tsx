import Image from "next/image";
import { Github, Instagram, Linkedin, MessageCircle, Sparkles } from "lucide-react";

const socials = [Linkedin, Github, MessageCircle, Instagram];

type ContactPrefill = {
  service?: string;
  goal?: string;
  complexity?: string;
  sales?: boolean;
  enabled?: boolean;
};

export function ContactHeader({ prefill }: { prefill: ContactPrefill }) {
  const hasProject = prefill?.service || prefill?.goal || prefill?.complexity || prefill?.sales;

  return (
    <section className="relative isolate w-screen overflow-hidden pb-16 pt-24 text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero_bg_ciano.png"
          alt="Brilho de fundo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/10 via-[#050508]/45 to-[#050508]/80" />
      </div>

      <div className="mx-auto flex max-w-[960px] flex-col items-center px-6 lg:px-8">
        <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
          Fale com a
          <br />
          Ateliux
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-200/85">
          Conte para nos o que voce precisa. Organizamos seu projeto e retornamos rapidamente com os proximos passos.
        </p>

        {hasProject && (
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-[#0f0f10]/70 px-4 py-2 text-xs text-white shadow-[0_0_12px_rgba(255,255,255,0.06)]">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span>Projeto pre preenchido a partir do portfolio</span>
            {prefill?.service && <span className="rounded-full bg-white/10 px-2 py-1">Servico: {prefill.service}</span>}
            {prefill?.goal && <span className="rounded-full bg-white/10 px-2 py-1">Objetivo: {prefill.goal}</span>}
            {prefill?.complexity && (
              <span className="rounded-full bg-white/10 px-2 py-1">Complexidade: {prefill.complexity}</span>
            )}
            {prefill?.sales && <span className="rounded-full bg-white/10 px-2 py-1">Falar com vendas</span>}
          </div>
        )}

        <div className="mt-6 flex items-center gap-3">
          {socials.map((Icon, idx) => (
            <span
              key={idx}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f0f10]/80 text-white shadow-[inset_0_0_12px_rgba(255,255,255,0.08)]"
            >
              <Icon className="h-4 w-4 opacity-70" />
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-white">
          <span className="rounded-full bg-[#0f0f10]/80 px-4 py-2 shadow-[0_0_12px_rgba(255,255,255,0.06)]">
            hello@ateliux.com
          </span>
          <span className="rounded-full bg-[#0f0f10]/80 px-4 py-2 shadow-[0_0_12px_rgba(255,255,255,0.06)]">
            +55 11 99999 0000
          </span>
        </div>
      </div>
    </section>
  );
}
