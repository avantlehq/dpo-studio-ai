# DPO Studio

European GDPR Compliance Platform - SaaS admin layer for tenant management, billing, and whitelabel configurations.

## Overview

DPO Studio is the administrative and business layer of the DPOstudio.ai platform, providing:

- **Tenant Management**: Onboarding and organization management
- **Billing & Plans**: Subscription management and pricing configuration  
- **Whitelabel Configuration**: Partner branding and customization
- **Module Access**: DPIA Studio, ROPA Studio, AI Impact Studio

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+
- Environment variables configured

### Installation

```bash
# Clone repository
git clone https://github.com/avantlehq/dpo-studio-ai.git
cd dpo-studio-ai

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
pnpm dev
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Environment Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_ENV` | Environment type | `local` |
| `NEXT_PUBLIC_AGENT_BASE_URL` | DPO Agent API URL | `https://dpo.avantle.ai` |
| `DATABASE_URL` | Database connection string | - |
| `JWT_SECRET` | JWT signing secret | - |

## Deployment

### Vercel Deployment

1. Connect repository to Vercel
2. Configure domain: `dpostudio.ai`
3. Set environment variables in Vercel dashboard
4. Deploy

### Custom Deployment

1. Build the application: `pnpm build`
2. Configure reverse proxy (nginx/Apache)
3. Set environment variables
4. Start with `pnpm start`

## API Integration

This platform integrates with the DPO Agent API at `dpo.avantle.ai`:

- `POST /api/provision` - Create new tenant
- Authentication via JWT tokens
- Rate limiting per tenant

## Architecture

```
src/
├── app/
│   ├── admin/           # Admin dashboard
│   ├── modules/         # GDPR compliance modules
│   │   ├── dpia/        # Data Protection Impact Assessment
│   │   ├── ropa/        # Record of Processing Activities  
│   │   └── aiimpact/    # AI Impact Assessment
│   └── page.tsx         # Landing page
├── components/          # Reusable UI components
└── lib/                 # Utilities and configurations
```

## Development

- Framework: Next.js 15 with App Router
- Styling: Tailwind CSS
- TypeScript: Full type safety
- CI/CD: GitHub Actions

## Security

- Strict CSP headers
- JWT-based authentication
- Rate limiting
- No PII in logs
- Security headers configured

## License

Private repository - All rights reserved by Avantle.ai
