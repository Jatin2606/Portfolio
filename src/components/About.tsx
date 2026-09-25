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
              I am a Software Engineer with <strong className="text-slate-900 dark:text-white font-semibold">3+ years of experience</strong> delivering 
              distributed backend services, cloud-native architectures, and AI-enabled systems. Currently completing my Master&apos;s in Computer Science at the{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">University of Florida (3.9 / 4.00 GPA)</strong>.
            </p>

            <p>
              My professional journey progressed from <span className="text-sky-600 dark:text-sky-400 font-semibold">DXC Technology</span>—where I built customer-facing REST APIs, 
              optimized PostgreSQL queries with SQLAlchemy and indexing cutting latency by 18%, and implemented Celery/RabbitMQ notification pipelines with 78% automated test coverage—to{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Thoughtworks</span>, building Kafka-driven transaction services, governed RAG knowledge search with Supabase and pgvector (+15% retrieval speedup), 
              and human-in-the-loop <span className="text-purple-600 dark:text-purple-400 font-semibold">Agentic RAG workflows</span> using LangGraph.
            </p>

            <p>
              Whether it&apos;s designing double-entry ledgers that benchmark at 340 req/s with PostgreSQL row-level locks, 
              engineering a 3-layer distributed community platform in Go using ProtoActor to eliminate shared-memory lock contention, 
              or deploying containerized services with Docker, Kubernetes, AWS, and OpenTelemetry across multi-environment pipelines, 
              I focus on correctness, latency, and predictable system behavior.
            </p>

            <p>
              I bring feature ownership, automated testing rigor (pytest, Postman, RAGAS), and cross-functional collaboration across QA, platform, and engineering teams to deliver reliable backend systems and scalable AI capabilities.
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
                  <span>Kafka &amp; event-driven transaction architectures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Agentic RAG with LangGraph, Tool Calling &amp; HITL</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Row-level ACID locks &amp; double-entry ledger invariants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>ProtoActor distributed message passing &amp; simulation</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Key Impact Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Stat Card 1: Experience */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Professional Experience</span>
                <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500">
                  <TrendingUp className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
                3+ Years <span className="text-sm font-normal text-slate-400">Industry Delivery</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Software Engineer across Thoughtworks &amp; DXC Technology
              </p>
            </div>

            {/* Stat Card 2: Ledger Concurrency */}
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
                LedgerFlow 56ms p99 latency &amp; 0.00% error rate under 50 concurrent users
              </p>
            </div>

            {/* Stat Card 3: Distributed Platform in Go */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-amber-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Distributed Architecture</span>
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400 mt-2">
                Go &middot; ProtoActor
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                3-Layer distributed platform with actor-based concurrency &amp; simulation
              </p>
            </div>

            {/* Stat Card 4: Agentic RAG & AI */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-500/40 transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Enterprise AI</span>
                <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500">
                  <Database className="w-4 h-4" />
                </span>
              </div>
              <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400 mt-2">
                Agentic RAG
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                LangGraph, Tool Calling, HITL &amp; Supabase pgvector (+15% retrieval speed)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
