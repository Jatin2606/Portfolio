"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Zap,
  Building2,
  Layers
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>02 &middot; Professional Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Track record building production backend APIs, optimizing IoT device firmware schedules, and deploying AI-powered RAG applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-10">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                
                {/* Timeline Node Point */}
                <div 
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    exp.current
                      ? "bg-sky-500 border-white dark:border-[#07090e] ring-4 ring-sky-500/20"
                      : "bg-slate-400 dark:bg-slate-700 border-white dark:border-[#07090e] group-hover:bg-sky-400"
                  }`} 
                />

                {/* Main Card Container */}
                <div className="rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800/90 shadow-sm p-6 sm:p-7 transition-all hover:border-slate-300 dark:hover:border-slate-700">
                  
                  {/* Card Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-xs font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-slate-600 dark:text-slate-300 font-medium">
                        <span className="flex items-center gap-1.5 text-sky-600 dark:text-sky-400 font-semibold">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.organization}</span>
                        </span>
                        {exp.department && (
                          <span className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                            &middot; {exp.department}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Impact Metric Badges */}
                  <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    {exp.metrics.map((metric, i) => (
                      <div 
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50"
                      >
                        <Zap className="w-3 h-3 text-emerald-500" />
                        <span className="text-emerald-900 dark:text-emerald-200">{metric.label}:</span>
                        <span>{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  <ul className="mt-4 space-y-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono uppercase text-slate-400 mr-2">Tech:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
