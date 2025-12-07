import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { InteractivePortfolioHero } from "./components/InteractivePortfolioHero";
import { PortfolioLogos } from "./components/PortfolioLogos";
import { PortfolioSocialProof } from "./components/PortfolioSocialProof";
import { PortfolioSteps } from "./components/PortfolioSteps";
import { PortfolioFeatures } from "./components/PortfolioFeatures";

export const metadata: Metadata = {
  title: "Portfolio | Ateliux",
  description: "Veja o portfolio Ateliux com o mesmo visual do builder AI em React e Tailwind.",
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100">
      <Navbar />
      <InteractivePortfolioHero />
      <PortfolioLogos />
      <PortfolioSocialProof />
      <PortfolioSteps />
      <PortfolioFeatures />
      <Footer />
    </div>
  );
}
