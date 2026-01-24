# ProvenPath Website Redesign Implementation Plan

## Applying Steven Bartlett Design System to a Counseling Website

> **Vision:** Create a bold, eye-capturing, borderline overwhelming website that feels alive with massive interactivity. This document maps the Steven Bartlett design system to ProvenPath's counseling context.

---

## 📊 Current State Analysis

### Current Technology Stack

| Technology    | Version/Details         |
| ------------- | ----------------------- |
| Framework     | React + Vite            |
| Routing       | TanStack Router         |
| Styling       | TailwindCSS v4          |
| Animation     | Framer Motion           |
| Fonts         | Euclid Circular B, Lato |
| UI Components | Custom + shadcn/ui      |

### Current Color Palette (TO BE REPLACED)

```css
/* CURRENT - Teal/Cyan Theme */
--primary-blue: #00f2ff;
--blue-40: #00f2ff;
--blue-20: #00696f;
--gray-80: #01101b;
```

### Current Pages

1. **Home** (`Index.tsx`) - Hero, About, Clarity, Services, Library, Contact
2. **About** (`About.tsx`) - AboutHero, WhoWeAre, MVV, OurTeam, Contact
3. **Library** (`Library.tsx`) - Video content library
4. **Contact** (`Contact.tsx`) - Contact form

### Current Components

- `header.tsx` - Fixed header with sheet navigation
- `footer.tsx` - Social links grid footer
- `hero.tsx` - Video background with typing animation
- `about.tsx` - Scroll-animated image carousel
- `services.tsx` - 2x2 card grid
- `clarity.tsx` - CTA section
- `library.tsx` - Featured video card
- `contact.tsx` - Split layout contact section

---

## 🎯 Design Transformation Goals

### Key Principles

1. **OVERWHELMING IMPACT** - Every section should demand attention
2. **ALIVE & INTERACTIVE** - Constant motion, hover states, scroll animations
3. **EXACT STYLE MATCH** - Same fonts sizes, colors, and visual treatments as stevenbartlett.com
4. **COUNSELING CONTENT** - Professional guidance, not entrepreneur branding

---

## 🎨 New Design System

### Color Palette Transformation

| Element                  | Current           | New (Steven Bartlett Style)   |
| ------------------------ | ----------------- | ----------------------------- |
| **Primary Accent**       | `#00F2FF` (Cyan)  | `#DBFE01` (Chartreuse Yellow) |
| **Primary Background**   | `#FFFFFF` (White) | `#000000` (Pure Black)        |
| **Secondary Background** | `#F8FAFB`         | `#0A0A0A` (Off-Black)         |
| **Text Primary**         | `#1A1A1A`         | `#FFFFFF` (White)             |
| **Text Secondary**       | `#666666`         | `#B0B0B0` (Light Gray)        |
| **Text Tertiary**        | `#999999`         | `#666666` (Mid Gray)          |
| **Border**               | `rgba(0,0,0,0.1)` | `rgba(255,255,255,0.1)`       |

### New CSS Variables (Replace in `styles.css`)

```css
:root {
  /* Steven Bartlett Inspired Palette */
  --color-primary: #dbfe01; /* Chartreuse Yellow - ACCENT */
  --color-background: #000000; /* Pure Black */
  --color-background-alt: #0a0a0a; /* Off-Black */
  --color-surface: #111111; /* Card backgrounds */
  --color-text-primary: #ffffff; /* White text */
  --color-text-secondary: #b0b0b0; /* Light gray */
  --color-text-tertiary: #666666; /* Mid gray */
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(219, 254, 1, 0.5);

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  /* Border Radius - SHARP CORNERS */
  --radius-none: 0;
  --radius-sm: 0; /* Changed from 0.5rem */
  --radius-md: 0; /* Changed from 0.5rem */
  --radius-lg: 0; /* Changed from 1rem */
}
```

### Typography Scale (Match Exactly)

```css
/* Typography - LARGE AND BOLD */
--fs-hero: clamp(4rem, 10vw, 8rem); /* 64px-128px */
--fs-h1: clamp(2.5rem, 6vw, 5rem); /* 40px-80px */
--fs-h2: clamp(1.75rem, 4vw, 3rem); /* 28px-48px */
--fs-h3: clamp(1.25rem, 2.5vw, 1.75rem); /* 20px-28px */
--fs-body: clamp(1rem, 1.5vw, 1.125rem); /* 16px-18px */
--fs-label: clamp(0.625rem, 0.8vw, 0.75rem); /* 10px-12px */

/* Letter Spacing */
--ls-tight: -0.02em; /* Headlines */
--ls-normal: 0; /* Body */
--ls-wide: 0.1em; /* Buttons */
--ls-wider: 0.15em; /* Labels/Tags */
--ls-widest: 0.2em; /* Section labels */
```

