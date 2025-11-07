# CLAUDE.md

Tento súbor poskytuje kontext pre Claude Code pri práci s DPO Studio repozitárom.

## Kontext projektu DPOstudio.ai

**DPOstudio.ai** je jednotná európska platforma pre správu GDPR a súvisiacich compliance procesov. Integruje administratívnu, obchodnú a analytickú vrstvu do jedného systému s cieľom automatizovať činnosti zodpovedných osôb (DPO) a konzultačných tímov.

### Architektúra platformy

**Dvojkomponentová architektúra:**

1. **DPOstudio.ai** (admin vrstva) - **TENTO REPOZITÁR**
   - Doména: `dpostudio.ai`
   - Repo: `avantlehq/dpo-studio-ai`
   - Funkcie: onboarding, správa tenantov, plány, billing, whitelabel konfigurácie, SSO
   - Riadi prístup partnerov, klientov a modulov

2. **DPO.avantle.ai** (agent/runtime engine)
   - Doména: `dpo.avantle.ai` 
   - Repo: `avantlehq/dpo-avantle-ai`
   - Funkcie: LLM pipeline, risk scoring, kontrolné odporúčania, reportovacie šablóny, API rozhranie
   - Multi-tenant architektúra, izolované úložiská

### API rozhranie medzi komponentmi

```
POST /api/provision → vytvorenie tenanta
POST /api/v1/engine/score → risk scoring
POST /api/v1/engine/suggest-controls → mapping na kontroly
POST /api/v1/report/render → reportovanie
```

**Guardrails:**
- Authorization: Bearer <JWT> s tenant_id, role, exp
- Rate limit per tenant
- SQLite (dev) / Postgres (prod)
- Žiadne PII v logoch

### Deployment poradie

1. Deploy `dpo-avantle-ai` (agent, backend API)
2. Deploy `dpo-studio-ai` (platforma, frontend + admin) 
3. Nastav `.env`: `NEXT_PUBLIC_AGENT_BASE_URL=https://dpo.avantle.ai`
4. Test provisioning flow a validáciu brandu

## Aktuálny stav repozitára (po Prompt 0A)

### ✅ Hotové komponenty

**Infraštruktúra:**
- Next.js 15 + TypeScript + Tailwind CSS setup
- GitHub Actions CI workflow (.github/workflows/ci.yml)
- Vercel deployment konfigurácia (vercel.json)
- Environment variables template (.env.example)

**Aplikačná štruktúra:**
- Landing page (src/app/page.tsx) - prehľad modulov
- Admin dashboard (src/app/admin/page.tsx) - tenant management, billing, whitelabel
- GDPR compliance moduly:
  - DPIA Studio (src/app/modules/dpia/page.tsx)
  - ROPA Studio (src/app/modules/ropa/page.tsx) 
  - AI Impact Studio (src/app/modules/aiimpact/page.tsx)

**Dokumentácia:**
- Kompletný README.md s deploy instrukciami
- Architektonický prehľad a API integrácia
- Security konfigurácia a environment setup

### 🔧 Technické detaily

**Tech stack:**
- Framework: Next.js 15 s App Router
- Styling: Tailwind CSS
- TypeScript: Plná type safety
- Package manager: pnpm 9
- CI/CD: GitHub Actions
- Deployment: Vercel ready

**Security headers (vercel.json):**
- Strict CSP policy
- Referrer-Policy: strict-origin-when-cross-origin
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY

**Environment variables:**
```bash
NEXT_PUBLIC_ENV=local|preview|prod
NEXT_PUBLIC_AGENT_BASE_URL=https://dpo.avantle.ai
DATABASE_URL=
JWT_SECRET=
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
LOG_LEVEL=info
```

### 🚀 Deployment status

**GitHub:**
- Repozitár: https://github.com/avantlehq/dpo-studio-ai
- Initial commit pushnutý
- CI workflow aktívny a funkčný
- Build test: ✅ Úspešný

**Pripravené na Vercel:**
- vercel.json konfigurácia hotová
- Environment variables template
- Doména: dpostudio.ai (treba nastaviť DNS)

### 📋 Ďalšie kroky (budúce prompty)

**Prioritné úlohy:**
1. Implementácia tenant management systému
2. Billing a subscription logic
3. Whitelabel konfigurácia UI
4. JWT authentifikácia a autorizácia
5. API integrácia s dpo.avantle.ai
6. Database schema a migrations
7. Testing setup a E2E testy

**Integračné body:**
- API klient pre komunikáciu s dpo.avantle.ai
- Tenant provisioning workflow
- Brand customization systém pre partnerov
- SSO integrácia

### 🎯 Strategický cieľ

DPOstudio.ai sa má stať centrálnym whitelabel compliance hubom pre EÚ, ktorý umožňuje partnerom (KPMG, PwC, advokátske kancelárie) poskytovať služby ochrany osobných údajov, riadenia rizík a AI governance v jednotnom prostredí postavenom na technológii AvantleCore.

## Lokálna cesta

**Projekt sa nachádza v:** `C:\Users\rasti\Projects\avantlehq\dpo-studio-ai\`

## Development commands

```bash
# Development (z avantlehq/dpo-studio-ai/)
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build           # Build for production  
pnpm start           # Start production server
pnpm lint            # Run ESLint

# Deployment
git push origin main # Trigger CI build
# Manual Vercel deploy via dashboard
```