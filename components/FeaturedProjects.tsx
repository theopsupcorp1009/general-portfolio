import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/portfolioData";

export default function FeaturedProjects() {
  return (
    <section className="py-12 sm:py-16 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <SectionHeading
            title="Featured Projects"
            subtitle="Real deployed applications with verified architecture and documentation."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--primary-light)] hover:text-white transition-colors group shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 5-Project Grid matching screenshot and responsive breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} featuredOnly />
          ))}
        </div>
      </div>
    </section>
  );
}
