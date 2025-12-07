import { Mail, Phone, Calendar, Share2, Headphones, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type Channel = {
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: ReactNode;
  detail?: string;
};

const channels: Channel[] = [
  {
    title: "Novo projeto / Orcamentos",
    description: "Briefing de SaaS, sites, ecommerce, dashboards e landing pages.",
    cta: "Enviar e-mail",
    href: "mailto:contato@ateliux.com",
    icon: <Mail className="h-5 w-5" />,
    detail: "contato@ateliux.com",
  },
  {
    title: "WhatsApp / Mensagens rapidas",
    description: "Tire duvidas iniciais com nosso time de atendimento.",
    cta: "Conversar no WhatsApp",
    href: "https://wa.me/5500000000000",
    icon: <MessageCircle className="h-5 w-5" />,
    detail: "+55 (00) 00000-0000",
  },
  {
    title: "Telefone comercial",
    description: "Suporte comercial de segunda a sexta, 9h - 18h (BRT).",
    cta: "Ligar agora",
    href: "tel:+550000000000",
    icon: <Phone className="h-5 w-5" />,
    detail: "+55 (00) 0000-0000",
  },
  {
    title: "Reuniao estrategica",
    description: "Agenda para discutir escopo, roadmap e integracoes criticas.",
    cta: "Agendar chamada",
    href: "/contato",
    icon: <Calendar className="h-5 w-5" />,
    detail: "30-45 min via video",
  },
  {
    title: "Parcerias B2B / White-label",
    description: "Modelos de cooperacao, squads dedicados e licenciamento white-label.",
    cta: "Falar com parcerias",
    href: "/contato",
    icon: <Share2 className="h-5 w-5" />,
    detail: "Resposta em ate 24h uteis",
  },
  {
    title: "Suporte tecnico",
    description: "Chamados para clientes ativos, SLAs e operacao 24/7.",
    cta: "Abrir chamado",
    href: "mailto:suporte@ateliux.com",
    icon: <Headphones className="h-5 w-5" />,
    detail: "suporte@ateliux.com",
  },
  {
    title: "Localizacao",
    description: "Operamos de forma remota para todo o Brasil e exterior.",
    cta: "Ver rotas",
    href: "https://maps.google.com",
    icon: <MapPin className="h-5 w-5" />,
    detail: "Remoto - Sao Paulo / Lisboa",
  },
  {
    title: "Redes sociais",
    description: "Acompanhe novidades, cases e vagas abertas.",
    cta: "LinkedIn - Instagram - GitHub - YouTube",
    href: "/blog",
    icon: <Share2 className="h-5 w-5" />,
  },
];

function ContactCard({ channel }: { channel: Channel }) {
  return (
    <article className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_20px_70px_-50px_rgba(0,223,255,0.45)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_25px_80px_-55px_rgba(0,223,255,0.55)]">
      <div className="flex items-center gap-3 text-white">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/40">
          {channel.icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{channel.title}</p>
          {channel.detail && <p className="text-xs text-primary">{channel.detail}</p>}
        </div>
      </div>
      <p className="text-sm text-slate-300/80">{channel.description}</p>
      <div className="mt-auto">
        <Link
          href={channel.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:underline"
        >
          {channel.cta}
        </Link>
      </div>
    </article>
  );
}

export function ContactChannels() {
  return (
    <section id="contato-canais" className="relative isolate bg-transparent px-6 pb-16 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6">
        <div className="space-y-2 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Canais de contato
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Escolha o melhor canal</h2>
          <p className="max-w-3xl text-base text-slate-300/85">
            Responderemos rapidamente por e-mail, telefone ou chat. Para projetos, use o form abaixo; para
            duvidas rapidas, WhatsApp. Suporte 24/7 para clientes ativos.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => (
            <ContactCard key={channel.title} channel={channel} />
          ))}
        </div>
      </div>
    </section>
  );
}
