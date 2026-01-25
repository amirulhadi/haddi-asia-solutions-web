# Haddi Asia Solutions - Corporate Company Profile

A professional, high-end corporate company profile website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🎨 Design Features

- **Modern, Cinematic Design**: Clean Helvetica Neue typography with bold color palette
- **Professional Brand Colors**: 
  - Primary: Purpureus (#A446A0)
  - Secondary: Liberty (#5F50A5)
  - Neutral: Quick Silver (#A2A6AA)
  - Accent: Dutch White (#F5DFBA)
- **Smooth Animations**: Framer Motion for elegant scroll-triggered animations
- **Responsive Layout**: Fully responsive design for all devices
- **High-End Visuals**: Gradient backgrounds, card-based layouts, and professional spacing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page assembling all components
├── components/
│   ├── Hero.tsx             # Cover/Hero section
│   ├── ExecutiveSummary.tsx # Executive summary section
│   ├── MissionVision.tsx    # Mission & Vision section
│   ├── Services.tsx         # Core services section
│   ├── ValueProposition.tsx # Value proposition section
│   ├── TechnologyStack.tsx  # Technology stack section
│   ├── CaseStudies.tsx      # Case studies section
│   └── ContactCTA.tsx       # Contact and CTA section
├── COMPANY_PROFILE_CONTENT.md # Full content document
└── tailwind.config.js       # Tailwind configuration with brand colors
```

## 🎯 Sections

1. **Hero Section**: Eye-catching cover page with company name and tagline
2. **Executive Summary**: One-paragraph company overview
3. **Mission & Vision**: Mission and vision statements
4. **Core Services**: Four main service offerings
5. **Value Proposition**: Problems solved, target clients, competitive advantages
6. **Technology Stack**: Comprehensive list of technologies and tools
7. **Case Studies**: Three example client success stories
8. **Contact & CTA**: Contact information and call-to-action

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Material UI (optional)
- **Animations**: Framer Motion
- **Font**: Helvetica Neue (system fallback)

## 📝 Customization

### Colors

Edit `tailwind.config.js` to modify brand colors:

```javascript
colors: {
  primary: {
    DEFAULT: '#A446A0', // Your primary color
    // ...
  }
}
```

### Content

- Update component files in `components/` directory
- Or refer to `COMPANY_PROFILE_CONTENT.md` for full content reference

### Styling

- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind classes directly in components
- Custom utilities: Add to `tailwind.config.js` under `theme.extend`

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

This project is proprietary and confidential.

---

**Haddi Asia Solutions** — Building Tomorrow's Digital Infrastructure Today

