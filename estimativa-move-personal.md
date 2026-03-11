# Estimativa de esforço — MOVE Personal

## Premissas usadas

- Baseado nas telas/imagens enviadas do Figma exportado.
- Considerando uma equipe tecnicamente mais rápida que a média.
- Estimativa em **horas de esforço** por funcionalidade, já considerando:
  - front-end
  - back-end/API
  - modelagem básica de dados
  - integrações usuais
  - tratamento de estados/erros principais
  - QA funcional básico
- **Não** considera infraestrutura complexa, antifraude avançado, BI, arquitetura multi-tenant, observabilidade robusta, automações de marketing ou painel administrativo separado **caso isso não exista em outras telas não enviadas**.
- Alguns itens foram inferidos a partir das navegações e estados visíveis nas telas (ex.: `Mensagens`).

---

## Funcionalidades levantadas a partir das telas

### 1. Branding, splash e estrutura base do produto
**O que apareceu nas telas**
- Uso recorrente da marca `MOVE`
- Estrutura de navegação principal do app
- Base visual consistente entre jornadas

**Escopo funcional**
- Splash/loading inicial
- Header/footer/nav tabs
- componentes base reutilizáveis
- estados globais de carregamento e erro

**Estimativa:** **16h a 24h**

---

### 2. Autenticação e acesso
**O que apareceu nas telas**
- `Entrar`
- `Digite seu e-mail`
- `Digite sua senha`
- `Continuar com o Google`
- `Não possui conta? Clique aqui`
- `Cadastrar`

**Escopo funcional**
- login com e-mail e senha
- cadastro de usuário
- login social com Google
- validações de formulário
- sessão/autenticação persistida
- logout

**Estimativa:** **24h a 36h**

---

### 3. Home / Explorar aventuras
**O que apareceu nas telas**
- `Qual será sua próxima aventura?`
- `Onde?`
- `Busca flexível`
- período de datas
- categorias como `Jet Ski`, `Lancha`, `UTV`, `Quadriciclo`

**Escopo funcional**
- home com destaque e busca principal
- busca por localização
- busca por período/data
- busca flexível
- navegação por categorias
- cards de destaque na home

**Estimativa:** **28h a 40h**

---

### 4. Catálogo/listagem de veículos
**O que apareceu nas telas**
- cards de anúncios com nome, preço, local e nota
- exemplos como `Lancha Riva 90' Argo`, `Quadriciclo Pro ATV 250`
- `R$ 420,00 por dia`
- cidade/estado
- avaliação visível nos cards

**Escopo funcional**
- listagem paginada ou incremental
- cards de anúncio
- exibição de preço, local e rating
- filtros por categoria
- ordenação básica

**Estimativa:** **24h a 32h**

---

### 5. Detalhe do anúncio / aventura
**O que apareceu nas telas**
- detalhes do item
- proprietário/anunciante (`Mateus Almeida`)
- nota e quantidade de avaliações
- CTA de `Ver detalhes`

**Escopo funcional**
- página/tela de detalhe do anúncio
- galeria/imagem principal
- descrição do veículo
- dados do anunciante
- avaliações e reputação
- CTA para reservar

**Estimativa:** **24h a 36h**

---

### 6. Jornada de reserva
**O que apareceu nas telas**
- navegação com `Reservas`
- fluxo pós-aventura e comentários
- contexto de seleção de datas e item

**Escopo funcional**
- criação de pedido de reserva
- seleção de período
- validação de disponibilidade
- resumo da reserva
- confirmação/envio da solicitação
- estados de sucesso e falha

**Estimativa:** **32h a 44h**

---

### 7. Gestão de reservas e calendário
**O que apareceu nas telas**
- `Calendário`
- `Reservas`
- `Erro ao aprovar reserva`
- item listado (`LANCHA MILLENIUM 300`)

**Escopo funcional**
- calendário de reservas
- listagem de reservas por status
- aprovação de reserva
- recusa/cancelamento
- tratamento de erro operacional
- visão do anfitrião/proprietário

**Estimativa:** **32h a 48h**

---

### 8. Avaliação e comentário pós-aventura
**O que apareceu nas telas**
- `Avalie sua aventura`
- `Adicione um comentário`
- `Enviar`
- rating em estrelas
- `Cancelar aventura`

**Escopo funcional**
- avaliação por estrelas
- comentário textual
- envio de review
- cancelamento de aventura/reserva
- atualização da reputação do anúncio

**Estimativa:** **16h a 24h**

---

### 9. Meus anúncios / gestão do inventário do proprietário
**O que apareceu nas telas**
- `Anúncios` / `Meus anúncios`
- presença de múltiplos itens do proprietário

**Escopo funcional**
- listagem de anúncios do usuário
- exibição de performance básica por item
- ativar/desativar anúncio
- edição simples de dados principais
- vínculo com reservas recebidas

**Estimativa:** **24h a 36h**

---

