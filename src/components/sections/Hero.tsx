import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative bg-brand-blue text-white overflow-hidden min-h-[420px]">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/85 via-brand-blue-dark/70 to-brand-blue-dark/40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 min-h-[420px] flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="w-12 h-1 bg-brand-gold mb-6 rounded-full" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          {(ctaText || secondaryCtaText) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {ctaText && ctaHref && (
                <Button variant="secondary" size="lg" href={ctaHref}>
                  {ctaText}
                </Button>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Button
                  variant="outline"
                  size="lg"
                  href={secondaryCtaHref}
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
