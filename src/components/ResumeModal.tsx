"use client";

import React, { useEffect } from "react";
import { X, FileDown, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl h-[88vh] bg-white dark:bg-[#0d121f] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0d121f]/95">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {PERSONAL_INFO.name} &middot; Resume
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              University of Florida &middot; M.S. Computer Science
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Jatin_Shivaprakash_Resume.pdf"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Frame */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-slate-950 p-2">
          <iframe
            src={`${PERSONAL_INFO.resumePdfUrl}#toolbar=0`}
            title="Jatin Shivaprakash Resume PDF"
            className="w-full h-full rounded-lg border border-slate-200 dark:border-slate-800"
          />
        </div>
      </div>
    </div>
  );
}
