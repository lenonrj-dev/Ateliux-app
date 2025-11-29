import type { ReactNode } from "react";

type DocsCalloutProps = {
  title?: string;
  children: ReactNode;
};

export function DocsCallout({ title = "Importante", children }: DocsCalloutProps) {
  return (
    <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-slate-100 shadow-[0_20px_70px_-60px_rgba(0,223,255,0.7)]">
      <p className="font-semibold text-primary">{title}</p>
      <div className="mt-1 text-slate-200/90">{children}</div>
    </div>
  );
}
