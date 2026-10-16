"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Download,
  Menu,
  X,
  ChevronDown,
  BookOpen,
  FileText,
  Award,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { personalInfo } from "@/data/portfolioData";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ];

  const moreLinks = [
    {
      name: "Research",
      href: "/research",
      icon: BookOpen,
      desc: "Biomedical & EEG ML Research",
    },
    {
      name: "Publications",
      href: "/publications",
      icon: FileText,
      desc: "Peer-reviewed Conferences",
    },
    {
      name: "Activities",
      href: "/activities",
      icon: Award,
      desc: "Bootcamps, Clubs & Awards",
    },
  ];

  const isMoreActive = moreLinks.some((item) => pathname === item.href);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={closeMenus}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg p-1 -m-1"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
            <Image
              src="/images/mr-khan-dipu.jpg"
              alt="M R Khan Dipu"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-sm tracking-wider text-[var(--text-primary)] group-hover:text-[var(--primary-light)] transition-colors">
            M R KHAN DIPU
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenus}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--primary)] rounded-full" />
                )}
              </Link>
            );
          })}

          {/* More Dropdown (Research, Publications, Activities) */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              onBlur={() => setTimeout(() => setMoreDropdownOpen(false), 200)}
              type="button"
              className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                isMoreActive
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]"
              }`}
              aria-expanded={moreDropdownOpen}
            >
              <span>More</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  moreDropdownOpen ? "rotate-180 text-[var(--primary)]" : ""
                }`}
              />
              {isMoreActive && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--primary)] rounded-full" />
              )}
            </button>

            {moreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border)] shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {moreLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenus}
                      className={`flex items-start gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-[var(--primary)]/15 text-[var(--primary-light)] font-semibold"
                          : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      <Icon className="w-4 h-4 mt-0.5 text-[var(--primary-light)] shrink-0" />
                      <div>
                        <div className="font-medium text-xs leading-none">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] mt-1">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Right Actions: Theme Toggle + Download CV */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />

          <a
            href={personalInfo.cvPdfPath}
            download="M-R-Khan-Dipu-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--primary)] transition-all shadow-sm active:scale-95"
          >
            <Download className="w-3.5 h-3.5 text-[var(--primary-light)]" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="cursor-pointer w-9 h-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--background-deep)] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenus}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--primary)]/15 text-[var(--primary-light)] font-semibold"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="my-2 border-t border-[var(--border-subtle)]" />

            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              More Sections
            </div>

            {moreLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenus}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--primary)]/15 text-[var(--primary-light)] font-semibold"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[var(--primary-light)]" />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="mt-4 pt-2 border-t border-[var(--border-subtle)]">
              <a
                href={personalInfo.cvPdfPath}
                download="M-R-Khan-Dipu-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--primary)]/50 hover:bg-[var(--surface-hover)] transition-colors"
              >
                <Download className="w-4 h-4 text-[var(--primary-light)]" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
