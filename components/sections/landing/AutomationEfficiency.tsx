import Image from "next/image";

export function AutomationEfficiency() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020308] px-6 py-20 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="mx-auto w-full max-w-[520px] rounded-3xl bg-white/[0.03] p-3 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)]">
            <Image
              src="/card_analityc_corte.png"
              alt="Grafico de eficiencia operacional Ateliux"
              width={820}
              height={560}
              className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover"
              priority={false}
            />
          </div>
          <div className="mx-auto max-w-[520px] space-y-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
              Automatize tarefas
            </p>
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              Eficiencia operacional <span className="text-primary">elevada</span>
            </h3>
            <p className="text-base text-slate-300/85">
              Com a visao clara dos dados, identificamos gargalos e automatizamos fluxos para reduzir
              desperdicios e acelerar entregas.
            </p>
            <ul className="space-y-3 text-sm text-slate-200/85">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_-4px_rgba(0,223,255,1)]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Coleta de dados automatizada</p>
                  <p className="text-slate-300/75">
                    Reduza erros manuais com capturas automatizadas e pipelines monitorados.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_-4px_rgba(0,223,255,1)]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Otimizacao de workflow</p>
                  <p className="text-slate-300/75">
                    Identifique e elimine ineficiencias com alertas, playbooks e automacoes ciano.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="mx-auto max-w-[520px] space-y-4 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
              Insights de clientes
            </p>
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">
              Satisfacao <span className="text-primary">amplificada</span>
            </h3>
            <p className="text-base text-slate-300/85">
              Construa experiencias sob medida a partir do comportamento real dos usuarios e tome decisoes
              com dados em tempo real.
            </p>
            <ul className="space-y-3 text-sm text-slate-200/85">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_-4px_rgba(0,223,255,1)]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Visao personalizada</p>
                  <p className="text-slate-300/75">
                    Entenda preferencias e interacoes de cada cliente para direcionar campanhas e produto.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_-4px_rgba(0,223,255,1)]" aria-hidden />
                <div>
                  <p className="font-semibold text-white">Analise de sentimento</p>
                  <p className="text-slate-300/75">
                    Monitore feedback em tempo real e reaja rapido com melhorias dirigidas.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-auto w-full max-w-[520px] rounded-3xl bg-white/[0.03] p-3 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)]">
            <Image
              src="/grafico_pizza.png"
              alt="Grafico de satisfacao do cliente Ateliux"
              width={820}
              height={620}
              className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
