import { ChevronDown, Globe2, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05070f] text-slate-200">
      <div className="mx-auto max-w-6xl px-6 pb-12 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 py-6 text-sm text-slate-300">
          <a href="/docs" className="transition hover:text-primary">
            Documentacao
          </a>
          <a href="/docs/termos-de-servico" className="transition hover:text-primary">
            Termos de servico
          </a>
          <a href="/docs/politica-de-privacidade" className="transition hover:text-primary">
            Privacidade
          </a>
          <a href="/docs/politica-de-cookies" className="transition hover:text-primary">
            Cookies
          </a>
          <a href="/docs/suporte-e-manutencao-atualizacoes" className="transition hover:text-primary">
            Suporte e manutencao
          </a>
          <a href="/docs/faq-projetos-ateliux" className="transition hover:text-primary">
            FAQ
          </a>
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
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-primary/60 hover:text-primary"
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
