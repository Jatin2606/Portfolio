"use client";

import React from "react";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen,
  BadgeCheck,
  ExternalLink,
  Cloud,
  Brain
} from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>05 &middot; Credentials &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Graduate academic training at the University of Florida paired with industry-standard cloud and machine learning certifications.
          </p>
        </div>

        {/* Education & Certifications Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: University of Florida Education Card */}
          <div className="lg:col-span-7">
            {EDUCATION.map((edu) => (
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
              </div>
            ))}
          </div>

          {/* Right Column: Industry Certifications */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
              <BadgeCheck className="w-4 h-4 text-sky-500" />
              <span>Industry Certifications</span>
            </div>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="p-6 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-sky-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="p-2 rounded-xl bg-sky-500/10 text-sky-500 dark:text-sky-400">
                      {cert.badgeType === "credly" ? (
                        <Cloud className="w-5 h-5 text-amber-500" />
                      ) : (
                        <Brain className="w-5 h-5 text-sky-500" />
                      )}
                    </span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-500/10 hover:bg-sky-500 hover:text-white transition-all"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {cert.name}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {cert.issuer}
                  </div>

                  {cert.description && (
                    <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  )}

                  {cert.skills && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
