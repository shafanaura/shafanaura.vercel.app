# Shafa Naura — ship.

Personal fullstack portfolio for **Shafa Naura** (`ship.`). Live site: [shafanaura.vercel.app](https://shafanaura.vercel.app).

## Stack

- [Next.js](https://nextjs.org) 16
- React 19
- TypeScript
- Tailwind CSS 4
- [Lenis](https://github.com/darkroomengineering/lenis) (smooth scroll)
- Deployed on [Vercel](https://vercel.com)

## Scripts

Package manager: **pnpm** (`packageManager` in `package.json`).

| Command       | Description              |
| ------------- | ------------------------ |
| `pnpm dev`    | Start development server |
| `pnpm build`  | Production build         |
| `pnpm start`  | Run production server    |
| `pnpm lint`   | Run ESLint               |

## Structure

- `src/app` — App Router layout and page
- `src/components` — UI sections (hero, portfolio, experience, etc.)
- `src/lib/site.ts` — content hub (site meta, projects, copy)
- `public/projects` — project screenshots

Most portfolio text and project data lives in `src/lib/site.ts`. Edit that file to update content without hunting through components.

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).
