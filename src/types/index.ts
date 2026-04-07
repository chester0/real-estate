export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "Apartment" | "Penthouse" | "Villa" | "Land" | "Office";
  featured: boolean;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest: InterestType;
  message: string;
}

export type InterestType =
  | "buying"
  | "renting"
  | "investing"
  | "relocating"
  | "corporate"
  | "property-management";
