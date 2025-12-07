import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { docsEntries } from "./data";

export default function DocsBaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-slate-100">
      <Navbar />
      <DocsLayout entries={docsEntries}>{children}</DocsLayout>
      <Footer />
    </div>
  );
}
