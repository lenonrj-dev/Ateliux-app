import { Github, Mail, Twitter, Youtube } from "lucide-react";

export function NewsletterFollow() {
  return (
    <section className="w-full space-y-6 text-center">
      <p className="text-lg text-white sm:text-xl">
        Assine a newsletter para receber insights diarios
      </p>
      <div className="grid gap-10 text-left md:grid-cols-[1.4fr,0.8fr]">
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full rounded-full border border-[#1f1f1f] bg-[#0d0d0f] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-white/30 focus:outline-none sm:flex-1"
            />
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-200 sm:px-6">
              Receber novidades
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-3 text-left">
          <p className="text-white">Siga a Ateliux</p>
          <p className="text-slate-300">Fique por dentro de cases, guias e atualizacoes.</p>
          <div className="flex items-center gap-4 text-white">
            {[Twitter, Mail, Github, Youtube].map((Icon) => (
              <a key={Icon.displayName ?? Icon.name} href="#" className="transition hover:text-primary">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
