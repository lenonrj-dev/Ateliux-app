"use client";

type Item = {
  label: string;
  icon: string;
};

const items: Item[] = [
  { label: "SaaS B2B", icon: "SB" },
  { label: "E-commerce", icon: "EC" },
  { label: "Landing pages", icon: "LP" },
  { label: "Sites institucionais", icon: "SI" },
  { label: "Blogs e docs", icon: "BD" },
  { label: "Automacao", icon: "AU" },
];

export function LogosStrip() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020308] px-6 py-14 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/80">
          Portfolio Ateliux
        </p>
        <div className="logos-marquee w-full overflow-hidden">
          <div className="logos-track">
            {[...items, ...items, ...items].map((item, index) => {
              const isHighlight = index % items.length === 2;
              return (
                <div
                  key={`${item.label}-${index}`}
                  className={`flex mt-2 min-w-[150px] items-center justify-center gap-2 rounded-full px-3 py-2 text-sm transition ${
                    isHighlight
                      ? "bg-white/10 text-white shadow-[0_0_28px_-14px_rgba(0,223,255,0.8)] ring-1 ring-primary/40"
                      : "bg-white/5 text-slate-300/80"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold tracking-wide ${
                      isHighlight ? "bg-primary/15 text-primary" : "bg-white/5 text-slate-200/70"
                    }`}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .logos-marquee {
          position: relative;
        }

        .logos-track {
          display: flex;
          align-items: center;
          gap: 18px;
          width: max-content;
          animation: logos-marquee 26s linear infinite;
          will-change: transform;
        }

        @keyframes logos-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
