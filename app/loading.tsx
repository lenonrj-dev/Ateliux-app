"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

const shimmer = "from-white/10 via-primary/30 to-white/5";

export default function Loading() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020308] text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-6 top-8 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-10 right-8 h-28 w-36 rounded-full bg-white/5 blur-3xl" />
      </div>

      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="relative flex w-[320px] flex-col items-center gap-5 rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] backdrop-blur"
        >
          <m.div
            initial={{ scale: 0.9, opacity: 0.6 }}
            animate={
              reduceMotion
                ? { opacity: 1, scale: 1 }
                : {
                    opacity: [0.6, 1, 0.6],
                    scale: [0.96, 1.04, 0.96],
                    transition: { repeat: Infinity, duration: 1.6, ease: "easeInOut" },
                  }
            }
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-lg font-bold text-primary ring-1 ring-primary/40"
          >
            A
          </m.div>
          <div className="space-y-2 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300/80">Ateliux</p>
            <p className="text-sm text-slate-300">Preparando a proxima experiencia digital</p>
          </div>
          <div className="flex w-full flex-col gap-2">
            {[0, 1, 2].map((idx) => (
              <m.div
                key={idx}
                initial={{ width: "0%" }}
                animate={
                  reduceMotion
                    ? { width: "100%" }
                    : {
                        width: ["0%", "80%", "35%", "100%"],
                        transition: { repeat: Infinity, duration: 2.4, delay: idx * 0.1, ease: "easeInOut" },
                      }
                }
                className="h-2 w-full overflow-hidden rounded-full bg-white/10"
              >
                <div className={`h-full w-full bg-gradient-to-r ${shimmer}`} />
              </m.div>
            ))}
          </div>
        </m.div>
      </LazyMotion>
    </div>
  );
}
