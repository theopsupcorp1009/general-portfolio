import Link from "next/link";
import { Code2, Globe, Database, Wrench, Users, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolioData";

export default function SkillsPreview() {
  const getIcon = (id: string) => {
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
    <section className="py-12 sm:py-16 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading title="Technical Skills" className="mb-0" />
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--primary-light)] hover:text-white transition-colors group"
          >
            <span>View All Skills</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Card Responsive Grid matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-5 transition-all duration-200 flex flex-col"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-3.5">
                {getIcon(category.id)}
              </div>

              <h3 className="font-bold text-sm text-[var(--text-primary)] mb-2">
                {category.title}
              </h3>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1">
                {category.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
