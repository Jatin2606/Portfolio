"use client";

import React from "react";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Server,
  Workflow
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>01 &middot; Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering for Concurrency, Reliability &amp; Scalable AI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a Software Engineer and Master&apos;s candidate in Computer Science at the{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">University of Florida (3.9 / 4.00 GPA)</strong>, 
              building on an undergraduate foundation in Computer Science with a Specialization in Big Data Analytics from{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">SRM Institute of Science and Technology (8.55 / 10.00 GPA)</strong>.
            </p>

            <p>
              My engineering focus centers on <span className="text-sky-600 dark:text-sky-400 font-semibold">backend architecture</span>,{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">concurrency control</span>, and{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">grounded AI systems</span>. 
              Whether it&apos;s architecting double-entry ledgers that benchmark at 340 req/s with PostgreSQL row-level locks, 
              building RAG retrieval pipelines powered by <code className="font-mono text-sm bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">pgvector</code> and Llama-3.1-8B, 
              or optimizing IoT firmware scheduling to extend device battery life by 50%, I care deeply about correctness, latency, and predictable system behavior.
            </p>

            <p>
              In production environments at Axisxi, I supported 40,000+ daily requests by implementing Redis caching layers, 
              optimizing high-traffic MySQL schemas, and building RESTful endpoints in Python/Django and Java/Spring Boot. 
              I am comfortable jumping between the application layer, database internals, and deployment infrastructure.
            </p>

            <p>
              Beyond production backends, my background spans machine learning, distributed systems, and data engineering, 
              with <strong className="text-slate-900 dark:text-white font-semibold">research published at IEEE</strong> on deep learning for precision agriculture 
              (<em className="text-sky-600 dark:text-sky-400">&ldquo;Disease Detection in Arecanut using Convolutional Neural Network&rdquo;</em>, IEEE ACCAI 2024).
            </p>

            {/* What I enjoy solving */}
            <div className="pt-2">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Workflow className="w-4 h-4 text-sky-500" />
                <span>What I Love Building &amp; Solving</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Race condition prevention &amp; row-level ACID locks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Sub-100ms p99 REST API architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Vector embeddings &amp; RAG retrieval pipelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Spatial indexing with PostGIS &amp; normalized DB schemas</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Key Impact Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Stat Card 1 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Academic Excellence</span>
                <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                3.90 <span className="text-sm font-normal text-slate-400">/ 4.00 GPA</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                University of Florida &middot; Master of Science in Computer Science
              </p>
            </div>

            {/* Stat Card 2: IEEE Publication */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">IEEE Research Publication</span>
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-2">
                Deep Learning <span className="text-sm font-normal text-slate-400">(CNN)</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                IEEE ACCAI 2024 &middot; Disease Detection in Precision Agriculture
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Ledger Concurrency</span>
                <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Server className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-2">
                340 <span className="text-sm font-normal text-slate-400">req/s</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                LedgerFlow with 56ms p99 latency &amp; 0.00% error rate under 50 concurrent users
              </p>
            </div>

            {/* Stat Card 4 */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Production Scale</span>
                <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500">
                  <Database className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mt-2">
                40,000+ <span className="text-sm font-normal text-slate-400">req/day</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Axisxi production APIs with Redis caching &amp; 30% query response time cut
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
