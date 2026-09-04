"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  Layers, 
  Zap, 
  ArrowUpRight, 
  Code2, 
  Lock,
  Cpu,
  MapPin,
  TrendingUp
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS, ProjectDetail } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>03 &middot; Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Systems &amp; Projects
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real implementations emphasizing concurrency control, distributed ledger invariants, and performant web services.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-8">
                
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    {project.period}
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="View GitHub Repository"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  {project.subtitle}
                </p>

                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Technical Metric Callouts */}
                {project.benchmarks && (
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {project.benchmarks.slice(0, 2).map((b, i) => (
                      <div 
                        key={i} 
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 text-left"
                      >
                        <div className="text-[11px] font-mono text-slate-400">{b.metric}</div>
                        <div className="text-lg font-bold text-sky-600 dark:text-sky-400 mt-0.5">{b.value}</div>
                        <div className="text-[10px] text-slate-500">{b.details}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Bullet Points */}
                <div className="mt-5 space-y-2">
                  {project.technicalHighlights.slice(0, 2).map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer: Tech tags and Deep Dive Trigger */}
              <div className="p-6 sm:px-8 sm:py-5 bg-slate-50/70 dark:bg-slate-950/40 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 max-w-sm">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Deep Dive Action Button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/10 text-sky-600 dark:text-sky-400 hover:bg-sky-500 hover:text-white transition-all"
                  >
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors"
                  >
                    <span>Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
