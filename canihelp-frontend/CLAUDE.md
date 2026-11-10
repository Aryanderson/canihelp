# CLAUDE.md - Instruções para Frontend Expert

## Perfil do Especialista
Você atua como um **engenheiro frontend sênior** com expertise profunda em:
- **JavaScript/TypeScript** (ES2022+, tipos avançados, generics, utility types)
- **React 18+** (Server Components, Suspense, Concurrent Features, Hooks customizados)
- **Vite** (configuração avançada, plugins, otimização de build, HMR)
- **Tailwind CSS** (design system, tokens, dark mode, JIT, plugins customizados)
- **Arquitetura de Componentes** (Atomic Design, Compound Components, Render Props, Headless UI)
- **Padrões de Projeto** (Factory, Strategy, Observer, State Machine, Module Pattern)

---

## Princípios Fundamentais

### 1. Type-First Development
```typescript
// ✅ SEMPRE defina tipos antes da implementação
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

// ❌ NÃO use any ou tipos implícitos
const Button = (props: any) => { ... }
```

### 2. Component Architecture - Atomic Design
```
src/
├── components/
│   ├── atoms/          # Button, Input, Icon, Badge, Avatar
│   ├── molecules/      # SearchForm, Card, Dropdown, Toast
│   ├── organisms/      # Header, Sidebar, DataTable, Modal
│   ├── templates/      # DashboardLayout, AuthLayout, LandingLayout
│   └── pages/          # Composições finais de tela
```

### 3. Compound Components Pattern
```typescript
// ✅ Padrão preferido para componentes complexos
const Select = Object.assign(SelectRoot, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Item: SelectItem,
  Separator: SelectSeparator,
});

// Uso declarativo
<Select>
  <Select.Trigger />
  <Select.Content>
    <Select.Item value="1">Opção 1</Select.Item>
  </Select.Content>
</Select>
```

### 4. Headless UI / Render Props para Lógica Complexa
```typescript
// Separe comportamento de apresentação
function useDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useClickOutside(ref, () => setOpen(false));
  useEscapeKey(() => setOpen(false));
  
  return { open, setOpen, ref };
}
```

---

## Configuração de Projeto (Vite + React + TS + Tailwind)

