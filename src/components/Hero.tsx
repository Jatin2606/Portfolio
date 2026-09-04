"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Mail, 
  FileText, 
  Activity, 
  Database, 
  Cpu, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Terminal as TerminalIcon,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResumeModal?: () => void;
}

export default function Hero({ onOpenResumeModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"ledger" | "rag" | "specs">("ledger");

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-medium text-slate-800 dark:text-slate-200 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time Opportunities (Starting May 2026)</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-sky-500 dark:text-sky-400 font-extrabold">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-300">
              Software Engineer &middot;{" "}
              <span className="font-mono text-sky-600 dark:text-sky-400 text-lg sm:text-xl">
                Backend, Full-Stack &amp; AI Systems
              </span>
            </p>

            {/* Concise Bio */}
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              M.S. in Computer Science at the <strong className="text-slate-800 dark:text-slate-200 font-semibold">University of Florida (3.9 GPA)</strong>. 
              I design concurrency-safe distributed backends, high-throughput APIs, RAG semantic search pipelines, and robust full-stack applications.
            </p>

            {/* Core Competencies Chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Python & FastAPI", "Go Systems", "PostgreSQL & pgvector", "Distributed Ledger Design", "Docker & CI/CD", "RAG & LLMs"].map((chip) => (
                <span 
                  key={chip}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-all active:scale-95"
              >
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Jatin_Shivaprakash_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-sky-600 dark:text-sky-400 hover:bg-sky-500/10 border border-sky-500/30 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Working Social & Direct Contact Links */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400">Direct Links:</span>
              
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 hover:text-sky-500 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/80 transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 hover:text-sky-500 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/80 transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/70 hover:text-sky-500 dark:hover:text-sky-400 border border-slate-200 dark:border-slate-700/80 transition-all"
                title={`Email: ${PERSONAL_INFO.email}`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Engineering System Telemetry Widget */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-slate-900 text-slate-200 p-5 shadow-2xl border border-slate-800 font-mono text-xs overflow-hidden">
              
              {/* Window Controls Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] text-slate-400 ml-2">telemetry@jatin-eng:~</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-2 mb-4 bg-slate-950/60 p-1 rounded-lg border border-slate-800/60">
                <button
                  onClick={() => setActiveTab("ledger")}
                  className={`flex-1 py-1.5 px-2 rounded text-[11px] transition-all text-center ${
                    activeTab === "ledger" 
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/40 font-semibold" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  LedgerFlow
                </button>
                <button
                  onClick={() => setActiveTab("rag")}
                  className={`flex-1 py-1.5 px-2 rounded text-[11px] transition-all text-center ${
                    activeTab === "rag" 
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/40 font-semibold" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  FeedFL
                </button>
                <button
                  onClick={() => setActiveTab("specs")}
                  className={`flex-1 py-1.5 px-2 rounded text-[11px] transition-all text-center ${
                    activeTab === "specs" 
                      ? "bg-sky-500/20 text-sky-400 border border-sky-500/40 font-semibold" 
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  System Specs
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "ledger" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Target: POST /api/v1/transactions</span>
                    <span className="text-emerald-400">Locust 50 VU</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
                      <div className="text-slate-400 text-[10px]">Peak Throughput</div>
                      <div className="text-base font-bold text-sky-400 mt-0.5">340.51 req/s</div>
                      <div className="text-[10px] text-slate-500">FastAPI + PostgreSQL</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
                      <div className="text-slate-400 text-[10px]">p99 Latency</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">56 ms</div>
                      <div className="text-[10px] text-slate-500">Row-level locking</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
                      <div className="text-slate-400 text-[10px]">Average Latency</div>
                      <div className="text-base font-bold text-white mt-0.5">15 ms</div>
                      <div className="text-[10px] text-slate-500">6,757 total requests</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800">
                      <div className="text-slate-400 text-[10px]">Error Rate</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">0.00%</div>
                      <div className="text-[10px] text-slate-500">ACID balance safety</div>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950/40 text-[10px] text-slate-400 border border-slate-800/40">
                    <span className="text-sky-400">$</span> double_entry_rules: [2_entries_min, debits==credits, row_lock_order=ASC]
                  </div>
                </div>
              )}

              {activeTab === "rag" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Engine: pgvector + Llama-3.1-8B</span>
                    <span className="text-emerald-400">FeedFL Production</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Semantic Embedding:</span>
                      <span className="text-sky-400 font-semibold">pgvector (Cosine)</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">LLM Fallback Architecture:</span>
                      <span className="text-emerald-400 font-semibold">Mistral-Small-3.1</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Query Optimization:</span>
                      <span className="text-sky-400 font-semibold">30% Latency Cut</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Production Adoption:</span>
                      <span className="text-white font-semibold">200+ Users &middot; 120 Providers</span>
                    </div>
                  </div>

                  <div className="p-2 rounded bg-slate-950/40 text-[10px] text-slate-400 border border-slate-800/40">
                    <span className="text-emerald-400">&gt;</span> spatial_search: PostGIS ST_DWithin + normalized vendor schema
                  </div>
                </div>
              )}

              {activeTab === "specs" && (
                <div className="space-y-2 text-[11px] animate-in fade-in duration-200">
                  <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Education:</span>
                    <span className="text-white font-semibold">M.S. CS @ Univ. of Florida (3.9 GPA)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Undergrad:</span>
                    <span className="text-white font-semibold">B.Tech Big Data Analytics (8.55 GPA)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Daily Scale:</span>
                    <span className="text-sky-400 font-semibold">40,000+ Requests/Day (Axisxi)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">IoT Impact:</span>
                    <span className="text-emerald-400 font-semibold">~50% Device Battery &amp; Storage</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950/70 border border-slate-800 flex justify-between">
                    <span className="text-slate-400">Availability:</span>
                    <span className="text-emerald-400 font-semibold">Full-Time (May 2026 / Immediate)</span>
                  </div>
                </div>
              )}

              {/* Status bar footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  Gainesville, FL (EST)
                </span>
                <a
                  href="https://github.com/Jatin2606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1"
                >
                  <span>github.com/Jatin2606</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
