 "use client";

import { useMemo, useState } from "react";
import { Bot, Globe2, Paperclip, Upload, User } from "lucide-react";
import Image from "next/image";
import { useTypewriter } from "./hooks/useTypewriter";

type ServiceType = "site" | "landing" | "ecommerce" | "dashboard" | "automation";
type GoalType = "authority" | "sales" | "leads" | "support";
type Complexity = "simples" | "intermediario" | "avancado";

type ProjectSuggestion = {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  text: string;
  suggestion?: ProjectSuggestion;
};

const serviceOptions: { label: string; value: ServiceType }[] = [
  { label: "Site institucional", value: "site" },
  { label: "Landing page", value: "landing" },
  { label: "Ecommerce", value: "ecommerce" },
  { label: "Dashboard", value: "dashboard" },
  { label: "Automacoes / IA", value: "automation" },
];

const goalOptions: { label: string; value: GoalType }[] = [
  { label: "Gerar autoridade", value: "authority" },
  { label: "Vender produtos", value: "sales" },
  { label: "Captar leads", value: "leads" },
  { label: "Atendimento automatizado", value: "support" },
];

const complexityOptions: { label: string; value: Complexity }[] = [
  { label: "Simples", value: "simples" },
  { label: "Intermediario", value: "intermediario" },
  { label: "Avancado", value: "avancado" },
];

function getProjectSuggestion(service: ServiceType, goal: GoalType, complexity?: Complexity): ProjectSuggestion {
  const baseImages: Record<ServiceType, string> = {
    site: "/card_welcome.png",
    landing: "/card_grafico.png",
    ecommerce: "/grafico_desempenho.png",
    dashboard: "/card_analityc_corte.png",
    automation: "/grafico_pizza.png",
  };

  const titles: Record<ServiceType, string> = {
    site: "Site institucional premium",
    landing: "Landing page de alta conversao",
    ecommerce: "Ecommerce completo",
    dashboard: "Dashboard operacional",
    automation: "Automacoes e agentes de IA",
  };

  const goalText: Record<GoalType, string> = {
    authority: "focar em reputacao, SEO tecnico e conteudo claro",
    sales: "maximizar conversao e receita com UX e analytics",
    leads: "otimizar captacao com formularios, pixels e nurturing",
    support: "automatizar atendimentos e respostas com fluxos inteligentes",
  };

  const bulletsByService: Record<ServiceType, string[]> = {
    site: [
      "CMS governavel com areas editaveis",
      "SEO tecnico, pagespeed e acessibilidade",
      "Narrativa clara e formularios integrados",
      "Monitoring de visitas e metas",
    ],
    landing: [
      "Estrutura modular para testes A/B",
      "Pixels, CRM e automacoes conectados",
      "Pagespeed otimizado para midia paga",
      "Copy e CTAs orientados a conversao",
    ],
    ecommerce: [
      "Checkout otimizado com gateways e antifraude",
      "Catalogo organizado, SEO e rastreamento",
      "Integracoes com ERP/CRM e frete",
      "Dash de vendas e abandono de carrinho",
    ],
    dashboard: [
      "KPIs por squad e funil visual",
      "Fontes conectadas a bases e APIs",
      "Alertas e acessos governados",
      "UX clara para decisao rapida",
    ],
    automation: [
      "Agentes para WhatsApp/Instagram com supervisao",
      "Fluxos e gatilhos configuraveis",
      "Logs e failover com revisao humana",
      "Integracao com CRM e help desk",
    ],
  };

  const complexityText = complexity ? `, nivel ${complexity}` : "";

  return {
    title: titles[service],
    description: `Projeto para ${titles[service].toLowerCase()} para ${goalText[goal]}${complexityText}.`,
    bullets: bulletsByService[service],
    imageSrc: baseImages[service],
  };
}

