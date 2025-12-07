import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SpectralHero } from "@/components/sections/saas/SpectralHero";
import { DashboardPreview } from "@/components/sections/saas/DashboardPreview";
import { LayerFeatures } from "@/components/sections/saas/LayerFeatures";
import { HowItWorks } from "@/components/sections/saas/HowItWorks";
import { WhatIsSpectral } from "@/components/sections/saas/WhatIsSpectral";
import { Testimonials } from "@/components/sections/saas/Testimonials";
import { EcosystemSpotlight } from "@/components/sections/saas/EcosystemSpotlight";
import { StatsBar } from "@/components/sections/saas/StatsBar";
import { SaasFaq } from "@/components/sections/saas/SaasFaq";

export const metadata: Metadata = {
  title: "Dashboards e automacoes com IA | Ateliux",
  description:
    "Dashboards personalizados, paineis de gestao e automacoes com IA supervisionada pela Ateliux, com observabilidade, integracoes e acompanhamento inicial.",
};

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-[#03050a] text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
        <SpectralHero />
        <DashboardPreview />
        <LayerFeatures />
        <HowItWorks />
        <WhatIsSpectral />
        <Testimonials />
        <EcosystemSpotlight />
        <StatsBar />
        <SaasFaq />
      </main>
      <Footer />
    </div>
  );
}