### 10. Financeiro e recebimentos
**O que apareceu nas telas**
- `Pagamentos`
- `Acompanhe seus recebimentos`
- `Cadastrar nova conta`
- `Total recebido`
- valores como `R$ 8k` e `R$ 4k`
- `Informações`
- `Finalizar`

**Escopo funcional**
- dashboard financeiro
- onboarding de conta bancária/destino de repasse
- acompanhamento de recebimentos
- totais e status financeiros
- fluxo básico de fechamento/finalização

**Estimativa:** **28h a 40h**

---

### 11. Perfil do usuário
**O que apareceu nas telas**
- `Meu perfil`
- recorrência dessa aba na navegação

**Escopo funcional**
- dados cadastrais
- visualização/edição de perfil
- dados de contato
- preferências básicas
- acesso aos módulos do usuário

**Estimativa:** **16h a 24h**

---

### 12. Central de ajuda / suporte
**O que apareceu nas telas**
- `Central de ajuda`
- `Olá, Luiz, como podemos ajudar?`
- `Busque instruções e saiba mais`
- `Artigos`
- `Chamados`
- `Tópicos em destaque`
- `Seus chamados: 3 abertos / 2 fechados`
- exemplos como `Seguro reserva`, `Problemas com reembolso`, `Pagamento não processado`

**Escopo funcional**
- central de ajuda com busca
- artigos e FAQ
- abertura/acompanhamento de chamados
- status dos chamados
- tópicos recomendados

**Estimativa:** **24h a 36h**

---

### 13. Mensagens
**O que apareceu nas telas**
- aba `Mensagens` na navegação principal

**Escopo funcional**
- inbox/lista de conversas
- visualização de conversa
- envio de mensagens
- estados de leitura/não leitura básicos

**Estimativa:** **20h a 32h**

**Observação:** item inferido pela navegação visível; não foi possível confirmar todas as telas do fluxo de chat apenas pelo export recebido.

---

### 14. Landing page institucional para proprietários/anunciantes
**O que apareceu nas telas**
- `Seu veículo parado está perdendo dinheiro`
- `Mude isso hoje`
- `Anuncie seu veículo!`
- `Cadastre seu veículo gratuitamente`
- blocos de valor como `Zero burocracia`, `100% seguro`, `Você no controle`
- categorias `Barcos`, `Jet skis`, `UTVs`, `Quadriciclos`

**Escopo funcional**
- landing institucional
- hero com CTA
- seções de benefícios
- prova de valor / rentabilidade
- CTA para cadastro de veículo
- responsividade web

**Estimativa:** **20h a 30h**

---

## Resumo consolidado

| Funcionalidade | Estimativa |
|---|---:|
| Branding, splash e estrutura base | 16h a 24h |
| Autenticação e acesso | 24h a 36h |
| Home / Explorar | 28h a 40h |
| Catálogo/listagem | 24h a 32h |
| Detalhe do anúncio | 24h a 36h |
| Jornada de reserva | 32h a 44h |
| Gestão de reservas e calendário | 32h a 48h |
| Avaliação e comentário | 16h a 24h |
| Meus anúncios | 24h a 36h |
| Financeiro e recebimentos | 28h a 40h |
| Perfil do usuário | 16h a 24h |
| Central de ajuda | 24h a 36h |
| Mensagens | 20h a 32h |
| Landing page institucional | 20h a 30h |

### Total estimado
- **Faixa otimista:** **348h**
- **Faixa mais confortável:** **482h**

### Leitura prática do total
Para uma equipe acima da média, um cenário razoável seria:

- **2 devs full stack + 1 QA parcial:** cerca de **5 a 7 semanas**
- **3 devs + 1 QA parcial:** cerca de **3,5 a 5 semanas**
- **1 dev muito sênior tocando sozinho:** cerca de **9 a 12 semanas**

---

## Itens que podem aumentar a estimativa

- gateway de pagamento com split complexo
- fluxo antifraude/KYC
- geolocalização e mapas avançados
- push notifications
- chat em tempo real robusto
- upload/gestão avançada de mídia
- painel administrativo completo
- automação de suporte e CRM
- testes automatizados amplos
- publicação simultânea iOS + Android + web com requisitos específicos

---

## Recomendação de planejamento

Se a ideia for fechar proposta comercial ou cronograma inicial, a melhor leitura para este material é:

- usar **~420h a 460h** como faixa de compromisso
- tratar `Mensagens` e qualquer painel administrativo como **escopo opcional ou fase 2** caso ainda não estejam detalhados no Figma
- separar a entrega em 3 blocos:
  1. **Aquisição e acesso**: landing, auth, onboarding, perfil
  2. **Marketplace**: explorar, detalhe, reservas, avaliações
  3. **Operação do proprietário**: anúncios, calendário, pagamentos, ajuda

---

## Observação final

Esta estimativa foi montada com base no que ficou legível nas imagens exportadas. Se você me enviar o export completo com nomes das frames ou screenshots em sequência por tela, dá para transformar isso em uma versão ainda mais precisa com:

- estimativa por tela
- dependências entre fluxos
- roadmap por sprint
- separação entre MVP, V1 e backlog
