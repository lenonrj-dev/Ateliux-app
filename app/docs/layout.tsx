import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { docsEntries } from "./data";

export default function DocsBaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen text-slate-100">
      <div className="fixed inset-0 -z-20">
        <Image
          src="/bg_documentacao.svg"
          alt="Fundo ciano Ateliux documentacao"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="fixed inset-0 -z-10 bg-[#020308]/70" />
      <Navbar />
      <DocsLayout entries={docsEntries}>{children}</DocsLayout>
      <Footer />
    </div>
  );
}
