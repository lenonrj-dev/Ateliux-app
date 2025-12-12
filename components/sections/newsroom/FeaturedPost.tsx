"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

import { hoverLift, itemFadeUp, tapPress } from "@/components/motion/presets";

export type FeaturedPostProps = {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
};

export function FeaturedPost({ title, category, date, description, image }: FeaturedPostProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href="#"
        variants={itemFadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        whileHover={hoverLift}
        whileTap={tapPress}
        className="group grid w-full overflow-hidden rounded-3xl border border-white/5 bg-[#0b1120] shadow-[0_20px_80px_-70px_rgba(255,255,255,0.25)] transition md:grid-cols-[1.05fr,0.95fr]"
      >
        <div className="flex flex-col justify-between gap-4 p-8 md:p-10">
          <div className="space-y-3">
            <p className="text-sm text-slate-300">{category}</p>
            <h2 className="text-3xl font-semibold leading-tight text-white">{title}</h2>
            <p className="text-base text-slate-300">{description}</p>
          </div>
          <p className="text-sm text-slate-400">{date}</p>
        </div>
        <div className="relative h-64 w-full overflow-hidden md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </m.a>
    </LazyMotion>
  );
}
