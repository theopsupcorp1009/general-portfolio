import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Building2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Verified professional employment, academic coordination, and independent biomedical AI/ML research experience of M R Khan Dipu.",
};

export default function ExperiencePage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Career &amp; Research Track
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Professional Experience
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Detailed breakdown of employment in academic management, teaching administration, and independent remote research in healthcare AI.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 relative before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-[2px] before:bg-[var(--border)]">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-8 sm:pl-12 group">
              {/* Timeline Indicator */}
              <div className="absolute left-1.5 sm:left-3.5 top-5 w-3.5 h-3.5 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)] group-hover:scale-125 transition-transform" />

              <div className="rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-6 sm:p-8 transition-all duration-200 shadow-sm">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30 mb-2">
                      {item.type}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                      {item.role}
                    </h2>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--text-muted)]">
                    <Calendar className="w-4 h-4 text-[var(--primary-light)]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Organization & Context */}
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-light)] mb-2">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>{item.organization}</span>
                </div>

                {item.orgContext && (
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-4 italic">
                    {item.orgContext}
                  </p>
                )}

                {/* Responsibilities */}
                <div className="mt-4 pt-4 border-t border-[var(--border-subtle)]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    Key Responsibilities &amp; Contributions
                  </h3>
                  <ul className="space-y-2.5">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note if applicable */}
                {item.note && (
                  <div className="mt-4 p-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-start gap-2 text-xs text-[var(--text-muted)]">
                    <AlertCircle className="w-4 h-4 text-[var(--text-muted)] shrink-0 mt-0.5" />
                    <span>{item.note}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
              Interested in my research track?
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Explore ongoing biomedical signal processing and conference publications.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/research"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary-gradient text-white hover:opacity-95 transition-opacity"
            >
              <span>Explore Research</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
