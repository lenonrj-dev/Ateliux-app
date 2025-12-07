import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BlogProdutoContent } from "./BlogProdutoContent";

export const metadata: Metadata = {
  title: "Produto Blog | Ateliux",
  description:
    "Produto de blog Ateliux: SEO editorial, distribuicao automatizada, integracao com CRM e acompanhamento inicial.",
};

export default function BlogProdutoPage() {
  return (
    <div className="min-h-screen bg-[#03050a] text-slate-100">
      <Navbar />
      <BlogProdutoContent />
      <Footer />
    </div>
  );
}
