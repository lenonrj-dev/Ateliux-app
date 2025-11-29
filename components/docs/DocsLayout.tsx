"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { DocEntry } from "@/app/docs/data";
import { DocsSidebar } from "./DocsSidebar";

type DocsLayoutProps = {
  entries: DocEntry[];
  children: ReactNode;
};

export function DocsLayout({ entries, children }: DocsLayoutProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="relative isolate bg-transparent px-6 pb-16 pt-20 lg:px-8 lg:pt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
        <DocsSidebar entries={entries} query={query} setQuery={setQuery} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
