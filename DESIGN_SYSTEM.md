# Rachel Chen Portfolio — Design System

> Extracted from Figma: `https://www.figma.com/design/I6rWkG1Ondwke5gW8oM0oR/personal-portfolio?node-id=18-1689&m=dev`

---

## 1. Brand Identity

| Property    | Value                                                  |
| ----------- | ------------------------------------------------------ |
| **Name**    | Rachel Chen                                            |
| **Title**   | Product Designer + Engineer                            |
| **Tagline** | "I'm a designer, builder, & dancer—optimizing for fun" |
| **Persona** | Designer • Builder • Dancer • Fun-Haver                |

---

## 2. Color Palette

> **Note:** Figma file uses no explicit design tokens (variable defs returned empty). Colors below are inferred from the design structure and common portfolio patterns. Replace with actual hex values from Figma inspect.

### Neutral Scale

```css
--color-bg-primary: #ffffff; /* Page background */
--color-bg-secondary: #fafafa; /* Card/section backgrounds */
--color-bg-tertiary: #f5f5f5; /* Subtle containers */

--color-text-primary: #1a1a1a; /* Headings, primary copy */
--color-text-secondary: #525252; /* Body text, meta info */
--color-text-tertiary: #a3a3a3; /* Placeholders, disabled states */
--color-text-inverse: #ffffff; /* On dark backgrounds */

--color-border-light: #e5e5e5; /* Dividers, card borders */
--color-border-medium: #d4d4d4; /* Input borders, hover states */
```

### Accent / Brand

```css
--color-accent: #000000; /* Primary CTAs, links (black) */
--color-accent-hover: #333333; /* Hover state */
--color-accent-focus: #000000; /* Focus ring (with offset) */

--color-link: #000000; /* Inline links */
--color-link-hover: #333333;
--color-link-visited: #666666;
```

### Semantic

```css
--color-success: #166534; /* Success states */
--color-warning: #854d0e; /* Warning states */
--color-error: #991b1b; /* Error states */
--color-info: #1e40af; /* Info states */
```

---

## 3. Typography

### Font Families

