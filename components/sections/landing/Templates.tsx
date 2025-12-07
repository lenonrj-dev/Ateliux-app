import Image from "next/image";

const cards = [
  {
    title: "Site institucional profissional",
    subtitle: "Autoridade, SEO tecnico e narrativa clara para sua marca.",
    description:
      "Sites responsivos com carregamento rapido, conteudo otimo para ranquear e um CMS simples para seu time manter tudo atualizado.",
    bullets: [
      "Design premium, acessivel e otimizado para conversao.",
      "CMS pronto com areas editaveis e governanca de acesso.",
      "Implementacao de SEO tecnico on-page e analiticas.",
      "Ideal para empresas B2B, educacao, industria e servicos.",
    ],
    price: {
      base: "A partir de R$ 2.500,00",
      supportTitle: "Acompanhamento inicial incluso",
      supportDetail: "30 dias de ajustes finos de conteudo, microcopys e suporte basico.",
    },
    image: "/card_welcome.png",
    alt: "Layout de site institucional profissional Ateliux",
  },
  {
    title: "Landing page de alta conversao",
    subtitle: "Capte leads e valide ofertas com testes rapidos.",
    description:
      "LPs focadas em campanha com storytelling direto, secoes testaveis e integracoes com CRM para nutrir o funil.",
    bullets: [
      "Arquitetura enxuta para pagespeed e midia paga.",
      "Testes A/B, heatmaps e revisao de CTA e microcopy.",
      "Integracao com CRM, automacoes e pixels.",
      "Indicada para lancamentos, eventos e validacao de produtos.",
    ],
    price: {
      base: "A partir de R$ 1.500,00",
      supportTitle: "Acompanhamento inicial incluso",
      supportDetail: "15 dias com testes e pequenos ajustes de sessao e CTA.",
    },
    image: "/card_grafico.png",
    alt: "Landing page otimizada para conversao criada pela Ateliux",
  },
  {
    title: "Ecommerce completo",
    subtitle: "Checkout rapido, integracoes e experiencia de compra fluida.",
    description:
      "Lojas headless ou completas com foco em conversao, performance e operacao integrada a pagamentos, frete e marketing.",
    bullets: [
      "Checkout otimizado com antifraude e gateways.",
      "SEO tecnico, catalogo organizado e analytics.",
      "Integracoes com ERP, CRM e automacoes de marketing.",
      "Perfeito para varejo, D2C, assinaturas e marketplaces niche.",
    ],
    price: {
      base: "A partir de R$ 4.500,00",
      supportTitle: "Acompanhamento inicial incluso",
      supportDetail: "60 dias para ajustes de checkout, integracoes e performance.",
    },
    image: "/grafico_desempenho.png",
    alt: "Dashboard de ecommerce com conversao elevada pela Ateliux",
  },
  {
    title: "Dashboards e paineis de gestao",
    subtitle: "Decisoes com dados claros, KPIs acionaveis e visuais ciano.",
    description:
      "Painel executivo, operacao e squads com metricas em tempo real, filtros e governanca para cada time.",
    bullets: [
      "Design de visualizacoes focado em tomada de decisao.",
      "Integracao com bancos, APIs e fontes SaaS existentes.",
      "Alertas, logs e observabilidade para confiabilidade.",
      "Indicado para boards, operacoes e times de produto.",
    ],
    price: {
      base: "A partir de R$ 3.500,00",
      supportTitle: "Acompanhamento inicial incluso",
      supportDetail: "45 dias para ajustes de metricas, campos e usabilidade diaria.",
    },
    image: "/card_analityc_corte.png",
    alt: "Painel de gestao e analytics desenvolvido pela Ateliux",
  },
  {
    title: "Automacoes e agentes de IA",
    subtitle: "Fluxos inteligentes em Instagram, WhatsApp e operacoes internas.",
    description:
      "Bots e automacoes com IA supervisionada para atendimento, marketing e tarefas repetitivas, com ajustes continuos.",
    bullets: [
      "Gatilhos e roteiros alinhados ao tom de voz da marca.",
      "Monitoramento de fluxos e logs para reduzir falhas.",
      "Integracoes com CRM, SAC e ferramentas internas.",
      "Perfeito para marketing, vendas e suporte 24/7.",
    ],
    price: {
      base: "A partir de R$ 2.000,00 na configuracao inicial",
      supportTitle: "Acompanhamento inicial incluso",
      supportDetail: "30 dias monitorando fluxos, mensagens e gatilhos para otimizar respostas.",
    },
    image: "/grafico_pizza.png",
    alt: "Automacoes com IA e fluxos monitorados pela Ateliux",
  },
];

export function Templates() {
  return (
    <section className="relative isolate overflow-hidden bg-[#020308] px-6 py-20 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur">
          Controle total dos seus templates
        </button>
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Templates prontos para <span className="text-primary">vendas aceleradas</span>
          </h2>
          <p className="max-w-3xl text-base text-slate-300/85">
            Use os templates da Ateliux para apresentar analises detalhadas, conduzir onboarding e criar
            propostas com visual ciano que converte.
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_30px_90px_-60px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_90px_-55px_rgba(0,223,255,0.5)]"
            >
              <div className="relative h-64 w-full bg-[#0a0f18]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 px-5 pb-6 pt-5 text-left">
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-primary/90">{card.subtitle}</p>
                <p className="text-sm text-slate-300/80">{card.description}</p>
                <ul className="space-y-2 text-sm text-slate-200/85">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_-4px_rgba(0,223,255,1)]" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-[0_15px_50px_-45px_rgba(0,223,255,0.45)]">
                  <p className="text-primary font-semibold">{card.price.base}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-primary/80">
                    {card.price.supportTitle}
                  </p>
                  <p className="text-xs text-slate-200/80">{card.price.supportDetail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pt-2">
          <a
            href="/contato"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-[#020308] shadow-[0_0_35px_-12px_rgba(0,223,255,0.9)] transition hover:shadow-[0_0_45px_-10px_rgba(0,223,255,1)]"
          >
            Comecar agora
          </a>
        </div>
      </div>
    </section>
  );
}
