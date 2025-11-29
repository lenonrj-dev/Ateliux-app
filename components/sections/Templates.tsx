import Image from "next/image";

const cards = [
  {
    title: "Relatorio de Performance",
    description: "Use nosso template de Performance Review para mostrar analises detalhadas.",
    image: "/card_grafico.png",
  },
  {
    title: "Kit de Onboarding",
    description: "Simplifique onboarding com o nosso Client Onboarding Kit completo.",
    image: "/card_welcome.png",
  },
  {
    title: "Deck de Vendas",
    description: "Apresente propostas com clareza usando o Sales Pitch Deck Ateliux.",
    image: "/grafico_desempenho.png",
  },
];

export function Templates() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020308] px-6 py-20 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
          Controle total dos seus templates
        </button>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Templates prontos para <span className="text-primary">vendas aceleradas</span>
          </h2>
          <p className="max-w-3xl text-base text-slate-300/85">
            Use os templates da Ateliux para apresentar analises detalhadas, conduzir onboarding e criar
            propostas com visual ciano que converte.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_90px_-55px_rgba(0,223,255,0.5)]"
            >
              <div className="relative h-64 w-full bg-[#0a0f18]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-5 text-left">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-slate-300/80">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
          >
            Comecar agora
          </a>
        </div>
      </div>
    </section>
  );
}