```css
--font-sans:
  "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

> **Action:** Verify exact font families in Figma (select text nodes → inspect). The design appears to use a modern geometric sans (likely Inter or similar).

### Type Scale

| Token            | Size            | Weight | Line Height | Letter Spacing | Usage                                    |
| ---------------- | --------------- | ------ | ----------- | -------------- | ---------------------------------------- |
| `--text-display` | 64px / 4rem     | 700    | 1.1         | -0.02em        | Hero headlines (rare)                    |
| `--text-h1`      | 48px / 3rem     | 700    | 1.15        | -0.01em        | Page titles, section heroes              |
| `--text-h2`      | 36px / 2.25rem  | 600    | 1.2         | -0.01em        | Major section headers                    |
| `--text-h3`      | 26px / 1.625rem | 600    | 1.3         | 0              | Project titles, card headlines           |
| `--text-h4`      | 20px / 1.25rem  | 600    | 1.35        | 0              | Sub-headers, meta labels (year, company) |
| `--text-body-lg` | 18px / 1.125rem | 400    | 1.6         | 0              | Lead paragraphs, intro copy              |
| `--text-body`    | 16px / 1rem     | 400    | 1.6         | 0              | Default body text                        |
| `--text-body-sm` | 14px / 0.875rem | 400    | 1.5         | 0              | Meta info, captions, footer links        |
| `--text-caption` | 12px / 0.75rem  | 500    | 1.4         | 0.02em         | Labels, tags, button text                |
| `--text-button`  | 14px / 0.875rem | 600    | 1.2         | 0.01em         | Button labels                            |

### Text Styles Observed in Figma

| Style Name | Example Content                                      | Inferred Token                |
| ---------- | ---------------------------------------------------- | ----------------------------- |
| Heading 1  | "I'm Rachel, a product designer who engineers."      | `--text-h1`                   |
| Heading 3  | "The future of AI & hardware"                        | `--text-h3`                   |
| Heading 4  | "2026", "Notion", "OpenAI x Hardware • Concept 2025" | `--text-h4`                   |
| Paragraph  | "I think deeply about people, products..."           | `--text-body`                 |
| List Item  | "building tech communities on campus"                | `--text-body`                 |
| Link       | "Work", "Fun", "About", "Resume"                     | `--text-body-sm` (uppercase?) |
| Button     | "RacheLLM", "EMAIL"                                  | `--text-button`               |

---

## 4. Spacing System

Base unit: **4px** (standard 4pt grid)

| Token        | Value | Usage                         |
| ------------ | ----- | ----------------------------- |
| `--space-0`  | 0px   | Reset                         |
| `--space-1`  | 4px   | Micro gaps, icon padding      |
| `--space-2`  | 8px   | Tight component spacing       |
| `--space-3`  | 12px  | Form field gaps               |
| `--space-4`  | 16px  | Standard component padding    |
| `--space-5`  | 20px  | Medium gaps                   |
| `--space-6`  | 24px  | Section padding, card padding |
| `--space-8`  | 32px  | Large section gaps            |
| `--space-10` | 40px  | Major section separation      |
| `--space-12` | 48px  | Page-level padding            |
| `--space-16` | 64px  | Hero vertical rhythm          |
| `--space-20` | 80px  | Large layout gaps             |
| `--space-24` | 96px  | Extra large gaps              |

### Layout Measurements from Figma

| Element                  | Width  | Height      | Notes                              |
| ------------------------ | ------ | ----------- | ---------------------------------- |
| Page/Artboard            | 1408px | 2460–2889px | Desktop viewport                   |
| Container (max-width)    | 1360px | —           | 24px horizontal padding each side  |
| Header height            | 1408px | 64px        | Fixed header                       |
| Nav link group           | 258px  | 23px        | Work/Fun/About/Resume              |
| CTA Button (RacheLLM)    | 114px  | 32px        | Icon + text                        |
| Project card (left col)  | 668px  | 413–505px   | Thumbnail + meta                   |
| Project card (right col) | 668px  | 413–505px   | Mirrored layout                    |
| Footer height            | 1408px | 65px        |                                    |
| About page hero          | 680px  | 185px       | H1 area                            |
| About section cards      | 437px  | 213–286px   | 3-column grid                      |
| Gap between columns      | 24px   | —           | 1360 - (437×3) = 49px → ~24px each |

---

## 5. Border Radius

```css
--radius-none: 0px;
--radius-sm: 4px; /* Buttons, inputs, small cards */
--radius-md: 8px; /* Standard cards, containers */
--radius-lg: 12px; /* Large cards, modals */
--radius-xl: 16px; /* Hero images, featured cards */
--radius-full: 9999px; /* Pills, avatar, icon buttons */
```

### Observed in Figma

- Header container: sharp (0)
- Project thumbnails: appear sharp or 1px border
- Buttons (RacheLLM, EMAIL): likely `--radius-sm` (4px) or `--radius-md` (8px)
- Icon buttons (Like, Reset): `--radius-full` (circular 28×28)

---

## 6. Shadows / Elevation

> Inferred from typical portfolio patterns (Figma shows flat design with subtle depth)

```css
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.03);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.03);
```

### Usage

- **Cards (project thumbnails):** `--shadow-sm` on hover
- **Header:** `--shadow-xs` (sticky)
- **Buttons:** `--shadow-none` default, `--shadow-sm` on hover
- **Modal/Dialog (RacheLLM chat):** `--shadow-xl`

---

## 7. Breakpoints

```css
--bp-mobile: 390px; /* Mobile portrait */
--bp-tablet: 768px; /* Tablet portrait */
--bp-laptop: 1024px; /* Laptop */
--bp-desktop: 1408px; /* Design width */
--bp-wide: 1600px; /* Large desktop */
```

### Responsive Behavior (Inferred)

| Breakpoint   | Layout Changes                                                                     |
| ------------ | ---------------------------------------------------------------------------------- |
| `< 768px`    | Stack header nav, hamburger menu; single-column project grid; stack about sections |
| `768–1024px` | 2-column project grid; 2-column about sections                                     |
| `> 1024px`   | 3-column project grid (left/right + center); 4-column about sections               |

---

## 8. Component Library

### 8.1 Header / Navigation

**Structure:**

```
Header (1408×64, fixed)
├── Left: Logo + Title
│   ├── "Rachel Chen" (Heading 4)
│   └── "Product Designer + Engineer" (Heading 4)
├── Center: Nav Links
│   ├── Work | Fun | About | Resume (Links, Heading 4)
└── Right: CTA Button
    └── [Icon] "RacheLLM" (Button - Open AI chat)
