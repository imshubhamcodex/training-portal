# ITI Resource Hub - Professional ITI Training Resource Portal

A production-ready public educational resource portal for **Industrial Training Institute (ITI)** instructors and trainees in India. Built with Astro, Tailwind CSS v4, Lucide icons, and Supabase PostgreSQL with Row Level Security (RLS).

---

## 🌟 Project Overview

**ITI Resource Hub** centralizes educational and technical training materials for Craftsmen Training Scheme (CTS) vocational trades. The initial primary specialization is **ICTSM (Information & Communication Technology System Maintenance)**, architected to scale seamlessly across **Electrician**, **Fitter**, **COPA**, and all CTS trades.

### Key Capabilities
- **Public Open Access**: Anyone can browse, search, preview, and download lesson plans and manuals without registration or paywalls.
- **Multi-Format Document Delivery**: In-browser preview and direct downloads for **PDF**, **DOCX**, and **SVG** technical schematics.
- **Curriculum Alignment**: Instructional modules structured according to **NIMI 4-step instructional frameworks** and DGT/NCVET syllabi.
- **Searchable Catalog**: Multi-parameter search by trade, semester, category, keyword, year, language, and file format with shareable URLs.
- **Regulatory Notices**: Dedicated circular and notice archive distinguishing active directives from expired notices.
- **Secured Administration Console**: Protected administrative management for creating resources, uploading documents, managing trade curricula, and publishing notices.

---

## 🛠️ Technology Stack

