import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LandingPageContent } from "./LandingPageContent";

export const metadata: Metadata = {
  title: "Landing page de alta conversao | Ateliux",
  description:
    "Landing pages de alta conversao com storytelling direto, testes rapidos, integracoes com CRM e acompanhamento inicial para otimizacao.",
};

export default function LandingPagesPage() {
  return (
    <div className="min-h-screen bg-[#03050a] text-slate-100">
      <Navbar />
      <LandingPageContent />
      <Footer />
    </div>
  );
}
