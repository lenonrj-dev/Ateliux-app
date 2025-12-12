import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { NewsroomHero } from "@/components/sections/newsroom/NewsroomHero";
import { FeaturedPost } from "@/components/sections/newsroom/FeaturedPost";
import { NewsletterFollow } from "@/components/sections/newsroom/NewsletterFollow";
import { NewsPostsGrid, type PostCard } from "@/components/sections/newsroom/NewsPostsGrid";

const featured = {
  title: "Bastidores dos nossos projetos digitais",
  category: "Insight Ateliux",
  date: "Mar 17, 2023",
  description:
    "Como estruturamos sites, ecommerce e automacoes com base em UX, performance e integracoes claras.",
  image: "/card_grafico.png",
};

const posts: PostCard[] = [
  {
    title: "Design funcional para sites e landings",
    description: "Como combinamos UX, copy e page speed para elevar conversao em lancamentos.",
    date: "Mar 17, 2023",
    category: "Produto",
    image: "/card_welcome.png",
  },
  {
    title: "Stack ecommerce pronta para operar",
    description: "Gateways, antifraude, frete e CRM conectados para lojas que escalam.",
    date: "Mar 17, 2023",
    category: "Ecommerce",
    image: "/card_analityc_corte.png",
  },
  {
    title: "Dashboards em ciano para decisao rapida",
    description: "KPIs visuais, alertas e governance desde o primeiro deploy.",
    date: "Mar 17, 2023",
    category: "Dados",
    image: "/grafico_desempenho.png",
  },
  {
    title: "Agentes de IA supervisionada",
    description: "Automacoes para WhatsApp e Instagram com revisao humana e logs claros.",
    date: "Mar 17, 2023",
    category: "Automacao",
    image: "/grafico_pizza.png",
  },
  {
    title: "Conteudo e SEO tecnico alinhados",
    description: "Checklist de SEO, dados estruturados e copy que gera autoridade.",
    date: "Mar 17, 2023",
    category: "SEO",
    image: "/Analityc.png",
  },
  {
    title: "Metodologia Ateliux de entrega",
    description: "Discovery, planejamento, sprints curtos e acompanhamento pos deploy.",
    date: "Mar 17, 2023",
    category: "Metodologia",
    image: "/card_grafico.png",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-slate-100">
      <Navbar />
      <main className="mx-auto flex max-w-[1180px] flex-col gap-14 px-6 pb-24 pt-24 lg:px-8 lg:pt-32">
        <NewsroomHero
          title="Newsroom Ateliux"
          description="Novidades, bastidores e guias praticos sobre sites, ecommerce, dashboards e automacoes."
        />
        <FeaturedPost {...featured} />
        <NewsletterFollow />
        <NewsPostsGrid posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
