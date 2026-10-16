import type { Metadata } from "next";
import { MapPin, Mail, Phone, Globe, Building2, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";
import { personalInfo } from "@/data/portfolioData";
import { LinkedinIcon, GithubIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with M R Khan Dipu for software engineering opportunities, AI/ML research collaborations, or technical consultations.",
};

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Let&apos;s Connect
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Contact
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            I am always open to new software engineering opportunities, research collaborations, and interesting project discussions.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Two-Column Grid: Contact Information & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Verified Contact Information & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-7 space-y-6 shadow-sm">
              <h2 className="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[var(--primary-light)]" />
                <span>Direct Contact Details</span>
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium">Location</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-[var(--text-muted)] font-medium">Email Address</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-[var(--primary-light)] hover:underline block truncate mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--text-muted)] font-medium">Phone Number</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-[var(--primary-light)] hover:underline mt-0.5 block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Verified Online Profiles */}
              <div className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Verified Online Profiles
                </h3>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[var(--primary-light)]" />
                  <span className="flex-1">LinkedIn Profile</span>
                  <span className="text-xs text-[var(--text-muted)]">mrkhandipu</span>
                </a>

                <a
                  href={personalInfo.socials.githubPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[var(--primary-light)]" />
                  <span className="flex-1">Personal GitHub</span>
                  <span className="text-xs text-[var(--text-muted)]">mrkhan393</span>
                </a>

                <a
                  href={personalInfo.socials.portfolioGoogleSites}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Globe className="w-4 h-4 text-[var(--primary-light)]" />
                  <span className="flex-1">External Portfolio</span>
                  <span className="text-xs text-[var(--text-muted)]">Google Sites</span>
                </a>

                <a
                  href={personalInfo.socials.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[var(--surface-elevated)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)] text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <Building2 className="w-4 h-4 text-[var(--primary-light)]" />
                  <span className="flex-1">Organization GitHub</span>
                  <span className="text-xs text-[var(--text-muted)]">theopsupcorp1009</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
