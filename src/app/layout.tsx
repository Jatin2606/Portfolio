import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Software Engineer | Backend & Distributed Systems`,
  description: `Portfolio of ${PERSONAL_INFO.name}, Software Engineer with 3+ years experience across Thoughtworks and DXC Technology, M.S. in CS at University of Florida (3.88 GPA). Specializing in backend development, Model Context Protocol (MCP), distributed systems, high-throughput APIs, and cloud-native architectures.`,
  keywords: [
    "Jatin Shivaprakash",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "Thoughtworks",
    "DXC Technology",
    "University of Florida",
    "FastAPI",
    "Model Context Protocol",
    "MCP",
    "Tool Calling",
    "Go",
    "Python",
    "ProtoActor",
    "Kafka",
    "Redis",
    "LedgerFlow",
    "FeedFL",
    "PostgreSQL",
    "pgvector",
    "PostGIS",
    "Docker",
    "Kubernetes",
    "AWS"
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jatin2606.github.io/Portfolio/",
    title: `${PERSONAL_INFO.name} | Software Engineer`,
    description: `M.S. in CS at University of Florida (3.88 GPA). Building concurrency-safe backend systems, Model Context Protocol (MCP) integrations, distributed ledgers, and cloud-native AI architectures.`,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Software Engineer`,
    description: `M.S. in CS at University of Florida (3.88 GPA). Concurrency, distributed ledgers, Model Context Protocol, and applied cloud systems.`,
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
      "Model Context Protocol (MCP)",
      "Tool Calling",
      "Concurrency Control",
      "FastAPI",
      "Go",
      "Python",
      "PostgreSQL",
      "pgvector",
      "PostGIS",
      "Distributed Systems",
      "Docker",
      "Kubernetes",
      "AWS",
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
