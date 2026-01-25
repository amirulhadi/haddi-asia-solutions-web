# Brand Color System

## Color Palette

Haddi Asia Solutions uses a professional, modern color palette with a "McKinsey × Stripe × AWS Partner" vibe, conveying trustworthiness, calmness, expensiveness, and a long-term perspective.

### Primary Colors

- **Primary (Charcoal Navy)**: `#0F172A`
  - Light variant: `#1e293b`
  - Usage: Main brand color, backgrounds, primary headings, professional accents

- **Secondary (Slate Blue)**: `#334155`
  - Light variant: `#475569`
  - Usage: Secondary backgrounds, text, complementary elements

### Neutral Colors

- **Neutral (Cool Gray)**: `#94A3B8`
  - Dark variant: `#64748b`
  - Light variant: `#cbd5e1`
  - Usage: Subheadings, subtle borders, UI elements

### Accent Colors

- **Accent (Soft Steel Blue)**: `#38BDF8`
  - Dark variant: `#0ea5e9`
  - Light variant: `#7dd3fc`
  - Usage: Used sparingly for interactive elements, highlights, and calls-to-action to add a touch of modern tech vibrancy.

## Usage in Tailwind

All colors are available as Tailwind utility classes:

```tsx
// Text colors
<div className="text-primary">Primary text</div>
<div className="text-secondary">Secondary text</div>
<div className="text-accent">Accent text</div>

// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-secondary-light">Light secondary background</div>

// Border colors
<div className="border-neutral">Neutral border</div>
```

## Gradient Usage

The gradient-text utility class now creates a subtle gradient between primary and secondary, or a vibrant one involving the accent color:

```tsx
<h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Subtle Gradient Heading</h1>
<h1 className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Vibrant Gradient Heading</h1>
```

## Color Utilities

Use the utility functions in `utils/colors.ts` for dynamic color application (the functionality remains the same, but the underlying color values have changed):

```tsx
import { getTextColorClass } from '@/utils/colors'

const colorClass = getTextColorClass('primary') // Returns 'text-primary'
```

