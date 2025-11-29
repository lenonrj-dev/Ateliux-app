import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-[#020308] text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-28 lg:px-8 lg:pt-36">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-12 shadow-[0_0_45px_-25px_rgba(0,223,255,0.8)] backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(0,223,255,0.2),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(0,223,255,0.14),transparent_40%)]" />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">E-commerce ciano</p>
            <h1 className="text-4xl font-semibold text-white">Lojas digitais que convertem e escalam</h1>
            <p className="text-lg text-slate-200/80">
              Implementamos e-commerce headless ou completos com checkout otimizado, performance alta e
              identidade visual ciano. Operações integradas a ERPs, CRM e ferramentas de marketing para manter
              a taxa de conversão em ascensão.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
              <span className="rounded-full bg-white/5 px-4 py-2">Checkout otimizado</span>
              <span className="rounded-full bg-white/5 px-4 py-2">Integração com gateways e antifraude</span>
              <span className="rounded-full bg-white/5 px-4 py-2">Analytics e SEO técnico</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
