import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "Explore the five authentic deployed applications built by M R Khan Dipu, spanning full-stack web applications, biomedical MRI classification, and quantum circuit simulation.",
};

export default function ProjectsPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Verified Engineering Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Projects Portfolio
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Five live, production-deployed applications showcasing full-stack Next.js systems, deep learning medical image classifiers, and quantum circuit simulations.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
