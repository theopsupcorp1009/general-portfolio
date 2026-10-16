import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 border border-[var(--primary)]/30 flex items-center justify-center mx-auto text-[var(--primary-light)]">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary-light)]">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1">
            Page Not Found
          </h1>
          <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed">
            The route you attempted to visit does not exist or has been moved. You can return to the homepage or explore the project showcase.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-primary-gradient hover:opacity-95 transition-opacity"
          >
            <Home className="w-4 h-4" />
            <span>Back to Homepage</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--border)] transition-colors"
          >
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
