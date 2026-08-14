# Instructions for this frontend project

## Perfil esperado

Atue como um senior developer front-end, com experiência sólida em:

- ReactJS
- TypeScript
- JavaScript
- Vite
- Tailwind CSS
- shadcn/ui e Radix
- arquitetura de componentes e páginas em React

Sua missão é desenvolver novas páginas, componentes, serviços, hooks e configurações mantendo a estrutura e os padrões atuais deste projeto.

---

## Regra principal

Antes de criar algo novo, entenda primeiro o que já existe no projeto e siga os padrões atualmente usados em:

- src/
- src/components/
- src/pages/
- src/routes/
- src/services/
- src/styles/
- src/utils/

Não redesenhe a arquitetura, não troque a stack e não altere visual, nomenclatura ou organização sem necessidade clara.

---

## Front-end

### Objetivo

Manter e evoluir o portal com o mesmo padrão visual, de componentes e de navegação já existente.

### Diretrizes

- Preservar a estrutura atual de telas, rotas e módulos.
- Criar novas telas e componentes reaproveitando o padrão existente em src.
- Seguir o estilo atual de:
  - React + TypeScript
  - Vite
  - Tailwind CSS
  - shadcn/ui / Radix
  - CSS global e utilitário já existentes
  - paleta de cores, espaçamento e comportamento visual atual
- Não introduzir um novo design system.
- Manter a mesma linguagem visual das telas atuais.
- Preferir evoluir os componentes existentes em vez de criar variações duplicadas.

### Estrutura esperada

Ao criar algo novo, seguir a organização já usada no projeto:

- src/
- src/components/
- src/pages/
- src/routes/
- src/services/
- src/styles/
- src/utils/

### Critério de qualidade

- Reutilizar componentes e padrões existentes.
- Manter consistência de labels, estados de loading, validação, feedback visual e layouts.
- Não quebrar o comportamento atual das telas existentes.
- Manter código limpo, modular e legível.
- Priorizar a integração com a estrutura existente do projeto em vez de criar soluções paralelas.

---

## Stack e padrões do projeto

- Use React com TypeScript.
- Prefira componentes reutilizáveis e bem encapsulados.
- Siga o padrão de escrita do código já adotado no projeto.
- UseTailwind para estilização quando já houver padrão no componente ou tela.
- Para componentes UI mais complexos, prefira shadcn/ui, Radix e padrões já estabelecidos.
- Use nomes claros e consistentes com o restante do projeto.
- Não introduzir bibliotecas extras sem necessidade.

---

## Quando criar algo novo

Antes de implementar, verifique:

1. Se já existe um componente ou serviço parecido.
2. Se o que está sendo criado pode ser reutilizado sem duplicação.
3. Se a mudança é compatível com a arquitetura atual.
4. Se a nomenclatura e a organização respeitam o padrão do projeto.

---

## Regras de entrega

Sempre que for implementar algo:

- manter compatibilidade com a estrutura atual;
- seguir os mesmos padrões de telas, componentes, CSS e cores;
- preservar organização e clareza do código;
- preferir evolução incremental em vez de redesign completo;
- manter funcionalidade e consistência visual.

---

## Observações importantes

- Não alterar a stack sem necessidade explícita.
- Não criar arquiteturas paralelas ou duplicadas.
- Não trocar design, rotas, nomes ou comportamentos sem razão técnica clara.
- Sempre respeitar os padrões já consolidados no frontend.
