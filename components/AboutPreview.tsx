import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone, Globe } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import { personalInfo, aboutContent } from "@/data/portfolioData";

export default function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 border-b border-[var(--border-subtle)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: About Narrative */}
          <div className="lg:col-span-7">
            <SectionHeading title="About Me" />

            <div className="space-y-4 text-sm text-justify sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>{aboutContent.introParagraph1}</p>
              <p>{aboutContent.introParagraph2}</p>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] transition-all group"
            >
              <span>Learn More About Me</span>
              <ArrowRight className="w-4 h-4 text-[var(--primary-light)] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Contact Details Panel (matching screenshot) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-6 space-y-4 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Location</div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                    {personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-[var(--text-muted)] font-medium">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--primary-light)] transition-colors block truncate mt-0.5"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">Phone</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--primary-light)] transition-colors mt-0.5 block"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-[var(--border-subtle)] space-y-2.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <a
                    href={personalInfo.socials.githubPersonal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
                  >
                    GitHub
                  </a>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <a
                    href={personalInfo.socials.portfolioGoogleSites}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
                  >
                    Google Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