- **Framework**: [Astro v7](https://astro.build) (Static site generation with hybrid server component architecture)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) utilizing `@tailwindcss/vite` and design tokens defined in `DESIGN.md`
- **Design Language**: Mintlify-inspired institutional educational aesthetic (atmospheric sky gradient hero, Inter typography, Geist Mono for code/specifications, `#00d4a4` brand green accent, and pill CTAs)
- **Icons**: Lucide icons (`lucide-astro`)
- **Database & Auth**: Supabase PostgreSQL with UUID keys, foreign key constraints, Row Level Security (RLS), and TSVECTOR full-text search indexes
- **Storage**: Supabase Storage buckets (`resources`, `notices`) for PDFs, DOCX templates, and diagrams

---

## 📁 Repository Structure

```text
training-docs/
├── .env.example                       # Environment configuration template
├── DESIGN.md                          # Primary UI/UX design specifications (Mintlify style)
├── README.md                          # Project documentation
├── astro.config.mjs                   # Astro configuration with @tailwindcss/vite
├── public/
│   ├── favicon.svg                    # Brand favicon
│   └── sample-files/                  # Downloadable sample PDFs, DOCX, & SVG diagrams
│       ├── sample-lesson-plan.pdf
│       ├── sample-lesson-plan.docx
│       ├── sample-demo-plan.pdf
│       ├── sample-lab-manual.pdf
│       ├── sample-notes.pdf
│       └── sample-diagram.svg
├── scripts/
│   ├── generate-assets.js             # Utility to generate test demonstration documents
│   └── test-suite.js                  # End-to-end integration and endpoint test suite
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   └── AdminLayout.astro      # Admin console layout with authentication guard
│   │   ├── layout/
│   │   │   ├── Header.astro           # Mintlify top navigation with search bar & mobile drawer
│   │   │   └── Footer.astro           # 5-column institutional footer with dynamic copyright
│   │   ├── notices/
│   │   │   └── NoticeCard.astro       # Official notice card with status and attachment link
│   │   ├── resources/
│   │   │   └── ResourceCard.astro     # Resource card with format badges, preview, & download
│   │   └── ui/
│   │       ├── Badge.astro            # Status and tag chip component
│   │       └── Breadcrumbs.astro      # Accessible breadcrumb trail
│   ├── layouts/
│   │   └── Layout.astro               # Main public layout with SEO meta & Google Fonts
│   ├── lib/
│   │   ├── data/
│   │   │   ├── categories.ts          # Taxonomy definitions (Lesson Plans, Lab Manuals, etc.)
│   │   │   ├── notices.ts             # Notices data and active/expired calculation
│   │   │   ├── resources.ts           # Resources catalog and multi-factor search engine
│   │   │   ├── subjects.ts            # Curriculum subjects categorized by trade and year
│   │   │   └── trades.ts              # Trades data (ICTSM, Electrician, Fitter, COPA)
│   │   └── supabase/
│   │       └── client.ts              # Resilient Supabase client with local fallback
│   ├── pages/
│   │   ├── index.astro                # Homepage (Hero, Categories, Trades, Recent, Notices)
│   │   ├── library.astro              # Searchable Resource Catalog with filters & pagination
│   │   ├── about.astro                # About the ITI Resource Hub & CTS alignment
│   │   ├── contact.astro              # Content correction and feedback form
│   │   ├── copyright.astro            # Copyright, fair educational use, and attribution
│   │   ├── privacy.astro              # Privacy policy and anonymous access statement
│   │   ├── categories/
│   │   │   └── [category].astro       # Dynamic category landing pages
│   │   ├── notices/
│   │   │   ├── index.astro            # Notices directory with active & archive tabs
│   │   │   └── [noticeSlug].astro     # Individual notice detail with attachment download
│   │   ├── resources/
│   │   │   └── [resourceSlug].astro   # SEO resource detail with PDF preview & download
│   │   ├── trades/
│   │   │   ├── index.astro            # All trades directory
│   │   │   ├── [tradeSlug].astro      # Trade landing page with Year 1 & 2 curricula
│   │   │   └── [tradeSlug]/subjects/[subjectSlug].astro # Subject-specific resources
│   │   └── admin/
│   │       ├── index.astro            # Admin dashboard with actual database counts
│   │       ├── login.astro            # Secure administrator sign-in
│   │       ├── categories.astro       # Category taxonomy overview
│   │       ├── notices.astro          # Manage notices (create, publish, archive)
│   │       ├── settings.astro         # Infrastructure, Supabase status, and backup guide
│   │       ├── subjects.astro         # Manage subjects and syllabus units
│   │       ├── trades.astro           # Manage active trades
│   │       └── resources/
│   │           ├── index.astro        # Resources management table with status filter
│   │           ├── new.astro          # Create new resource with file attachment
│   │           └── [id]/edit.astro    # Edit resource metadata, replace file, change status
│   ├── styles/
│   │   └── global.css                 # Tailwind v4 import and DESIGN.md color tokens
│   └── types/
│       └── index.ts                   # Complete TypeScript domain interfaces
└── supabase/
    ├── migrations/
    │   └── 20261016_initial_schema.sql # PostgreSQL schema, TSVECTOR search, RLS policies
    └── seed.sql                       # Safe demonstration seed data for trades & resources
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(The repository runs seamlessly out-of-the-box using the built-in local data store if external Supabase credentials are not yet entered).*

### 3. Generate Demonstration Files
```bash
node scripts/generate-assets.js
```

### 4. Start Development Server
Per the workspace development rules:
```bash
# Start background dev server
astro dev --background

# Check server status
astro dev status

# View background logs
astro dev logs

# Stop dev server
astro dev stop
```
Or start directly:
```bash
npm run dev
```
Open **`http://localhost:4321`** in your browser.

---

## 🧪 Testing & Verification

Run the automated test runner to verify all 32 HTTP endpoints, search algorithms, filters, and asset files:
```bash
node scripts/test-suite.js
```

Run production build verification:
```bash
npm run build
```

---

## 🔐 Administrator Portal Access

- **Login URL**: `/admin/login`
- **Provisioned Development Admin**:
  - **Email**: `admin@iti-hub.gov.in`
  - **Password**: `AdminPass2026!`
- **Access Control**: Administrative routes enforce server-side and client-side session checks. Unauthenticated anonymous visitors cannot access draft resources, edit metadata, or mutate records.

---

## 🗄️ Database Setup & Migrations (Supabase)

To link with a live Supabase project:

1. In your Supabase Dashboard SQL Editor, run `supabase/migrations/20261016_initial_schema.sql` to generate tables, full-text search triggers, and Row Level Security policies.
2. Run `supabase/seed.sql` to populate initial CTS trades, ICTSM subjects, and lesson plan records.
3. In Supabase Storage, create two public buckets:
   - `resources` (for PDF/DOCX instructional files)
   - `notices` (for circular attachments)
4. Populate your Supabase keys in `.env`:
   ```env
   PUBLIC_SUPABASE_URL=https://<your-project-ref>.supabase.co
   PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
   SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
   ```

---

## 🚀 Deployment Instructions

### Deploy to Vercel / Netlify / Cloudflare
Astro natively supports all modern deployment hosts:

```bash
# Add your preferred adapter (e.g. Vercel)
npx astro add vercel --yes

# Run build
npm run build
```

Set the environment variables in your deployment host dashboard:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `PUBLIC_SITE_URL`

---

## 📄 License & Attribution

- Built following the **Craftsmen Training Scheme (CTS)** curriculum guidelines issued by the **Directorate General of Training (DGT)** and **NIMI Frameworks**.
- Open for educational, non-commercial use by vocational training instructors and trainees across India.
