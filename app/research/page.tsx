import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Activity, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Experience & Interests",
  description:
    "Independent biomedical AI/ML research profile of M R Khan Dipu at Group of Bio-Photomatix, focusing on EEG signal processing, brain data modeling, and healthcare machine learning.",
};

export default function ResearchPage() {
  const researchPillars = [
    {
      title: "Biomedical Signal Processing",
      desc: "Analyzing time-series physiological signals and EEG brain rhythms to extract discriminative features for neurological and psychological condition detection.",
    },
    {
      title: "Medical Data Modeling",
      desc: "Formulating neural network architectures and hyperparameter optimization pipelines tailored to biomedical and healthcare data constraints.",
    },
    {
      title: "Healthcare AI & Clinical Prototypes",
      desc: "Developing proof-of-concept predictive frameworks (such as 1D CNNs for seizure detection and MRI stage classifiers) for academic study.",
    },
  ];

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--primary-light)]">
            Scientific Investigation
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
            Research Experience &amp; Interests
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 max-w-2xl leading-relaxed">
            Independent biomedical research conducted remotely, bridging physiological signal analysis, deep convolutional architectures, and healthcare data modeling.
          </p>
          <div className="w-12 h-1 bg-[var(--primary)] rounded-full mt-3" />
        </div>

        {/* Primary Research Affiliation Card */}
        <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30 mb-2">
                Independent, Unpaid, Remote Research
              </span>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                ML/AI Researcher
              </h2>
              <div className="text-base font-semibold text-[var(--primary-light)] mt-1">
                Group of Bio-Photomatix
              </div>
            </div>

            <div className="text-xs sm:text-sm font-semibold text-[var(--text-muted)]">
              February 2024 – July 2026
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
            Independent scientific research conducted remotely alongside professional software engineering and administrative responsibilities. Engaged in biomedical signal extraction, medical data modeling, parameter tuning, and academic manuscript preparation for peer-reviewed conferences.
          </p>

          <div className="pt-6 border-t border-[var(--border-subtle)]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-4">
              Core Responsibilities &amp; Research Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {[
                "Brain signal processing and EEG waveform decomposition",
                "Biomedical image data preprocessing, resizing, and normalization",
                "Feature extraction for biomedical and physiological data analysis",
                "Medical data modeling using deep learning and convolutional neural networks",
                "Machine learning hyperparameter optimization and performance tuning",
                "Manuscript authoring and preparation for international IEEE conferences",
              ].map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--primary)] shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Domains */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
            <Brain className="w-5 h-5 text-[var(--primary-light)]" />
            <span>Core Research Domains</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchPillars.map((domain, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] mb-4">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Publications Quick Link */}
        <div className="rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
              Conference Publications &amp; Manuscripts
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
              Discover published and accepted research papers in epileptic seizure detection (ICoICI 2026) and gastrointestinal disorder prediction (ICCCNT 2025).
            </p>
          </div>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-primary-gradient shrink-0 hover:opacity-95 transition-opacity"
          >
            <span>View Publications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
