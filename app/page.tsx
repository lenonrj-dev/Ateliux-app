import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/landing/Hero";
import { LogosStrip } from "@/components/sections/landing/LogosStrip";
import { BusinessApplication } from "@/components/sections/landing/BusinessApplication";
import { DataInsights } from "@/components/sections/landing/DataInsights";
import { AutomationEfficiency } from "@/components/sections/landing/AutomationEfficiency";
import { Templates } from "@/components/sections/landing/Templates";
import { CTA } from "@/components/sections/landing/CTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020308] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <LogosStrip />
        <BusinessApplication />
        <DataInsights />
        <AutomationEfficiency />
        <Templates />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
