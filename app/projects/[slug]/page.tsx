import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  AlertTriangle,
  Code2,
} from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { GithubIcon } from "@/components/SocialIcons";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} | M R Khan Dipu`,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-[var(--text-muted)] mb-8"
        >
          <Link
            href="/"
            className="hover:text-[var(--primary-light)] transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/projects"
            className="hover:text-[var(--primary-light)] transition-colors"
          >
            Projects
          </Link>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-medium">
            {project.name}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--primary)]/10 text-[var(--primary-light)] border border-[var(--primary)]/25"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-[var(--primary-light)] font-medium mt-2">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary-gradient shadow-md shadow-[var(--primary)]/20 hover:opacity-95 transition-all"
            >
              <span>Visit Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Preview */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-2xl mb-12">
          {project.slug === "alzheimer-dementia-classifier" || project.slug === "quantum-circuit-explorer" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full group"
              aria-label={`Open ${project.name} live project`}
            >
              <Image
                src={
                  project.slug === "alzheimer-dementia-classifier"
                    ? "/images/alzheimer.png"
                    : "/images/quantum.png"
                }
                alt={`${project.name} screenshot preview`}
                fill
                priority
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 flex items-end justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                <span className="mb-6 translate-y-2 rounded-lg bg-black/80 px-5 py-3 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  Open Live Project ↗
                </span>
              </div>
            </a>
          ) : (
            <iframe
              src={project.liveUrl}
              title={`${project.name} live preview`}
              className="absolute inset-0 h-full w-full border-0 bg-white"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>

        {/* Medical / Research Disclaimer (Alzheimer Classifier) */}
        {project.disclaimer && (
          <div className="mb-10 p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <span className="font-bold block text-amber-300 mb-1">
                Prototype &amp; Educational Disclaimer
              </span>
              {project.disclaimer}
            </div>
          </div>
        )}

        {/* Project Overview & Purpose */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--primary-light)]" />
              <span>Project Overview</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {project.purpose && (
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
              <h2 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[var(--primary-light)]" />
                <span>Problem &amp; Objective</span>
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {project.purpose}
              </p>
            </div>
          )}
        </div>

        {/* Verified Features */}
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[var(--primary-light)]" />
            <span>Verified Functionality &amp; Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.verifiedFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture & Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Tech Stack Table */}
          <div className="lg:col-span-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[var(--primary-light)]" />
              <span>Technology Stack</span>
            </h2>
            <div className="divide-y divide-[var(--border-subtle)]">
              {Object.entries(project.techStack).map(([layer, tech]) => (
                <div
                  key={layer}
                  className="py-2.5 flex items-center justify-between text-xs"
                >
                  <span className="text-[var(--text-muted)] font-medium">
                    {layer}
                  </span>
                  <span className="text-[var(--text-primary)] font-semibold text-right">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Details */}
          <div className="lg:col-span-7 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[var(--primary-light)]" />
              <span>Implementation &amp; Architecture Details</span>
            </h2>
            <ul className="space-y-3">
              {project.implementationDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-2 shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Project Navigation Footer (Prev / Next) */}
        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Previous: {prevProject.name}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors group"
            >
              <span>Next: {nextProject.name}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
