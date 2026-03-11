# MOVE Personal — Versão MVP Lean

## Visão Geral
O sistema é uma plataforma digital de descoberta, reserva e gestão de veículos de lazer, conectando usuários interessados em experiências sob demanda a proprietários que desejam monetizar ativos como lanchas, jet skis, UTVs e quadriciclos. Ele atua desde a camada de aquisição e navegação do usuário (exploração por categoria, busca por local e período, visualização de anúncios e solicitação de reserva) até a camada operacional do proprietário (gestão de anúncios, calendário, aprovação de reservas e acompanhamento básico da operação). O diferencial competitivo está na simplicidade da jornada, na centralização da operação em poucos fluxos e na capacidade de transformar veículos ociosos em ativos rentáveis com uma experiência digital mais direta, acessível e orientada à conversão.

## Objetivo do MVP Lean
Entregar a menor versão funcional para validar tração entre locatários e proprietários, com foco em:
- descoberta de veículos
- solicitação de reserva
- operação básica do proprietário

## Premissas
- Equipe tecnicamente acima da média.
- Planejamento recalibrado para **19 devs fullstack** atuando em paralelo.
- Estimativa em horas totais (front + back + QA funcional básico).
- Sem painel administrativo robusto, sem chat em tempo real e sem automações complexas.
- Mesmo com time grande, o prazo não reduz de forma linear por dependências, integração e homologação.

---

## Escopo MVP Lean (incluído)

### 1) Base do app + autenticação
**Inclui**
- estrutura base (navegação principal, componentes compartilhados)
- login/cadastro com e-mail e senha
- sessão persistida e logout

**Estimativa:** 18h a 28h

### 2) Home + busca essencial
**Inclui**
- home com categorias (Jet Ski, Lancha, UTV, Quadriciclo)
- busca por local
- busca por período (datas)

**Estimativa:** 20h a 30h

### 3) Catálogo + detalhe do anúncio
**Inclui**
- listagem de veículos com preço, local e nota
- detalhe do anúncio com informações principais
- CTA para reservar

**Estimativa:** 26h a 38h

### 4) Reserva ponta a ponta (essencial)
**Inclui**
- criação da solicitação de reserva
- checagem básica de disponibilidade por data
- confirmação da solicitação
- status principais da reserva (pendente, aprovada, cancelada)

**Estimativa:** 30h a 44h

### 5) Gestão básica do proprietário
**Inclui**
- Meus anúncios (listar + ativar/desativar)
- Reservas recebidas (aprovar/recusar)
- Calendário simples de ocupação

**Estimativa:** 28h a 42h

### 6) Perfil básico
**Inclui**
- visualizar/editar dados essenciais do usuário

**Estimativa:** 8h a 14h

### 7) Avaliação simples pós-reserva
**Inclui**
- nota por estrelas
- comentário curto

**Estimativa:** 10h a 16h

---

## Fora do MVP Lean (fase 2)
- login social (Google)
- central de ajuda completa com chamados
- módulo de mensagens/chat
- financeiro completo (repasse, extrato detalhado, onboarding bancário avançado)
- landing institucional extensa com copy completa
- antifraude/KYC e automações operacionais

---

## Resumo de esforço

| Bloco | Horas |
|---|---:|
| Base + Auth | 18h a 28h |
| Home + Busca | 20h a 30h |
| Catálogo + Detalhe | 26h a 38h |
| Reserva essencial | 30h a 44h |
| Gestão do proprietário | 28h a 42h |
| Perfil básico | 8h a 14h |
| Avaliação simples | 10h a 16h |

### Total MVP Lean
- **Faixa otimista:** **140h**
- **Faixa confortável:** **212h**

---

## Leitura prática de prazo (time com 19 devs fullstack)
- **Execução técnica (build em paralelo):** ~4 a 7 dias úteis
- **Integração entre frentes + QA funcional + correções finais:** ~4 a 8 dias úteis
- **Prazo total recomendado de MVP Lean:** **8 a 15 dias úteis** (cerca de **1,5 a 3 semanas corridas**)

### Capacidade prática por fase (19 devs)
- **Fase 1 — Setup e fundação:** 1 a 2 dias úteis
- **Fase 2 — Desenvolvimento paralelo dos blocos MVP:** 3 a 5 dias úteis
- **Fase 3 — Hardening (integração, testes, ajustes):** 4 a 8 dias úteis

### Observação de planejamento
- O principal gargalo deixa de ser codificação e passa a ser coordenação de branches, integrações, estabilização e validação do fluxo ponta a ponta.
- Para sustentar o prazo curto, vale dividir por squads (ex.: Auth, Busca/Catálogo, Reservas, Owner Ops, Perfil/Avaliação) com dono técnico por frente.

---

## Critério de pronto do MVP Lean
Considerar o MVP pronto quando for possível:
1. usuário criar conta e entrar
2. encontrar um veículo por local/data
3. solicitar reserva
4. proprietário aprovar/recusar
5. ambos visualizarem status da reserva
6. locatário avaliar a experiência
