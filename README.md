# Ateliux – Estúdio Ciano de Produtos Digitais

Bem-vindo ao monorepo frontend da **Ateliux**, um estúdio especializado em SaaS, sites institucionais, e-commerce, dashboards, blogs e landing pages de alta conversão. Stack moderna com **Next.js 16 (App Router) + TypeScript + Tailwind (v4)**, tema escuro e destaques em **ciano**.

---

## 📌 Visão Geral
- **Landing ciano** com hero, templates, métricas e CTA.
- **Área de contato** completa (`/contato`): canais, formulário validado, FAQ e fundo espacial contínuo.
- **Documentação corporativa** (`/docs`): sidebar com busca local, páginas por slug, callouts, fundo dedicado.
- **Rotas setoriais**: `/saas`, `/ecommerce`, `/sites-institucionais`, `/blog`, `/landing-pages`, `/docs` etc.
- **Tema global**: fundo quase preto com assets neon (`hero_bg_ciano.png`, `bg_documentacao.svg`) e glow ciano.

---

## 🚀 Como rodar
```bash
# instalar deps
npm install

# dev
npm run dev

# build
npm run build

# lint
npm run lint
```

Node 18+ recomendado.

---

## 🧩 Estrutura principal
```
app/
  layout.tsx          # layout global (Navbar/Footer)
  page.tsx            # landing
  contato/            # página de contato (hero, canais, formulário, FAQ)
  docs/               # docs com layout próprio, sidebar, páginas por slug
  api/contato/        # rota fake de envio de formulário
components/
  layout/             # Navbar, Footer
  sections/           # Hero, Templates, BusinessApplication, etc.
  docs/               # DocsLayout, DocsSidebar, DocsContent, DocsCallout
public/
  hero_bg_ciano.png   # fundo espacial ciano
  bg_documentacao.svg # fundo docs
  ...outros assets    # cards, gráficos, ícones
```

---

## 📒 Documentação corporativa
- Sidebar com categorias (Primeiros passos, Formatos de trabalho, IA, Entregas, Contratos, Financeiro, Parcerias).
- Páginas individuais em `/docs/[slug]` alimentadas por `app/docs/data.ts`.
- Callouts para alertas e boa legibilidade (tipografia escura + ciano).
- Fundo dedicado `bg_documentacao.svg` fixo, sem cortes entre seções.

---

## 🤝 Contato e canais
- `/contato` com fundo contínuo espacial, cards de canais (e-mail, WhatsApp, telefone, parcerias, suporte, localização, redes).
- Formulário validado no front-end, envia para rota fake `/api/contato`.
- FAQ com perguntas-chave (prazo, atuação internacional, manutenção, pagamentos).

---

## 🛠️ Tech stack
- **Next.js 16 / App Router**
- **TypeScript**
- **Tailwind CSS v4** (config inline)
- **lucide-react** para ícones
- **next/image** para fundos e assets

---

## 🧭 Roteiro rápido de desenvolvimento
1) `npm install` e `npm run dev`.
2) Ajuste links reais (WhatsApp, agenda, redes) em `ContactChannels`.
3) Preencha conteúdos adicionais das seções conforme novos assets.
4) Publicar endpoint real para o form em `/api/contato` quando disponível.

---

## 🧾 Changelog resumido (recente)
- ✅ Fundo contínuo espacial em `/contato` com `hero_bg_ciano.png`.
- ✅ Nova doc `/docs` com sidebar, busca local, callouts e fundo `bg_documentacao.svg`.
- ✅ CTA trial, templates, métricas e cards de automação/satisfação replicados em ciano.
- ✅ Footer simplificado com idioma, direitos e redes (ícones lucide).
- ✅ Formulário de contato validado e API fake de recebimento.

---

## 📄 Licença
Uso interno da Ateliux. Ajuste para o modelo de licença da empresa se necessário.
