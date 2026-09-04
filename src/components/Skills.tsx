"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Brain, 
  Cloud, 
  Wrench, 
  CheckCircle2,
  Info
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; usedIn: string[] } | null>(null);

  // Mapping project/experience IDs to human-readable labels
  const sourceLabelMap: Record<string, string> = {
    ledgerflow: "LedgerFlow (FastAPI & PostgreSQL double-entry ledger)",
    "uf-nestmate": "UF-NestMate (Go & React housing platform)",
    "uf-wildlife": "UF Wildlife Ecology (SnapperGPS Node.js backend)",
    "uf-food-rag": "UF Food App (pgvector RAG chatbot & FastAPI)",
    axisxi: "Axisxi (High-traffic Django/Spring Boot APIs & Redis)",
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming Languages":
        return <Code2 className="w-5 h-5 text-sky-500" />;
      case "Backend & APIs":
        return <Server className="w-5 h-5 text-emerald-500" />;
      case "Databases & Vector Storage":
        return <Database className="w-5 h-5 text-purple-500" />;
      case "AI & Machine Learning":
        return <Brain className="w-5 h-5 text-pink-500" />;
      case "Cloud & Infrastructure":
        return <Cloud className="w-5 h-5 text-amber-500" />;
      default:
        return <Wrench className="w-5 h-5 text-teal-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>04 &middot; Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Directly verified against production systems, research projects, and open-source repositories. Click or hover any skill to inspect where it was applied.
          </p>
        </div>

        {/* Interactive Selected Skill Banner */}
        {selectedSkill && (
          <div className="mb-8 p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-start gap-3 animate-in fade-in duration-200">
            <Info className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-slate-900 dark:text-white">
                Technology: <span className="text-sky-600 dark:text-sky-400">{selectedSkill.name}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mt-0.5">
                {selectedSkill.usedIn.length > 0 ? (
                  <>Applied in: {selectedSkill.usedIn.map((id) => sourceLabelMap[id] || id).join(" &middot; ")}</>
                ) : (
                  <>Core competency practiced through academic coursework and hands-on system development.</>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {cat.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(isSelected ? null : skill)}
                        onMouseEnter={() => setSelectedSkill(skill)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all text-left flex items-center gap-1.5 ${
                          isSelected
                            ? "bg-sky-500 text-white shadow-sm ring-2 ring-sky-500/30"
                            : "bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60"
                        }`}
                      >
                        <span>{skill.name}</span>
                        {skill.usedIn.length > 0 && (
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : "bg-sky-400"}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{cat.skills.length} skills listed</span>
                <span className="font-mono text-sky-500 dark:text-sky-400">verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
