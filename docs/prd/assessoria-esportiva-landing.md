# Assessoria Esportiva — Landing Page PRD

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|--------|
| 2026-04-08 | 1.0.0 | Versão inicial | Morgan |

---

## Goals and Background Context

### Goals

- Criar uma página de vendas simples e rápida para assessoria esportiva individual
- Capturar leads (nome + WhatsApp) via formulário e armazenar no Supabase
- Entregar uma página minimamente bonita, funcional e didática
- Servir como base de aprendizado para o fluxo completo AIOX (copy → PRD → dev)

### Background Context

O projeto é uma landing page didática para venda de assessoria esportiva individual. O público-alvo são pessoas que treinam mas se sentem desacompanhadas, sem resultado consistente. A copy já está pronta em `docs/copy/assessoria-esportiva-landing.md` e serve de base direta para o conteúdo da página.

O objetivo técnico é simples: uma página estática com formulário de captura de leads integrado ao Supabase. Sem backend customizado, sem autenticação, sem dashboard.

---

## Requirements

### Functional

- **FR1:** A página exibe a copy completa conforme `docs/copy/assessoria-esportiva-landing.md` (headline, subheadline, problema, solução, benefícios, prova social, CTA, garantia)
- **FR2:** A página contém um formulário com os campos: `Nome completo` e `WhatsApp (com DDD)`
- **FR3:** Ao submeter o formulário, os dados são inseridos na tabela `leads` do Supabase com os campos `nome`, `whatsapp` e `created_at`
- **FR4:** Após o envio bem-sucedido, o usuário vê uma mensagem de confirmação: "Recebemos seu contato! Falaremos em breve."
- **FR5:** O formulário valida que ambos os campos estão preenchidos antes de submeter
- **FR6:** A página é responsiva (mobile-first)

### Non Functional

- **NFR1:** A página deve carregar em menos de 3 segundos
- **NFR2:** O código deve usar Tailwind CSS e ShadCN/UI como bibliotecas de estilo
- **NFR3:** A integração com Supabase deve usar a SDK oficial do Supabase JS
- **NFR4:** As credenciais do Supabase devem ser lidas via variáveis de ambiente (`.env`)
- **NFR5:** Não é necessário autenticação, painel administrativo ou visualização de leads na interface

---

## User Interface Design Goals

### Overall UX Vision

Página única, limpa, direta. O usuário rola a página de cima para baixo e chega ao formulário sem distração. Estética esportiva: fundo escuro ou neutro, tipografia forte, acentos em cor vibrante (ex: verde ou laranja).

### Key Interaction Paradigms

- Scroll vertical linear
- Formulário inline (sem modal, sem redirect)
- Feedback imediato após envio (mensagem de sucesso no lugar do formulário)

### Core Screens and Views

- **Landing Page (única):** Toda a copy + formulário de captura na mesma página

### Accessibility

WCAG AA básico — contraste adequado, labels nos inputs, foco visível.

### Branding

Estética esportiva minimalista. Fundo escuro (#0f0f0f ou similar), texto branco, acento em verde (#22c55e Tailwind green-500) ou laranja. Tipografia sans-serif bold para headlines.

### Target Device and Platforms

Web Responsivo (mobile-first)

---

## Technical Assumptions

### Repository Structure

Monorepo (projeto único, página estática)

### Service Architecture

- **Framework:** Next.js (App Router) — pages simples, fácil deploy
- **Estilo:** Tailwind CSS + ShadCN/UI (componentes: Button, Input, Card)
- **Banco de dados:** Supabase (tabela `leads`)
- **Deploy:** Vercel (opcional para fins didáticos)
- **SDK:** `@supabase/supabase-js`

### Testing Requirements

Nenhum teste automatizado — projeto didático. Validação manual via browser.

### Additional Technical Assumptions

- Variáveis de ambiente: `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Tabela Supabase `leads`: colunas `id` (uuid, PK), `nome` (text), `whatsapp` (text), `created_at` (timestamptz, default now())
- RLS desabilitado na tabela `leads` para permitir insert anônimo (projeto didático)
- Sem paginação, sem autenticação, sem painel admin

---

## Epic List

- **Epic 1 — Landing Page Completa:** Setup do projeto Next.js + Tailwind + ShadCN, implementação da copy e formulário com integração ao Supabase. Entrega uma página funcional e deployável do início ao fim.

---

## Epic 1 — Landing Page Completa

**Goal:** Configurar o projeto, implementar a página com a copy pronta e conectar o formulário ao Supabase, entregando uma landing page funcional e responsiva.

### Story 1.1 — Setup do Projeto

Como desenvolvedor,
Eu quero inicializar o projeto Next.js com Tailwind e ShadCN,
Para ter a base técnica pronta para implementar a página.

**Acceptance Criteria:**
1. Projeto Next.js criado com App Router
2. Tailwind CSS configurado e funcional
3. ShadCN/UI instalado com componentes Button, Input e Card disponíveis
4. Variáveis de ambiente configuradas no `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
5. Projeto roda localmente sem erros (`npm run dev`)

---

### Story 1.2 — Implementação da Página com a Copy

Como visitante,
Eu quero ver a página de vendas com todo o conteúdo,
Para entender a oferta e me sentir motivado a preencher o formulário.

**Acceptance Criteria:**
1. Página `/` exibe todas as seções da copy: headline, subheadline, problema, solução, benefícios, prova social, CTA e garantia
2. Layout é responsivo e mobile-first
3. Estética aplicada: fundo escuro, tipografia bold nas headlines, acento em cor vibrante
4. Componentes ShadCN/UI utilizados onde aplicável (Card para benefícios, Button para CTA)
5. Página carrega sem erros de console

---

### Story 1.3 — Formulário de Captura de Leads com Supabase

Como visitante,
Eu quero preencher meu nome e WhatsApp e enviar,
Para receber o contato da assessoria.

**Acceptance Criteria:**
1. Formulário contém campos `Nome completo` e `WhatsApp (com DDD)` com labels visíveis
2. Validação client-side: ambos os campos são obrigatórios antes do submit
3. Ao submeter, os dados são inseridos na tabela `leads` do Supabase via SDK JS
4. Após envio bem-sucedido, o formulário é substituído pela mensagem: "Recebemos seu contato! Falaremos em breve."
5. Em caso de erro na inserção, exibe mensagem: "Algo deu errado. Tente novamente."
6. Botão exibe estado de loading durante o envio

---

## Next Steps

### Architect Prompt

Não necessário — stack definida (Next.js + Tailwind + ShadCN + Supabase). Projeto simples sem decisões arquiteturais pendentes.

### Developer Prompt

> `@dev` — Implementar a landing page conforme este PRD. Copy disponível em `docs/copy/assessoria-esportiva-landing.md`. Iniciar pela Story 1.1 (setup), seguida de 1.2 (copy) e 1.3 (formulário + Supabase). Stack: Next.js App Router, Tailwind CSS, ShadCN/UI, Supabase JS SDK.