```

**Variants:**

- **Default:** White bg, black text
- **Scrolled:** Add `--shadow-xs`, backdrop-blur

**States:**

- Nav links: underline on hover
- CTA: bg fill on hover, icon spin/animation

---

### 8.2 Button

**Base:** `--radius-sm`, `--text-button`, 32px height, 16px horizontal padding

| Variant       | Background       | Text                   | Border                     | Usage                       |
| ------------- | ---------------- | ---------------------- | -------------------------- | --------------------------- |
| **Primary**   | `--color-accent` | `--color-text-inverse` | none                       | Main CTAs (RacheLLM, EMAIL) |
| **Secondary** | transparent      | `--color-accent`       | 1px solid `--color-accent` | Outline actions             |
| **Ghost**     | transparent      | `--color-text-primary` | none                       | Nav links, footer links     |
| **Icon**      | transparent      | —                      | none                       | Like, Reset, Social icons   |

**Sizes:**

- **Default:** 32px h, 16px px
- **Small:** 28px h, 12px px (icon buttons)
- **Large:** 40px h, 24px px (hero CTAs)

**States:**

- Hover: opacity 0.8 / bg darken
- Active: scale 0.98
- Focus: `--color-accent-focus` ring 2px offset 2px
- Disabled: opacity 0.4, cursor not-allowed

---

### 8.3 Link

| Variant    | Style                                              | Usage                           |
| ---------- | -------------------------------------------------- | ------------------------------- |
| **Inline** | Underline on hover, `--color-link`                 | Body copy links ("let's chat!") |
| **Nav**    | `--text-body-sm`, uppercase?, no underline default | Header navigation               |
| **Card**   | Block, `--text-h3` title + `--text-h4` meta        | Project cards                   |
| **Footer** | `--text-body-sm`, hover underline                  | Social links                    |

---

### 8.4 Project Card

**Structure (668×413–505):**

```
Link (full card clickable)
├── Thumbnail Container (666×374 or 416)
│   ├── Image/Video preview (aspect ~16:9)
│   └── Play indicator (for video)
└── Meta Bar (29.5px h)
    ├── Heading 3: Project title
    └── Heading 4: Company • Type Year
```

**Variants:**

- **Video:** Shows play button overlay, video preview
- **Image:** Static image only
- **Left-aligned:** Meta left (title left, company right)
- **Right-aligned:** Mirrored (not observed but inferred)

**Hover:** Thumbnail scale 1.02, shadow elevation, meta text color accent

---

### 8.5 Experience Timeline (Work Page)

**Structure:**

```
Container (668px wide)
├── Year Label (Heading 4, 36px w)
└── Role Card
    ├── Company (Heading 4 weight, 224px w)
    └── Title (Paragraph, 177px w)
```

**Spacing:** 28px vertical between entries

---

### 8.6 About Section Card (3-Column Grid)

**Structure (437×213–286):**

```
Link
├── Image Container (435×211–264, aspect ~1:1 or 4:5)
│   └── Photo/illustration
└── Meta (54px h)
    ├── Heading 3: Project title
    └── Heading 4: Category • Award/Context
