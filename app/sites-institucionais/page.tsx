import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SitesInstitucionaisContent } from "./SitesInstitucionaisContent";

export const metadata: Metadata = {
  title: "Site institucional profissional | Ateliux",
  description:
    "Sites institucionais profissionais com SEO tecnico, performance alta, CMS flexivel e acompanhamento inicial para ajustes finos de conteudo e UX.",
};

export default function SitesInstitucionaisPage() {
  return (
    <div className="min-h-screen bg-[#03050a] text-slate-100">
      <Navbar />
      <SitesInstitucionaisContent />
      <Footer />
    </div>
  );
}
