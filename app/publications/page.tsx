import type { Metadata } from "next";
import { FileText, Calendar, Building2 } from "lucide-react";
import { publicationsData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Publications & Conferences",
  description:
    "Peer-reviewed conference publications in deep learning, lightweight 1D CNNs for epileptic seizure detection, and gastrointestinal disorder diagnosis by M R Khan Dipu.",
};

export default function PublicationsPage() {
  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Academic Dissemination
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Publications &amp; Conferences
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Scholarly manuscripts and conference presentations detailing neural network architectures for biomedical signal diagnostics and disease prediction.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-16">
          {publicationsData.map((pub, idx) => (
            <div
              key={pub.id}
              className="rounded-2xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] hover:border-[var(--primary)]/50 p-6 sm:p-8 transition-all duration-200 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] shrink-0 mt-1">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[var(--surface-elevated)] text-[var(--text-muted)] border border-[var(--border)] mb-2">
                      Conference Paper #{idx + 1}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-snug">
                      {pub.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--primary-light)] shrink-0 self-start sm:self-auto bg-[var(--surface-elevated)] px-3 py-1 rounded-full border border-[var(--border)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{pub.dateOrYear}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                <Building2 className="w-4 h-4 text-[var(--primary-light)] shrink-0 mt-0.5" />
                <span className="font-medium">{pub.conference}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Integrity Note */}
        <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] text-xs text-[var(--text-muted)] leading-relaxed">
          <span className="font-semibold text-[var(--text-secondary)]">Bibliographic Accuracy Note: </span>
          All listed conference titles and venues reflect verified entries from the official academic curriculum vitae. DOI links, page numbers, and proceedings citations will be updated upon final conference publication.
        </div>
      </div>
    </div>
  );
}
