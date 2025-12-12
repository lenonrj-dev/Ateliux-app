import Link from "next/link";
import { ChevronDown, Globe2, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05070f] text-slate-200">
      <div className="mx-auto max-w-6xl px-6 pb-12 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 py-6 text-sm text-slate-300">
          <Link
            href="/docs"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Documentacao
          </Link>
          <Link
            href="/docs/termos-de-servico"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Termos de servico
          </Link>
          <Link
            href="/docs/politica-de-privacidade"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Privacidade
          </Link>
          <Link
            href="/docs/politica-de-cookies"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Cookies
          </Link>
          <Link
            href="/docs/suporte-e-manutencao-atualizacoes"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Suporte e manutencao
          </Link>
          <Link
            href="/docs/faq-projetos-ateliux"
            className="transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            FAQ
          </Link>
        </div>
        <div className="border-t border-white/5 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Globe2 className="h-3.5 w-3.5" />
              </span>
              <span>Portugues (BR)</span>
              <ChevronDown className="h-3 w-3" />
            </div>
            <span>(c) {new Date().getFullYear()} Ateliux. Todos os direitos reservados.</span>
            <div className="flex items-center gap-3 text-sm">
              {[
                { label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
                { label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
                { label: "Twitter", icon: <Twitter className="h-4 w-4" /> },
                { label: "Github", icon: <Github className="h-4 w-4" /> },
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  aria-label={item.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-primary/60 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
