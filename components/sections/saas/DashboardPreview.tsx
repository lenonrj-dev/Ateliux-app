import Image from "next/image";

const logos = ["Operacao", "Board", "Marketing", "Suporte", "Dados", "Produto", "CX"];

export function DashboardPreview() {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-[18px] border border-cyan-300/15 bg-[#030814] shadow-[0_25px_90px_-70px_rgba(0,223,255,0.4)]">
        <div className="bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 px-6 py-3 text-left text-xs uppercase tracking-[0.15em] text-cyan-200/80">
          Dashboards e agentes em producao
        </div>
        <div className="relative h-[760px] w-full bg-black/40">
          <Image
            src="/SAAS.png"
            alt="Dashboard de gestao e automacoes Ateliux"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030814]/30 to-[#030814]" />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] uppercase tracking-[0.3em] text-cyan-200/70">
        {logos.map((logo, idx) => (
          <span key={`${logo}-${idx}`} className="opacity-80">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
