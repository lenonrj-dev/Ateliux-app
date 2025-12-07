import type { ReactNode } from "react";
import { DocsCallout } from "@/components/docs/DocsCallout";

export const contentMap: Record<string, ReactNode> = {
  "visao-geral-ateliux": (
    <>
      <p>
        A Ateliux e um studio digital que cria sites institucionais, landing pages de alta conversao,
        ecommerces completos, dashboards e automacoes com IA supervisionada. Atuamos com foco em resultado,
        performance, SEO tecnico e acompanhamento pos-deploy.
      </p>
      <h3>O que fazemos</h3>
      <ul>
        <li>Sites institucionais com autoridade, SEO tecnico e CMS governavel.</li>
        <li>Landing pages para campanhas com pixels, CRM e testes rapidos.</li>
        <li>Ecommerce headless ou completo com checkout otimizado.</li>
        <li>Dashboards e paineis de gestao com dados confiaveis e UX clara.</li>
        <li>Automacoes e agentes de IA com supervisao humana e logs.</li>
      </ul>
      <DocsCallout>
        Diferenciais: processos claros, squads multidisciplinares, supervisao humana em IA e suporte inicial
        incluso em cada entrega.
      </DocsCallout>
    </>
  ),

  "como-iniciar-um-projeto": (
    <>
      <h3>Checklist de inicio</h3>
      <ul>
        <li>Compartilhe objetivos, publico, prazos e restricoes.</li>
        <li>Envie referencias, requisitos tecnicos e integracoes desejadas.</li>
        <li>Defina KPIs esperados (MRR, conversao, engajamento, custo).</li>
        <li>Combine canais de comunicacao e responsaveis dos dois lados.</li>
      </ul>
      <p>Retornamos em ate 24h uteis com direcionamento inicial e proposta de proxima etapa.</p>
    </>
  ),

  "metodologia-de-projetos": (
    <>
      <h3>Etapas</h3>
      <ol>
        <li>Descoberta e briefing: alinhamos objetivos, personas e KPIs.</li>
        <li>Planejamento: arquitetura de informacao, escopo priorizado e cronograma.</li>
        <li>Design/UX: layouts, prototipos, narrativa e acessibilidade.</li>
        <li>Desenvolvimento: implementacao, integracoes, configuracao de CMS ou painel.</li>
        <li>Testes e ajustes: QA, performance, responsividade, SEO tecnico e eventos.</li>
        <li>Deploy: dominios, DNS, chaves e validacao final.</li>
        <li>Acompanhamento: periodo incluso conforme produto para ajustes finos.</li>
      </ol>
      <h3>Rituais</h3>
      <ul>
        <li>Kickoff com papeis, canais e cronograma.</li>
        <li>Check-ins semanais ou conforme sprint.</li>
        <li>Reviews por entrega e aprovacao de marcos.</li>
      </ul>
    </>
  ),

  "formatos-de-projeto": (
    <>
      <h3>Modelos</h3>
      <ul>
        <li>Projeto fechado: escopo claro, marcos, cronograma e entrega fechada.</li>
        <li>Pacote recorrente: evolucao continua com horas/sprints mensais.</li>
        <li>Squad dedicado: time Ateliux operando como extensao do cliente.</li>
        <li>Hibridos: combinacao de entregas fechadas com backlog continuo.</li>
      </ul>
      <p>Escolhemos o formato considerando previsibilidade, urgencia e nivel de maturidade do produto.</p>
    </>
  ),

  "fluxo-de-trabalho": (
    <>
      <h3>Rituais e aprovacao</h3>
      <ul>
        <li>Kickoff com RACI, objetivos e canais.</li>
        <li>Backlog priorizado e sprints ou marcos semanais/quinzenais.</li>
        <li>Reviews e demos para validar entregas.</li>
        <li>UAT (homologacao) antes de entrar em producao.</li>
      </ul>
      <h3>Comunicacao</h3>
      <p>Canal dedicado (Slack/WhatsApp/Email) e reunioes com agenda clara, atas e proximos passos.</p>
    </>
  ),

  "colaboracao-com-time-interno": (
    <>
      <h3>Como operamos em squads mistos</h3>
      <ul>
        <li>Papeis claros: PO do cliente, Tech Lead/PM Ateliux, designers e devs.</li>
        <li>Rituais combinados com o calendario do cliente.</li>
        <li>Acesso aos repositorios e ferramentas conforme politica de seguranca.</li>
      </ul>
      <p>Buscamos decisao compartilhada e visibilidade total de progresso, riscos e entregas.</p>
    </>
  ),

  "servicos-e-produtos": (
    <>
      <h3>Site institucional profissional</h3>
      <ul>
        <li>Objetivo: autoridade, SEO tecnico e clareza de narrativa.</li>
        <li>Incluso: CMS, acessibilidade, analytics, pagespeed.</li>
        <li>Nao incluso: producao massiva de conteudo ou hospedagem gerenciada.</li>
      </ul>
      <h3>Landing page de alta conversao</h3>
      <ul>
        <li>Objetivo: captar leads e validar ofertas.</li>
        <li>Incluso: storytelling, pixels, CRM, testes A/B iniciais.</li>
        <li>Nao incluso: midia paga ou campanhas completas.</li>
      </ul>
      <h3>Ecommerce completo</h3>
      <ul>
        <li>Objetivo: loja com checkout rapido e integracoes confiaveis.</li>
        <li>Incluso: gateways, antifraude, frete, SEO tecnico, analytics.</li>
        <li>Nao incluso: operacao de SAC ou logistica.</li>
      </ul>
      <h3>Dashboards e paineis de gestao</h3>
      <ul>
        <li>Objetivo: dados acionaveis e visuais claros.</li>
        <li>Incluso: integracoes, UX de painel, alertas basicos, governanca.</li>
        <li>Nao incluso: licencas de BI de terceiros ou limpeza profunda de dados legados.</li>
      </ul>
      <h3>Automacoes e agentes de IA</h3>
      <ul>
        <li>Objetivo: fluxos automatizados com supervisao humana.</li>
        <li>Incluso: roteiros, gatilhos, monitoramento inicial, logs.</li>
        <li>Nao inclusos: operacao humana 24/7 ou treinamento de modelos proprietarios.</li>
      </ul>
      <DocsCallout>
        Escopo e limites sao detalhados em proposta e podem ser estendidos por change requests ou planos
        adicionais.
      </DocsCallout>
    </>
  ),

  "termos-de-servico": (
    <>
      <h3>Objeto</h3>
      <p>Desenvolvimento de projetos digitais conforme escopo acordado (sites, ecommerces, dashboards, automacoes/IA).</p>
      <h3>Responsabilidades da Ateliux</h3>
      <ul>
        <li>Entregar conforme escopo e prazos estimados.</li>
        <li>Garantir qualidade tecnica, performance e conformidade acordada.</li>
        <li>Comunicar riscos, impedimentos e sugestoes de melhoria.</li>
      </ul>
      <h3>Responsabilidades do cliente</h3>
      <ul>
        <li>Fornecer conteudo, acessos, aprovacoes e feedback em tempo util.</li>
        <li>Viabilizar pagamentos conforme proposta.</li>
        <li>Zelar por marcas, dados e conformidade do proprio negocio.</li>
      </ul>
      <h3>Escopo e alteracoes</h3>
      <p>Solicitacoes fora do escopo sao avaliadas como change request ou fases adicionais.</p>
      <h3>Pagamentos</h3>
      <p>Parcelas e condicoes previstas na proposta. Atrasos podem suspender entregas ate regularizacao.</p>
      <h3>Encerramento</h3>
      <p>Projeto concluido apos entrega do escopo e do acompanhamento incluso.</p>
      <h3>Limitacao de responsabilidade</h3>
      <p>Limitada ao valor do contrato. Nao prestamos assessoria juridica; recomendamos revisao legal do cliente.</p>
    </>
  ),

  "politica-de-privacidade": (
    <>
      <h3>Dados coletados</h3>
      <ul>
        <li>Contato: nome, email, telefone, empresa, cargo.</li>
        <li>Briefings e anexos enviados nos formularios.</li>
        <li>Dados de uso do site para analytics.</li>
      </ul>
      <h3>Uso dos dados</h3>
      <ul>
        <li>Contato comercial e envio de propostas.</li>
        <li>Melhoria de servicos e comunicacao com clientes.</li>
        <li>Analise de trafego e performance.</li>
      </ul>
      <h3>Compartilhamento</h3>
      <p>Somente com provedores de hospedagem, email, analytics ou parceiros necessarios para execucao.</p>
      <h3>Direitos do titular</h3>
      <ul>
        <li>Acesso, correcao ou exclusao de dados.</li>
        <li>Revogacao de consentimento quando aplicavel.</li>
        <li>Solicitacao de informacoes sobre compartilhamento.</li>
      </ul>
      <h3>Bases legais</h3>
      <p>Consentimento, execucao de contrato e interesse legitimo quando adequado, em linha com boas praticas de LGPD.</p>
      <h3>Contato</h3>
      <p>Use o formulario de contato para solicitacoes de dados ou remocao.</p>
    </>
  ),

  "politica-de-cookies": (
    <>
      <h3>O que sao cookies</h3>
      <p>Arquivos no navegador para lembrar preferencias e medir uso do site.</p>
      <h3>Tipos usados</h3>
      <ul>
        <li>Necessarios: sessao, idioma.</li>
        <li>Analiticos: trafego e performance.</li>
        <li>Marketing (quando aplicavel): pixels para campanhas.</li>
      </ul>
      <h3>Controle</h3>
      <p>O usuario pode bloquear cookies no navegador; isso pode afetar personalizacao e medicao.</p>
    </>
  ),

  "suporte-e-manutencao-atualizacoes": (
    <>
      <h3>Acompanhamento inicial</h3>
      <ul>
        <li>Site institucional: 30 dias.</li>
        <li>Landing page: 15 dias.</li>
        <li>Ecommerce: 60 dias.</li>
        <li>Dashboards: 45 dias.</li>
        <li>Automacoes/IA: 30 dias.</li>
      </ul>
      <p>Inclui ajustes finos de conteudo/microcopy, pequenos ajustes visuais/UX, correcoes de bugs e suporte basico.</p>
      <h3>Manutencao evolutiva</h3>
      <p>Novas funcionalidades ou mudancas grandes sao tratadas como novo escopo ou plano continuo.</p>
      <h3>Canais</h3>
      <p>Email e canal combinado no kickoff (Slack/WhatsApp) em horario comercial ou conforme SLA contratado.</p>
    </>
  ),

  "entregaveis-padroes": (
    <>
      <h3>O que entregamos</h3>
      <ul>
        <li>Codigo fonte versionado.</li>
        <li>Documentacao tecnica e instrucoes de deploy.</li>
        <li>Handoff de design e guias de uso.</li>
        <li>Configuracoes de SEO tecnico e eventos basicos.</li>
      </ul>
      <h3>O que pode variar</h3>
      <p>Playbooks, runbooks e manuais adicionais podem ser incluidos conforme pacote contratado.</p>
    </>
  ),

  "ambientes-dev-homolog-producao": (
    <>
      <h3>Organizacao de ambientes</h3>
      <ul>
        <li>Ambientes separados para dev, homolog e producao.</li>
        <li>Acessos controlados e segregacao de dados sensiveis.</li>
        <li>Deploy automatizado e revisao de PRs quando aplicavel.</li>
      </ul>
      <h3>Responsabilidades</h3>
      <p>Definimos quem aciona deploys, quem aprova e quais logs sao monitorados.</p>
    </>
  ),

  "politica-de-cancelamento-reembolso": (
    <>
      <h3>Antes do inicio</h3>
      <p>Cancelamentos antes do inicio podem ter reembolso parcial, descontando preparacao ou reservas de agenda.</p>
      <h3>Apos inicio</h3>
      <p>Etapas concluidas ou em andamento sao faturadas proporcionalmente. Reembolsos seguem percentuais acordados em contrato.</p>
      <h3>Encerramento</h3>
      <p>Consideramos concluido apos entrega do escopo e do acompanhamento incluso. Acessos podem ser ajustados conforme contrato.</p>
      <h3>Portabilidade</h3>
      <p>Codigo e artefatos sao entregues; acessos podem ser revogados apos encerramento definitivo.</p>
    </>
  ),

  "propriedade-intelectual-licenciamento": (
    <>
      <h3>Codigo e design</h3>
      <p>Codigo e assets criados sao cedidos conforme contrato. Componentes de terceiros seguem suas licencas.</p>
      <h3>Uso permitido</h3>
      <p>Cliente pode usar, adaptar e evoluir o projeto para seu negocio.</p>
      <h3>Uso nao permitido</h3>
      <p>Revenda nao autorizada, remocao indevida de creditos ou uso fora do escopo licenciado de terceiros.</p>
      <h3>Recursos de terceiros</h3>
      <p>Fontes, imagens e libs podem ter termos proprios; o cliente deve respeitar essas condicoes.</p>
    </>
  ),

  "seguranca-confidencialidade-dados": (
    <>
      <h3>Confidencialidade</h3>
      <p>Informacoes do cliente sao usadas apenas para execucao do projeto e tratadas como confidenciais.</p>
      <h3>Boas praticas</h3>
      <ul>
        <li>Contas e acessos segregados por ambiente.</li>
        <li>Logs e monitoramento basico.</li>
        <li>Principio de menor privilegio para credenciais.</li>
      </ul>
      <h3>Recomendacoes ao cliente</h3>
      <p>Manter governanca de acessos, revisoes periodicas e politicas internas de seguranca.</p>
    </>
  ),

  "modelos-de-cobranca": (
    <>
      <h3>Opcoes</h3>
      <ul>
        <li>Projeto fechado: preco por escopo fechado.</li>
        <li>Hora tecnica: adequado para demandas exploratorias.</li>
        <li>Mensalidade: backlog continuo e evolucao constante.</li>
        <li>Revenue share: parceria com risco compartilhado.</li>
        <li>Hibridos: combinacao conforme necessidade.</li>
      </ul>
    </>
  ),

  "faturamento-e-pagamentos": (
    <>
      <h3>Ciclos e meios</h3>
      <p>Faturamento em ciclos combinados. Meios: boleto, transferencia, cartao corporativo quando aplicavel.</p>
      <h3>Impostos e notas</h3>
      <p>Notas emitidas conforme regime tributario vigente e contrato.</p>
    </>
  ),

  "parcerias-b2b-e-white-label": (
    <>
      <h3>Modelos de cooperacao</h3>
      <ul>
        <li>White-label para agencias e software houses.</li>
        <li>Equipes dedicadas com confidencialidade e branding do parceiro.</li>
        <li>Escopos e SLAs definidos em co-criacao.</li>
      </ul>
    </>
  ),

  "requisitos-tecnicos-para-parceiros": (
    <>
      <h3>Padroes esperados</h3>
      <ul>
        <li>Codigo versionado e revisao de PR.</li>
        <li>Conformidade com design system e UX guidelines.</li>
        <li>Documentacao tecnica e comunicacao assincrona clara.</li>
        <li>SLAs combinados para suporte e manutencao.</li>
      </ul>
    </>
  ),

  "faq-projetos-ateliux": (
    <>
      <h3>Perguntas frequentes</h3>
      <ul>
        <li>Prazo medio: LPs em semanas; ecommerces e dashboards em semanas a poucos meses.</li>
        <li>Diferenca site x landing x ecommerce: autoridade vs. campanha vs. vendas.</li>
        <li>Aprovacao de layout: reviews por etapa, numero de revisoes definido em proposta.</li>
        <li>Alteracoes inclusas: conforme proposta; extras via change request.</li>
        <li>Acompanhamento pos-deploy: conforme produto (15-60 dias).</li>
        <li>Integracoes: testamos com credenciais e dependencias alinhadas (pagamentos, frete, CRM, IA).</li>
        <li>Manutencao futura: planos continuos ou novos escopos.</li>
        <li>Pagamentos: marcos ou mensalidades conforme proposta.</li>
      </ul>
    </>
  ),
};
