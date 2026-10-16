import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, BookOpen, Briefcase, GraduationCap, Sparkles, MapPin, Mail, Phone } from "lucide-react";
import { personalInfo, aboutContent } from "@/data/portfolioData";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Professional biography, academic foundation, software engineering capabilities, and AI/ML research profile of M R Khan Dipu.",
};

export default function AboutPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Biography &amp; Background
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            About Me
          </h1>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Top Grid: Portrait + Core Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-xl p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-[var(--surface-elevated)]">
                <Image
                  src={personalInfo.avatarUrl}
                  alt="M R Khan Dipu"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="w-full max-w-[400px] mt-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] p-5 space-y-3">
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 text-[var(--primary-light)] shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <Mail className="w-4 h-4 text-[var(--primary-light)] shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-[var(--primary-light)] transition-colors truncate"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                <Phone className="w-4 h-4 text-[var(--primary-light)] shrink-0" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-[var(--primary-light)] transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-light)]"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.githubPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-light)]"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <div className="w-full max-w-[400px] mt-4">
              <a
                href={personalInfo.cvPdfPath}
                download="M-R-Khan-Dipu-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] border border-[var(--primary)]/50 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-[var(--primary-light)]" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Narrative Paragraphs */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--primary-light)]" />
                <span>Professional Overview</span>
              </h2>
              {aboutContent.fullBio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm text-justify sm:text-base text-[var(--text-secondary)] leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-5">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-3">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  Full-Stack Engineering
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Next.js, React, TypeScript, Tailwind CSS, authentication, and REST/database integrations.
                </p>
              </div>

              <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-5">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  Biomedical AI/ML
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Brain signal processing, EEG analysis, medical imaging, CNN architectures, and research manuscripts.
                </p>
              </div>

              <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-5">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  Academic Foundation
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Completed BSc and MSc in Software Engineering with Data Science major from Daffodil International University.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Focus Areas & Research Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Professional Focus Areas */}
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
              <span>Professional Focus Areas</span>
            </h2>
            <ul className="space-y-3">
              {aboutContent.focusAreas.map((area, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-light)] mt-2 shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Interests */}
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-violet)]" />
              <span>Scientific Research Interests</span>
            </h2>
            <ul className="space-y-3">
              {aboutContent.researchInterests.map((interest, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-violet)] mt-2 shrink-0" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]">
          <div>
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              Explore Research &amp; Work
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5">
              Review published conference papers, technical projects, or employment history.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--text-primary)] transition-colors"
            >
              <span>Research</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary-gradient text-white transition-opacity hover:opacity-90"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
