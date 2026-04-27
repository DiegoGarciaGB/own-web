# Launch Labs — Landing Page

Stack: Next.js 15 · React 19 · TypeScript · Tailwind CSS · shadcn/ui

## Setup rápido

```bash
# 1. Instalar dependencias
npm install

# 2. Inicializar shadcn/ui (primer setup)
npx shadcn@latest init
# → Seleccionar: Default style, slate base color, CSS variables: yes

# 3. Agregar componentes shadcn que se usan en el proyecto
npx shadcn@latest add button badge card

# 4. Correr en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Estructura del proyecto

```
launch-labs/
├── app/               # Next.js App Router
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Services, Process, Portfolio, Pricing, CTA
│   └── ui/            # Section, SectionHeader + shadcn components
├── config/            # Identidad del negocio (site.ts, navigation.ts)
├── data/              # Contenido editable (hero, services, pricing, etc.)
├── types/             # TypeScript types globales
├── lib/               # utils (cn, helpers)
└── styles/            # globals.css con design tokens
```

## Cómo editar contenido

Todo el copy y los datos están en `data/`. No toques los componentes para cambiar texto.

| Qué quieres cambiar | Archivo           |
|---------------------|-------------------|
| Hero (título, stats)| `data/hero.ts`    |
| Servicios           | `data/services.ts`|
| Pasos del proceso   | `data/process.ts` |
| Precios             | `data/pricing.ts` |
| Portafolio          | `data/portfolio.ts`|
| CTA final           | `data/cta.ts`     |
| Nombre, email, redes| `config/site.ts`  |
| Links del navbar    | `config/navigation.ts`|

## Cómo agregar una nueva sección

1. Crea `components/sections/nueva-seccion/NuevaSeccion.tsx`
2. Agrega su data en `data/nueva-seccion.ts`
3. Agrega sus tipos en `types/index.ts` si son compartidos
4. Importa y agrega el componente en `app/page.tsx`
5. Si tiene anchor link, agrégalo en `config/navigation.ts`
