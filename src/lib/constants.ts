export const BRAND = {
  name: "ReloKey Cyprus",
  tagline: "Your key to Cyprus living",
  slogan: "More than property — your Cyprus relocation partner.",
  email: "info@relokeycyprus.com",
  phone: "+357 99 123 456",
  whatsapp: "35799123456",
  calendlyUrl: "https://calendly.com/relokeycyprus",
  address: "Limassol, Cyprus",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Cyprus", href: "/about-cyprus" },
  { label: "Services", href: "/services" },
  { label: "Properties", href: "/properties" },
  { label: "Blog", href: "/blog" },
] as const;

export const SERVICES = [
  {
    id: "luxury",
    title: "Luxury & Coastal Living",
    description:
      "Premium apartments, penthouses, and seaside villas in Limassol and across Cyprus. Expat relocation and family settlement support.",
    href: "/services#luxury",
    icon: "Building2" as const,
  },
  {
    id: "investment",
    title: "Cyprus Investment Properties",
    description:
      "Island-wide investment opportunities with ROI analysis, yield forecasts, and off-market deals in every major city.",
    href: "/services#investment",
    icon: "TrendingUp" as const,
  },
  {
    id: "corporate",
    title: "Corporate & Professional Relocation",
    description:
      "End-to-end relocation support for companies moving teams to Cyprus — housing, schools, registrations, and settling-in.",
    href: "/services#corporate",
    icon: "Briefcase" as const,
  },
] as const;

export const LIMASSOL_AREAS = [
  {
    name: "Germasogeia",
    description:
      "The heart of tourist Limassol. Close to beaches, restaurants, and nightlife. Popular with expats and short-term renters.",
    lifestyle: "Expat & Social",
    priceRange: "€€€",
  },
  {
    name: "Agios Tychonas",
    description:
      "Elevated hillside living with panoramic sea views. Quieter, family-friendly, with luxury developments.",
    lifestyle: "Family & Luxury",
    priceRange: "€€€€",
  },
  {
    name: "Mouttagiaka",
    description:
      "Peaceful coastal village between Limassol and Amathus. Great for families wanting space near the sea.",
    lifestyle: "Family & Quiet",
    priceRange: "€€€",
  },
  {
    name: "Mesa Geitonia",
    description:
      "Central residential area with excellent schools and amenities. Affordable compared to coastal areas.",
    lifestyle: "Local & Practical",
    priceRange: "€€",
  },
  {
    name: "City Center",
    description:
      "Vibrant urban core with historic old town, marina, and business district. Walking distance to everything.",
    lifestyle: "Urban & Business",
    priceRange: "€€–€€€",
  },
] as const;

export const CYPRUS_CITIES = [
  {
    name: "Nicosia",
    description:
      "The capital city with the highest rental yields in Cyprus. Growing tech scene and affordable prices.",
    highlight: "Highest rental yields",
  },
  {
    name: "Paphos",
    description:
      "UNESCO heritage, retirement paradise, and booming holiday rental market. Popular with British expats.",
    highlight: "Holiday rental hotspot",
  },
  {
    name: "Larnaca",
    description:
      "Airport city with rapidly developing coastline. Emerging investment opportunities at lower entry prices.",
    highlight: "Emerging market",
  },
  {
    name: "Ayia Napa",
    description:
      "Premier tourist destination with strong short-term rental ROI. Vacation homes and Airbnb investment.",
    highlight: "Short-term rental ROI",
  },
] as const;

export const WHY_CYPRUS_STATS = [
  { value: "EU Member", label: "Full European Union membership since 2004" },
  { value: "12.5%", label: "Corporate tax rate — one of the lowest in Europe" },
  { value: "340+", label: "Days of sunshine per year" },
  { value: "60+", label: "Double tax treaties worldwide" },
  { value: "Top 5", label: "Safest countries in Europe" },
  { value: "3 hrs", label: "Flight time to major European capitals" },
] as const;

export const PLACEHOLDER_TESTIMONIALS = [
  {
    name: "Alexander V.",
    role: "Tech Company CEO, relocated from London",
    quote:
      "ReloKey made our team's relocation to Limassol seamless. From housing to school placements, everything was handled professionally.",
  },
  {
    name: "Marina K.",
    role: "Property Investor, Moscow",
    quote:
      "The investment analysis and market reports helped me make confident decisions. I now own three properties in Cyprus.",
  },
  {
    name: "David & Sarah T.",
    role: "Family, relocated from Tel Aviv",
    quote:
      "Moving abroad with kids is stressful, but ReloKey took care of everything — schools, utilities, even our dog's paperwork.",
  },
] as const;

import type { Property } from "@/types";

export const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Modern Seafront Apartment",
    price: 285000,
    location: "Germasogeia, Limassol",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    type: "Apartment",
    featured: true,
  },
  {
    id: "2",
    title: "Luxury Penthouse with Pool",
    price: 750000,
    location: "Agios Tychonas, Limassol",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: "Penthouse",
    featured: true,
  },
  {
    id: "3",
    title: "Family Villa with Garden",
    price: 420000,
    location: "Mouttagiaka, Limassol",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    type: "Villa",
    featured: false,
  },
  {
    id: "4",
    title: "Investment Studio Near Marina",
    price: 145000,
    location: "City Center, Limassol",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: "Apartment",
    featured: false,
  },
  {
    id: "5",
    title: "New Build Apartment Complex",
    price: 195000,
    location: "Mesa Geitonia, Limassol",
    bedrooms: 2,
    bathrooms: 1,
    area: 75,
    type: "Apartment",
    featured: false,
  },
  {
    id: "6",
    title: "Holiday Home with Sea View",
    price: 320000,
    location: "Paphos",
    bedrooms: 3,
    bathrooms: 2,
    area: 130,
    type: "Villa",
    featured: true,
  },
];
