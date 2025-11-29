import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactChannels } from "@/components/sections/ContactChannels";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactFAQ } from "@/components/sections/ContactFAQ";

export default function ContatoPage() {
  return (
    <div className="relative min-h-screen text-slate-100">
      <div className="fixed inset-0 -z-20">
        <Image
          src="/hero_bg_ciano.png"
          alt="Fundo ciano Ateliux"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="fixed inset-0 -z-10 bg-[#020308]/65" />

      <Navbar />
      <main>
        <ContactHero />
        <ContactChannels />
        <ContactForm />
        <ContactFAQ />
      </main>
      <Footer />
    </div>
  );
}