### Border Radius (CRITICAL CHANGE)

> ⚠️ **IMPORTANT**: Remove all rounded corners. The Steven Bartlett design uses **sharp edges only**.

| Element | Current                      | New            |
| ------- | ---------------------------- | -------------- |
| Buttons | `rounded-full`, `rounded-xl` | `rounded-none` |
| Cards   | `rounded-2xl`, `rounded-3xl` | `rounded-none` |
| Hero    | `rounded-2xl`                | `rounded-none` |
| Images  | `rounded-2xl`                | `rounded-none` |
| Inputs  | `rounded-lg`                 | `rounded-none` |

---

## 📐 Section-by-Section Implementation

### 1. HERO SECTION (hero.tsx)

#### Current State

- Video background with rounded corners
- Typing animation "DESTINY"
- Teal accent color
- Centered content
- Rounded CTA button

#### New Implementation

```tsx
// KEY CHANGES:
// 1. Remove rounded corners on video container
// 2. Change accent from #22949A to #DBFE01
// 3. Make text LARGER (match 8rem hero size)
// 4. Sharp-edged button
// 5. Add scroll-triggered parallax
// 6. More dramatic hover effects

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video - NO rounded corners */}
      <video className="absolute inset-0 w-full h-full object-cover" />

      {/* Dark overlay - heavier */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content - BIGGER text */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center">
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-black text-white tracking-tight">
          WALK TO YOUR
        </h1>
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-black text-[#DBFE01] tracking-tight">
          {typedText}
          <span className="animate-blink">|</span>
        </h1>

        {/* Sharp-edged button */}
        <button
          className="mt-12 bg-[#DBFE01] text-black px-10 py-5 font-bold uppercase tracking-widest 
          hover:bg-white transition-all duration-300 hover:-translate-y-1"
        >
          Book a Consultation
        </button>
      </div>
    </div>
  );
};
```

#### Content Adaptation

| Steven Bartlett                      | ProvenPath                                  |
| ------------------------------------ | ------------------------------------------- |
| "Steven Bartlett"                    | "PROVENPATH" or "WALK TO YOUR DESTINY"      |
| "Entrepreneur, Speaker, Investor..." | "Counseling, Training, Coaching, Mentoring" |
| "The Diary of a CEO"                 | "Your Journey to Clarity"                   |

---

### 2. ABOUT/BIO SECTION (about.tsx)

#### Current State

- White background
- Teal accent labels
- 3-column infinite scroll images
- Left-aligned content with right images

#### New Implementation

```tsx
// KEY CHANGES:
// 1. BLACK background
// 2. #DBFE01 accent color
// 3. Sharp image corners
// 4. More dramatic scroll parallax
// 5. Staggered reveal animations

const AboutUs = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div>
            <span className="text-[#DBFE01] font-bold tracking-[0.2em] text-xs uppercase">
              WHO WE ARE
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mt-4">
              About Us
            </h2>
            <p className="text-gray-400 text-lg mt-6 leading-relaxed">
              Proven Path is a service-based private organization...
            </p>

            {/* Sharp-edged outlined button */}
            <button
              className="mt-10 border border-white text-white px-8 py-4 font-bold uppercase 
              tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Images - NO rounded corners */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        {/* Scroll-parallax images with sharp edges */}
      </div>
    </section>
  );
};
```

---

### 3. SERVICES SECTION (services.tsx)

#### Current State

- Background image with overlay
- 2x2 card grid
- Rounded glassmorphic cards
- White text

#### New Implementation - BENTO GRID