export function InteractivePortfolioHero() {
  const [service, setService] = useState<ServiceType>("site");
  const [goal, setGoal] = useState<GoalType>("authority");
  const [complexity, setComplexity] = useState<Complexity | undefined>(undefined);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const currentSuggestion = useMemo(() => getProjectSuggestion(service, goal, complexity), [service, goal, complexity]);

  const handleGenerate = () => {
    const userText = `Quero um ${serviceOptions.find((o) => o.value === service)?.label?.toLowerCase()} para ${
      goalOptions.find((o) => o.value === goal)?.label?.toLowerCase()
    }${complexity ? `, com complexidade ${complexity.toLowerCase()}` : ""}.`;

    const newUser: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: userText,
    };
    const assistant: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      text: currentSuggestion.description,
      suggestion: currentSuggestion,
    };
    setMessages([newUser, assistant]);
    setIsTyping(true);
    setShowIntro(false);
  };

  const handleClear = () => {
    setMessages([]);
    setIsTyping(false);
    setShowIntro(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0c111b] via-[#080b13] to-[#05070d] px-6 pb-12 pt-16 text-center lg:px-8 lg:pt-20">
      <div className="absolute inset-x-0 top-10 h-64 bg-[radial-gradient(circle_at_center,rgba(110,140,255,0.35),transparent_60%)] blur-3xl" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="w-full max-w-4xl">
          {messages.length === 0 ? (
            <div
              className={`flex min-h-[200px] flex-col items-center gap-4 transition-all duration-500 ${
                showIntro ? "opacity-100 translate-y-0" : "pointer-events-none -translate-y-6 opacity-0"
              }`}
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[12px] font-semibold text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(59,130,246,0.7)]" aria-hidden />
                Portfolio e criador de sites Ateliux
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
                  Portfolio de produtos digitais{" "}
                  <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">
                    Ateliux
                  </span>{" "}
                  em React.js e Tailwind CSS
                </h1>
              </div>
            </div>
          ) : (
            <ChatSimulation
              messages={messages.slice(-2)}
              isTyping={isTyping}
              onTypingEnd={() => setIsTyping(false)}
              goal={goal}
              complexity={complexity}
              compact
            />
          )}
        </div>

        <div className="w-full max-w-3xl space-y-4">
          <div className="rounded-3xl border border-white/10 bg-[#0c111b] shadow-[0_25px_70px_-40px_rgba(0,0,0,0.8)]">
            <div className="px-6 py-4 text-left text-slate-200">
              Escolha um tipo de projeto e gere uma sugestao de site automaticamente.
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/5 px-4 py-3 text-sm text-slate-300/90">
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-slate-100 transition hover:border-cyan-300/60 hover:text-white">
                  <Paperclip className="h-4 w-4" /> Anexar
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-slate-100 transition hover:border-cyan-300/60 hover:text-white">
                  <Upload className="h-4 w-4" /> Importar
                </button>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                <Globe2 className="h-4 w-4" />
                <span>Publico</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {serviceOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setService(option.value)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  service === option.value
                    ? "border-cyan-300/60 bg-cyan-400/10 text-white"
                    : "border-white/10 bg-white/5 text-slate-200/90 hover:border-cyan-300/40"
                }`}
                aria-label={`Selecionar ${option.label}`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {goalOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setGoal(option.value)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  goal === option.value
                    ? "border-cyan-300/60 bg-cyan-400/10 text-white"
                    : "border-white/10 bg-white/5 text-slate-200/90 hover:border-cyan-300/40"
                }`}
                aria-label={`Selecionar objetivo ${option.label}`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {complexityOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setComplexity(option.value)}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  complexity === option.value
                    ? "border-cyan-300/60 bg-cyan-400/10 text-white"
                    : "border-white/10 bg-white/5 text-slate-200/90 hover:border-cyan-300/40"
                }`}
                aria-label={`Selecionar complexidade ${option.label}`}
              >
                {option.label}
              </button>
            ))}
            <button
              onClick={() => setComplexity(undefined)}
              className="rounded-full border border-white/10 bg-transparent px-3 py-1 text-xs text-slate-300 hover:border-white/40"
            >
              Limpar complexidade
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleGenerate}
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0b0f18] shadow-[0_10px_40px_-25px_rgba(255,255,255,0.6)] transition hover:translate-y-[-1px]"
            >
              Gerar sugestao de projeto
            </button>
            <button
              onClick={handleClear}
              className="rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:translate-y-[-1px]"
            >
              Limpar conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatSimulation({
  messages,
  isTyping,
  onTypingEnd,
  goal,
  complexity,
  compact = false,
}: {
  messages: ChatMessage[];
  isTyping: boolean;
  onTypingEnd: () => void;
  goal: GoalType;
  complexity?: Complexity;
  compact?: boolean;
}) {
  return (
    <div
      className={`space-y-3 rounded-3xl border border-white/10 bg-[#0a0f18] p-4 text-left shadow-[0_25px_70px_-40px_rgba(0,0,0,0.85)] transition-all duration-500 ${
        compact ? "" : "mt-4"
      } ${compact ? "min-h-[200px]" : ""}`}
    >
      {!compact && <p className="text-sm text-slate-300/80">Chat de sugestoes</p>}
      <div className="flex flex-col gap-4">
        {messages.map((msg) =>
          msg.role === "user" ? (
            <div key={msg.id} className="flex justify-end">
              <div className="max-w-xl rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white shadow-[0_15px_45px_-30px_rgba(0,0,0,0.8)]">
                <div className="mb-1 flex items-center gap-2 text-xs text-slate-200/80">
                  <User className="h-4 w-4" />
                  Voce
                </div>
                {msg.text}
              </div>
            </div>
          ) : (
            <AssistantMessage
              key={msg.id}
              message={msg}
              isLast={msg.id === messages[messages.length - 1].id}
              onDone={onTypingEnd}
              goal={goal}
              complexity={complexity}
            />
          ),
        )}
        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400/80">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-300" aria-hidden />
            Digitando resposta...
          </div>
        )}
      </div>
    </div>
  );
}

function AssistantMessage({
  message,
  isLast,
  onDone,
  goal,
  complexity,
}: {
  message: ChatMessage;
  isLast: boolean;
  onDone: () => void;
  goal: GoalType;
  complexity?: Complexity;
}) {
  const display = useTypewriter(isLast ? message.text : message.text, 14);

  if (isLast && display === message.text) {
    onDone();
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-xl space-y-3 rounded-2xl border border-white/10 bg-[#0f141f] px-4 py-3 text-sm text-slate-100 shadow-[0_15px_45px_-30px_rgba(0,0,0,0.8)]">
        <div className="mb-1 flex items-center gap-2 text-xs text-slate-200/80">
          <Bot className="h-4 w-4" />
          Agente Ateliux
        </div>
        <p className="text-sm text-slate-100">{display}</p>
        {message.suggestion && (
          <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-24 overflow-hidden rounded-lg border border-white/10 bg-[#0b0f18]">
                <Image
                  src={message.suggestion.imageSrc}
                  alt={message.suggestion.title}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{message.suggestion.title}</p>
                <p className="text-xs text-slate-300/85">{message.suggestion.description}</p>
              </div>
            </div>
            <ul className="space-y-1 text-xs text-slate-200/85">
              {message.suggestion.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <a
                href="/contato?sales=1"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-transparent px-3 py-1.5 text-xs font-semibold text-white transition hover:border-cyan-300/60"
              >
                Falar com time de vendas
              </a>
              <a
                href={`/contato?service=${encodeURIComponent(message.suggestion.title)}&goal=${encodeURIComponent(goal)}&complexity=${encodeURIComponent(complexity || "")}&prefill=1`}
                className="inline-flex items-center justify-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#0b0f18] shadow-[0_10px_35px_-22px_rgba(255,255,255,0.8)] transition hover:-translate-y-[1px]"
              >
                Quero esse projeto!
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
