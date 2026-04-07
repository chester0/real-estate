import { Button } from "@/components/ui/Button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
}

export function CTABanner({ title, subtitle, ctaText, ctaHref }: CTABannerProps) {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-brand-gold)/15,_transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg text-white/75">{subtitle}</p>
        )}
        <div className="mt-8">
          <Button variant="secondary" size="lg" href={ctaHref}>
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
