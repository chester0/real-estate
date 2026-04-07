import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { getAllProperties } from "@/lib/properties";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse available properties in Cyprus — apartments, penthouses, villas, and investment opportunities across Limassol and the island.",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CY", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PropertiesPage() {
  return (
    <>
      <Hero
        title="Find Your Property"
        subtitle="Browse our curated selection of properties across Cyprus. From seaside apartments to investment portfolios."
        ctaText="Contact Us"
        ctaHref="/contact"
        backgroundImage={IMAGES.heroProperties}
      />

      {/* Filter Bar Placeholder */}
      <section className="py-6 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap gap-4 items-center">
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-brand-text-light bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20">
              <option value="">All Cities</option>
              <option>Limassol</option>
              <option>Paphos</option>
              <option>Nicosia</option>
              <option>Larnaca</option>
              <option>Ayia Napa</option>
            </select>
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-brand-text-light bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20">
              <option value="">All Types</option>
              <option>Apartment</option>
              <option>Penthouse</option>
              <option>Villa</option>
              <option>Land</option>
            </select>
            <select className="rounded-lg border border-gray-200 px-4 py-2 text-sm text-brand-text-light bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20">
              <option value="">Any Price</option>
              <option>Up to &euro;200,000</option>
              <option>&euro;200,000 &ndash; &euro;400,000</option>
              <option>&euro;400,000 &ndash; &euro;700,000</option>
              <option>&euro;700,000+</option>
            </select>
          </div>
        </Container>
      </section>

      {/* Property Grid */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {getAllProperties().map((property) => (
              <Link key={property.id} href={`/properties/${property.id}`}>
              <Card className="overflow-hidden p-0">
                <div className="relative h-48">
                  <Image
                    src={IMAGES.properties[parseInt(property.id) - 1] || IMAGES.properties[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {property.featured && (
                    <span className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-semibold px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-white/90 text-brand-text text-xs font-medium px-2 py-1 rounded">
                    {property.type}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-2xl font-heading font-bold text-brand-blue">
                    {formatPrice(property.price)}
                  </p>
                  <h3 className="mt-1 font-heading font-semibold text-brand-text">
                    {property.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1 text-sm text-brand-text-light">
                    <MapPin size={14} />
                    {property.location}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-brand-text-light">
                    <span className="flex items-center gap-1">
                      <Bed size={14} /> {property.bedrooms} bed
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} /> {property.bathrooms} bath
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={14} /> {property.area} m&sup2;
                    </span>
                  </div>
                </div>
              </Card>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-brand-text-light">
              Looking for something specific? We have access to off-market properties too.
            </p>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Can't Find What You're Looking For?"
        subtitle="Tell us your requirements and we'll source the perfect property for you."
        ctaText="Get in Touch"
        ctaHref="/contact"
      />
    </>
  );
}
