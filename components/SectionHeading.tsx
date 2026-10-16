interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-6 sm:mb-8 ${isCenter ? "text-center" : "text-left"} ${className}`}>
      {badge && (
        <span className="inline-block px-2.5 py-0.5 mb-2 rounded-full text-xs font-semibold bg-[var(--primary)]/15 text-[var(--primary-light)] border border-[var(--primary)]/30">
          {badge}
        </span>
      )}
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {/* Short blue accent line below heading, matching reference screenshot */}
      <div
        className={`w-10 h-1 bg-[var(--primary)] rounded-full mt-2 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-3 text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
