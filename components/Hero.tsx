import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Globe } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-20 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bio & Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <span className="text-sm sm:text-base font-medium text-[var(--text-muted)] mb-2">
              Hello, I&apos;m
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-3">
              M R KHAN{" "}
              <span className="text-accent-gradient">
                {personalInfo.nameHighlight}
              </span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-[var(--primary-light)] mb-4">
              {personalInfo.title}
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mb-6">
              {personalInfo.shortBio}
            </p>

            {/* Social Profile Links Row */}
            <div className="flex items-center gap-4 mb-8 text-sm">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
                title="Connect on LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.githubPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
                title="View GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href={personalInfo.socials.portfolioGoogleSites}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary-light)] transition-colors"
                title="View external portfolio"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">Google Site</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary-gradient shadow-md shadow-[var(--primary)]/20 hover:shadow-lg hover:shadow-[var(--primary)]/30 active:scale-98 transition-all"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={personalInfo.cvPdfPath}
                download="M-R-Khan-Dipu-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] active:scale-98 transition-all"
              >
                <Download className="w-4 h-4 text-[var(--primary-light)]" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] sm:max-w-[380px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-[var(--primary)]/5 p-2">
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[var(--surface-elevated)]">
                <Image
                  src={personalInfo.avatarUrl}
                  alt="M R Khan Dipu - Portrait"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 400px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-deep)]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
