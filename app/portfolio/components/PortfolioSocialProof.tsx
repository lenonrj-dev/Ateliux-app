import { Github } from "lucide-react";

export function PortfolioSocialProof() {
  return (
    <section className="bg-[#05070d] mb-30 px-6 pb-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a0f18] px-5 py-4 shadow-[0_25px_70px_-50px_rgba(0,0,0,0.9)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="-space-x-3 flex">
              {[0, 1, 2].map((idx) => (
                <span
                  key={idx}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#0a0f18] bg-gradient-to-br from-cyan-200/70 to-blue-500/60 text-sm font-semibold text-[#0b0f18] shadow-[0_10px_25px_-15px_rgba(0,0,0,0.8)]"
                >
                  {["A", "B", "C"][idx]}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Clientes em diferentes segmentos</p>
              <p className="text-xs text-slate-300/80">Sites, lojas, dashboards e automacoes feitos pela Ateliux</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
              <Github className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Codigos e integracoes auditaveis</p>
              <p className="text-xs text-slate-300/80">Repos publicos e privados com padroes de engenharia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
