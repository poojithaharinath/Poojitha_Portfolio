# Bollu Poojitha — AI Engineer & RAG Systems Architect Portfolio

A production-grade, visually striking portfolio website built for **Bollu Poojitha**, featuring a modern **anti-gravity** aesthetic with soft 3D depth, particle fields, glassmorphism UI cards, scroll-triggered animations, and dark/light theme toggle.

## 🚀 Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS + Custom Token Design System
- **Animation:** Framer Motion (scroll/entrance animations + micro-interactions)
- **3D / Floating Effects:** React Three Fiber + `@react-three/drei` (floating geometric mesh & interactive particle field)
- **Icons:** `lucide-react`
- **Forms:** `react-hook-form`
- **Deployment Target:** Vercel / Netlify / GitHub Pages (100% static buildable)

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   ├── favicon.ico
│   └── resume.pdf (Placeholder PDF resume)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx (Blurred sticky nav + active section indicator)
│   │   ├── ThreeBackground.jsx (3D anti-gravity geometric blobs & particles)
│   │   ├── Hero.jsx (Name, animated dynamic role typewriter, CTA buttons)
│   │   ├── About.jsx (Professional summary, value cards, metrics row)
│   │   ├── Skills.jsx (Categorized skill grid with filter tabs)
│   │   ├── Experience.jsx (Vertical animated career timeline)
│   │   ├── Projects.jsx (Hero project cards + grid of specialized work)
│   │   ├── Education.jsx (Academic qualifications timeline)
│   │   ├── Contact.jsx (Validated contact form + fallback mailto link)
│   │   └── Footer.jsx (Social links, quick navigation & credits)
│   ├── data/
│   │   └── portfolio.js (Single source of truth for all content & resume details)
│   ├── App.jsx (Main app layout & scroll-spy controller)
│   ├── main.jsx (Vite entry point)
│   └── index.css (Tailwind CSS import & design tokens)
├── package.json
└── vite.config.js
```

---

## 🛠️ Local Setup & Running

1. **Clone or Navigate to the directory:**
   ```bash
   cd d:/projects/Portfolio
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production:**
   ```bash
   npm run build
   ```
   The production-optimized static output will be generated inside the `dist/` directory, ready to deploy to Vercel, Netlify, or AWS S3/CloudFront.

---

## ✏️ Customizing Content & Media

- **Text & Resume Data:** All content (Name, Professional Summary, Skills, Timeline, Projects, Education) is centralized in `src/data/portfolio.js`. Edit this file to update any information.
- **Resume File:** Replace `public/resume.pdf` with your actual PDF resume.
- **Contact Form Backend:** The form in `src/components/Contact.jsx` uses `react-hook-form`. You can easily attach [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) by replacing the `onSubmit` handler in `Contact.jsx`.
