import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogosStrip } from "@/components/sections/LogosStrip";
import { BusinessApplication } from "@/components/sections/BusinessApplication";
import { DataInsights } from "@/components/sections/DataInsights";
import { AutomationEfficiency } from "@/components/sections/AutomationEfficiency";
import { Templates } from "@/components/sections/Templates";
import { CTA } from "@/components/sections/CTA";

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
