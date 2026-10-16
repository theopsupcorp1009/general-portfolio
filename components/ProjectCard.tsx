import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { ProjectItem } from "@/data/portfolioData";

interface ProjectCardProps {
  project: ProjectItem;
  featuredOnly?: boolean;
}

const previewUrls: Record<string, string> = {
  "bazar-dor": "https://bazar-dor-puce.vercel.app/",
  "bangla-news-24": "https://bangla-news-24-woad.vercel.app/",
  fitlog: "https://fit-log-pink-seven.vercel.app/",
  "alzheimer-dementia-classifier":
    "https://alzheimer-dimentia-classifier-app-dbbudbgwneodzvmhusvl8o.streamlit.app/",
  "quantum-circuit-explorer":
    "https://quantum-circuit-explorer-hhjif38rxyvkvsm7vljm4z.streamlit.app/",
};

const previewImages: Record<string, string> = {
  "alzheimer-dementia-classifier": "/images/alzheimer.png",
  "quantum-circuit-explorer": "/images/quantum.png",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const liveUrl = previewUrls[project.slug] ?? project.liveUrl;
  const screenshot = previewImages[project.slug];

  return (
    <div className="group flex flex-col rounded-xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/60 transition-all duration-200 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[var(--primary)]/5">
      {/* Live Website Preview / Screenshot */}
      <div className="relative w-full aspect-[16/10] bg-[var(--surface-elevated)] border-b border-[var(--border)] overflow-hidden">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live ${project.name} application`}
          className="absolute inset-0 block"
        >
          {screenshot ? (
            <>
              {/* Streamlit Screenshot Preview */}
              <Image
                src={screenshot}
                alt={`${project.name} application screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </>
          ) : (
            <>
              {/* Direct Website Preview for Next.js Projects */}
              <iframe
                src={liveUrl}
                title={`${project.name} live website preview`}
                loading="lazy"
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-[200%] w-[200%] origin-top-left scale-50 border-0 bg-white"
              />
            </>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
            <span className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 group-hover:scale-105">
              <span>Visit Live Site</span>
              <ExternalLink className="h-4 w-4" />
            </span>
          </div>
        </a>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        {/* Title */}
        <Link
          href={`/projects/${project.slug}`}
          className="font-bold text-base sm:text-lg text-[var(--text-primary)] hover:text-[var(--primary-light)] transition-colors focus-visible:outline-none"
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            {project.name}
          </div>
       

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[11px] font-medium bg-[var(--surface-elevated)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}

          {project.tags.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] text-[var(--text-muted)]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
         </Link>

        {/* Links Footer */}
        <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3">
            {/* Live Site */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[var(--primary-light)] hover:text-white transition-colors"
              title={`Open live site for ${project.name}`}
            >
              <span>Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* GitHub */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                title={`View GitHub repository for ${project.name}`}
              >
                <span>GitHub</span>
                <GithubIcon className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Details Link */}
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors group/link"
          >
            <span>Details</span>
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
