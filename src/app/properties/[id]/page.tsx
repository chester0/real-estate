import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  Car,
  Zap,
  Check,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { getAllProperties, getPropertyById } from "@/lib/properties";
import { BRAND } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProperties().map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property Not Found" };

  return {
    title: property.title,
    description: `${property.title} in ${property.location}. ${property.bedrooms} bedrooms, ${property.bathrooms} bathrooms, ${property.area}m². Price: €${property.price.toLocaleString()}.`,
    openGraph: {
      title: property.title,
      description: `${property.type} in ${property.location} — €${property.price.toLocaleString()}`,
      images: [{ url: property.image, width: 800, height: 600, alt: property.title }],
    },
  };
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-CY", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();

  const otherProperties = getAllProperties()
    .filter((p) => p.id !== id)
    .slice(0, 3);

  const whatsappMsg = encodeURIComponent(
    `Hello! I'm interested in: ${property.title} (${property.location}) — ${formatPrice(property.price)}`
  );

  return (
    <>
      {/* Back + Breadcrumb */}
      <div className="bg-brand-gray border-b border-gray-100">
        <Container className="py-4">
          <Link
            href="/properties"
            className="inline-flex items-center gap-1 text-sm text-brand-text-light hover:text-brand-blue transition-colors"
          >
            <ArrowLeft size={14} /> Back to Properties
          </Link>
        </Container>
      </div>

      {/* Hero Image */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <Container className="pb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {property.featured && (
                <span className="bg-brand-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
              <span className="bg-white/90 text-brand-text text-xs font-medium px-3 py-1 rounded-full">
                {property.type}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              {property.title}
            </h1>
            <div className="flex items-center gap-1 mt-2 text-white/80">
              <MapPin size={16} />
              <span className="text-sm">{property.location}</span>
            </div>
          </Container>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Left — Details */}
            <div className="lg:col-span-2 space-y-10">
              {/* Price + Key Stats */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-4xl font-heading font-bold text-brand-blue">
                  {formatPrice(property.price)}
                </p>
                <div className="flex items-center gap-6 text-brand-text-light">
                  <span className="flex items-center gap-1.5">
                    <Bed size={18} className="text-brand-blue" /> {property.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath size={18} className="text-brand-blue" /> {property.bathrooms} Baths
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize size={18} className="text-brand-blue" /> {property.area} m&sup2;
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-heading font-bold text-brand-text mb-4">
                  About This Property
                </h2>
                <p className="text-brand-text-light leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-xl font-heading font-bold text-brand-text mb-4">
                  Features &amp; Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check size={16} className="text-brand-blue shrink-0" />
                      <span className="text-sm text-brand-text-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details Grid */}
              <div>
                <h2 className="text-xl font-heading font-bold text-brand-text mb-4">
                  Property Details
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Bed, label: "Bedrooms", value: String(property.bedrooms) },
                    { icon: Bath, label: "Bathrooms", value: String(property.bathrooms) },
                    { icon: Maximize, label: "Area", value: `${property.area} m²` },
                    { icon: Calendar, label: "Year Built", value: String(property.yearBuilt) },
                    { icon: Car, label: "Parking", value: property.parking ? "Yes" : "No" },
                    { icon: Zap, label: "Energy Rating", value: property.energyRating },
                  ].map((item) => (
                    <div key={item.label} className="bg-brand-gray rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <item.icon size={14} className="text-brand-blue" />
                        <span className="text-xs text-brand-text-light">{item.label}</span>
                      </div>
                      <p className="font-heading font-bold text-brand-text">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby */}
              <div>
                <h2 className="text-xl font-heading font-bold text-brand-text mb-4">
                  Nearby
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.nearbyAmenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <MapPin size={14} className="text-brand-gold shrink-0" />
                      <span className="text-sm text-brand-text-light">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card hover={false} className="bg-brand-gray border-0">
                  <h3 className="font-heading font-bold text-brand-text mb-4">
                    Interested in this property?
                  </h3>
                  <p className="text-sm text-brand-text-light mb-6">
                    Contact us for a viewing, more details, or a video tour.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${BRAND.whatsapp}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-colors text-sm"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue-light transition-colors text-sm"
                    >
                      <Phone size={18} /> Call Us
                    </a>
                    <a
                      href={`mailto:${BRAND.email}?subject=${encodeURIComponent(`Inquiry: ${property.title}`)}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-brand-blue text-brand-blue font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors text-sm"
                    >
                      <Mail size={18} /> Email
                    </a>
                  </div>
                </Card>

                <Card hover={false}>
                  <h3 className="font-heading font-bold text-brand-text mb-2 text-sm">
                    Schedule a Viewing
                  </h3>
                  <p className="text-xs text-brand-text-light mb-4">
                    Book a free in-person or video viewing at your convenience.
                  </p>
                  <Button href="/contact" size="sm" className="w-full">
                    Book a Time
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Similar Properties */}
      <section className="py-12 bg-brand-gray">
        <Container>
          <h2 className="text-2xl font-heading font-bold text-brand-text mb-8">
            Similar Properties
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherProperties.map((p) => (
              <Link key={p.id} href={`/properties/${p.id}`}>
                <Card className="overflow-hidden p-0">
                  <div className="relative h-48">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {p.featured && (
                      <span className="absolute top-3 left-3 bg-brand-gold text-white text-xs font-semibold px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xl font-heading font-bold text-brand-blue">
                      {formatPrice(p.price)}
                    </p>
                    <h3 className="mt-1 font-heading font-semibold text-brand-text text-sm">
                      {p.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1 text-xs text-brand-text-light">
                      <MapPin size={12} /> {p.location}
                    </div>
                    <div className="mt-3 flex items-center gap-4 text-xs text-brand-text-light">
                      <span className="flex items-center gap-1"><Bed size={12} /> {p.bedrooms}</span>
                      <span className="flex items-center gap-1"><Bath size={12} /> {p.bathrooms}</span>
                      <span className="flex items-center gap-1"><Maximize size={12} /> {p.area}m²</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Looking for Something Different?"
        subtitle="We have access to off-market properties. Tell us what you need."
        ctaText="Contact Us"
        ctaHref="/contact"
      />
    </>
  );
}
