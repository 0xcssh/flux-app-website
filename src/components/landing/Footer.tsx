import Link from "next/link";
import { CONTACT_EMAIL, LEGAL_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-flux-border py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 40 24" className="h-5 w-8 text-flux-blue" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M2,16 C8,4 14,4 20,16 C26,28 32,4 38,12" />
            </svg>
            <span className="text-sm font-bold text-white">Flux</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-flux-muted">
            <a href="/#features" className="hover:text-white transition-colors">Features</a>
            <a href="/#science" className="hover:text-white transition-colors">Science</a>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-flux-muted">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://meara.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Meara
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
