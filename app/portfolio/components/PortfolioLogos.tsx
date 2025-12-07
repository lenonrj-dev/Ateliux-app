const logos = ["AInea", "SONY", "RankMath", "NVIDIA", "Peers", "Alibaba", "VirtualPay", "NorthOne"];

export function PortfolioLogos() {
  return (
    <section className="bg-[#05070d] px-6 pb-12 pt-6 mt-30 text-center lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <p className="text-base text-slate-300/90">
          Portfolio de projetos digitais da Ateliux, criado para ser seu parceiro <span className="text-white">estrategico</span> em{" "}
          <span className="text-white">sites institucionais</span>, <span className="text-white">landing pages de conversao</span>,{" "}
          <span className="text-white">ecommerces completos</span>, <span className="text-white">dashboards</span> e{" "}
          <span className="text-white">automacoes com IA</span> usando React.js e Tailwind CSS.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-200/80">
          {logos.map((logo) => (
            <span
              key={logo}
              className="rounded-full border border-white/5 bg-white/5 px-4 py-2 text-slate-200/70 backdrop-blur transition hover:text-white"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
