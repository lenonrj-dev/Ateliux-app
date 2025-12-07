import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHeader } from "@/components/sections/contact/ContactHeader";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactInfoSection } from "@/components/sections/contact/ContactInfoSection";
import { ContactBottomGlow } from "@/components/sections/contact/ContactBottomGlow";

type SearchParams = { [key: string]: string | string[] | undefined };

function pickParam(params: SearchParams, key: string) {
  if (!params) return undefined;
  const value = params[key];
  if (typeof value !== "string") return undefined;
  return value.trim() || undefined;
}

export default async function ContatoPage({
  searchParams,
}: {
  searchParams: SearchParams | Promise<SearchParams>;
}) {
  const resolved = (await Promise.resolve(searchParams)) || {};

  const service = pickParam(resolved, "service");
  const goal = pickParam(resolved, "goal");
  const complexity = pickParam(resolved, "complexity");
  const sales = pickParam(resolved, "sales");
  const prefill = pickParam(resolved, "prefill");

  const prefillData = {
    service,
    goal,
    complexity,
    sales: sales === "1" || sales === "true",
    enabled: prefill === "1" || prefill === "true" || Boolean(service || goal || complexity || sales),
  };

  return (
    <div className="min-h-screen bg-[#050508] text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-[960px] flex-col items-center px-6 pb-24 lg:px-8">
        <ContactHeader prefill={prefillData} />
        <ContactFormSection prefill={prefillData} />
        <ContactInfoSection />
        <ContactBottomGlow />
      </main>
      <Footer />
    </div>
  );
}
