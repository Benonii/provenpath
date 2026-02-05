# Steven Bartlett Website Design Analysis

## Reference Guide for Website Redesign

> [!NOTE]
> This document provides a comprehensive analysis of [stevenbartlett.com](https://stevenbartlett.com/) for use as a design reference. The website was designed by **Silverback Studios** and represents a bold, modern approach to personal branding.

---

## 🎯 Design Philosophy

The website embodies Steven Bartlett's **"bold, entrepreneurial, and disruptive nature"**. Key design principles include:

- **Mobile-first approach** targeting a Gen-Z audience
- **Minimal traditional branding** - no logo, relies on cohesive color/typography/motion
- **Information-rich** yet visually impactful
- **Central hub design** - consolidating podcast, ventures, tour, merchandise in one place

---

## 🎨 Color Palette

### Primary Colors

| Color Name              | Hex Code  | RGB              | Usage                                               |
| ----------------------- | --------- | ---------------- | --------------------------------------------------- |
| **Chartreuse Yellow**   | `#DBFE01` | rgb(219, 254, 1) | Primary accent, headlines, CTAs, important elements |
| **Pure Black**          | `#000000` | rgb(0, 0, 0)     | Primary background                                  |
| **Off-Black/Dark Gray** | `#0A0A0A` | rgb(10, 10, 10)  | Secondary background, cards                         |

### Secondary Colors

| Color Name     | Hex Code  | RGB                | Usage                            |
| -------------- | --------- | ------------------ | -------------------------------- |
| **Pure White** | `#FFFFFF` | rgb(255, 255, 255) | Body text, navigation text       |
| **Light Gray** | `#B0B0B0` | rgb(176, 176, 176) | Secondary text, meta information |
| **Mid Gray**   | `#666666` | rgb(102, 102, 102) | Tertiary text, subtle elements   |

### Accent Colors

| Color Name            | Hex Code                | Usage                                           |
| --------------------- | ----------------------- | ----------------------------------------------- |
| **Vibrant Yellow**    | `#DBFE01`               | Primary accent (CTAs, hover states, highlights) |
| **Transparent White** | `rgba(255,255,255,0.1)` | Card backgrounds, overlays                      |
| **Transparent Black** | `rgba(0,0,0,0.8)`       | Overlay backgrounds                             |

### Color Psychology

The **black and yellow** combination creates:

- **High contrast** for accessibility and impact
- **Luxury and sophistication** (black)
- **Energy, optimism, and boldness** (yellow)
- **Memorable visual identity** without traditional logo

---

## 📝 Typography

### Font Families

| Category          | Font Family                               | Fallback                                         | Weight Range |
| ----------------- | ----------------------------------------- | ------------------------------------------------ | ------------ |
| **Headlines**     | Modern Sans-Serif (likely custom/premium) | `"SF Pro Display", "Helvetica Neue", sans-serif` | 600-900      |
| **Body Text**     | Clean Sans-Serif                          | `"Inter", "Roboto", "Helvetica", sans-serif`     | 400-500      |
| **Accent/Labels** | All-Caps Sans-Serif                       | Same as headlines                                | 500-700      |

### Typography Scale

```css
/* Suggested Typography Scale based on website analysis */
--fs-hero: clamp(4rem, 10vw, 8rem); /* Hero headlines */
--fs-h1: clamp(2.5rem, 6vw, 5rem); /* Section titles */
--fs-h2: clamp(1.75rem, 4vw, 3rem); /* Sub-sections */
--fs-h3: clamp(1.25rem, 2.5vw, 1.75rem); /* Card titles */
--fs-body: clamp(1rem, 1.5vw, 1.125rem); /* Body text */
--fs-small: clamp(0.75rem, 1vw, 0.875rem); /* Meta text */
--fs-label: clamp(0.625rem, 0.8vw, 0.75rem); /* Labels, tags */
```

### Typography Styles

| Element         | Size     | Weight          | Letter Spacing | Transform |
| --------------- | -------- | --------------- | -------------- | --------- |
| Hero Title      | 72-96px  | Black (900)     | -0.02em        | None      |
| Section Title   | 48-60px  | Bold (700)      | -0.01em        | None      |
| Card Title      | 24-32px  | Semi-Bold (600) | 0              | None      |
| Navigation      | 14-16px  | Medium (500)    | 0.05em         | Uppercase |
| Body            | 16-18px  | Regular (400)   | 0.01em         | None      |
| Labels/Tags     | 10-12px  | Bold (700)      | 0.15em         | Uppercase |
| Year (Timeline) | 80-120px | Black (900)     | -0.05em        | None      |

---

## 📐 Layout System

### Grid Structure

```css
/* Container Widths */
--container-max: 1400px;
--container-padding: clamp(1rem, 5vw, 4rem);

/* Grid System */
--columns: 12;
--gutter: clamp(1rem, 2vw, 2rem);
```

### Layout Patterns

#### 1. **Full-Width Hero Layout**

```
┌─────────────────────────────────────────────────────────────┐
│                    FULL-WIDTH BACKGROUND                     │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │                    NAVIGATION BAR                        │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│                    LARGE HEADLINE TEXT                       │
│                    (Centered or Left)                        │
│                                                              │
│                    SUPPORTING TEXT                           │
│                                                              │
│                  [ CTA BUTTON ]                              │
└─────────────────────────────────────────────────────────────┘
```

#### 2. **Bento Grid Layout (Ventures Section)**

```
┌──────────────┬──────────────┬──────────────┐
│              │              │              │
│   DOAC       │  FLIGHT      │  DRAGONS     │
│   PODCAST    │  FUND        │  DEN         │
│              │              │              │
├──────────────┴──────────────┼──────────────┤
│                              │              │
│    BOOK SECTION              │  SPEAKER     │
│    (Larger Card)             │  TOUR        │
│                              │              │
└──────────────────────────────┴──────────────┘
```

#### 3. **Timeline Layout (About/Story Section)**

```
         │
    1992 │ ● ─────────── Content Block
         │                Description text
         │                Location
         │
    1994 │ ● ─────────── Content Block
         │                Description text
         │
    2010 │ ● ─────────── Content Block
         │
```

#### 4. **Card Grid Layout (News Section)**

```
┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│   IMAGE/VIDEO   │ │   IMAGE/VIDEO   │ │   IMAGE/VIDEO   │
│                 │ │                 │ │                 │
├─────────────────┤ ├─────────────────┤ ├─────────────────┤
│ Category Tag    │ │ Category Tag    │ │ Category Tag    │
│ HEADLINE        │ │ HEADLINE        │ │ HEADLINE        │
│ Description...  │ │ Description...  │ │ Description...  │
│ Read More →     │ │ Read More →     │ │ Read More →     │
└─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## 🧩 Components

### 1. Navigation

**Desktop Navigation:**

- Fixed/sticky position at top
- Transparent background that transitions to solid on scroll
- Logo/Name on left (text-based, not image logo)
- Menu items horizontally aligned
- Hamburger menu for mobile
- Backdrop blur effect when scrolled

```css
/* Navigation Styles */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s ease;
  z-index: 1000;
}