```

**Grid:** 3 columns × 4 rows = 12 cards, 24px gap

---

### 8.7 Footer

**Structure (1408×65):**

```
Container (1360×24)
├── Left: "Designed + Coded with" + [Heart Icon] + "by Rachel"
└── Right: Social Links
    ├── LinkedIn | EMAIL (Button) | X | Github | Devpost
```

---

### 8.8 RacheLLM Chat Widget (Modal/Drawer)

**Header (383×64):**

```
├── "RacheLLM" (Heading 4)
├── [Settings Icon] (Button)
└── [Reset] [Close] (Icon Buttons, 28×28)
```

**Body:** Chat messages (not fully visible in selection)

---

### 8.9 Form Elements (Inferred)

| Element      | Spec                                                          |
| ------------ | ------------------------------------------------------------- |
| **Input**    | 40px h, `--radius-sm`, `--color-border-light` border, 12px px |
| **Textarea** | Min 120px h, same as input                                    |
| **Label**    | `--text-body-sm`, 500 weight, 8px mb                          |
| **Focus**    | `--color-accent` border, focus ring                           |

---

## 9. Motion / Animation

> Use `get_motion_context` for exact keyframes. Inferred patterns:

| Interaction          | Animation                            |
| -------------------- | ------------------------------------ |
| **Page transition**  | Fade 200ms + slide up 200ms          |
| **Card hover**       | Transform scale(1.02) 200ms ease-out |
| **Button hover**     | Background transition 150ms          |
| **Nav link hover**   | Underline width 0→100% 200ms         |
| **Header scroll**    | Backdrop-blur + shadow 200ms         |
| **Chat widget open** | Slide from right 300ms spring        |
| **Image load**       | Blur-up (LQIP → HQ) 300ms            |
| **Video play**       | Overlay fade 200ms                   |

### Easing

```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 10. Layout Grids

### Desktop (≥1024px)

```
┌─────────────────────────────────────────────────────────────┐
│ Header: 24 | Logo(668) | Nav(258) | Spacer | CTA(114) | 24 │
├─────────────────────────────────────────────────────────────┤
│ Main: 24 | ┌─────────┬─────────┐ | 24                        │
│          │ 668px   │ 668px   │ |   (24px gap)               │
│          │ Project │ Project │ |                            │
│          │  Card   │  Card   │ |                            │
│          └─────────┴─────────┘ |                            │
├─────────────────────────────────────────────────────────────┤
│ Footer: 24 | Copyright/Heart | Spacer | Social Links | 24  │
└─────────────────────────────────────────────────────────────┘
```

### About Page Desktop

```
┌─────────────────────────────────────────────────────────────┐
│ Header (same)                                               │
├─────────────────────────────────────────────────────────────┤
│ Hero: 24 | H1 (680) | Spacer | Bio (640) | 24              │
├─────────────────────────────────────────────────────────────┤
│ Sections: 24 | ┌─────┬─────┬─────┐ | 24  (4 cols × 24 gap) │
│              │ 437 │ 437 │ 437 │ |                          │
│              │Card │Card │Card │ |                          │
│              └─────┴─────┴─────┘ |                          │
├─────────────────────────────────────────────────────────────┤
│ Footer (same)                                               │
└─────────────────────────────────────────────────────────────┘
```

---

## 11. Accessibility

| Requirement        | Implementation                                                                      |
| ------------------ | ----------------------------------------------------------------------------------- |
| **Color Contrast** | All text ≥ 4.5:1 (AA), large text ≥ 3:1                                             |
| **Focus Visible**  | 2px solid `--color-accent` ring, 2px offset                                         |
| **Keyboard Nav**   | All interactive elements reachable, logical tab order                               |
| **ARIA**           | `aria-label` on icon buttons, `role="button"` on clickable cards                    |
| **Alt Text**       | All project thumbnails: descriptive alt ("Project thumbnail for OpenAI x Hardware") |
| **Reduced Motion** | Respect `prefers-reduced-motion` for all transitions                                |
| **Skip Link**      | Add "Skip to main content" link at top of page                                      |

