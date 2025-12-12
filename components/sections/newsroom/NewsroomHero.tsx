"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

import { itemFadeUp, staggerContainer } from "@/components/motion/presets";

type NewsroomHeroProps = {
  title: string;
  description: string;
};

export function NewsroomHero({ title, description }: NewsroomHeroProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto w-full overflow-hidden rounded-[42px] bg-[#0b0b0f] px-10 py-16 text-center shadow-[0_30px_90px_-70px_rgba(0,0,0,0.8)] md:px-16 md:py-20"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero_bg_ciano_contact.svg"
            alt="Fundo Newsroom"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative flex flex-col items-center gap-4">
          <m.h1 variants={itemFadeUp} className="text-5xl font-bold text-white sm:text-6xl">
            {title}
          </m.h1>
          <m.p variants={itemFadeUp} className="max-w-3xl text-base text-slate-300 sm:text-lg">
            {description}
          </m.p>
        </div>
      </m.section>
    </LazyMotion>
  );
}
