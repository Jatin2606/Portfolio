# Jatin Shivaprakash &mdash; Personal Engineering Portfolio

A modern, minimal, and high-performance developer portfolio website designed for **Software Engineer / Full-Stack Engineer / AI Engineer / Backend Engineer** roles.

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, highlighting academic achievements and engineering projects at the **University of Florida** and **SRM Institute of Science and Technology**.

---

## ⚡ Core Sections & Highlights

- **Hero & Live Telemetry Widget**: Interactive technical widget displaying real-world performance benchmarks (LedgerFlow 340 req/s, 56ms p99 latency, 0.00% error rate; pgvector + Llama-3.1-8B RAG pipeline; production scale).
- **Recruiter 30-Second Snapshot**: Designed specifically for engineering recruiters to evaluate candidate credentials, GPAs (3.90 / 4.00 M.S. CS), top projects, and core languages in 30 seconds.
- **About Me**: Professional narrative highlighting backend systems, concurrency safety, and grounded AI models.
- **Experience Timeline**:
  - *Backend Software Engineer*, Wildlife Ecology & Conservation Dept, UF (SnapperGPS Node.js backend, ~50% battery & storage optimization)
  - *Software Engineer*, University of Florida (FastAPI, PostGIS, pgvector RAG chatbot with Llama-3.1-8B/Mistral fallback, Supabase migration cutting setup time 40%)
  - *Software Engineer*, Axisxi (Java/Spring Boot & Python/Django REST APIs, MySQL query tuning cutting latency 30%, Redis caching for 40,000+ req/day)
- **Featured Projects & Architecture Modals**:
  - **LedgerFlow**: Double-entry payment ledger engine with PostgreSQL row-level locks (`SELECT ... FOR UPDATE`), idempotency keys, and Locust/k6 benchmark suites.
  - **UF NestMate**: Full-stack Go + React housing platform serving 1,000+ students with Google Maps API and NLP review summarization.
- **Interactive Skills Matrix**: Skills organized into 6 domains, with interactive highlighting that maps each skill to the real project or company where it was used.
- **Academic Credentials**: Master's in CS from UF (3.9 GPA) and B.Tech Big Data Analytics from SRM (8.55 GPA) with coursework.
- **Contact & Resume System**: Working direct contact form, one-click email copy with toast confirmation, and integrated PDF resume viewer & direct download.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router, Static HTML Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Dark/Light Mode Theme Provider
- **Icons**: Lucide React + Custom SVG Brand Glyphs
- **PDF Hosting**: Embedded `public/resume.pdf`

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js 18+ or 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Jatin2606/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This compiles the static production site into the `/out` directory.

---

## 🌐 Deployment Options

### 1. Vercel (Recommended)
1. Push this repository to your GitHub account (`https://github.com/Jatin2606/Portfolio`).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset will automatically detect Next.js.
4. Click **Deploy**. Vercel will provide an instant live URL (e.g. `jatin-shivaprakash.vercel.app`).

### 2. GitHub Pages
A preconfigured GitHub Actions workflow is included at `.github/workflows/deploy.yml`.
1. Push this repo to GitHub.
2. In your repo settings, go to **Settings > Pages > Build and deployment > Source** and select **GitHub Actions**.
3. Every push to `main` will automatically build and deploy the portfolio to `https://jatin2606.github.io/Portfolio/`.

### 3. Custom Domain Setup
To connect a custom domain (e.g., `jatinshivaprakash.com` or `jatin.dev`):
- In Vercel or GitHub Pages, enter your domain under **Domains**.
- Add the DNS `CNAME` or `A` records provided by the platform to your domain registrar (Namecheap, Cloudflare, GoDaddy, Google Domains, etc.).

---

## 📝 Updating Your Content Later

- **Resume PDF**: Simply replace `public/resume.pdf` with your new PDF file and rebuild.
- **Projects, Experiences, & Skills**: All data is cleanly centralized in [`src/data/portfolioData.ts`](./src/data/portfolioData.ts). Simply edit this single file to update metrics, job titles, or new projects.
