"use client";

import React from "react";
import { 
  GraduationCap, 
  Briefcase, 
  Zap, 
  Terminal, 
  CheckCircle2, 
  FileText, 
  ArrowUpRight 
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function RecruiterSnapshot() {
  return (
    <section className="py-8 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header indicator */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Recruiter Quick Brief &middot; 30-Second Candidate Snapshot
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Targeting: Entry-Level Software Engineer / Backend / AI / Full-Stack
          </span>
        </div>

        {/* 4-Card Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Education */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Education</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Univ. of Florida (M.S. CS)
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
              3.90 / 4.00 GPA
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Graduating May 2026 &middot; SRM B.Tech 8.55/10
            </div>
          </div>

          {/* Card 2: Core Engineering Stack */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 mb-2">
              <Terminal className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Primary Stack</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Python, Go, SQL, TypeScript
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 font-mono mt-0.5">
              FastAPI, PostgreSQL, pgvector
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Docker, Supabase, AWS, Redis, React
            </div>
          </div>

          {/* Card 3: Proven Impact Metrics */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Production Scale</span>
            </div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              340 req/s &middot; 56ms p99 Latency
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              40,000+ daily reqs at Axisxi
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              ~50% IoT sensor battery optimization
            </div>
          </div>

          {/* Card 4: Top Projects & Work Auth */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Flagship Projects</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                LedgerFlow &amp; UF NestMate
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Double-entry engine + Go/React platform
              </div>
            </div>

            <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <a
                href="#projects"
                className="text-xs text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 font-medium"
              >
                <span>Examine Architecture</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Jatin_Shivaprakash_Resume.pdf"
                className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-medium"
              >
                <FileText className="w-3 h-3" />
                <span>PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