.nav.scrolled {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
}
```

### 2. Buttons

**Primary Button:**

```css
.btn-primary {
  background: #dbfe01;
  color: #000000;
  border: none;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 0; /* Sharp corners - no border radius */
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: #ffffff;
  transform: translateY(-2px);
}
```

**Secondary Button (Outline):**

```css
.btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-secondary:hover {
  background: #ffffff;
  color: #000000;
}
```

**Ghost Button (Text Link):**

```css
.btn-ghost {
  background: none;
  border: none;
  color: #dbfe01;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  position: relative;
}

.btn-ghost::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #dbfe01;
  transition: width 0.3s ease;
}

.btn-ghost:hover::after {
  width: 100%;
}
```

### 3. Cards

**Venture/Feature Card:**

```css
.venture-card {
  background: #0a0a0a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0; /* Sharp corners */
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
}

.venture-card:hover {
  border-color: #dbfe01;
  transform: translateY(-4px);
}

.venture-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #dbfe01;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.venture-card:hover::before {
  transform: scaleX(1);
}
```

**News Card:**

```css
.news-card {
  background: transparent;
  border: none;
  border-radius: 0;
  overflow: hidden;
}

.news-card-image {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  filter: grayscale(0);
  transition: all 0.5s ease;
}

.news-card:hover .news-card-image {
  transform: scale(1.05);
  filter: grayscale(0.3);
}

