import { Building2, TrendingUp, Briefcase, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import {
  SERVICES,
  WHY_CYPRUS_STATS,
  PLACEHOLDER_TESTIMONIALS,
  BRAND,
} from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const iconMap = {
  Building2,
  TrendingUp,
  Briefcase,
} as const;

export default function HomePage() {
  return (
    <>
      <Hero
        title="Your Key to Cyprus Living"
        subtitle="Helping individuals, families, investors, and companies relocate or invest in Cyprus — with Limassol as the center of business and lifestyle."
        ctaText="Get Started"
        ctaHref="/contact"
        secondaryCtaText="Explore Services"
        secondaryCtaHref="/services"
        backgroundImage={IMAGES.heroHome}
      />

      {/* Services */}
      <section className="py-20 bg-brand-gray">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              How We Help You
            </h2>
            <p className="mt-4 text-lg text-brand-text-light max-w-2xl mx-auto">
              Three specialized services designed to make your Cyprus journey seamless.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card key={service.id} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-brand-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-brand-text-light leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Cyprus */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              Why Cyprus?
            </h2>
            <p className="mt-4 text-lg text-brand-text-light max-w-2xl mx-auto">
              A European island nation offering business opportunity, quality of life, and strategic location.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CYPRUS_STATS.map((stat) => (
              <div
                key={stat.value}
                className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-heading font-extrabold text-brand-blue">
                  {stat.value}
                </div>
                <div className="w-8 h-0.5 bg-brand-gold mx-auto my-3 rounded-full" />
                <p className="text-sm text-brand-text-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brand-gray">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {PLACEHOLDER_TESTIMONIALS.map((t) => (
              <Card key={t.name} hover={false} className="flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute -top-2 -left-1 text-4xl text-brand-gold/30 font-serif leading-none">&ldquo;</span>
                  <p className="text-brand-text-light leading-relaxed italic flex-1 pl-4">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-heading font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brand-text">
                      {t.name}
                    </p>
                    <p className="text-sm text-brand-text-light">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Start Your Cyprus Journey?"
        subtitle={`${BRAND.slogan} Let's talk.`}
        ctaText="Contact Us Today"
        ctaHref="/contact"
      />
    </>
  );
}