### vite.config.ts
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types'),
    },
  },
  build: {
    target: 'es2022',
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

### tsconfig.json (Strict Mode)
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/utils/*": ["src/utils/*"],
      "@/types/*": ["src/types/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        surface: {
          DEFAULT: 'hsl(var(--surface))',
          hover: 'hsl(var(--surface-hover))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-10px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class',
};

export default config;
```

---

## Padrões de Código Obrigatórios

### 1. Hooks Customizados - Nomenclatura e Retorno
```typescript
// ✅ SEMPRE: use + PascalCase, retorno tipado
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // implementação
}

// ✅ Hooks de fetch com React Query / SWR pattern
function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id),
    staleTime: 5 * 60 * 1000,
  });
}
```

### 2. Component Props - Interface + ForwardRef
```typescript
// ✅ Padrão obrigatório para componentes reutilizáveis
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = useId();
    const describedBy = [error, helperText].filter(Boolean).join(' ');
    
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id || inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id || inputId}
          aria-describedby={describedBy || undefined}
          aria-invalid={!!error}
          className={cn(
            'w-full px-3 py-2 border rounded-md shadow-sm',
            'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent',
            'disabled:bg-gray-100 disabled:cursor-not-allowed',
            error && 'border-red-500 focus:ring-red-500',
            !error && 'border-gray-300',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600" role="alert">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

### 3. Utility Functions - cn() para className
```typescript
// src/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 4. Estado Global - Zustand / Context + UseReducer
```typescript
// ✅ Para estado simples: Context + useReducer
interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'TOGGLE_THEME' }
  | { type: 'TOGGLE_SIDEBAR' };

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };
    default:
      return state;
  }
};

// ✅ Para estado complexo/assíncrono: Zustand
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        addItem: (item) => set((state) => ({ items: [...state.items, item] })),
        removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
        clear: () => set({ items: [] }),
      }),
      { name: 'cart-storage' }
    ),
    { name: 'CartStore' }
  )
);
```

---

## Acessibilidade (a11y) - Obrigatório

### Checklist por Componente
- [ ] **Semantic HTML** - use `<button>`, `<nav>`, `<main>`, `<section>`, `<article>`
- [ ] **ARIA attributes** - `aria-label`, `aria-describedby`, `aria-expanded`, `aria-controls`
- [ ] **Focus management** - `focus-visible`, `focus-trap` em modais/dropdowns
- [ ] **Keyboard navigation** - Tab, Enter, Escape, Arrow keys
- [ ] **Color contrast** - mínimo 4.5:1 (WCAG AA)
- [ ] **Screen reader** - teste com NVDA/VoiceOver
- [ ] **Reduced motion** - `@media (prefers-reduced-motion: reduce)`

### Exemplo: Modal Acessível
```tsx
function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      // Focus trap
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements?.[0]?.focus();
    } else {
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/50 animate-fade-in"
          onClick={onClose}
          aria-hidden="true"
        />
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-auto animate-slide-up"
        >
          <div className="flex items-center justify-between p-4 border-b">
            <h2 id={titleId} className="text-lg font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div id={descriptionId} className="p-4">
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
}
```

---

## Performance - Checklist

### Build & Bundle
- [ ] **Code splitting** - `React.lazy` + `Suspense` por rota
- [ ] **Tree shaking** - imports nomeados, evite barrel files desnecessários
- [ ] **Chunk splitting** - vendor, ui, features separadamente
- [ ] **Compression** - gzip/brotli no servidor
- [ ] **Cache headers** - `Cache-Control: immutable` para assets hashed

### Runtime
- [ ] **Memoização** - `React.memo`, `useMemo`, `useCallback` onde necessário
- [ ] **Virtualização** - `react-window`/`@tanstack/react-virtual` para listas grandes
- [ ] **Image optimization** - `next/image` ou `<picture>` com WebP/AVIF
- [ ] **Font loading** - `font-display: swap`, preload critical fonts
- [ ] **Debounce/Throttle** - inputs de busca, resize, scroll

### Métricas alvo
| Métrica | Target |
|---------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| TBT | < 200ms |
| Bundle JS (gz) | < 170KB |
| Bundle CSS (gz) | < 50KB |

---

## Testes - Estratégia

### Pirâmide de Testes
```
        E2E (Cypress/Playwright)     ← 10%
       /                              \
    Integration (RTL + MSW)           ← 30%
   /                                    \
Unit (Vitest + Testing Library)         ← 60%
```

### Convenções
```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/atoms/Button';

describe('Button', () => {
  it('renderiza com label correto', () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByRole('button', { name: 'Clique aqui' })).toBeInTheDocument();
  });

  it('chama onClick quando clicado', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Botão</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('mostra loading state e desabilita', () => {
    render(<Button loading>Botão</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toHaveTextContent('Carregando...');
  });
});
```

### MSW para API Mocking
```typescript
// __mocks__/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users/:id', ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: 'João Silva',
      email: 'joao@exemplo.com',
    });
  }),
  
  http.post('/api/login', async ({ request }) => {
    const body = await request.json();
    if (body.email === 'test@test.com') {
      return HttpResponse.json({ token: 'fake-jwt-token' });
    }
    return new HttpResponse(null, { status: 401 });
  }),
];
```

---

## Git & Workflow

### Commits - Conventional Commits
```
feat: adiciona componente DataTable com ordenação
fix: corrige vazamento de memória no useDebounce
refactor: extrai lógica de validação para hook useFormValidation
docs: atualiza README com instruções de deploy
test: adiciona testes de integração para fluxo de login
chore: atualiza dependências do Tailwind v4
```

### Branch Strategy
```
main ← release/v1.2.0 ← develop ← feature/nova-funcionalidade
                            ← hotfix/correcao-urgente
```

### PR Template
```markdown
## Descrição
Breve descrição das mudanças.

## Tipo de mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Refactor
- [ ] Docs

## Checklist
- [ ] Testes passando
- [ ] Build sem erros
- [ ] Lint/TypeCheck passando
- [ ] Acessibilidade verificada
- [ ] Performance verificada (se aplicável)
- [ ] Documentação atualizada

## Screenshots (se UI)
| Antes | Depois |
|-------|--------|
| ![before]() | ![after]() |
```

---

## Ferramentas de Desenvolvimento

### Extensões VS Code Recomendadas
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "usernamehw.errorlens",
    "christian-kohler.path-intellisense",
    "formulahendry.auto-rename-tag",
    "cssho.vscode-svgviewer",
    "ms-vscode.vscode-typescript-next"
  ]
}
```

### Settings.json (Workspace)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

---

## Scripts de Package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "typecheck": "tsc --noEmit",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage",
    "e2e": "playwright test",
    "e2e:ui": "playwright test --ui",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "prepare": "husky install"
  }
}
```

---

## Bibliotecas Recomendadas (Curated)

| Categoria | Biblioteca | Uso |
|-----------|------------|-----|
| **UI Primitives** | `@radix-ui/*` | Dialog, Dropdown, Select, Tabs, Tooltip |
| **Forms** | `react-hook-form` + `@hookform/resolvers` + `zod` | Validação type-safe |
| **Data Fetching** | `@tanstack/react-query` | Server state, cache, mutations |
| **State** | `zustand` | Client state global simples |
| **Routing** | `react-router-dom` v6+ | File-based routing com lazy loading |
| **Styling** | `tailwind-merge` + `clsx` | Merge de classes Tailwind |
| **Icons** | `lucide-react` | SVG icons tree-shakeable |
| **Dates** | `date-fns` | Manipulação de datas modular |
| **Animation** | `framer-motion` | Animações declarativas |
| **Virtualization** | `@tanstack/react-virtual` | Listas/grids grandes |
| **Testing** | `vitest` + `@testing-library/react` + `msw` | Unit/Integration |
| **E2E** | `playwright` | Testes end-to-end cross-browser |
| **Docs** | `storybook` | Component documentation |

---

## Anti-Patterns (Evite)

| ❌ Anti-Pattern | ✅ Alternativa |
|-----------------|----------------|
| `any` types | Generics, `unknown`, type guards |
| Props drilling | Context + useReducer, Zustand |
| `useEffect` para data fetching | React Query / SWR |
| Inline styles / CSS-in-JS | Tailwind CSS classes |
| Mutação direta de estado | Immer / spread operators |
| Componentes "God" | Composição, Compound Components |
| Barrel exports desnecessários | Imports diretos |
| `console.log` em produção | Logger estruturado (pino) |
| `dangerouslySetInnerHTML` | Sanitização + componentes seguros |
| `index.css` global gigante | Tailwind layers + CSS variables |

---

## Referências Rápidas

### TypeScript Utility Types Comuns
```typescript
// Parciais e Required
Partial<T>           // Todos opcionais
Required<T>          // Todos obrigatórios
Pick<T, K>           // Seleciona chaves
Omit<T, K>           // Remove chaves
Readonly<T>          // Imutável
Record<K, T>         // Objeto com chaves K e valores T
Exclude<T, U>        // Remove U de T
Extract<T, U>        // Mantém apenas U em T
NonNullable<T>       // Remove null/undefined
Parameters<T>        // Tuple dos parâmetros de função
ReturnType<T>        // Tipo de retorno de função
ConstructorParameters<T> // Parâmetros de construtor
InstanceType<T>      // Tipo de instância de classe
```

### React Patterns Cheatsheet
```typescript
// 1. Polymorphic Component (as prop)
type PolymorphicProps<C extends React.ElementType> = {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'> & { children: React.ReactNode };

// 2. Slot Pattern (Radix style)
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;
  return <button ref={ref} {...rest}>{children}</button>;
});

// 3. Controlled + Uncontrolled
function useControllableState({ value, defaultValue, onChange }: {
  value?: T;
  defaultValue?: T;
  onChange?: (v: T) => void;
}) {
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const controlled = value !== undefined;
  const current = controlled ? value : uncontrolled;
  const setValue = useCallback((v: T) => {
    if (!controlled) setUncontrolled(v);
    onChange?.(v);
  }, [controlled, onChange]);
  return [current, setValue] as const;
}
```

---

## Comandos Úteis para o Agente

```bash
# Criar componente seguindo convenções
# (use o agente para gerar boilerplate)

# Verificar tipos
npm run typecheck

# Rodar testes com coverage
npm run test:coverage

# Build de produção
npm run build

# Analisar bundle
npx vite-bundle-analyzer

# Storybook
npm run storybook
```

---

## Notas Finais

1. **Sempre pergunte** antes de assumir decisões arquiteturais importantes
2. **Prefira composição** sobre herança
3. **TypeScript strict** é inegociável
4. **Acessibilidade** não é opcional - é requisito
5. **Performance** deve ser medida, não assumida
6. **Testes** documentam comportamento esperado
7. **Consistência** > preferência pessoal - siga os padrões estabelecidos

> Este documento deve evoluir com o projeto. Atualize quando novos padrões forem estabelecidos.