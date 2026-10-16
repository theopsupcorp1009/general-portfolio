# 💼 M R Khan Dipu — Professional Portfolio

A multi-page personal portfolio website for **M R Khan Dipu** (Software Engineer | Data Scientist | AI/ML Researcher), engineered with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

🔗 **Verified External Profile:** [sites.google.com/view/mrkhandipu](https://sites.google.com/view/mrkhandipu)  
🔗 **LinkedIn:** [linkedin.com/in/mrkhandipu](https://www.linkedin.com/in/mrkhandipu/)  
📦 **Personal GitHub:** [github.com/mrkhan393](https://github.com/mrkhan393)  
🏢 **Organization GitHub:** [github.com/theopsupcorp1009](https://github.com/theopsupcorp1009)

---

## 🎨 Visual Identity & Design System

The application strictly matches the dark navy and royal blue aesthetic established in the design specification:

- **Deep Navy Background:** `#0B1220` with darker section base `#080F1B`
- **Surface Elevation:** Card containers `#0F1A2B`, elevated menus `#111E32`, hover states `#15243A`
- **Borders:** Thin low-contrast dividers `#20334F` and subtle separators `#17263B`
- **Primary Accents:** Royal blue `#3478F6` with hover `#4A8CFF` and secondary icon blue `#60A5FA`
- **Restrained Gradients:** Subtle button gradient `linear-gradient(135deg, #3478F6 0%, #2563EB 100%)` and accent text gradient `linear-gradient(90deg, #3478F6 0%, #7867FF 100%)`
- **Typography:** Geist sans-serif font family with hierarchy scaling from mobile to large desktop

---

## 🧭 Multi-Page Route Structure

The website is architected as an authentic multi-page application with 15 distinct routes:

| Route | Page | Purpose & Key Content |
|---|---|---|
| `/` | **Home** | Hero with portrait, bio, About preview, 5-skill category cards, 5 featured projects, experience & education timeline, and contact CTA. |
| `/about` | **About Me** | Comprehensive professional biography, academic background, web development and research pillars, and focus areas. |
| `/experience` | **Experience** | Chronological employment at The DrAcademy & Udvash, plus independent remote research at Group of Bio-Photomatix. |
| `/projects` | **Project Catalog** | Grid of all 5 deployed projects with tech tags, live links, and direct detail routing. |
| `/projects/bazar-dor` | **Bazar Dor Details** | Daily Bengali market-price tracker architecture, better-auth, MongoDB, and live Vercel deployment. |
| `/projects/bangla-news-24` | **Bangla News 24 Details** | Real-time Bengali news portal with email verification, Resend, and external news API integration. |
| `/projects/fitlog` | **FitLog Details** | Workout library companion with LocalStorage persistence, DaisyUI, and training plan management. |
| `/projects/alzheimer-dementia-classifier` | **Alzheimer Classifier Details** | Deep learning MRI classifier prototype with perceptual hashing validation and educational disclaimer. |
| `/projects/quantum-circuit-explorer` | **Quantum Explorer Details** | Interactive Streamlit and Qiskit app with 12 built-in circuits, measurement histograms, and Bloch sphere. |
| `/skills` | **Technical Skills** | Five verified categories (Programming, Web Dev, Data Science & ML, Tools, Soft Skills) without arbitrary scores. |
| `/education` | **Education** | Completed MSc and BSc degrees in Software Engineering (Data Science major) from Daffodil International University, capstone coursework, and faculty references. |
| `/research` | **Research Profile** | Remote biomedical signal processing, EEG brain analysis, and medical modeling at Group of Bio-Photomatix. |
| `/publications` | **Publications** | Peer-reviewed conference papers at ICoICI 2026 (Epileptic Seizures CNN) and ICCCNT 2025 (Gastrointestinal CNN). |
| `/activities` | **Activities & Awards** | 3MT Thesis Competition, Data Science Club, Teknofest-2022, voluntary service, and 2013 Merit Award. |
| `/contact` | **Contact** | Verified email, phone, location, online profiles, and interactive contact form with honest gateway validation. |
| `/*` | **Custom 404** | On-brand custom not-found page with quick recovery routes. |

---

## 🛡️ Strict Content & Integrity Rules

1. **Zero GPA/CGPA Policy:** In strict adherence to portfolio rules, no GPA, CGPA, thesis grade, or academic score is displayed anywhere across pages, preview cards, metadata, or search indexes.
2. **Authentic Data Only:** Zero synthetic statistics, fabricated client endorsements, or simulated benchmarks.
3. **Transparent Medical Disclaimer:** The Alzheimer MRI classifier prominently features a non-clinical educational research disclaimer.
4. **Honest Contact Form Feedback:** The form performs client and server-side validation. If no third-party email API key (`RESEND_API_KEY`) is configured, it transparently notifies the sender and offers a prefilled one-click mail client fallback.

---

## 💻 Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Library:** React 19
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React & custom verified brand SVGs
- **Fonts:** Geist (`next/font/google`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ (Node.js 20+ recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/theopsupcorp1009/general-portfolio.git
cd general-portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Linting and Type Checking

```bash
npm run lint
```

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Key Directories & Assets

```
general-portfolio/
├── app/                           # App Router routes and page layouts
│   ├── about/page.tsx             # About Me page
│   ├── activities/page.tsx        # Extracurricular activities & awards
│   ├── api/contact/route.ts       # Contact form dispatch API endpoint
│   ├── contact/                   # Contact page & form client component
│   ├── education/page.tsx         # Education, coursework & references
│   ├── experience/page.tsx        # Work & research experience timeline
│   ├── projects/                  # Catalog & dynamic [slug] detail pages
│   ├── publications/page.tsx      # Conference publications
│   ├── research/page.tsx          # Biomedical signal processing profile
│   ├── skills/page.tsx            # Technical competencies
│   ├── globals.css                # CSS variables & design tokens
│   ├── layout.tsx                 # Root layout with Navbar and Footer
│   ├── not-found.tsx              # Custom 404 error page
│   └── page.tsx                   # Homepage composition
├── components/                    # Reusable React components
│   ├── AboutPreview.tsx           # Homepage About Me narrative & contact card
│   ├── ContactCTA.tsx             # Homepage "Let's Work Together" banner
│   ├── ExperienceEducationPreview.tsx # Homepage timeline & education preview
│   ├── FeaturedProjects.tsx       # Homepage 5-card project grid
│   ├── Footer.tsx                 # Shared footer with verified social links
│   ├── Hero.tsx                   # Homepage hero section with portrait & CTAs
│   ├── Navbar.tsx                 # Responsive sticky header with mobile drawer
│   ├── ProjectCard.tsx            # Project preview card with external links
│   ├── SectionHeading.tsx         # Section title with blue accent underline
│   ├── SkillsPreview.tsx          # Homepage 5-card skill category grid
│   ├── SocialIcons.tsx            # Authentic LinkedIn & GitHub SVG icons
│   └── ThemeToggle.tsx            # Accessible dark/light mode toggle
├── data/
│   └── portfolioData.ts           # Centralized, strongly typed portfolio content
└── public/
    ├── M-R-Khan-Dipu-CV.pdf        # Authoritative CV PDF for download
    └── images/
        ├── mr-khan-dipu.jpg       # Authentic portrait photo
        ├── portfolio-reference.jpg# Reference UI screenshot
        └── projects/              # Verified project illustration assets
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
