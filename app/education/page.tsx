import type { Metadata } from "next";
import { GraduationCap, Award, BookOpen, Mail, Phone, Building2, MapPin } from "lucide-react";
import {
  educationData,
  courseworkData,
  certificationsData,
  academicReferences,
} from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Education & Academic Background",
  description:
    "Academic degrees, software engineering & data science coursework, thesis research, and academic references of M R Khan Dipu at Daffodil International University.",
};

export default function EducationPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Academic Foundation
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Education &amp; Credentials
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Completed degrees in Software Engineering with Data Science specialization from Daffodil International University, along with thesis research and professional certifications.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Degree Programs */}
        <div className="space-y-6 mb-16">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-6 sm:p-8 transition-colors shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0 mt-1">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                      {edu.degree}
                    </h2>
                    <div className="text-sm font-semibold text-[var(--primary-light)] mt-0.5">
                      Major in {edu.major}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] border border-[var(--border)] text-[var(--text-muted)] self-start">
                  {edu.period}
                </div>
              </div>

              {/* Thesis Details */}
              <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] rounded-xl bg-[var(--surface-elevated)]/60 p-4 border border-[var(--border-subtle)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-light)] block mb-1">
                  Master Thesis Research
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium leading-relaxed italic">
                  &ldquo;{edu.thesis.title}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                Relevant Coursework
              </h2>
              <span className="text-xs text-[var(--text-muted)]">
                Data Science, Machine Learning &amp; Software Engineering Curriculum
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {courseworkData.map((course, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] flex items-center gap-2.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                <span>{course}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                Professional Certifications
              </h2>
              <span className="text-xs text-[var(--text-muted)]">
                Verified training programs in data decision-making and modern web development
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-[var(--primary-light)] mb-3">
                    {cert.issuer}
                  </div>
                </div>
                <div className="text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                  <span className="font-medium text-[var(--text-secondary)]">Topics: </span>
                  {cert.topics}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic References */}
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-2">
            Academic References
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
            Faculty members and department leadership at Daffodil International University.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicReferences.map((ref) => (
              <div
                key={ref.name}
                className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  {ref.name}
                </h3>
                <div className="text-xs font-semibold text-[var(--primary-light)] mt-0.5">
                  {ref.designation}
                </div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">
                  {ref.department}, {ref.institution}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">
                  {ref.location}
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Mail className="w-3.5 h-3.5 text-[var(--primary-light)]" />
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:text-[var(--primary-light)] transition-colors"
                    >
                      {ref.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Phone className="w-3.5 h-3.5 text-[var(--primary-light)]" />
                    <a
                      href={`tel:${ref.phone}`}
                      className="hover:text-[var(--primary-light)] transition-colors"
                    >
                      {ref.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
