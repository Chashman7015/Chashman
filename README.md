# Chashman — Cyberpunk Portfolio

A cinematic 3D portfolio website for **Chashman** (Mechatronics & Control Engineer),
built with Next.js 16, React Three Fiber, Three.js, and Framer Motion.

![Tech Stack](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.184-black?logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0080?logo=framer)

## ✨ Features

- **3D Hero Scene** — Mouse-reactive floating geometric shapes (icosahedrons, torus, octahedrons, dodecahedrons, torus knots) with a pulsing energy core, built with React Three Fiber
- **3D Avatar Display** — Profile photo in a mouse-tilt circular frame surrounded by a distorted wireframe blob, glowing core, and three neon orbiting rings
- **Particle Background** — Full-viewport 3D starfield with 1,800 colored particles + faint particle-network lines
- **Cinematic Animations** — Scroll-triggered reveals, staggered text, 3D tilt cards, glitch effects, scroll progress bar (Framer Motion)
- **Cyberpunk Theme** — Deep violet-black palette with magenta/cyan/violet neon accents, Orbitron + Space Grotesk + JetBrains Mono typography, HUD corner brackets, scanlines, cyber grid overlays
- **Fully Responsive** — Mobile-first design with hamburger menu, tested from 390px to 1440px+
- **Accessible** — Semantic HTML, ARIA labels, keyboard-navigable

## 📂 Sections

1. **Hero** — Glitch-effect name headline, animated stats strip, CTAs
2. **About** — 3D avatar + bio quote, education card, leadership cards
3. **Skills** — 3 HUD-framed skill group cards (Industrial Automation, Instrumentation, Software) + "Daily Stack" tech strip
4. **Projects** — 4 case-study cards with mouse-driven 3D tilt
5. **Experience** — Alternating vertical timeline with active-role indicator
6. **Contact** — Terminal-styled form with toast notifications + contact methods + socials

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (or Bun — recommended)
- **npm**, **pnpm**, **yarn**, or **bun**

### Installation

```bash
# Using bun (recommended — fastest)
bun install

# OR using npm
npm install

# OR using pnpm
pnpm install

# OR using yarn
yarn install
```

### Environment Setup

```bash
# Copy the example env file
cp .env.example .env
```

The `.env` file is only needed if you plan to enable the Prisma/database features.
For the portfolio frontend alone, no environment variables are required.

### Running the Dev Server

```bash
# Using bun
bun run dev

# OR using npm
npm run dev

# OR using pnpm
pnpm dev

# OR using yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
bun run build
bun run start
```

## 🛠 Tech Stack

| Category        | Technology                                |
| --------------- | ----------------------------------------- |
| Framework       | Next.js 16 (App Router)                   |
| Language        | TypeScript 5                              |
| Styling         | Tailwind CSS 4 + shadcn/ui                |
| 3D              | Three.js + @react-three/fiber + @react-three/drei |
| Animation       | Framer Motion 12                          |
| Icons           | Lucide React                              |
| Fonts           | Orbitron, Space Grotesk, JetBrains Mono (Google Fonts) |
| Notifications   | Sonner                                    |

## 📁 Project Structure

```
chashman-portfolio/
├── public/
│   ├── chashman-profile.png    # Profile photo (used in About section)
│   ├── logo.svg                # Favicon
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css         # Cyberpunk theme + custom utilities
│   │   ├── layout.tsx          # Root layout with fonts + metadata
│   │   └── page.tsx            # Main page assembling all sections
│   ├── components/
│   │   ├── sections/
│   │   │   ├── navbar.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── footer.tsx
│   │   │   └── section-heading.tsx
│   │   ├── three/
│   │   │   ├── particle-background.tsx   # Full-viewport starfield
│   │   │   ├── hero-scene.tsx            # Floating shapes + energy core
│   │   │   └── avatar-blob.tsx           # Wireframe blob + rings
│   │   └── ui/                            # shadcn/ui components
│   ├── data/
│   │   └── portfolio.ts        # ← All CV content lives here
│   ├── lib/
│   └── hooks/
├── prisma/
│   └── schema.prisma           # Optional DB schema
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── components.json             # shadcn/ui config
└── .env.example
```

## ✏️ Customizing Content

All portfolio content (name, role, bio, skills, projects, experience, education,
leadership, contact info) is centralized in **`src/data/portfolio.ts`**.

To update Chashman's content, edit that single file — no component changes needed.

### Updating the Profile Photo

Replace `public/chashman-profile.png` with a new image (any aspect ratio works,
but a portrait orientation like 1024×1536 looks best). Keep the same filename,
or update the path in `src/components/sections/about.tsx`.

### Updating Social Links

In `src/data/portfolio.ts`, change the `linkedin` and `github` fields from `"#"`
to real URLs:

```ts
linkedin: "https://linkedin.com/in/chashman",
github: "https://github.com/chashman",
```

## 🎨 Theme Customization

The cyberpunk color palette is defined in `src/app/globals.css` using OKLCH colors.
Adjust the CSS custom properties in the `:root, .dark` block to retheme:

```css
:root, .dark {
  --background: oklch(0.08 0.02 285);     /* deep violet-black bg */
  --primary: oklch(0.65 0.32 350);         /* electric magenta */
  --accent: oklch(0.7 0.28 195);           /* electric cyan */
  /* ... see file for full palette */
}
```

## 📝 Scripts

| Script           | Description                          |
| ---------------- | ------------------------------------ |
| `dev`            | Start dev server on port 3000        |
| `build`          | Build for production                 |
| `start`          | Run production build                 |
| `lint`           | Run ESLint                           |
| `db:push`        | Push Prisma schema to DB (optional)  |
| `db:generate`    | Generate Prisma client (optional)    |

## 🌐 Deployment

This is a standard Next.js 16 app — deploy anywhere that supports Next.js:

### Vercel (recommended)
1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click Deploy

### Netlify / Railway / Render
Follow their Next.js deployment guides. No special build configuration needed.

### Self-hosted (Docker)
```dockerfile
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:1 AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["bun", ".next/standalone/server.js"]
```

## 📄 License

This portfolio template is provided for Chashman's personal use.
The cyberpunk design system and component architecture can be adapted freely.

## 🙏 Credits

- **Subject**: Chashman — Mechatronics & Control Engineer
- **Built with**: Next.js, React Three Fiber, Three.js, Framer Motion, Tailwind CSS, shadcn/ui
- **Fonts**: Orbitron, Space Grotesk, JetBrains Mono (Google Fonts)
- **Icons**: Lucide

---

Built with ⚡ for engineers who bend reality.