.news-card-tag {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #dbfe01;
  margin-bottom: 8px;
}

.news-card-title {
  font-size: 20px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
}
```

### 4. Timeline Component

```css
.timeline {
  position: relative;
  padding-left: 80px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 40px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    to bottom,
    transparent,
    #dbfe01 10%,
    #dbfe01 90%,
    transparent
  );
}

.timeline-item {
  position: relative;
  padding: 40px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-year {
  position: absolute;
  left: -80px;
  font-size: 80px;
  font-weight: 900;
  color: rgba(219, 254, 1, 0.1);
  line-height: 1;
}

.timeline-dot {
  position: absolute;
  left: -45px;
  top: 50px;
  width: 10px;
  height: 10px;
  background: #dbfe01;
  border-radius: 50%;
}
```

### 5. Section Headers

```css
.section-header {
  margin-bottom: 60px;
}

.section-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #dbfe01;
  margin-bottom: 16px;
}

.section-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
}
```

---

## 🎬 Animations & Interactions

### Scroll Animations

#### 1. **Fade In Up Animation**

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

#### 2. **Stagger Animation**

Elements appear one after another with a delay:

```css
.stagger-animation > * {
  opacity: 0;
  transform: translateY(30px);
}

.stagger-animation.visible > *:nth-child(1) {
  animation: fadeInUp 0.6s 0.1s forwards;
}
.stagger-animation.visible > *:nth-child(2) {
  animation: fadeInUp 0.6s 0.2s forwards;
}
.stagger-animation.visible > *:nth-child(3) {
  animation: fadeInUp 0.6s 0.3s forwards;
}
/* Continue pattern... */
```

#### 3. **Timeline Scroll Animation**

The timeline line grows as user scrolls:

```javascript
// Pseudo-code for timeline animation
const timeline = document.querySelector(".timeline");
const timelineLine = document.querySelector(".timeline::before");

window.addEventListener("scroll", () => {
  const scrollProgress = calculateScrollProgress(timeline);
  timelineLine.style.transform = `scaleY(${scrollProgress})`;
});
```

#### 4. **Parallax Scroll Effect**

```css
.parallax-element {
  will-change: transform;
  transition: transform 0.1s linear;
}
```

### Hover Interactions

#### 1. **Link Underline Animation**

```css
.link {
  color: #ffffff;
  text-decoration: none;
  position: relative;
}

.link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #dbfe01;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

#### 2. **Card Lift Effect**

```css
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
```

#### 3. **Image Zoom Effect**

```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-container:hover img {
  transform: scale(1.1);
}
```

#### 4. **Navigation Hover**

```css
.nav-link {
  position: relative;
  color: #ffffff;
  padding: 8px 0;
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #dbfe01;
  border-radius: 50%;
  transform: translateX(-50%) scale(0);
  transition: transform 0.3s ease;
}

.nav-link:hover::before {
  transform: translateX(-50%) scale(1);
}
```

### Page Transitions

