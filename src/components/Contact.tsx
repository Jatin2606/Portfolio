"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  FileDown, 
  MapPin, 
  Phone,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link with prefilled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 }
      });
      // Trigger user's email client
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-50/70 dark:bg-slate-900/30 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <span>06 &middot; Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Build Something Great.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            I am actively seeking full-time software engineering opportunities. Let&apos;s discuss how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Primary Contact
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-base sm:text-lg font-bold text-sky-600 dark:text-sky-400 hover:underline break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-500 hover:text-white transition-all flex-shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs font-mono text-emerald-500 mt-2 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn</div>
                    <div className="text-xs text-slate-500">Connect with me</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">GitHub</div>
                    <div className="text-xs text-slate-500">View code &amp; repos</div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
              </a>

            </div>

            {/* Resume Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-50 to-emerald-500/10 dark:from-sky-950/30 dark:via-slate-900 dark:to-emerald-950/20 border border-sky-500/20 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Curriculum Vitae / Resume
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Verified PDF &middot; Updated September 2026
                </div>
              </div>
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Jatin_Shivaprakash_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-sm transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>

            {/* Location & Details */}
            <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0d121f] border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below to reach out directly. It will route straight to my personal inbox.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                    Your email client has been launched with your message. You can also write directly to{" "}
                    <strong className="font-mono">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="mt-3 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-sky-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Jatin, I came across your portfolio and would like to discuss an opportunity on our team..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:border-sky-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-sky-500 hover:bg-sky-600 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
                  >
                    {isSubmitting ? (
                      <span>Preparing Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
