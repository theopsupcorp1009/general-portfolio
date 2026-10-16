import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Globe, Database, Wrench, Users, ArrowRight, Check } from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Technical Skills",
  description:
    "Verified technical competencies, programming languages, web engineering stacks, data science toolkits, and professional soft skills of M R Khan Dipu.",
};

export default function SkillsPage() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "programming":
        return <Code2 className="w-5 h-5 text-[var(--primary-light)]" />;
      case "web-dev":
        return <Globe className="w-5 h-5 text-[var(--primary-light)]" />;
      case "data-science":
        return <Database className="w-5 h-5 text-[var(--primary-light)]" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-[var(--primary-light)]" />;
      case "soft-skills":
        return <Users className="w-5 h-5 text-[var(--primary-light)]" />;
      default:
        return <Code2 className="w-5 h-5 text-[var(--primary-light)]" />;
    }
  };

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Verified Competencies
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Technical Skills
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Authentic technical proficiencies across programming, full-stack web development, biomedical signal analysis, and collaborative team administration.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-6 sm:p-7 transition-all duration-200 shadow-sm flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    {cat.title}
                  </h2>
                  <span className="text-[11px] text-[var(--text-muted)] font-medium">
                    {cat.skills.length} competencies
                  </span>
                </div>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 flex-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[var(--surface-elevated)] hover:bg-[var(--primary)]/10 text-[var(--text-secondary)] hover:text-[var(--primary-light)] border border-[var(--border)] hover:border-[var(--primary)]/40 transition-colors"
                  >
                    <Check className="w-3 h-3 text-[var(--primary)]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complementary Engineering Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              Integrated Technical Profile
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
              Combining full-stack web engineering in React &amp; Next.js with data science and deep learning research in biomedical signal processing.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-primary-gradient shrink-0 hover:opacity-95 transition-opacity"
          >
            <span>See Applied in Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
