import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ReloKey Cyprus. Book a free consultation, chat on WhatsApp, or send us a message about your Cyprus property and relocation needs.",
};

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: BRAND.phone,
    href: `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hello! I'm interested in your Cyprus services.")}`,
    color: "bg-[#25D366]/10 text-[#25D366]",
    cta: "Chat Now",
  },
  {
    icon: Phone,
    title: "Phone",
    detail: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, "")}`,
    color: "bg-brand-blue/10 text-brand-blue",
    cta: "Call Us",
  },
  {
    icon: Mail,
    title: "Email",
    detail: BRAND.email,
    href: `mailto:${BRAND.email}`,
    color: "bg-brand-gold/10 text-brand-gold-dark",
    cta: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        subtitle="Ready to start your Cyprus journey? Book a free consultation or reach out through any channel below."
        backgroundImage={IMAGES.heroContact}
      />

      {/* Contact Methods */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3 mb-16">
            {contactMethods.map((method) => (
              <a key={method.title} href={method.href} target="_blank" rel="noopener noreferrer">
                <Card className="text-center">
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${method.color} mb-4`}
                  >
                    <method.icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-brand-text">
                    {method.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-text-light">
                    {method.detail}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-brand-blue">
                    {method.cta} &rarr;
                  </span>
                </Card>
              </a>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-brand-text mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Calendly + Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-text mb-4">
                  Book a Consultation
                </h2>
                <div className="rounded-xl border border-gray-100 bg-brand-gray p-8 text-center">
                  <Calendar size={40} className="mx-auto text-brand-blue mb-4" />
                  <p className="text-brand-text-light mb-4">
                    Schedule a free 30-minute consultation to discuss your needs.
                  </p>
                  <Button variant="primary" href={BRAND.calendlyUrl} external>
                    Book a Time
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-brand-text mb-4">
                  Our Location
                </h3>
                <div className="flex items-start gap-2 text-brand-text-light">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue" />
                  <span>{BRAND.address}</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