```css
/* Smooth page transitions */
.page-transition {
  animation: pageLoad 0.6s ease-out;
}

@keyframes pageLoad {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 📏 Border Radius

> [!IMPORTANT]
> The Steven Bartlett website uses a **minimal/no border radius** design philosophy, creating a sharp, bold aesthetic.

| Element          | Border Radius         |
| ---------------- | --------------------- |
| Buttons          | `0px` (sharp corners) |
| Cards            | `0px` (sharp corners) |
| Images           | `0px` (sharp corners) |
| Input Fields     | `0px` (sharp corners) |
| Timeline Dots    | `50%` (circular)      |
| Navigation Pills | `0px` or minimal      |

**CSS Variables:**

```css
:root {
  --radius-none: 0;
  --radius-sm: 2px; /* Subtle rounding if needed */
  --radius-md: 4px; /* Slight softening */
  --radius-lg: 8px; /* Rarely used */
  --radius-full: 50%; /* Only for circular elements */
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Breakpoints */
:root {
  --breakpoint-sm: 480px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1440px;
}

/* Media Queries */
@media (min-width: 480px) {
  /* Small devices */
}
@media (min-width: 768px) {
  /* Tablets */
}
@media (min-width: 1024px) {
  /* Desktop */
}
@media (min-width: 1280px) {
  /* Large Desktop */
}
@media (min-width: 1440px) {
  /* Extra Large */
}
```

---

## 📋 Component Inventory

### Page Sections

| Section           | Description                   | Key Features                                          |
| ----------------- | ----------------------------- | ----------------------------------------------------- |
| **Hero**          | Full-viewport opening section | Large headline, video background or image, CTA button |
| **About/Bio**     | Brief introduction            | Large typography, supporting description              |
| **Ventures Grid** | Bento-style card grid         | Links to DOAC, Flight Fund, Dragons Den, etc.         |
| **Timeline**      | Life story chronology         | Animated scroll-triggered reveal, growing line        |
| **News Grid**     | Latest articles/press         | Image cards with category tags                        |
| **Speaking**      | Tour information              | Event listings with ticket links                      |
| **Footer**        | Contact and social            | Social icons, navigation links, copyright             |

### Interactive Elements

| Element          | Interaction Type                   |
| ---------------- | ---------------------------------- |
| Navigation Links | Underline on hover                 |
| CTA Buttons      | Background color change, lift      |
| Cards            | Border highlight, lift, image zoom |
| Timeline Items   | Fade in on scroll                  |
| Video Thumbnails | Play icon reveal, image zoom       |
| Social Icons     | Color change to yellow             |
| Form Inputs      | Border highlight on focus          |

---

## 🔧 CSS Variables Summary

```css
:root {
  /* Colors */
  --color-primary: #dbfe01;
  --color-background: #000000;
  --color-background-alt: #0a0a0a;
  --color-text-primary: #ffffff;
  --color-text-secondary: #b0b0b0;
  --color-text-tertiary: #666666;
  --color-border: rgba(255, 255, 255, 0.1);

  /* Typography */
  --font-primary: "Inter", "SF Pro Display", sans-serif;
  --font-display: "Your-Display-Font", sans-serif;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-full: 50%;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  /* Shadows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
  --shadow-md: 0 8px 16px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 20px 40px rgba(0, 0, 0, 0.4);

  /* Z-Index Scale */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-tooltip: 600;
}
```

---

## 📝 Implementation Notes

> [!TIP]
> **Key Takeaways for Redesign:**
>
> 1. Use **sharp corners** (0 border-radius) for a bold, modern look
> 2. Limit color palette to **black, white, and one accent** color
> 3. Implement **scroll-triggered animations** for engagement
> 4. Use **large, bold typography** for headlines
> 5. Create **high contrast** between text and backgrounds
> 6. Keep navigation **minimal and clean**
> 7. Include **subtle hover states** on all interactive elements

### Suggested Animation Libraries

- **GSAP** - Professional-grade animations and scroll triggers
- **Framer Motion** - React-based animation library
- **Locomotive Scroll** - Smooth scrolling with parallax
- **Intersection Observer API** - Native scroll-triggered animations

### Performance Considerations

- Lazy load images and videos
- Use `will-change` sparingly for animated elements
- Implement `prefers-reduced-motion` for accessibility
- Optimize images for web (WebP format)

---

## 📚 Resources

- **Website**: [stevenbartlett.com](https://stevenbartlett.com/)
- **Designer**: [Silverback Studios](https://www.silverbackstudios.co.uk/)
- **Brand Color**: Chartreuse Yellow `#DBFE01`

---

_Document created for website redesign reference - January 2026_
