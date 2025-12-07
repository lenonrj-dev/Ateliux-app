import {
  ProductFeatures,
  ProductHero,
  ProductHighlight,
  ProductPreview,
  ProductProcess,
  ProductTestimonials,
} from "@/components/sections/services/ProductSections";
import { StatsBar } from "@/components/sections/saas/StatsBar";

export function EcommerceContent() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <ProductHero
        tag="Ecommerce completo"
        title="Checkout rapido, operacao integrada e marca consistente"
        subtitle="Lojas headless ou completas com performance, SEO tecnico e UX pensada para conversao. Integre pagamentos, frete e CRM sem friccao."
        ctaPrimary="Falar com especialista"
        ctaSecondary="Ver cases"
        priceCards={[
          {
            title: "Setup ecommerce",
            price: "A partir de R$ 4.500,00",
            detail:
              "60 dias para ajustes de checkout, integracoes (pagamentos, frete e marketing) e revisao de usabilidade na operacao inicial.",
          },
          {
            title: "Acompanhamento inicial",
            price: "Incluso no setup",
            detail: "Suporte para fluxos de checkout, carrinho e integracoes de marketing/CRM.",
          },
        ]}
      />

      <ProductPreview
        title="Fluxos de compra e painel de operacao"
        imageSrc="/SAAS.png"
        imageAlt="Painel de ecommerce com fluxo de checkout otimizado"
        logos={["Checkout", "ERP", "CRM", "Gateway", "Analytics", "Frete", "Antifraude"]}
      />

      <ProductFeatures
        cards={[
          { title: "Checkout otimizado", desc: "UX clara, meios de pagamento integrados e antifraude configurado." },
          { title: "Catalogo e SEO tecnico", desc: "Arquitetura limpa, schema, performance e dados estruturados." },
          { title: "Operacao integrada", desc: "ERP, CRM, estoque, marketing automation e conciliacao financeira." },
          { title: "Growth e monitoramento", desc: "Eventos, pixels, heatmaps e dashboards de conversao." },
        ]}
      />

      <ProductProcess
        steps={[
          { title: "Discovery e blueprint", desc: "Mapeamos mix de produtos, prazos, SLAs e integracoes criticas." },
          { title: "Design e integracoes", desc: "Checkout, catalogo, SEO, gateways e frete configurados e testados." },
          { title: "Go live acompanhado", desc: "Monitoramos funil, corrigimos gargalos e ajustamos campanhas iniciais." },
        ]}
      />

      <ProductHighlight
        heading="Ecommerce com base solida para crescer"
        description="Governanca de dados, logs, observabilidade e UX consistente para reduzir abandono de carrinho e aumentar LTV."
        tags={["Checkout", "SEO tecnico", "ERP e CRM", "Analytics", "Frete e antifraude"]}
      />

      <ProductTestimonials
        items={[
          {
            name: "Camila Torres",
            role: "COO, Retail D2C",
            text: "Checkout rapido, integracoes sem ruido e suporte pro time de operacao. A conversao subiu e a conciliacao ficou simples.",
          },
          {
            name: "Joao Menezes",
            role: "Head de Growth, Marketplace",
            text: "Pixels, eventos e SEO tecnicos configurados desde o inicio. Time de marketing ganhou velocidade e previsibilidade.",
          },
          {
            name: "Patricia Vidal",
            role: "CTO, Moda premium",
            text: "Arquitetura headless, performance alta e integracao com ERP/CRM sem dores. Lancamos colecao em semanas.",
          },
        ]}
      />

      <StatsBar />
    </main>
  );
}
