import Image from "next/image";

export type PostCard = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
};

export function NewsPostsGrid({ posts }: { posts: PostCard[] }) {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <a
          key={post.title}
          href="#"
          className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#0b1120] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_70px_-60px_rgba(255,255,255,0.3)]"
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
            <h3 className="text-lg font-semibold text-white leading-snug">{post.title}</h3>
            <p className="text-sm text-slate-300/90">{post.description}</p>
          </div>
        </a>
      ))}
    </section>
  );
}
