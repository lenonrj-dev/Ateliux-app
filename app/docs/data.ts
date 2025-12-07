export type DocEntry = {
  category: string;
  title: string;
  slug: string;
  description: string;
  order: number;
};

export const docsEntries: DocEntry[] = [
  // Primeiros passos
  {
    category: "Primeiros passos",
    title: "Visao geral da Ateliux",
    slug: "visao-geral-ateliux",
    description: "Quem somos, proposta de valor e entregas digitais.",
    order: 1,
  },
  {
    category: "Primeiros passos",
    title: "Como iniciar um projeto",
    slug: "como-iniciar-um-projeto",
    description: "Briefing, objetivos, prazos e alinhamentos iniciais.",
    order: 2,
  },

  // Metodologia
  {
    category: "Metodologia",
    title: "Metodologia de projetos",
    slug: "metodologia-de-projetos",
    description: "Etapas de descoberta ao deploy e acompanhamento.",
    order: 1,
  },
  {
    category: "Metodologia",
    title: "Formatos de projeto",
    slug: "formatos-de-projeto",
    description: "Projeto fechado, recorrente, squad dedicado e hibridos.",
    order: 2,
  },
  {
    category: "Metodologia",
    title: "Fluxo de trabalho",
    slug: "fluxo-de-trabalho",
    description: "Rituais, revisoes e aprovacoes por fase.",
    order: 3,
  },
  {
    category: "Metodologia",
    title: "Colaboracao com time interno",
    slug: "colaboracao-com-time-interno",
    description: "Papeis, canais e operacao com squads mistos.",
    order: 4,
  },

  // Servicos
  {
    category: "Servicos",
    title: "Servicos e produtos",
    slug: "servicos-e-produtos",
    description: "Sites, landing pages, ecommerce, dashboards e automacoes/IA.",
    order: 1,
  },

  // Termos e politicas
  {
    category: "Termos e politicas",
    title: "Termos de servico",
    slug: "termos-de-servico",
    description: "Condicoes gerais, responsabilidades e encerramento.",
    order: 1,
  },
  {
    category: "Termos e politicas",
    title: "Politica de privacidade",
    slug: "politica-de-privacidade",
    description: "Dados coletados, uso, direitos e bases legais.",
    order: 2,
  },
  {
    category: "Termos e politicas",
    title: "Politica de cookies",
    slug: "politica-de-cookies",
    description: "Tipos de cookies, finalidades e como controlar.",
    order: 3,
  },
  {
    category: "Termos e politicas",
    title: "Cancelamento e reembolso",
    slug: "politica-de-cancelamento-reembolso",
    description: "Regras de cancelamento, reembolso e encerramento.",
    order: 4,
  },

  // Suporte e operacao
  {
    category: "Suporte e operacao",
    title: "Suporte e manutencao",
    slug: "suporte-e-manutencao-atualizacoes",
    description: "Periodos inclusos por produto e manutencao evolutiva.",
    order: 1,
  },
  {
    category: "Suporte e operacao",
    title: "Entregaveis padroes",
    slug: "entregaveis-padroes",
    description: "Codigo, documentacao, handoff e acessos.",
    order: 2,
  },
  {
    category: "Suporte e operacao",
    title: "Ambientes dev, homolog e producao",
    slug: "ambientes-dev-homolog-producao",
    description: "Organizacao de ambientes, deploy e acessos.",
    order: 3,
  },

  // Direitos e licencas
  {
    category: "Direitos e licencas",
    title: "Propriedade intelectual e licenciamento",
    slug: "propriedade-intelectual-licenciamento",
    description: "Uso do codigo, assets e licencas de terceiros.",
    order: 1,
  },

  // Seguranca e dados
  {
    category: "Seguranca e dados",
    title: "Seguranca e confidencialidade",
    slug: "seguranca-confidencialidade-dados",
    description: "Boas praticas, dados sensiveis e acessos.",
    order: 1,
  },

  // Financeiro e comercial
  {
    category: "Financeiro e comercial",
    title: "Modelos de cobranca",
    slug: "modelos-de-cobranca",
    description: "Fechado, hora, mensalidade, revenue share e hibridos.",
    order: 1,
  },
  {
    category: "Financeiro e comercial",
    title: "Faturamento e pagamentos",
    slug: "faturamento-e-pagamentos",
    description: "Ciclos, meios de pagamento e impostos usuais.",
    order: 2,
  },

  // Parcerias
  {
    category: "Parcerias e white-label",
    title: "Parcerias B2B e white-label",
    slug: "parcerias-b2b-e-white-label",
    description: "Modelos com agencias e software houses.",
    order: 1,
  },
  {
    category: "Parcerias e white-label",
    title: "Requisitos tecnicos para parceiros",
    slug: "requisitos-tecnicos-para-parceiros",
    description: "Padroes de codigo, comunicacao e SLAs esperados.",
    order: 2,
  },

  // FAQ
  {
    category: "FAQ",
    title: "FAQ de projetos",
    slug: "faq-projetos-ateliux",
    description: "Prazos, escopo, integracoes, manutencao e pagamentos.",
    order: 1,
  },
];
