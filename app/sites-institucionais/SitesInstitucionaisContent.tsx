import {
  ProductFeatures,
  ProductHero,
  ProductHighlight,
  ProductPreview,
  ProductProcess,
  ProductTestimonials,
} from "@/components/sections/services/ProductSections";
import { StatsBar } from "@/components/sections/saas/StatsBar";

export function SitesInstitucionaisContent() {
  return (
    <main className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <ProductHero
        tag="Site institucional"
        title="Autoridade digital com performance e SEO tecnico"
        subtitle="Sites institucionais profissionais com narrativa clara, carregamento rapido e CMS simples para seu time manter conteudo atualizado."
        ctaPrimary="Planejar meu site"
        ctaSecondary="Ver portfolio"
        priceCards={[
          {
            title: "Setup site institucional",
            price: "A partir de R$ 2.500,00",
            detail:
              "30 dias de ajustes finos de conteudo, microcopys, acessibilidade e suporte basico apos o deploy.",
          },
          {
            title: "Acompanhamento inicial",
            price: "Incluso no setup",
            detail: "Revisao de SEO on-page, micro melhorias visuais e suporte a duvidas do time interno.",
          },
        ]}
      />

      <ProductPreview
        title="Paginas, CMS e performance monitorada"
        imageSrc="/SAAS.png"
        imageAlt="Pagina institucional com conteudo e performance monitorada"
        logos={["SEO", "CMS", "Analytics", "Blog", "Formularios", "Leads", "Seguranca"]}
      />

      <ProductFeatures
        cards={[
          { title: "SEO e performance", desc: "Estrutura otima para ranqueamento, carregamento rapido e web vitals." },
          { title: "CMS governavel", desc: "Areas editaveis, permissoes e facilidade para publicar conteudo." },
          { title: "Acessibilidade e UX", desc: "Checklist de acessibilidade, design consistente e narrativa clara." },
          { title: "Analytics e integracoes", desc: "Eventos configurados, formularios integrados e rastreamento de leads." },
        ]}
      />

      <ProductProcess
        steps={[
          { title: "Discovery e conteudo", desc: "Mapa de mensagens, navegacao, SEO e acessibilidade definidos." },
          { title: "Design e CMS", desc: "Layouts responsivos, componentes reutilizaveis e CMS configurado." },
          { title: "Go live acompanhado", desc: "Monitoramos performance, leads e iteramos microcopys e secoes-chave." },
        ]}
      />

      <ProductHighlight
        heading="Site institucional que posiciona sua marca"
        description="Conteudo, UX e SEO alinhados para educar, gerar leads e reforcar autoridade com seguranca e governanca."
        tags={["SEO tecnico", "CMS", "Acessibilidade", "Analytics", "Governanca"]}
      />

      <ProductTestimonials
        items={[
          {
            name: "Mariana Prado",
            role: "CMO, B2B SaaS",
            text: "Site novo com CMS simples, SEO on-page e pagespeed alto. O time publica conteudo sem depender de dev.",
          },
          {
            name: "Eduardo Lima",
            role: "CEO, Consultoria",
            text: "Narrativa clara, formularios integrados e rastreamento completo. Leads qualificados cresceram rapido.",
          },
          {
            name: "Helena Costa",
            role: "Head de Comunicacao, Industria",
            text: "Acessibilidade, governanca e performance em um unico pacote. A atualizacao de conteudo ficou leve.",
          },
        ]}
      />

      <StatsBar />
    </main>
  );
}
