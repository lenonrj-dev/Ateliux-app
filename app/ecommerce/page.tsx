import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { EcommerceContent } from "./EcommerceContent";

export const metadata: Metadata = {
  title: "Ecommerce completo Ateliux | Lojas, checkout e integracoes",
  description:
    "Ateliux cria ecommerce completo com checkout otimizado, integracoes com pagamentos, frete e CRM, performance, SEO tecnico e acompanhamento inicial.",
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-[#03050a] text-slate-100">
      <Navbar />
      <EcommerceContent />
      <Footer />
    </div>
  );
}
