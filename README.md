# Riviera Gulf Property Management

Luxury property management website for Riviera Gulf. Features two showcase properties (Villa Limonaia in Sorrento and Residenza Manuela in Capri) and a comprehensive B2B property owner partnership section.

## Tech Stack

- **React 18** with Vite
- **React Router** for navigation
- **i18next** for Italian/English multilingua support
- **Branding CSS** with custom color system

## Features

- 🌍 Multilingual (Italian + English)
- 🏨 Two showcase property pages with detailed information
- 👥 B2B partnership page for property owners
- 📱 Mobile-responsive design
- ✨ Modern luxury aesthetic with Riviera Gulf branding

## Project Structure

```
src/
├── components/        # Reusable components (Header, Footer)
├── pages/            # Page components (Home, VillaLimonaia, ResidenzaManuela, Proprietari)
├── locales/          # Translation files (it.json, en.json)
├── styles/           # Global branding CSS
├── i18n.js           # i18next configuration
└── App.jsx           # Router setup
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd rivieragulf-website
npm install
```

### Development

```bash
npm run dev
```

Opens at http://localhost:5173

### Build

```bash
npm run build
```

Generates optimized build in `dist/`

### Preview Production Build

```bash
npm run preview
```

## Pages

- **Home** (`/`) - Main landing page with overview
- **Villa Limonaia** (`/villa-limonaia`) - 7-room property in Piano di Sorrento
- **Residenza Manuela** (`/residenza-manuela`) - 6-guest apartment in Capri
- **Proprietari** (`/proprietari`) - Partnership page for property owners

## Branding

- **Primary Color**: Navy (#2c3e50)
- **Accent Color**: Gold (#d4af37)
- **Primary Font**: Georgia (serif) for titles
- **Secondary Font**: System sans-serif for body

## Internationalization

Language files located in `src/locales/`:
- `it.json` - Italian translations
- `en.json` - English translations

Add strings to both files and use `useTranslation()` hook in components.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Vercel auto-builds and deploys on every push
4. Point domain rivieragulf.it to Vercel

## Next Steps

- Add property photos to image directories
- Integrate Smoobu widget for availability calendar
- Connect form submission to email service
- Setup analytics
- Add SEO meta tags

---

**La Costiera. Il Mondo. Il Tuo Investimento.**
