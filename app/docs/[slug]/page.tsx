import { notFound } from "next/navigation";
import { DocsContent } from "@/components/docs/DocsContent";
import { DocsCallout } from "@/components/docs/DocsCallout";
import { docsEntries } from "../data";

const contentMap: Record<string, JSX.Element> = {
  "visao-geral-ateliux": (
    <>
      <p>
        A Ateliux e um estúdio digital que cria SaaS, sites institucionais, e-commerces, dashboards e
        automacoes. Atuamos com squads multidisciplinares, combinando produto, design, engenharia e growth.
      </p>
      <p>
        Entregamos projetos fechados, pacotes recorrentes e times dedicados, sempre com supervisao humana
        sobre agentes de IA que aceleram conteudo, suporte e marketing.
      </p>
      <ul>
        <li>SaaS B2B e plataformas sob medida.</li>
        <li>Sites institucionais e blogs com foco em conversao.</li>
        <li>E-commerces headless ou completos.</li>
        <li>Dashboards, automacoes e integrações.</li>
      </ul>
    </>
  ),

  "como-iniciar-um-projeto": (
    <>
      <p>
        Para iniciar, envie seu briefing em <a href="/contato">/contato</a> com objetivos, publico, prazos e
        orcamento estimado. Em ate 24h uteis retornamos com direcionamento inicial.
      </p>
      <ol>
        <li>Descreva o problema ou oportunidade.</li>
        <li>Informe prazo desejado e restricoes.</li>
        <li>Compartilhe referencias ou requisitos tecnicos.</li>
        <li>Defina sucesso esperado (ex.: MRR, conversao, reducao de custos).</li>
      </ol>
      <DocsCallout>
        Quanto mais claro o contexto, mais rapido definimos escopo, estimativa e roadmap inicial.
      </DocsCallout>
    </>
  ),

  "formatos-de-projeto": (
    <>
      <h3>Projeto fechado</h3>
      <p>Escopo definido, cronograma, entregaveis e aprovacao por marcos. Ideal para lancamentos.</p>
      <h3>Pacotes recorrentes</h3>
      <p>Evolucao continua, manutencao e backlog priorizado mensalmente.</p>
      <h3>Time dedicado / squad</h3>
      <p>Equipe Ateliux integrada ao cliente, com PO/Tech Lead, designers e engenheiros.</p>
      <DocsCallout>Escolhemos o formato conforme risco, previsibilidade e urgencia do projeto.</DocsCallout>
    </>
  ),

  "fluxo-de-trabalho": (
    <>
      <ol>
        <li>Descoberta e alinhamento de objetivos.</li>
        <li>Planejamento, arquitetura e design.</li>
        <li>Desenvolvimento iterativo com QA continuo.</li>
        <li>Homologacao, correcoes e go live.</li>
        <li>Monitoramento, suporte e evolucao.</li>
      </ol>
      <p>Usamos rituais semanais, revisoes e dashboards para transparencia.</p>
    </>
  ),

  "colaboracao-com-time-interno-do-cliente": (
    <>
      <p>
        Trabalhamos junto ao time interno com papéis claros: Product Owner do cliente, Tech Lead Ateliux,
        designers e engenheiros. Rituais semanais e canais dedicados garantem visibilidade.
      </p>
      <ul>
        <li>Kickoff de alinhamento e matriz RACI.</li>
        <li>Dailies ou check-ins conforme necessidade.</li>
        <li>Review quinzenal e roadmap trimestral.</li>
      </ul>
    </>
  ),

  "uso-de-ia-e-agentes": (
    <>
      <p>
        Utilizamos agentes de IA para acelerar automacoes, suporte, conteudo e analises. Sempre com
        supervisao humana e aprovacao do cliente em tarefas criticas.
      </p>
      <ul>
        <li>Automacao de marketing e CRM com validacao humana.</li>
        <li>Assistentes de suporte com roteamento para time humano.</li>
        <li>Geração de conteudo e analises de dados com revisao.</li>
      </ul>
    </>
  ),

  "limites-e-boa-pratica-de-ia": (
    <>
      <p>IA nao deve decidir sozinha sobre dados sensiveis ou execucoes financeiras.</p>
      <ul>
        <li>Evitar dados pessoais sem consentimento (LGPD).</li>
        <li>Logs e rastreabilidade em tarefas criticas.</li>
        <li>Human-in-the-loop para revisao final.</li>
      </ul>
      <DocsCallout title="Atencao">
        Sempre solicite revisao humana para conteudos legais, financeiros ou sensiveis.
      </DocsCallout>
    </>
  ),

  "auditoria-e-controle-humano": (
    <>
      <p>
        Mantemos revisoes humanas periodicas, monitoramento de logs e ajuste de prompts/modelos para
        garantir qualidade e conformidade.
      </p>
      <ul>
        <li>Logs de execucao e metrics de sucesso.</li>
        <li>Playbooks para rollback e escalonamento.</li>
        <li>Auditorias mensais com o cliente quando aplicavel.</li>
      </ul>
    </>
  ),

  "entregaveis-padroes": (
    <>
      <p>Entregamos codigo fonte versionado, documentacao tecnica, handoff de design e guias de uso.</p>
      <ul>
        <li>Repositorios em Git com instrucoes de deploy.</li>
        <li>Documentacao de endpoints, integrações e envs.</li>
        <li>Guia de design system e tokens.</li>
      </ul>
    </>
  ),

  "ambientes-dev-homolog-producao": (
    <>
      <p>Organizamos dev, homolog e producao com acessos controlados.</p>
      <ul>
        <li>Deploy automatizado e revisao de PR.</li>
        <li>Feature flags e migrações versionadas.</li>
        <li>Monitoramento e alertas com runbooks.</li>
      </ul>
      <DocsCallout>Responsabilidades de acesso e deploy sao definidas em contrato ou SOW.</DocsCallout>
    </>
  ),

  "suporte-e-manutencao": (
    <>
      <p>SLAs de resposta: 4h para incidentes criticos, 1 dia util para chamados gerais.</p>
      <ul>
        <li>Canal dedicado de suporte e help desk.</li>
        <li>Janelas de manutencao combinadas.</li>
        <li>Roadmap de evolucao revisado mensalmente.</li>
      </ul>
    </>
  ),

  "contratos-e-modelos": (
    <>
      <p>
        Trabalhamos com SOW (Statement of Work) detalhando escopo, prazos, entregaveis, criterios de
        aceitacao e precificacao.
      </p>
      <ul>
        <li>Anexos tecnicos para integrações e requisitos nao funcionais.</li>
        <li>Revisoes e change requests formalizados.</li>
        <li>Confidencialidade e compliance ajustados ao setor.</li>
      </ul>
    </>
  ),

  "propriedade-intelectual-e-licencas": (
    <>
      <p>Codigo, design e ativos produzidos para o cliente sao cedidos conforme contrato.</p>
      <ul>
        <li>Licencas de terceiros sao mapeadas e comunicadas.</li>
        <li>Dados permanecem sob responsabilidade do cliente.</li>
      </ul>
    </>
  ),

  "politica-de-privacidade-e-lgpd": (
    <>
      <p>Respeitamos LGPD e boas praticas de privacidade.</p>
      <ul>
        <li>Minimizacao de dados pessoais e base legal definida.</li>
        <li>Planos de resposta a incidentes e notificacao.</li>
        <li>Compartilhamento de dados sempre acordado com o cliente.</li>
      </ul>
    </>
  ),

  "politica-de-cancelamento-e-reembolso": (
    <>
      <p>
        Cancelamentos seguem termos contratuais com previsao de encerramento, entrega de materiais e
        eventual reembolso proporcional quando aplicavel.
      </p>
      <ul>
        <li>Portabilidade de codigo e dados inclusa no encerramento.</li>
        <li>Horas trabalhadas sao faturadas conforme registro.</li>
      </ul>
    </>
  ),

  "modelos-de-cobranca": (
    <>
      <p>Modelos disponiveis:</p>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Quando usar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Projeto fechado</td>
            <td>Escopo claro e prazo definido.</td>
          </tr>
          <tr>
            <td>Hora tecnica</td>
            <td>Demandas variaveis e exploratorias.</td>
          </tr>
          <tr>
            <td>Mensalidade</td>
            <td>Evolucao continua e backlog.</td>
          </tr>
          <tr>
            <td>Revenue share</td>
            <td>Parcerias com risco compartilhado.</td>
          </tr>
        </tbody>
      </table>
    </>
  ),

  "faturamento-e-pagamentos": (
    <>
      <p>
        Ciclos mensais com faturamento em moeda local. Formas de pagamento acordadas na proposta (boleto,
        transferencia, cartao corporativo quando aplicavel).
      </p>
      <p>Impostos e notas fiscais emitidas conforme regime tributario vigente.</p>
    </>
  ),

  "parcerias-b2b-e-white-label": (
    <>
      <p>
        Oferecemos modelos white-label para agencias e software houses, com equipes dedicadas e
        confidencialidade garantida.
      </p>
      <ul>
        <li>Branding do parceiro em entregaveis.</li>
        <li>Playbooks de comunicacao conjunta com o cliente final.</li>
        <li>Escopos e SLAs definidos em co-criacao.</li>
      </ul>
    </>
  ),

  "requisitos-tecnicos-para-parceiros": (
    <>
      <p>Parceiros devem seguir padroes de codigo, versionamento e comunicacao claros.</p>
      <ul>
        <li>Conformidade com design system e guidelines de UX.</li>
        <li>Testes, CI/CD e revisao de PR como rotina.</li>
        <li>Documentacao tecnica e comunicacao assíncrona estruturada.</li>
      </ul>
    </>
  ),
};

export default function DocSlugPage({ params }: { params: { slug: string } }) {
  const entry = docsEntries.find((item) => item.slug === params.slug);
  if (!entry) return notFound();

  const content = contentMap[params.slug] || <p>Conteudo em construcao.</p>;

  return <DocsContent title={entry.title} description={entry.description}>{content}</DocsContent>;
}
