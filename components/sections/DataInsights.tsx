import Image from "next/image";

export function DataInsights() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020308] px-6 pb-20 pt-12 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Insights de dados
          </p>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            Decisoes <span className="text-primary">mais inteligentes</span>
          </h3>
          <p className="text-base text-slate-300/85">
            A partir de dados em tempo real e visualizacoes claras, a Ateliux ajuda seu time a decidir com
            confianca e reduzir incertezas.
          </p>
          <ul className="space-y-3 text-sm text-slate-200/85">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_-4px_rgba(0,223,255,1)]" aria-hidden />
              <div>
                <p className="font-semibold text-white">Visualizacao abrangente</p>
                <p className="text-slate-300/75">
                  Transforme datasets complexos em graficos e dashboards intuitivos para o board.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_15px_-4px_rgba(0,223,255,1)]" aria-hidden />
              <div>
                <p className="font-semibold text-white">Modelagem preditiva</p>
                <p className="text-slate-300/75">
                  Use analises preditivas para prever tendencias, mitigar riscos e antecipar oportunidades.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-[#0a0f18] shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)]">
            <Image
              src="/Analityc.png"
              alt="Painel analitico ciano da Ateliux"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
