# 🚀 Launch Labs — Setup del Proyecto

## Cambio importante: Ahora usamos pnpm

Migramos el proyecto de **npm** a **pnpm** como package manager.  
**Ya no uses `npm install` ni `npx`**. A partir de ahora todo es con `pnpm`.

---

## 📋 Requisitos previos

| Herramienta | Versión mínima | Verificar con |
|-------------|---------------|---------------|
| **Node.js** | v18+ | `node -v` |
| **pnpm** | v9+ | `pnpm -v` |
| **Git** | cualquiera | `git --version` |

---

## 🍎 Instalar pnpm en Mac

Si aún no tienes pnpm, instálalo con **uno** de estos métodos:

### Opción 1 — Con Homebrew (recomendado)
```bash
brew install pnpm
```

### Opción 2 — Con corepack (viene incluido con Node.js)
```bash
corepack enable
corepack prepare pnpm@latest --activate
```

### Opción 3 — Instalación directa
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

Después de instalar, **cierra y vuelve a abrir tu terminal** y verifica:
```bash
pnpm -v
```

---

## ⚡ Levantar el proyecto

### 1. Clonar el repo (si aún no lo tienes)
```bash
git clone <URL_DEL_REPO>
cd own-web
```

### 2. Si ya lo tenías clonado, jalar los cambios
```bash
cd own-web
git pull origin main
```

### 3. Limpiar restos de npm (si los tienes)
```bash
# Borrar node_modules viejo y package-lock.json si existen
rm -rf node_modules
rm -f package-lock.json
```

### 4. Instalar dependencias con pnpm
```bash
pnpm install
```

### 5. Levantar el servidor de desarrollo
```bash
pnpm dev
```

La app estará disponible en **http://localhost:3000** 🎉

---

## 📦 Comandos principales

| Acción | Antes (npm) | Ahora (pnpm) |
|--------|-------------|---------------|
| Instalar dependencias | `npm install` | `pnpm install` |
| Agregar un paquete | `npm install <pkg>` | `pnpm add <pkg>` |
| Agregar dev dependency | `npm install -D <pkg>` | `pnpm add -D <pkg>` |
| Ejecutar script | `npm run dev` | `pnpm dev` |
| Ejecutar binario (npx) | `npx <cmd>` | `pnpm dlx <cmd>` |
| Build de producción | `npm run build` | `pnpm build` |
| Lint | `npm run lint` | `pnpm lint` |

---

## ⚠️ Reglas del repo

1. **NO subir** `node_modules/`, `.next/`, ni `package-lock.json`  
   → Ya están en el `.gitignore`, no deberías tener problema.

2. **NO usar npm ni yarn** para instalar paquetes  
   → Si usas npm por accidente se genera un `package-lock.json` que no queremos.

3. Si agregas un paquete nuevo, **commitea** el `pnpm-lock.yaml` actualizado.

---

## 🔧 Troubleshooting

### "command not found: pnpm"
Cierra tu terminal y ábrela de nuevo. Si sigue sin funcionar, verifica que la ruta de pnpm está en tu `$PATH`:
```bash
echo $PATH
```

### Errores al instalar dependencias
```bash
# Borrar todo y reinstalar desde cero
rm -rf node_modules
pnpm store prune
pnpm install
```

### El puerto 3000 ya está en uso
```bash
# En Mac, encontrar y matar el proceso
lsof -ti:3000 | xargs kill -9
pnpm dev
```

---

## 🏗️ Stack del proyecto

- **Framework**: Next.js 16 (App Router + Turbopack)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v3
- **UI Components**: shadcn/ui + Radix UI
- **Animaciones**: Framer Motion
- **Tipografía**: Geist (Sans + Mono)
