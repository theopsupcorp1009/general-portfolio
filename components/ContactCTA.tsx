import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[var(--surface)] via-[var(--surface-elevated)] to-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl shadow-[var(--primary)]/5">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Let&apos;s Work Together
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, and interesting projects. Feel free to reach out!
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-primary-gradient hover:opacity-95 shadow-lg shadow-[var(--primary)]/25 active:scale-98 transition-all shrink-0"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
