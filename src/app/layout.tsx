import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Software Engineer | Backend & AI Systems`,
  description: `Portfolio of ${PERSONAL_INFO.name}, M.S. in Computer Science at University of Florida (3.9 GPA). Specializing in high-concurrency backend services, double-entry ledgers, and RAG/AI systems.`,
  keywords: [
    "Jatin Shivaprakash",
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "AI Engineer",
    "University of Florida",
    "FastAPI",
    "Go",
    "Python",
    "PostgreSQL",
    "pgvector",
    "LedgerFlow",
    "Concurrency Control"
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jatinshivaprakash.dev",
    title: `${PERSONAL_INFO.name} | Software Engineer`,
    description: `M.S. in CS at University of Florida (3.9 GPA). Building concurrency-safe backend systems, distributed ledgers, and AI search architectures.`,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Software Engineer`,
    description: `M.S. in CS at University of Florida (3.9 GPA). Concurrency, distributed ledgers, and applied AI systems.`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gainesville",
      addressRegion: "FL",
      addressCountry: "USA",
    },
    email: `mailto:${PERSONAL_INFO.email}`,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Florida",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "SRM Institute of Science and Technology",
      },
    ],
    sameAs: [PERSONAL_INFO.linkedin, PERSONAL_INFO.github],
    knowsAbout: [
      "Software Engineering",
      "Backend Architecture",
      "Concurrency Control",
      "FastAPI",
      "Go",
      "Python",
      "PostgreSQL",
      "pgvector",
      "Distributed Systems",
      "Double-Entry Accounting",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#07090e] text-slate-900 dark:text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
