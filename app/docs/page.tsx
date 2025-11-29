import { DocsContent } from "@/components/docs/DocsContent";
import { DocsCallout } from "@/components/docs/DocsCallout";
import Link from "next/link";

export default function DocsHome() {
  return (
    <DocsContent
      title="Documentacao da Ateliux"
      description="Entenda como trabalhamos com SaaS, sites, e-commerce, automacoes e squads dedicados."
    >
      <p>
        Esta documentacao apresenta como a Ateliux estrutura projetos de software, design e growth. Use
        como guia para onboarding do seu time, revisao de contratos e alinhamento de processos.
      </p>
      <p>
        Em caso de duvidas ou para iniciar um projeto, acesse nossa pagina de{" "}
        <Link href="/contato">contato</Link>.
      </p>

      <DocsCallout title="Nota">
        Mantemos supervisao humana em todas as entregas e uso de agentes de IA. A responsabilidade final
        sobre decisoes de produto e dados e sempre compartilhada com o cliente.
      </DocsCallout>

      <h2>Principais topicos</h2>
      <ul>
        <li>Primeiros passos e como iniciar um projeto.</li>
        <li>Formatos de trabalho, fluxos e colaboracao com times internos.</li>
        <li>Uso de IA com supervisao, auditoria e limites de aplicacao.</li>
        <li>Entregaveis padrao, ambientes, suporte e SLAs.</li>
        <li>Contratos, licencas, privacidade, cancelamento e financeiro.</li>
        <li>Guia para parceiros e operacao white-label.</li>
      </ul>

      <h2>Para quem e esta doc</h2>
      <p>
        Lideres de produto, marketing e tecnologia, fundadores e equipes B2B que precisam de clareza sobre
        como a Ateliux opera, entrega e se integra aos seus processos.
      </p>
    </DocsContent>
  );
}
