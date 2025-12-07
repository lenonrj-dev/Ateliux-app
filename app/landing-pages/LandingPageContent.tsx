import {
  ProductFeatures,
  ProductHero,
  ProductHighlight,
  ProductPreview,
  ProductProcess,
  ProductTestimonials,
} from "@/components/sections/services/ProductSections";
import { StatsBar } from "@/components/sections/saas/StatsBar";

export function LandingPageContent() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <ProductHero
        tag="Landing page"
        title="Landing pages de alta conversao e testes rapidos"
        subtitle="Storytelling direto, secoes modulares e performance para midia paga. Testes A/B, pixels e integracoes com CRM e automacoes."
        ctaPrimary="Planejar minha LP"
        ctaSecondary="Ver exemplos"
        priceCards={[
          {
            title: "Setup de landing page",
            price: "A partir de R$ 1.500,00",
            detail:
              "15 dias focados em otimizacao inicial: testes e pequenos ajustes de sessao, revisao de CTAs, microcopy e eventos de conversao.",
          },
        ]}
      />

      <ProductPreview
        title="Paginas otimizadas para campanhas"
        imageSrc="/SAAS.png"
        imageAlt="Landing page otimizada para campanhas com analytics"
        logos={["SEO", "Pixels", "A/B Teste", "Formularios", "Leads", "CRM", "Automacao"]}
      />

      <ProductFeatures
        cards={[
          { title: "Pagespeed e SEO", desc: "Arquitetura enxuta, carregamento rapido e estrutura pronta para campanhas." },
          { title: "Copy e CTAs testados", desc: "Storytelling direto, testes A/B e heatmaps para iterar rapido." },
          { title: "Integracoes", desc: "CRM, automacoes, pixels e rastreamento de eventos configurados." },
          { title: "Validacao rapida", desc: "Indicada para lancamentos, eventos, SaaS e ofertas em teste." },
        ]}
      />

      <ProductProcess
        steps={[
          { title: "Discovery e proposta de valor", desc: "Mapeamos publico, promessa e hierarquia de secoes." },
          { title: "Design e integracoes", desc: "Montamos layout modular, CTAs, pixels e CRM conectados." },
          { title: "Go live e otimizacao", desc: "Rodamos testes, monitoramos eventos e ajustamos microcopy e sessoes." },
        ]}
      />

      <ProductHighlight
        heading="LPs para captar leads com previsibilidade"
        description="Performance, rastreamento e experimentos constantes para reduzir CAC e validar ofertas."
        tags={["Pagespeed", "Copy/CTA", "Pixels", "CRM", "A/B Testing"]}
      />

      <ProductTestimonials
        items={[
          {
            name: "Lucas Ferraz",
            role: "Growth Lead, SaaS B2B",
            text: "LPs rapidas com pixels e CRM integrados. Ficou facil rodar testes e otimizar CAC.",
          },
          {
            name: "Renata Silva",
            role: "CMO, EdTech",
            text: "Storytelling direto, CTAs claros e heatmaps configurados. Melhoramos conversao em dias.",
          },
          {
            name: "Diego Martins",
            role: "Founder, Evento tech",
            text: "Formularios, automacoes e A/B prontos. Conseguimos validar oferta e ajustar mensagem rapidamente.",
          },
        ]}
      />

      <StatsBar />
    </main>
  );
}
