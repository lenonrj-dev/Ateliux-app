import Link from "next/link";

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent px-6 pb-16 pt-20 lg:px-8 lg:pb-20 lg:pt-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-slate-100 shadow-[0_15px_45px_-30px_rgba(0,223,255,0.7)]">
          Resposta media em ate 24h uteis
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Fale com a <span className="text-primary">Ateliux</span>
          </h1>
          <p className="text-lg text-slate-200/85">
            Canal oficial para novos projetos, parcerias B2B, suporte e manutencao. Conte-nos o que voce
            precisa e retornaremos rapidamente.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200/80">
          <Link
            href="#contato-form"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
          >
            Descrever meu projeto
          </Link>
          <Link
            href="#contato-canais"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-primary/50 hover:bg-primary/10"
          >
            Ver canais diretos
          </Link>
        </div>
      </div>
    </section>
  );
}
