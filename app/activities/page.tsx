import type { Metadata } from "next";
import { Award, Trophy, Users } from "lucide-react";
import { activitiesData, awardsData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Extracurricular Activities & Achievements",
  description:
    "Student leadership, bootcamp participation, 3MT thesis competition, community volunteering, and academic merit awards of M R Khan Dipu at Daffodil International University.",
};

export default function ActivitiesPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Community &amp; Competitions
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Activities &amp; Achievements
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Active university involvement spanning data science competitions, technology bootcamps, voluntary service, and cultural performances at Daffodil International University.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>Honors &amp; Awards</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awardsData.map((award) => (
              <div
                key={award.id}
                className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-[var(--surface)] to-[var(--surface)] border border-amber-500/30 p-6 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-[var(--text-primary)]">
                      {award.title}
                    </h3>
                    <span className="text-xs font-semibold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {award.year}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities Grid */}
        <div>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-[var(--primary-light)]" />
            <span>Extracurricular Activities &amp; Clubs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activitiesData.map((act) => (
              <div
                key={act.id}
                className="rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-6 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-[var(--primary-light)] px-2.5 py-0.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                      {act.year}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] leading-snug mb-2">
                    {act.title}
                  </h3>

                  {act.description && (
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {act.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