```tsx
// KEY CHANGES:
// 1. Convert to Bento Grid layout (like Steven's ventures)
// 2. Sharp corners on all cards
// 3. Yellow border on hover
// 4. Larger typography
// 5. Scale and lift animations

const services = [
  {
    icon: User,
    title: "Personal Development",
    description: "Unlock your potential and build lasting habits.",
    size: "large", // spans 2 columns
  },
  {
    icon: Users,
    title: "Family Challenges",
    description: "Strengthen relationships and communication.",
    size: "normal",
  },
  // ...
];

const Services = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-8">
        {/* Section Label */}
        <span className="text-[#DBFE01] font-bold tracking-[0.3em] text-xs uppercase block text-center">
          WHAT WE OFFER
        </span>
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white text-center mt-4 mb-16">
          SERVICES
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -8 }}
              className={`bg-[#0A0A0A] border border-white/10 p-10 
                hover:border-[#DBFE01] transition-all duration-500
                ${service.size === "large" ? "md:col-span-2" : ""}`}
            >
              {/* Yellow top border on hover */}
              <div className="h-[3px] w-0 bg-[#DBFE01] group-hover:w-full transition-all duration-500" />

              <service.icon className="w-8 h-8 text-white/60 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

---

### 4. TIMELINE SECTION (NEW COMPONENT)

> **ADD NEW**: Create a timeline section similar to Steven Bartlett's story timeline

```tsx
// NEW COMPONENT: timeline.tsx

const timeline = [
  {
    year: "2015",
    title: "FOUNDED",
    description: "ProvenPath was established with a vision to transform lives.",
  },
  {
    year: "2018",
    title: "EXPANDED SERVICES",
    description: "Added family counseling and business mentoring.",
  },
  {
    year: "2020",
    title: "DIGITAL TRANSFORMATION",
    description: "Launched online counseling platform.",
  },
  {
    year: "2024",
    title: "VIDEO LIBRARY",
    description: "Created comprehensive educational content library.",
  },
];

const Timeline = () => {
  return (
    <section className="py-32 bg-black relative">
      {/* Vertical line that grows on scroll */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#DBFE01] to-transparent" />

      <div className="container mx-auto px-8">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="relative py-20"
          >
            {/* Large faded year */}
            <span className="absolute -left-8 top-0 text-[120px] font-black text-[#DBFE01]/10">
              {item.year}
            </span>

            {/* Timeline dot */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#DBFE01] rounded-full" />

            {/* Content */}
            <div
              className={`w-1/2 ${i % 2 === 0 ? "pr-20 text-right" : "pl-20 ml-auto"}`}
            >
              <span className="text-[#DBFE01] font-bold tracking-widest text-sm">
                {item.year}
              </span>
              <h3 className="text-3xl font-bold text-white mt-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-4">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
```

---

### 5. CLARITY/CTA SECTION (clarity.tsx)

#### Current State

- White/light background
- Teal accents
- Centered text with rounded button

#### New Implementation

```tsx
// KEY CHANGES:
// 1. Dark background
// 2. MUCH larger text
// 3. Sharp button
// 4. Dramatic entrance animation

const Clarity = () => {
  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url(grid-pattern.svg)" }}
      />

      <div className="container mx-auto px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#DBFE01] font-bold tracking-[0.3em] text-xs uppercase"
        >
          GET STARTED
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-white mt-6"
        >
          Take the First Step Toward
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-[#DBFE01]"
        >
          Clarity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg mt-8 max-w-2xl mx-auto"
        >
          Whether you're navigating life decisions or exploring your
          entrepreneurial ideas...
        </motion.p>

        {/* Sharp CTA button with glow */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 60px rgba(219, 254, 1, 0.4)",
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-12 bg-[#DBFE01] text-black px-12 py-6 font-bold uppercase tracking-widest
            hover:bg-white transition-colors duration-300"
        >
          Book Your Consultation
        </motion.button>
      </div>
    </section>
  );
};
```

---

### 6. LIBRARY/VIDEO SECTION (library.tsx)

#### Current State

- Light gradient background
- Featured video card with play button
- Rounded corners everywhere

#### New Implementation

```tsx
// KEY CHANGES:
// 1. Black background
// 2. Sharp video card
// 3. Larger play button with hover glow
// 4. Episode grid below

const Library = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-12 h-px bg-[#DBFE01] mx-auto mb-8" />
          <span className="text-[#DBFE01] font-bold tracking-[0.3em] text-xs uppercase">
            CONTENT LIBRARY
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mt-4">
            Our Best Videos
          </h2>
        </div>

        {/* Featured Video - SHARP EDGES */}
        <div className="relative aspect-video max-w-6xl mx-auto bg-[#0A0A0A] overflow-hidden group">
          <img
            src={thumbnail}
            className="w-full h-full object-cover 
            group-hover:scale-105 transition-transform duration-700"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center p-16">
            <div className="max-w-lg">
              <span className="text-white/50 text-xs font-bold tracking-widest uppercase">
                LATEST EPISODE
              </span>
              <h3 className="text-4xl font-bold text-white mt-4">
                The Future of Digital Learning
              </h3>
              <p className="text-gray-400 mt-4">
                Discover the transformative power of digital education...
              </p>
              <button
                className="mt-8 text-[#DBFE01] font-bold tracking-wide 
                border-b-2 border-[#DBFE01] pb-1 hover:text-white hover:border-white 
                transition-colors duration-300"
              >
                Start Listening
              </button>
            </div>
          </div>

          {/* Play button with glow */}
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 80px rgba(219, 254, 1, 0.5)",
            }}
            className="absolute right-16 top-1/2 -translate-y-1/2 w-24 h-24 
              bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center"
          >
            <div className="w-16 h-16 bg-white flex items-center justify-center">
              <Play className="w-8 h-8 text-black fill-black" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
```

---

### 7. CONTACT SECTION (contact.tsx)

#### Current State

- Split layout with image
- Rounded container
- Teal buttons

#### New Implementation

```tsx
// KEY CHANGES:
// 1. Full-width dark section
// 2. Sharp edges
// 3. Yellow accent
// 4. Larger typography

const Contact = () => {
  return (
    <section className="py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row">
          {/* Content */}
          <div className="w-full md:w-1/2 p-16 flex flex-col justify-center">
            <div className="w-16 h-16 bg-[#DBFE01]/10 flex items-center justify-center mb-10">
              <Rocket className="w-8 h-8 text-[#DBFE01]" />
            </div>

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white">
              Let's build a better{" "}
              <span className="text-[#DBFE01] italic">future</span> together
            </h2>

            <div className="flex flex-wrap gap-4 mt-12">
              <button
                className="bg-[#DBFE01] text-black px-10 py-5 font-bold uppercase tracking-widest
                hover:bg-white transition-colors duration-300"
              >
                Book Consultation
              </button>
              <button
                className="border border-white text-white px-10 py-5 font-bold uppercase tracking-widest
                hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Image - Sharp edges */}
          <div className="w-full md:w-1/2">
            <img src={contactImg} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

### 8. HEADER/NAVIGATION (header.tsx)

#### Current State

- Fixed with gradient background
- Sheet-based mobile menu
- Cyan accent

#### New Implementation

```tsx
// KEY CHANGES:
// 1. Transparent to solid black on scroll
// 2. Yellow accent for active/hover
// 3. Full-screen overlay menu (like Steven's)

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-12 py-6">
        <Link to="/">
          <img src={logo} className="h-12 w-auto" />
        </Link>

        {/* Menu button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-white hover:text-[#DBFE01] transition-colors"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-[#DBFE01] z-50"
          >
            <nav className="h-full flex flex-col items-center justify-center gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-5xl font-black text-black uppercase 
                      hover:text-white transition-colors duration-300 relative group"
                  >
                    {item.label}
                    {/* Strikethrough on active */}
                    {isActive(item.path) && (
                      <span className="absolute left-0 top-1/2 w-full h-1 bg-black" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
```

---

### 9. FOOTER (footer.tsx)

#### Current State

- Dark background
- Social icons grid
- Teal hover accent

#### New Implementation

```tsx
// KEY CHANGES:
// 1. Yellow hover accent
// 2. More dramatic hover animation
// 3. Sharp dividers

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Social Grid - Sharp edges */}
      <div className="grid grid-cols-3 md:grid-cols-6 border-t border-white/10">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.href}
            className="group relative flex items-center justify-center py-16 border-r border-white/10 last:border-r-0 overflow-hidden"
          >
            {/* Yellow hover fill */}
            <div
              className="absolute inset-0 bg-[#DBFE01] transform scale-x-0 origin-left 
              transition-transform duration-500 group-hover:scale-x-100"
            />

            <div className="relative z-10 group-hover:text-black transition-colors duration-300">
              {social.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="container mx-auto px-8 py-8 flex justify-between items-center 
        text-xs text-gray-500 border-t border-white/10"
      >
        <p>© 2024 ProvenPath. All rights reserved.</p>
        <div className="flex gap-8">
          <Link className="hover:text-[#DBFE01] transition-colors">
            Terms & Conditions
          </Link>
          <Link className="hover:text-[#DBFE01] transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
```

---

## 🎬 Animation System

### Required Animations

#### 1. Scroll-Triggered Fade In

```typescript
// Enhanced fadeIn with more dramatic movement
export const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
    x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.8,
      delay,
    },
  },
});
```

#### 2. Stagger Container (Faster)

```typescript
export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0.2,
) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
```

#### 3. Link Underline Animation (NEW)

```css
.link-underline {
  position: relative;
}

.link-underline::after {
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

.link-underline:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

#### 4. Card Hover Effects

```css
.card-hover {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-8px);
  border-color: rgba(219, 254, 1, 0.5);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.card-hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #dbfe01;
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.card-hover:hover::before {
  transform: scaleX(1);
}
```

#### 5. Button Glow Effect

```css
.btn-glow {
  transition: all 0.3s ease;
}

.btn-glow:hover {
  box-shadow: 0 0 60px rgba(219, 254, 1, 0.4);
  transform: translateY(-2px);
}
```

#### 6. Parallax Scroll

```typescript
// Use with scroll listener
const parallaxY = scrollY * 0.3

// Apply to elements
style={{ transform: `translateY(${parallaxY}px)` }}
```

---

## 📂 File Changes Summary

### Files to Modify

| File                | Changes                                                                       |
| ------------------- | ----------------------------------------------------------------------------- |
| `styles.css`        | Complete color palette overhaul, remove all border-radius, add new animations |
| `hero.tsx`          | Sharp edges, yellow accent, larger typography                                 |
| `about.tsx`         | Black background, yellow accent, sharp images                                 |
| `services.tsx`      | Bento grid layout, sharp cards with hover borders                             |
| `clarity.tsx`       | Dark theme, dramatic animations                                               |
| `library.tsx`       | Dark theme, sharp video card                                                  |
| `contact.tsx`       | Dark split layout, yellow accent                                              |
| `header.tsx`        | Full-screen overlay menu                                                      |
| `footer.tsx`        | Yellow hover states                                                           |
| `lib/animations.ts` | More dramatic, slower animations                                              |

### New Files to Create

| File                               | Purpose                       |
| ---------------------------------- | ----------------------------- |
| `components/sections/timeline.tsx` | Journey/story timeline        |
| `components/ui/animated-link.tsx`  | Link with underline animation |
| `components/ui/glow-button.tsx`    | Button with hover glow        |

---

## ✅ Implementation Checklist

### Phase 1: Foundation (styles.css)

- [ ] Replace color variables with new palette
- [ ] Set all border-radius to 0
- [ ] Add new transition variables
- [ ] Add new typography scale
- [ ] Add animation keyframes

### Phase 2: Core Components

- [ ] Update Button component (sharp, glow effect)
- [ ] Update Card component (sharp, border hover)
- [ ] Create AnimatedLink component
- [ ] Create GlowButton component

### Phase 3: Header & Footer

- [ ] Implement full-screen overlay navigation
- [ ] Add yellow hover states throughout
- [ ] Sharp social icon grid

### Phase 4: Page Sections

- [ ] Hero - sharp edges, larger text, yellow accent
- [ ] About - dark background, parallax images
- [ ] Services - bento grid layout
- [ ] NEW: Timeline section
- [ ] Clarity - dramatic CTA
- [ ] Library - sharp video card
- [ ] Contact - dark split layout

### Phase 5: Animations

- [ ] Scroll-triggered reveals on all sections
- [ ] Staggered element appearances
- [ ] Hover effects on all interactive elements
- [ ] Parallax on images
- [ ] Link underline animations

### Phase 6: Polish

- [ ] Test all responsive breakpoints
- [ ] Verify animation performance
- [ ] Check color contrast accessibility
- [ ] Cross-browser testing

---

## 🎨 Quick Reference: Color Swaps

| Find                     | Replace With    |
| ------------------------ | --------------- |
| `#00F2FF`                | `#DBFE01`       |
| `#22949A`                | `#DBFE01`       |
| `#00696F`                | `#DBFE01`       |
| `#00848D`                | `#DBFE01`       |
| `#00B2BD`                | `#DBFE01`       |
| `bg-white`               | `bg-black`      |
| `text-[#1A1A1A]`         | `text-white`    |
| `text-gray-600`          | `text-gray-400` |
| `text-gray-500`          | `text-gray-500` |
| `rounded-2xl`            | `rounded-none`  |
| `rounded-3xl`            | `rounded-none`  |
| `rounded-xl`             | `rounded-none`  |
| `rounded-full` (buttons) | `rounded-none`  |

---

_Document created for ProvenPath website redesign - January 2026_
