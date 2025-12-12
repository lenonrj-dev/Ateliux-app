"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

export default function BlogLoading() {
  return (
    <div className="mx-auto flex max-w-[1180px] flex-col gap-12 px-6 pb-24 pt-20 lg:px-8">
      <LazyMotion features={domAnimation}>
        <div className="space-y-6">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            className="h-16 w-full rounded-[32px] bg-white/5"
          />
          <m.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.06 } }}
            className="h-12 w-1/2 max-w-[320px] rounded-full bg-white/5"
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <m.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 } }}
              className="h-64 rounded-3xl border border-white/10 bg-white/5"
            >
              <div className="h-2/3 rounded-3xl bg-white/5" />
              <div className="space-y-2 px-4 py-3">
                <div className="h-4 w-3/4 rounded bg-white/10" />
                <div className="h-3 w-full rounded bg-white/10" />
              </div>
            </m.div>
          ))}
        </div>
      </LazyMotion>
    </div>
  );
}
