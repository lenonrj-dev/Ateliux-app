import type { ReactNode } from "react";

type DocsContentProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function DocsContent({ title, description, children }: DocsContentProps) {
  return (
    <article className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] sm:p-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
        {description && <p className="text-base text-slate-300/85">{description}</p>}
      </header>
      <div className="prose prose-invert prose-headings:text-white prose-p:text-slate-200/90 prose-a:text-primary prose-strong:text-white max-w-none">
        {children}
      </div>
    </article>
  );
}
