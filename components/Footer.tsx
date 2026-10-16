import Link from "next/link";
import { Globe, Building2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";
import { personalInfo } from "@/data/portfolioData";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--background-deep)] border-t border-[var(--border)] py-8 mt-auto transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-6 h-6 rounded overflow-hidden">
              <Image
                src="/images/mr-khan-dipu.jpg"
                alt="M R Khan Dipu"
                fill
                sizes="24px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-bold text-sm tracking-wider text-[var(--text-primary)]">
              M R KHAN DIPU
            </span>
          </Link>
          <span className="hidden sm:inline text-[var(--border)]">•</span>
          <span className="text-xs text-[var(--text-muted)] mt-1">
            © {currentYear}. All rights reserved.
          </span>
        </div>

        {/* Verified External Profile Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.githubPersonal}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
            title="Personal GitHub (mrkhan393)"
            aria-label="Personal GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.portfolioGoogleSites}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
            title="External Portfolio Profile (Google Sites)"
            aria-label="External Portfolio Link"
          >
            <Globe className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.socials.githubOrg}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--primary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--primary-light)] transition-colors"
            title="Organization GitHub (theopsupcorp1009)"
            aria-label="Organization GitHub Profile"
          >
            <Building2 className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
