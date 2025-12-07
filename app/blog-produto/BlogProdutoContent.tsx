import {
  ProductFeatures,
  ProductHero,
  ProductHighlight,
  ProductPreview,
  ProductProcess,
  ProductTestimonials,
} from "@/components/sections/services/ProductSections";
import { StatsBar } from "@/components/sections/saas/StatsBar";

export function BlogProdutoContent() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <ProductHero
        tag="Blog como produto"
        title="Conteudo que educa, gera demanda e sustenta o SEO"
        subtitle="Linha editorial clara, pautas consistentes e performance tecnica para blog e noticias. Integre CRM, automacoes e monitore resultados."
        ctaPrimary="Planejar pauta"
        ctaSecondary="Ver exemplos"
        priceCards={[
          {
            title: "Plano editorial",
            price: "A partir de R$ 1.500,00",
            detail: "15 dias focados em pauta, calendario, SEO on-page e configuracao de tracking inicial.",
          },
          {
            title: "Acompanhamento inicial",
            price: "Incluso no plano",
            detail: "Ajuste de microcopy, revisao de estrutura e suporte para publicacao e mensuracao.",
          },
        ]}
      />

      <ProductPreview
        title="Blog com SEO, CRM e automacoes conectadas"
        imageSrc="/SAAS.png"
        imageAlt="Dashboard editorial e visual de blog com performance monitorada"
        logos={["SEO", "Calendario", "CRM", "Automacao", "Analytics", "Leads", "Social"]}
      />

      <ProductFeatures
        cards={[
          { title: "SEO editorial", desc: "Arquitetura de topicos, links internos e on-page para ranquear melhor." },
          { title: "Automacao de distribuicao", desc: "Envios para e-mail, redes e notificacoes com segmentacao." },
          { title: "Captacao de leads", desc: "Formularios, CTAs contextuais e integracoes com CRM." },
          { title: "Medicao completa", desc: "Eventos, funil de leitura, tempo em pagina e dashboards de performance." },
        ]}
      />

      <ProductProcess
        steps={[
          { title: "Discovery editorial", desc: "Definimos persona, pilares de conteudo e palavras-chave alvo." },
          { title: "Producao e setup", desc: "Templates, CTAs, integracoes e pautas priorizadas para publicar rapido." },
          { title: "Go live e otimizacao", desc: "Revisamos SEO, tracking e otimizamos microcopy e distribuicao." },
        ]}
      />

      <ProductHighlight
        heading="Blog como motor de awareness e pipeline"
        description="Conteudo alinhado a SEO e CRM para educar, nutrir e converter com previsibilidade."
        tags={["SEO editorial", "Automacao", "CRM", "Analytics", "Pautas"]}
      />

      <ProductTestimonials
        items={[
          {
            name: "Bruna Oliveira",
            role: "Head de Marketing, SaaS B2B",
            text: "Calendario editorial, SEO on-page e integracoes com CRM prontas. Crescemos o organico em semanas.",
          },
          {
            name: "Felipe Rocha",
            role: "CMO, HealthTech",
            text: "Tracking detalhado e CTAs contextuais. O blog virou fonte consistente de leads qualificados.",
          },
          {
            name: "Laura Santos",
            role: "Content Lead, EdTech",
            text: "Automacoes e distribuicao integrada. Publicar e medir ficou simples para o time.",
          },
        ]}
      />

      <StatsBar />
    </main>
  );
}
