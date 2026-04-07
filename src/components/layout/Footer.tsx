import Link from "next/link";
import { Mail, Phone, MapPin, KeyRound } from "lucide-react";
import { BRAND } from "@/lib/constants";

const footerLinks = {
  services: [
    { label: "Luxury Living", href: "/services#luxury" },
    { label: "Investment Properties", href: "/services#investment" },
    { label: "Corporate Relocation", href: "/services#corporate" },
    { label: "Property Management", href: "/services" },
  ],
  resources: [
    { label: "About Cyprus", href: "/about-cyprus" },
    { label: "Properties", href: "/properties" },
    { label: "Blog", href: "/blog" },
    { label: "Downloads", href: "/about-cyprus#downloads" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <KeyRound size={16} className="text-brand-gold" />
              </div>
              <span className="text-lg font-bold font-heading">{BRAND.name}</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {BRAND.slogan}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={16} className="shrink-0" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={16} className="shrink-0" />
                {BRAND.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
