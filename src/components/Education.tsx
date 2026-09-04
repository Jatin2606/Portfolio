"use client";

import React from "react";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";
import { EDUCATION } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>05 &middot; Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Computer science master&apos;s and undergraduate foundations with high academic standing.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION.map((edu, index) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="p-2 rounded-xl bg-sky-500/10 text-sky-500 dark:text-sky-400">
                    <GraduationCap className="w-5 h-5" />
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>

                {edu.specialization && (
                  <div className="text-sm font-medium text-sky-600 dark:text-sky-400 mt-1">
                    {edu.specialization}
                  </div>
                )}

                <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 mt-2">
                  {edu.institution}
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>

                {/* GPA Callout Badge */}
                <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                    <Award className="w-5 h-5" />
                    <span className="text-xs uppercase font-mono tracking-wider font-semibold">Cumulative GPA</span>
                  </div>
                  <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                    {edu.gpa} <span className="text-xs font-normal text-slate-500">/ {edu.maxGpa}</span>
                  </div>
                </div>

                {/* Coursework & Focus Areas */}
                {edu.coursework && (
                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Key Coursework &amp; Focus Areas</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Card Footer status */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{edu.status}</span>
                </span>
                <span className="font-mono text-[11px]">Source: Resume Verified</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
