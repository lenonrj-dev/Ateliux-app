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
    description:
      "Quem somos, o que fazemos e como atuamos com SaaS, sites, e-commerce e landing pages.",
    order: 1,
  },
  {
    category: "Primeiros passos",
    title: "Como iniciar um projeto",
    slug: "como-iniciar-um-projeto",
    description:
      "Checklist para contato inicial, briefing, objetivos, prazos e orcamento para validar escopo.",
    order: 2,
  },

  // Formatos de trabalho
  {
    category: "Formatos de trabalho",
    title: "Formatos de projeto",
    slug: "formatos-de-projeto",
    description:
      "Projeto fechado, pacotes recorrentes, time dedicado/squad e modelos hibridos para SaaS.",
    order: 1,
  },
  {
    category: "Formatos de trabalho",
    title: "Fluxo de trabalho",
    slug: "fluxo-de-trabalho",
    description:
      "Etapas de descoberta, planejamento, design, desenvolvimento, QA, homologacao e go live.",
    order: 2,
  },
  {
    category: "Formatos de trabalho",
    title: "Colaboracao com time interno",
    slug: "colaboracao-com-time-interno-do-cliente",
    description:
      "Como atuamos com squads mistos, rituais, alinhamentos e papeis como PO e Tech Lead.",
    order: 3,
  },

  // Uso de IA e agentes
  {
    category: "Uso de IA e agentes",
    title: "Uso de IA e agentes",
    slug: "uso-de-ia-e-agentes",
    description:
      "Como aplicamos agentes de IA com supervisao humana em marketing, conteudo e suporte.",
    order: 1,
  },
  {
    category: "Uso de IA e agentes",
    title: "Limites e boas praticas de IA",
    slug: "limites-e-boa-pratica-de-ia",
    description: "Diretrizes de seguranca, limites e conformidade para uso de IA em projetos.",
    order: 2,
  },
  {
    category: "Uso de IA e agentes",
    title: "Auditoria e controle humano",
    slug: "auditoria-e-controle-humano",
    description: "Rotinas de revisao humana, logs e monitoramento de agentes autonomos.",
    order: 3,
  },

  // Entregas e suporte
  {
    category: "Entregas e suporte",
    title: "Entregaveis padroes",
    slug: "entregaveis-padroes",
    description:
      "Codigo fonte, documentacao tecnica, manuais, handoff de design e acesso aos ambientes.",
    order: 1,
  },
  {
    category: "Entregas e suporte",
    title: "Ambientes dev, homolog e producao",
    slug: "ambientes-dev-homolog-producao",
    description: "Como organizamos ambientes e responsabilidades de deploy e acessos.",
    order: 2,
  },
  {
    category: "Entregas e suporte",
    title: "Suporte e manutencao",
    slug: "suporte-e-manutencao",
    description: "SLAs, canais de suporte, manutencao preventiva e roadmap evolutivo.",
    order: 3,
  },

  // Contratos e politicas
  {
    category: "Contratos e politicas",
    title: "Contratos e modelos",
    slug: "contratos-e-modelos",
    description: "Visao geral de escopo, prazos, valores, revisoes e anexos tecnicos.",
    order: 1,
  },
  {
    category: "Contratos e politicas",
    title: "Propriedade intelectual e licencas",
    slug: "propriedade-intelectual-e-licencas",
    description: "Direitos sobre codigo, design, dados e uso de licencas de terceiros.",
    order: 2,
  },
  {
    category: "Contratos e politicas",
    title: "Politica de privacidade e LGPD",
    slug: "politica-de-privacidade-e-lgpd",
    description: "Tratamento de dados, responsabilidades e conformidade.",
    order: 3,
  },
  {
    category: "Contratos e politicas",
    title: "Politica de cancelamento e reembolso",
    slug: "politica-de-cancelamento-e-reembolso",
    description: "Termos para encerramento, reembolso e portabilidade de ativos.",
    order: 4,
  },

  // Financeiro e comercial
  {
    category: "Financeiro e comercial",
    title: "Modelos de cobranca",
    slug: "modelos-de-cobranca",
    description: "Projeto fechado, hora tecnica, mensalidade, revenue share e combinacoes hibridas.",
    order: 1,
  },
  {
    category: "Financeiro e comercial",
    title: "Faturamento e pagamentos",
    slug: "faturamento-e-pagamentos",
    description: "Ciclos de faturamento, meios de pagamento e impostos usuais.",
    order: 2,
  },

  // Parcerias e white-label
  {
    category: "Parcerias e white-label",
    title: "Parcerias B2B e white-label",
    slug: "parcerias-b2b-e-white-label",
    description: "Modelos de cooperacao com agencias e dev houses, licenciamento e squads.",
    order: 1,
  },
  {
    category: "Parcerias e white-label",
    title: "Requisitos tecnicos para parceiros",
    slug: "requisitos-tecnicos-para-parceiros",
    description: "Padroes de codigo, comunicacao, SLAs e expectativas tecnicas.",
    order: 2,
  },
];