---

## 12. CSS Custom Properties (Complete)

```css
:root {
  /* Color */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #fafafa;
  --color-bg-tertiary: #f5f5f5;
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #525252;
  --color-text-tertiary: #a3a3a3;
  --color-text-inverse: #ffffff;
  --color-border-light: #e5e5e5;
  --color-border-medium: #d4d4d4;
  --color-accent: #000000;
  --color-accent-hover: #333333;
  --color-link: #000000;
  --color-link-hover: #333333;

  /* Typography */
  --font-sans:
    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;
  --text-display: clamp(3rem, 5vw, 4rem);
  --text-h1: clamp(2.5rem, 4vw, 3rem);
  --text-h2: clamp(2rem, 3vw, 2.25rem);
  --text-h3: clamp(1.5rem, 2vw, 1.625rem);
  --text-h4: clamp(1.125rem, 1.5vw, 1.25rem);
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-caption: 0.75rem;
  --text-button: 0.875rem;

  /* Spacing */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.03);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.08), 0 10px 10px rgba(0, 0, 0, 0.03);

  /* Breakpoints */
  --bp-mobile: 390px;
  --bp-tablet: 768px;
  --bp-laptop: 1024px;
  --bp-desktop: 1408px;

  /* Transitions */
  --transition-fast: 150ms var(--ease-out);
  --transition-base: 200ms var(--ease-out);
  --transition-slow: 300ms var(--ease-out);

  /* Z-index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal: 300;
  --z-toast: 400;
  --z-tooltip: 500;
}
```

---

## 13. Implementation Checklist

### Phase 1: Foundation

- [ ] Set up CSS custom properties in `globals.css`
- [ ] Configure Tailwind/PostCSS to use design tokens
- [ ] Add font imports (Inter, JetBrains Mono)
- [ ] Set up base typography styles

### Phase 2: Core Components

- [ ] Button (Primary, Secondary, Ghost, Icon)
- [ ] Link (Inline, Nav, Card, Footer)
- [ ] Header/Navigation (responsive)
- [ ] Footer
- [ ] Project Card (Video + Image variants)

### Phase 3: Page Layouts

- [ ] Work Page (Project grid + Experience timeline)
- [ ] About Page (Hero + 3-col grid + Bio)
- [ ] Fun Page (TBD from Figma)
- [ ] Resume Page (TBD)

### Phase 4: Interactive Features

- [ ] RacheLLM Chat Widget
- [ ] Video play overlays
- [ ] Smooth scroll / page transitions
- [ ] Intersection Observer animations

### Phase 5: Polish

- [ ] Dark mode support (if needed)
- [ ] Reduced motion support
- [ ] Performance optimization (images, fonts)
- [ ] Accessibility audit

---

## 14. Figma Node Reference

| Figma Node | Description                       | Key Data  |
| ---------- | --------------------------------- | --------- |
| `18:1689`  | Root section "rachale llm desing" | 5169×3298 |
| `17:561`   | Work page frame                   | 1408×2460 |
| `17:1150`  | About page frame                  | 1408×2889 |
| `17:1441`  | Fun page frame                    | 1408×1450 |
| `17:1628`  | RacheLLM chat widget              | 383×800   |
| `17:567`   | Header container                  | 1360×32   |
| `17:1069`  | Project card (OpenAI)             | 668×413   |
| `17:1206`  | About card (infu)                 | 437×685   |
| `17:1629`  | Chat header                       | 383×64    |

---

## 15. Next Steps

1. **Verify colors** in Figma inspect panel — replace inferred values
2. **Extract exact font families** from text nodes
3. **Get motion specs** via `get_motion_context` for key interactions
4. **Export assets** (thumbnails, illustrations, icons) via `get_fill_image`
5. **Build component library** in `/components/ui/` following this spec
6. **Create page components** in `/app/(routes)/` using the layout grids

---

_Generated from Figma MCP analysis on 2026-10-02_
