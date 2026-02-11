# Freelancer Portfolio - Production Ready

A modern, secure, and accessible portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## ✨ Features

- **Next.js 16** with App Router and React Server Components
- **React 19** with latest features
- **TypeScript** in strict mode with full type safety
- **Tailwind CSS v4** for modern styling
- **Internationalization** (i18n) with Hebrew and English support (RTL-first)
- **Analytics** via n8n webhook (with GA4 fallback option)
- **Accessibility** (WCAG 2.2 AA compliant)
- **Security hardened** with Zod validation, XSS protection, and input sanitization
- **Zero ESLint warnings** and full Prettier formatting
- **Snyk security scan** with 0 vulnerabilities

## 🚀 Getting Started

### Prerequisites

- Node.js 24+ (with Corepack enabled)
- Yarn 4 (managed via Corepack)

### Installation

1. **Enable Corepack** (one-time setup):

```bash
corepack enable
```

2. **Install dependencies**:

```bash
yarn install
```

3. **Set up environment variables**:

Copy `.env.local.example` to `.env.local` and configure:

```bash
cp .env.local.example .env.local
```

Update the webhook URLs in `.env.local`:

- `NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL` - Your n8n contact form webhook
- `NEXT_PUBLIC_N8N_ANALYTICS_WEBHOOK_URL` - Your n8n analytics webhook

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
yarn build
yarn start
```

## 🔍 Verification & Quality

Run all checks (TypeScript, ESLint, Prettier, Build):

```bash
yarn check
```

Individual checks:

```bash
yarn typecheck  # TypeScript type checking
yarn lint       # ESLint (0 warnings enforced)
yarn format     # Prettier formatting
yarn build      # Next.js production build
```

## 🛡️ Security

- **Zod validation** for all form inputs
- **File upload validation** (type, size limits)
- **XSS protection** with proper escaping
- **Environment variables** for sensitive data
- **Functional state updates** to avoid stale closures
- **HTTPS-only** external links with `rel="noopener noreferrer"`
- **Snyk scanning** integrated

## ♿ Accessibility

- **WCAG 2.2 AA** compliant
- **Skip link** for keyboard navigation
- **Semantic HTML** with proper landmarks
- **ARIA labels** on all interactive elements
- **Focus indicators** on all focusable elements
- **Alt text** on all images
- **Form labels** properly associated with inputs
- **Dynamic `lang` and `dir`** attributes for i18n

## 📊 Analytics

Analytics are tracked via n8n webhook (primary) with Google Analytics 4 as an optional fallback.

### n8n Setup

1. Create a webhook in your n8n instance
2. Configure the workflow to receive POST requests with:
   - `path` - Page path
   - `timestamp` - ISO timestamp
   - `referrer` - Referrer URL (optional)
3. Store data in your preferred destination (Google Sheets, Airtable, database, etc.)

### GA4 Fallback (Optional)

Uncomment the GA4 configuration in `src/app/layout.tsx` and set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`.

## 🌍 Internationalization

- **Languages**: Hebrew (primary), English
- **RTL support** with dynamic `dir` attribute
- **Font switching**: Rubik for Hebrew, Space Grotesk for English
- **Translation keys** in `src/config/i18n.ts`

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with skip link & analytics
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── AnalyticsTracker.tsx  # n8n analytics component
│   └── Portfolio/            # Main portfolio component
│       └── Portfolio.tsx
├── config/
│   └── i18n.ts            # i18n translations
├── lib/
│   └── contact-schema.ts  # Zod validation schema
└── types/
    └── contact.ts         # TypeScript types
```

## 🔧 Configuration Files

- **package.json** - Yarn 4 with latest dependencies
- **tsconfig.json** - Strict TypeScript configuration
- **eslint.config.js** - Flat ESLint config (ESLint 9+)
- **.prettierrc** - Prettier formatting rules
- **tailwind.config.ts** - Tailwind CSS v4 configuration
- **next.config.ts** - Next.js configuration

## 📝 Scripts

| Script          | Description                                    |
| --------------- | ---------------------------------------------- |
| `dev`           | Start development server                       |
| `build`         | Build for production                           |
| `start`         | Start production server                        |
| `lint`          | Run ESLint (0 warnings enforced)               |
| `lint:fix`      | Fix ESLint issues automatically                |
| `typecheck`     | Run TypeScript type checking                   |
| `format`        | Format code with Prettier                      |
| `format:check`  | Check code formatting                          |
| `check`         | Run all checks (typecheck, lint, format, build)|

## 🎨 Styling

- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **Custom animations** for grid background and gradient text
- **Responsive design** with mobile-first approach
- **Dark theme** (black background, cyan/pink accents)

## 📦 Dependencies

### Core

- `next` ^16.1.5
- `react` ^19.0.0
- `react-dom` ^19.0.0
- `typescript` ^5.7.2

### Styling

- `tailwindcss` ^4.0.0
- `@tailwindcss/postcss` ^4.1.18
- `postcss` ^8.4.49
- `autoprefixer` ^10.4.20

### Utilities

- `i18next` ^24.2.0
- `react-i18next` ^15.2.0
- `lucide-react` ^0.469.0
- `zod` ^3.24.1

### Dev Tools

- ESLint 9 with flat config
- Prettier
- TypeScript ESLint
- Snyk security scanning

## 🚨 Important Notes

1. **Yarn 4**: This project uses Yarn 4 (Berry) with `node-modules` linker for Next.js compatibility
2. **Corepack**: Ensure Corepack is enabled (`corepack enable`)
3. **Environment Variables**: All `NEXT_PUBLIC_*` variables are exposed to the browser
4. **Security**: Never commit `.env.local` - it's in `.gitignore`
5. **Build Warnings**: The CSS `@import` warning is cosmetic and doesn't affect functionality

## 📄 License

© 2025 Web Engineering. All rights reserved.

---

Built with ❤️ using Next.js 16, React 19, TypeScript, and Tailwind CSS v4
