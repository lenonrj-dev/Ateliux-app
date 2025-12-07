import { DocsContent } from "@/components/docs/DocsContent";
import { DocsCallout } from "@/components/docs/DocsCallout";
import Link from "next/link";

export default function DocsHome() {
  return (
    <DocsContent
      title="Documentacao Ateliux"
      description="Guia completo sobre quem somos, como trabalhamos, termos, privacidade e suporte."
    >
      <p>
        Aqui voce encontra a visao geral da Ateliux, nossa metodologia, servicos, termos, politicas e
        orientacoes de seguranca e suporte. Use este material para onboarding, revisao de contratos e
        alinhamento com seu time.
      </p>
      <p>
        Precisa de ajuda ou quer iniciar um projeto? Visite <Link href="/contato">/contato</Link>.
      </p>

      <DocsCallout title="Resumo">
        Cobertura completa: visao geral, metodologia, servicos e produtos, termos, privacidade, cookies,
        suporte, cancelamento, propriedade intelectual, seguranca e FAQ.
      </DocsCallout>

      <h2>Secoes principais</h2>
      <ul>
        <li>Quem somos e nossa proposta de valor.</li>
        <li>Metodologia de projetos: etapas, rituais e aprovacoes.</li>
        <li>Servicos e produtos com escopo e limites.</li>
        <li>Termos de servico, privacidade, cookies e direitos.</li>
        <li>Suporte, manutencao, cancelamento e reembolso.</li>
        <li>Propriedade intelectual, seguranca e FAQ.</li>
      </ul>
    </DocsContent>
  );
}
