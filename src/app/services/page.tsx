import type { Metadata } from "next";
import {
  Building2,
  TrendingUp,
  Briefcase,
  Check,
  Home,
  BarChart3,
  Users,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { IMAGES } from "@/lib/images";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our specialized services: luxury coastal living, Cyprus-wide investment properties, and corporate relocation packages with transparent pricing.",
};

const services = [
  {
    id: "luxury",
    icon: Building2,
    title: "Luxury & Coastal Living",
    description:
      "Find your dream home on the Cyprus coast. We specialize in premium apartments, penthouses, and seaside villas in Limassol and across the island.",
    includes: [
      "Personalized property search",
      "Area and neighborhood guidance",
      "Viewing scheduling and accompaniment",
      "Rental negotiation support",
      "Utility and internet setup help",
      "School recommendations for families",
      "30-day settling-in support",
    ],
    pricing: [
      {
        tier: "Basic",
        price: "\u20AC350",
        desc: "Property search and area guidance",
      },
      {
        tier: "Premium",
        price: "\u20AC650",
        desc: "Full relocation support with settling-in",
      },
      {
        tier: "Full Concierge",
        price: "\u20AC950",
        desc: "VIP service with 30-day dedicated support",
      },
    ],
    note: "Free when you rent or buy through us.",
  },
  {
    id: "investment",
    icon: TrendingUp,
    title: "Cyprus Investment Properties",
    description:
      "Island-wide investment opportunities backed by data. We provide ROI analysis, yield forecasts, off-market deals, and full transaction management.",
    includes: [
      "ROI and yield analysis",
      "City-by-city market comparison",
      "Off-market opportunity sourcing",
      "Lawyer and tax advisor introductions",
      "Video property viewings",
      "Full investment report",
      "Property management coordination",
    ],
    pricing: [
      {
        tier: "Consultation",
        price: "Free",
        desc: "Initial investment strategy call",
      },
      {
        tier: "Investment Report",
        price: "\u20AC250 \u2013 \u20AC900",
        desc: "Basic to full portfolio analysis",
      },
      {
        tier: "Commission",
        price: "2\u20133%",
        desc: "Standard buyer/seller commission on purchase",
      },
    ],
    note: "Most investors choose the free consultation + commission model.",
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate & Professional Relocation",
    description:
      "End-to-end relocation for companies moving teams to Cyprus. One point of contact for housing, schools, registrations, and employee onboarding.",
    includes: [
      "Housing search for employees",
      "Corporate apartment sourcing",
      "Orientation city tours",
      "School assistance for families",
      "Migration, tax, and social insurance help",
      "Utility and banking setup",
      "Dedicated HR support and monthly reporting",
      "VIP executive relocation",
      "30\u201390 day settling-in support",
    ],
    pricing: [
      {
        tier: "Per Employee",
        price: "\u20AC300 \u2013 \u20AC1,200",
        desc: "Basic to executive VIP per person",
      },
      {
        tier: "Monthly Retainer",
        price: "\u20AC1,200 \u2013 \u20AC4,000",
        desc: "For companies relocating 5\u2013100 employees",
      },
      {
        tier: "Free + Commission",
        price: "\u20AC0",
        desc: "No fee if employees rent or buy through us",
      },
    ],
    note: "Popular with tech, fintech, and shipping companies.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Three specialized offerings designed to cover every aspect of your Cyprus property and relocation needs."
        ctaText="Contact Us"
        ctaHref="/contact"
        backgroundImage={IMAGES.heroServices}
      />

      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${idx % 2 === 1 ? "bg-brand-gray" : ""}`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                    <service.icon size={24} />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-brand-text">
                    {service.title}
                  </h2>
                </div>
                <p className="text-brand-text-light leading-relaxed">
                  {service.description}
                </p>
                <h3 className="mt-8 text-lg font-heading font-semibold text-brand-text">
                  What&apos;s Included
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        size={18}
                        className="mt-0.5 text-brand-blue shrink-0"
                      />
                      <span className="text-sm text-brand-text-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-brand-text mb-4">
                  Pricing
                </h3>
                <div className="space-y-4">
                  {service.pricing.map((p, pIdx) => (
                    <Card key={p.tier} hover={false} className={pIdx === 1 ? "border-2 border-brand-blue bg-brand-blue/5" : ""}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-heading font-semibold text-brand-text">
                              {p.tier}
                            </p>
                            {pIdx === 1 && (
                              <span className="text-xs bg-brand-blue text-white px-2 py-0.5 rounded-full font-semibold">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-brand-text-light">
                            {p.desc}
                          </p>
                        </div>
                        <span className="text-xl font-heading font-bold text-brand-blue">
                          {p.price}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
                {service.note && (
                  <p className="mt-4 text-sm text-brand-gold-dark font-medium bg-brand-gold/10 rounded-lg px-4 py-3">
                    {service.note}
                  </p>
                )}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CTABanner
        title="Not Sure Which Service Fits?"
        subtitle="Book a free consultation and we'll recommend the right package for your situation."
        ctaText="Book a Free Call"
        ctaHref="/contact"
      />
    </>
  );
}
