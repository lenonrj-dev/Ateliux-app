"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

import { hoverLift, itemFadeUp, staggerContainer, tapPress } from "@/components/motion/presets";

export type PostCard = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
};

export function NewsPostsGrid({ posts }: { posts: PostCard[] }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post, idx) => (
          <m.a
            key={post.title}
            variants={itemFadeUp}
            transition={{ delay: idx * 0.03 }}
            whileHover={hoverLift}
            whileTap={tapPress}
            href="#"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#0b1120] transition hover:border-primary/30 hover:shadow-[0_20px_70px_-60px_rgba(0,223,255,0.4)]"
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 320px, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.05]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <p className="text-xs text-slate-300">
                {post.category} - {post.date}
              </p>
              <h3 className="text-lg font-semibold leading-snug text-white">{post.title}</h3>
              <p className="text-sm text-slate-300/90">{post.description}</p>
            </div>
          </m.a>
        ))}
      </m.section>
    </LazyMotion>
  );
}
