"use client";

import { useState } from "react";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#science", label: "Science" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-flux-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <svg viewBox="0 0 40 24" className="h-6 w-10 text-flux-blue" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M2,16 C8,4 14,4 20,16 C26,28 32,4 38,12" />
          </svg>
          <span className="text-lg font-bold text-white">Flux</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-flux-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-flux-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-flux-blue-light"
          >
            Download
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center text-flux-muted md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-flux-bg/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-flux-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-flux-blue px-4 py-3 text-center text-sm font-medium text-white"
            >
              Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
