import Image from "next/image";

export type FeaturedPostProps = {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
};

export function FeaturedPost({ title, category, date, description, image }: FeaturedPostProps) {
  return (
    <a
      href="#"
      className="group grid w-full overflow-hidden rounded-3xl bg-[#0b1120] transition duration-300 hover:scale-[1.01] hover:shadow-[0_25px_80px_-70px_rgba(255,255,255,0.35)] md:grid-cols-[1.05fr,0.95fr]"
    >
      <div className="flex flex-col justify-between gap-4 p-8 md:p-10">
        <div className="space-y-3">
          <p className="text-sm text-slate-300">{category}</p>
          <h2 className="text-3xl font-semibold text-white leading-tight">{title}</h2>
          <p className="text-base text-slate-300">{description}</p>
        </div>
        <p className="text-sm text-slate-400">{date}</p>
      </div>
      <div className="relative h-64 w-full md:h-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 500px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
    </a>
  );
}
