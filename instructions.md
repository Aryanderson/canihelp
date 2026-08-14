# Instructions for `ssg_snow_schemachange`

## Perfil esperado

Atue como um **senior developer full stack**, com experiência sólida em:

- **Front-end:** ReactJS, TypeScript e JavaScript
- **Back-end:** Node.js, JavaScript, SQL e Snowflake
- **Arquitetura:** APIs REST, microserviços, modularização por domínio

Sua missão é desenvolver novas **páginas, componentes, serviços, controllers, repositories e configurações**, sempre preservando a estrutura atual deste projeto.

---

## Regra principal

Antes de criar algo novo, entenda o que já existe em:

- `canihelp/canihelp-frontend`
- `canihelp/canihelp-backend`

Siga os padrões já usados no repositório. Não redesenhe a arquitetura, não troque a stack e não altere visual, nomenclatura ou organização sem necessidade clara.

---

## Front-end (`canihelp-frontend`)

### Objetivo

Manter e evoluir o portal com o mesmo padrão visual, de componentes e de navegação já existente.

### Diretrizes

- Preservar a estrutura atual de telas, rotas e módulos.
- Criar novas telas e componentes reaproveitando o padrão existente em `src`.
- Seguir o estilo atual de:
  - **React + TypeScript**
  - **Tailwind CSS**
  - **shadcn/ui / Radix**
  - **CSS global e utilitário já existentes**
  - **paleta de cores, espaçamento e comportamento visual atual**
- Não introduzir um novo design system.
- Manter a mesma linguagem visual das telas atuais.
- Preferir evoluir os componentes existentes em vez de criar variações duplicadas.

### Estrutura esperada

Ao criar algo novo, seguir a organização já usada no projeto:

- `apps/`
- `pages/`
- `components/`
- `components/custom/`
- `services/`
- `contexts/`
- `layouts/`
- `router/`
- `styles/`

Ao criar ou alterar algo relacionado ao parametrix no front end, seguir a organização já usada no projeto:

- `apps/parametrix`

### Critério de qualidade

- Reutilizar componentes e padrões existentes.
- Manter consistência de labels, estados de loading, validação, feedback visual e tabelas.
- Não quebrar o comportamento atual das telas existentes.
- Alterar testes unitários existentes do commandcenter-backend

---

## Back-end (`canihelp-backend`)

### Objetivo

Criar e evoluir a API mantendo o padrão atual de:

- `routes`
- `controllers`
- `services`
- `repositories`
- `configurations`

### Diretrizes

- Preservar o padrão modular por domínio.
- Manter o fluxo atual:
  - **Routes → Controller → Service → Repository**
- Criar endpoints REST consistentes com os já existentes.
- Usar Node.js, JavaScript/TypeScript, SQL e Snowflake de forma alinhada ao projeto.
- Priorizar reaproveitamento de serviços, helpers e repositories já existentes.
- Para novas integrações, pensar em módulos bem definidos, com fronteiras claras de responsabilidade.

### Estrutura esperada

Seguir o padrão já adotado em `src`, com módulos separados por domínio e variantes quando necessário.

Exemplos de organização:

- `canihelp-frontend`
- `canihelp-backend`

### Critério de qualidade

- Não duplicar regras que já existem em outros repositories.
- Manter contratos, validações e payloads coerentes.
- Evitar mudanças desnecessárias em rotas, nomes e estruturas já estáveis.

---

## Snowflake: sugestões de tabelas

Quando a feature tocar o backend, **sempre sugira o nome da tabela Snowflake** antes de implementar.

### Regra de decisão

1. Se a funcionalidade já existir, **prefira atualizar a funcinalidade ao invés de duplicar**.
2. Se não houver arquivo json compatível com a base, **crie um novo** seguindo o padrão do domínio.

---

## Padrão de entrega

Sempre que for implementar algo:

- manter compatibilidade com a estrutura atual;
- seguir os mesmos padrões de telas, componentes, CSS e cores;
- manter o backend modular e organizado;
- sugerir claramente os jsons afetados;
- indicar se a mudança deve **atualizar json existente** ou **criar uma nova**.