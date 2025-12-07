import Image from "next/image";
import { Cpu, Layers, Shield, Zap } from "lucide-react";

type PriceCard = {
  title: string;
  price: string;
  detail: string;
};

type FeatureCard = {
  title: string;
  desc: string;
  icon?: typeof Zap;
};

type Step = {
  title: string;
  desc: string;
};

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

type Tag = string;

export function ProductHero({
  tag,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  priceCards,
}: {
  tag: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  priceCards: PriceCard[];
}) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-cyan-400/15 bg-[#040915] px-6 py-12 text-center shadow-[0_30px_90px_-60px_rgba(0,223,255,0.45)] lg:px-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,223,255,0.3),transparent_45%),radial-gradient(circle_at_20%_0%,rgba(0,223,255,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(0,223,255,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-300/15 via-[#040915]/50 to-[#040915]" />
      </div>
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">{tag}</p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-[2.6rem]">{title}</h1>
      <p className="mt-3 text-sm text-cyan-50/80">{subtitle}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-[#021019] shadow-[0_0_25px_-10px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_35px_-8px_rgba(0,223,255,1)]">
          {ctaPrimary}
        </button>
        <button className="rounded-full border border-cyan-300/40 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-200/70 hover:bg-cyan-300/10">
          {ctaSecondary}
        </button>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {priceCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-cyan-300/20 bg-white/5 px-4 py-3 text-left text-sm text-slate-100 shadow-[0_20px_70px_-55px_rgba(0,223,255,0.4)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">{card.title}</p>
            <p className="text-cyan-200 font-semibold">{card.price}</p>
            <p className="text-cyan-100/85">{card.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductPreview({
  title,
  imageSrc,
  imageAlt,
  logos,
}: {
  title: string;
  imageSrc: string;
  imageAlt: string;
  logos: string[];
}) {
  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-[18px] border border-cyan-300/15 bg-[#030814] shadow-[0_25px_90px_-70px_rgba(0,223,255,0.4)]">
        <div className="bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 px-6 py-3 text-left text-xs uppercase tracking-[0.15em] text-cyan-200/80">
          {title}
        </div>
        <div className="relative h-[760px] w-full bg-black/40">
          <Image
            src={imageSrc}
            alt={imageAlt}
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

export function ProductFeatures({ cards }: { cards: FeatureCard[] }) {
  const withIcons = cards.map((card, idx) => ({
    ...card,
    icon: card.icon || [Zap, Cpu, Shield, Layers][idx % 4],
  }));

  return (
    <section className="space-y-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Camada de entregas</h3>
      <div className="relative overflow-hidden rounded-[22px] border border-cyan-300/10 bg-[#040b13]/70 p-6 shadow-[0_20px_80px_-70px_rgba(0,223,255,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,223,255,0.08),transparent_55%)]" />
        <div className="relative grid gap-4 md:grid-cols-2">
          {withIcons.map((card) => (
            <div
              key={card.title}
              className="rounded-[18px] border border-cyan-300/15 bg-[#050f17]/80 p-5 text-left shadow-[0_12px_45px_-40px_rgba(0,223,255,0.4)]"
            >
              <card.icon className="h-5 w-5 text-cyan-300" />
              <p className="mt-3 text-sm font-semibold text-white">{card.title}</p>
              <p className="text-sm text-slate-300/85">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductProcess({ steps }: { steps: Step[] }) {
  return (
    <section className="space-y-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Como entregamos</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="rounded-[18px] border border-cyan-300/12 bg-[#050c14]/80 p-5 text-left shadow-[0_12px_45px_-40px_rgba(0,223,255,0.35)]"
          >
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/20 text-sm font-semibold text-cyan-50">
              {idx + 1}
            </div>
            <p className="text-sm font-semibold text-white">{step.title}</p>
            <p className="text-sm text-slate-300/85">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ProductHighlight({
  heading,
  description,
  tags,
}: {
  heading: string;
  description: string;
  tags: Tag[];
}) {
  return (
    <section className="relative overflow-hidden rounded-[22px] border border-cyan-300/12 bg-[#040a12]/80 p-6 text-center shadow-[0_20px_80px_-70px_rgba(0,223,255,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,223,255,0.12),transparent_55%)]" />
      <div className="relative space-y-4">
        <h3 className="text-2xl font-semibold text-white">{heading}</h3>
        <p className="text-sm text-slate-200/85">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cyan-200/80">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductTestimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="space-y-6 text-center">
      <h3 className="text-2xl font-semibold text-white">Depoimentos</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-cyan-300/15 bg-[#061018]/70 px-5 py-4 text-left shadow-[0_15px_60px_-50px_rgba(0,223,255,0.6)]"
          >
            <div className="flex items-center gap-2 text-xs text-cyan-200/80">
              <span>*****</span>
              <span className="text-slate-400">5.0</span>
            </div>
            <p className="mt-3 text-sm text-slate-200/90">{item.text}</p>
            <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
            <p className="text-xs text-slate-400">{item.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
