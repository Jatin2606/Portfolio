"use client";

import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Activity,
  CheckCircle2,
  Lock,
  GitBranch,
  Table
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectDetail } from "@/data/portfolioData";

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0d121f] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#0d121f]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-sky-500/10 text-sky-500 dark:text-sky-400">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                System Architecture &amp; Technical Deep Dive &middot; {project.period}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Source</span>
            </a>
            
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
          
          {/* Subtitle & Role */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="font-semibold text-slate-900 dark:text-white text-base">
              {project.subtitle}
            </div>
            <div className="text-xs font-mono text-sky-600 dark:text-sky-400 mt-1">
              Role: {project.role}
            </div>
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <h4 className="font-bold text-rose-600 dark:text-rose-400 text-sm uppercase tracking-wider flex items-center gap-2 mb-2">
                <span>The Engineering Problem</span>
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-sm uppercase tracking-wider flex items-center gap-2 mb-2">
                <span>The Engineered Solution</span>
              </h4>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Section */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-sky-500" />
              <span>System Architecture &amp; Data Pipeline</span>
            </h4>
            
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {project.architecture.overview}
            </p>

            <div className="p-4 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs border border-slate-800 overflow-x-auto">
              <div className="text-sky-400 font-semibold mb-2">// Architecture Components:</div>
              <ul className="space-y-1.5 list-disc list-inside">
                {project.architecture.components.map((comp, i) => (
                  <li key={i} className="text-slate-300">
                    <span className="text-slate-100">{comp.split(":")[0]}:</span>
                    <span className="text-slate-400">{comp.split(":")[1]}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 pt-3 border-t border-slate-800">
                <div className="text-emerald-400 font-semibold mb-1">// End-to-End Data Flow:</div>
                <div className="text-slate-300 leading-relaxed">
                  {project.architecture.dataFlow}
                </div>
              </div>
            </div>
          </div>

          {/* Concurrency & Reliability Rules */}
          {project.concurrencyAndReliability && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-amber-500" />
                <span>Concurrency Control &amp; Invariants</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.concurrencyAndReliability.map((item, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs">
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">
                      {item.split(":")[0]}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      {item.split(":")[1] || item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benchmark Numbers */}
          {project.benchmarks && project.benchmarks.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-500" />
                <span>Load Testing &amp; Benchmark Metrics</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.benchmarks.map((b, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                    <div className="text-xs text-slate-500 font-mono">{b.metric}</div>
                    <div className="text-xl font-bold text-sky-600 dark:text-sky-400 mt-1">{b.value}</div>
                    <div className="text-[11px] text-slate-400 mt-1">{b.details}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Close
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
