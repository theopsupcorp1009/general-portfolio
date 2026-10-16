import Link from "next/link";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";
import { experienceData, educationData } from "@/data/portfolioData";

export default function ExperienceEducationPreview() {
  return (
    <section className="py-12 sm:py-16 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Column: Work Experience Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  Work Experience
                </h2>
              </div>
              <Link
                href="/experience"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary-light)] hover:text-white transition-colors group"
              >
                <span>Full Experience</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Timeline matching reference screenshot */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--border)]">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[22px] top-1.5 w-3 h-3 rounded-full bg-[var(--primary)] ring-4 ring-[var(--background)] group-hover:scale-125 transition-transform" />

                  <div className="rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-4 transition-colors">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <span className="text-xs font-semibold text-[var(--primary-light)]">
                        {exp.period}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--surface-elevated)] text-[var(--text-muted)] border border-[var(--border)]">
                        {exp.organization}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>

                    {exp.orgContext && (
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {exp.orgContext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-[var(--text-primary)]">
                  Education
                </h2>
              </div>
              <Link
                href="/education"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary-light)] hover:text-white transition-colors group"
              >
                <span>Full Education</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-5 transition-colors flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h3 className="text-sm font-bold text-[var(--text-primary)]">
                        {edu.degree} <span className="text-[var(--primary-light)] font-medium">({edu.major})</span>
                      </h3>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] font-medium">
                      {edu.institution}, {edu.location}
                    </p>

                    <div className="mt-2 pt-2 border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-secondary)]">Thesis: </span>
                      &ldquo;{edu.thesis.title}&rdquo;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
