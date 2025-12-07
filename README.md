# RelayBookings

RelayBookings est une plateforme SaaS B2B de réservation conçue pour les équipes qui gèrent des marchands (studios, retailers, lieux événementiels). Le projet est propulsé par Next.js 14 (App Router + TypeScript), Tailwind CSS, shadcn/ui et un socle intégrant Supabase, Stripe, date-fns, lucide-react et Zustand.

## Démarrage

```bash
npm install
npm run dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

## Scripts utiles

- `npm run dev` : lance le serveur de développement Next.js.
- `npm run build` : construit l'application pour la production.
- `npm run start` : démarre le serveur en mode production.
- `npm run lint` : exécute ESLint avec la configuration Next.js + Prettier.
- `npm run format` : formate tout le code avec Prettier.

## Architecture

```
app/
  api/health/route.ts        # Routes API
  (public)/                  # Landing page marketing
  (auth)/                    # Auth (login, signup)
  (dashboard)/               # Dashboard commerçant
components/
  ui/                        # Composants shadcn/ui
  features/                  # UI métier (BookingCard, CalendarWidget...)
lib/
  supabase/                  # Clients Supabase (browser + service)
  stripe/                    # Client Stripe et utilitaires
  store/                     # Stores Zustand
types/                       # Types réutilisables (booking, etc.)
```

## Notes

- Variables d'environnement attendues : `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`.
- Les composants shadcn/ui installés : `button`, `card`, `input`, `calendar`, `select`.
- Toute la base de code est en TypeScript (pas de JavaScript vanilla).
