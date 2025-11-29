"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { DocEntry } from "@/app/docs/data";

type DocsSidebarProps = {
  entries: DocEntry[];
  query: string;
  setQuery: (value: string) => void;
};

export function DocsSidebar({ entries, query, setQuery }: DocsSidebarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeSlug = pathname?.split("/docs/")[1] || "visao-geral-ateliux";

  const filtered = useMemo(() => {
    if (!query) return entries;
    const q = query.toLowerCase();
    return entries.filter(
      (item) =>
        item.title.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || item.category.toLowerCase().includes(q),
    );
  }, [entries, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, DocEntry[]>();
    filtered
      .slice()
      .sort((a, b) => a.order - b.order)
      .forEach((item) => {
        const list = map.get(item.category) || [];
        list.push(item);
        map.set(item.category, list);
      });
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <aside className="w-full lg:w-72">
      <div className="mb-4 flex items-center gap-3 lg:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />} Menu
        </button>
        <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar na doc"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>

      <div className={`lg:block ${open ? "block" : "hidden"}`}>
        <div className="hidden rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white lg:block">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar na doc"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
          </div>
        </div>

        <nav className="mt-4 space-y-6 text-sm text-slate-200">
          {grouped.map(([category, items]) => (
            <div key={category} className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{category}</p>
              <div className="space-y-1">
                {items.map((item) => {
                  const active = activeSlug === item.slug;
                  return (
                    <Link
                      key={item.slug}
                      href={`/docs/${item.slug}`}
                      className={`block rounded-lg px-3 py-2 transition ${
                        active
                          ? "bg-primary/10 text-white ring-1 ring-primary/40"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-[12px] text-slate-400">{item.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
