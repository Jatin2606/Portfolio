"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white dark:bg-[#07090e] transition-colors duration-300 relative">
      {/* Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* About Section */}
      <About />

      {/* Work Experience Timeline */}
      <Experience />

      {/* Featured Projects & Deep Dive Modals */}
      <Projects />

      {/* Technical Skills Matrix */}
      <Skills />

      {/* Education Credentials */}
      <Education />

      {/* Contact & Direct Outreach */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* In-Browser PDF Resume Preview */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </main>
  );
}
