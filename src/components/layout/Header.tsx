"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, KeyRound } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue">
              <KeyRound size={18} className="text-brand-gold" />
            </div>
            <span className="text-xl font-bold font-heading text-brand-blue">
              {BRAND.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-blue font-semibold border-b-2 border-brand-gold pb-0.5"
                    : "text-brand-text-light hover:text-brand-blue"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Contact Us
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-brand-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-brand-blue bg-brand-blue/5 font-semibold"
                    : "text-brand-text-light hover:text-brand-blue hover:bg-brand-gray"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" size="sm" className="w-full">
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
