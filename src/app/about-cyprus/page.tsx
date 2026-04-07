import type { Metadata } from "next";
import { MapPin, FileDown } from "lucide-react";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { LIMASSOL_AREAS, CYPRUS_CITIES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const areaImageKeys: Record<string, string> = {
  Germasogeia: IMAGES.areas.germasogeia,
  "Agios Tychonas": IMAGES.areas.agiosTychonas,
  Mouttagiaka: IMAGES.areas.mouttagiaka,
  "Mesa Geitonia": IMAGES.areas.mesaGeitonia,
  "City Center": IMAGES.areas.cityCenter,
};

export const metadata: Metadata = {
  title: "About Cyprus",
  description:
    "Discover life in Cyprus — Limassol neighborhoods, other major cities, cost of living, and lifestyle guides for expats, families, and investors.",
};

const costOfLiving = [
  { item: "1-Bed Apartment (City Center)", cost: "€700 – €1,200/mo" },
  { item: "3-Bed Apartment (City Center)", cost: "€1,200 – €2,500/mo" },
  { item: "Groceries (Monthly, couple)", cost: "€400 – €600" },
  { item: "Utilities (Electricity, Water, Internet)", cost: "€120 – €200/mo" },
  { item: "Dining Out (Mid-range, 2 people)", cost: "€40 – €70" },
  { item: "International School (Annual)", cost: "€5,000 – €12,000" },
];

export default function AboutCyprusPage() {
  return (
    <>
      <Hero
        title="Discover Cyprus"
        subtitle="From the vibrant coast of Limassol to the historic capital Nicosia — find the perfect place to live, invest, or grow your business."
        ctaText="Contact Us"
        ctaHref="/contact"
        backgroundImage={IMAGES.heroAbout}
      />

      {/* Limassol Areas */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              Limassol Neighborhoods
            </h2>
            <p className="mt-4 text-lg text-brand-text-light max-w-2xl mx-auto">
              Limassol is Cyprus&apos;s business and lifestyle capital. Each area offers a distinct character.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIMASSOL_AREAS.map((area) => (
              <Card key={area.name} className="overflow-hidden p-0">
                <div className="relative h-48">
                  <Image
                    src={areaImageKeys[area.name] || IMAGES.areas.germasogeia}
                    alt={area.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-brand-blue" />
                    <h3 className="text-lg font-heading font-bold text-brand-text">
                      {area.name}
                    </h3>
                  </div>
                  <p className="text-brand-text-light text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                      {area.lifestyle}
                    </span>
                    <span className="text-xs text-brand-text-light">
                      {area.priceRange}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Other Cities */}
      <section className="py-20 bg-brand-gray">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              Other Major Cities
            </h2>
            <p className="mt-4 text-lg text-brand-text-light max-w-2xl mx-auto">
              Cyprus is small but diverse. Each city offers unique opportunities for living and investment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {CYPRUS_CITIES.map((city) => (
              <Card key={city.name}>
                <h3 className="text-xl font-heading font-bold text-brand-text">
                  {city.name}
                </h3>
                <p className="mt-2 text-brand-text-light text-sm leading-relaxed">
                  {city.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold text-brand-gold-dark">
                    {city.highlight}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Cost of Living */}
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              Cost of Living
            </h2>
            <p className="mt-4 text-lg text-brand-text-light max-w-2xl mx-auto">
              Limassol offers a high quality of life at a fraction of Western European prices.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {costOfLiving.map((row, i) => (
                <div
                  key={row.item}
                  className={`flex items-center justify-between px-6 py-4 ${i !== costOfLiving.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <span className="text-sm text-brand-text">{row.item}</span>
                  <span className="text-sm font-semibold text-brand-blue">
                    {row.cost}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-brand-text-light text-center">
              Prices are approximate and based on Limassol averages (2025).
            </p>
          </div>
        </Container>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20 bg-brand-gray">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-brand-text">
              Free Guides &amp; Reports
            </h2>
            <p className="mt-4 text-lg text-brand-text-light max-w-2xl mx-auto">
              Download our free PDF guides to help you plan your move or investment.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Living in Limassol 2025",
                desc: "Complete guide to areas, schools, cost of living, and lifestyle.",
                file: "/downloads/living-in-limassol-2025.pdf",
              },
              {
                title: "Cyprus Investment Report 2025",
                desc: "City-by-city ROI analysis, market forecasts, and tax guide.",
                file: "/downloads/cyprus-investment-report-2025.pdf",
              },
              {
                title: "How to Buy Property as a Foreigner",
                desc: "Step-by-step process, documents, fees, and common mistakes.",
                file: "/downloads/how-to-buy-property-cyprus.pdf",
              },
            ].map((pdf) => (
              <Card key={pdf.title}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue mb-4">
                  <FileDown size={20} />
                </div>
                <h3 className="font-heading font-bold text-brand-text">
                  {pdf.title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-light">
                  {pdf.desc}
                </p>
                <a
                  href={pdf.file}
                  download
                  className="mt-4 inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:underline"
                >
                  Download PDF
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need Help Finding the Right Area?"
        subtitle="We'll match you with the perfect neighborhood based on your lifestyle and budget."
        ctaText="Book a Free Consultation"
        ctaHref="/contact"
      />
    </>
  );
}
