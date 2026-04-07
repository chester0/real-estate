import { SAMPLE_PROPERTIES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import type { Property } from "@/types";

export interface PropertyDetail extends Property {
  image: string;
  description: string;
  features: string[];
  nearbyAmenities: string[];
  yearBuilt: number;
  parking: boolean;
  energyRating: string;
}

const descriptions: Record<string, { description: string; features: string[]; amenities: string[]; year: number; parking: boolean; energy: string }> = {
  "1": {
    description: "A beautifully designed modern apartment just steps from the Germasogeia beach. Floor-to-ceiling windows flood the open-plan living space with natural light, while the private balcony offers stunning Mediterranean views. Recently renovated with high-end finishes throughout, including Italian marble countertops and German-engineered appliances. The building features 24-hour security, a communal rooftop pool, and underground parking. Walking distance to restaurants, cafes, and the tourist strip.",
    features: ["Open-plan living/dining", "Modern fitted kitchen", "Master bedroom with en-suite", "Private balcony with sea view", "Air conditioning throughout", "Underfloor heating", "Built-in wardrobes", "Smart home system"],
    amenities: ["Beach (200m)", "Supermarket (300m)", "Restaurants (100m)", "Bus stop (150m)", "Pharmacy (400m)", "International school (2km)"],
    year: 2021, parking: true, energy: "B",
  },
  "2": {
    description: "An exceptional penthouse in the prestigious Agios Tychonas hillside, offering unobstructed panoramic views of the Mediterranean. This three-bedroom residence spans the entire top floor with a wrap-around terrace and private infinity pool. The interior showcases contemporary luxury — Italian porcelain floors, custom cabinetry, and a designer kitchen with Miele appliances. Two dedicated parking spaces and a storage room included. Minutes from top international schools and the Limassol Marina.",
    features: ["Wrap-around terrace", "Private infinity pool", "Designer kitchen with Miele appliances", "Master suite with walk-in closet", "Guest en-suite bedroom", "Home office space", "Italian porcelain floors", "Double-height living room"],
    amenities: ["International school (1.5km)", "Limassol Marina (5km)", "Golf course (8km)", "Hospital (4km)", "Shopping mall (3km)", "Highway access (1km)"],
    year: 2023, parking: true, energy: "A",
  },
  "3": {
    description: "A spacious family villa set in a quiet residential street in Mouttagiaka, with a large private garden and covered veranda. The four-bedroom layout offers generous living spaces on two levels, perfect for families. The ground floor features an open-plan kitchen, dining and living area opening onto the garden. Upstairs, four bedrooms including a master suite with balcony. Central heating, solar panels, and a storage basement. Close to the beach and highway for easy commuting.",
    features: ["Large private garden", "Covered veranda", "Open-plan ground floor", "Master suite with balcony", "Central heating", "Solar panels", "Storage basement", "Separate laundry room"],
    amenities: ["Beach (800m)", "Primary school (500m)", "Supermarket (600m)", "Park (300m)", "Highway (1.5km)", "Hospital (5km)"],
    year: 2019, parking: true, energy: "B+",
  },
  "4": {
    description: "A smartly designed studio apartment in the heart of Limassol, ideal for investment or city living. Located near the marina and business district, this unit is always in high rental demand. Efficient layout with a combined living/sleeping area, modern kitchenette, and contemporary bathroom. The building offers a communal gym and rooftop terrace with city views. Current rental yield of 6.2% makes this an attractive investment opportunity.",
    features: ["Efficient open-plan layout", "Modern kitchenette", "Built-in storage", "Communal gym", "Rooftop terrace access", "Intercom system", "Double glazing", "Air conditioning"],
    amenities: ["Limassol Marina (500m)", "Cafes & restaurants (100m)", "Co-working space (300m)", "Bus station (200m)", "Bank (150m)", "Old town (400m)"],
    year: 2022, parking: false, energy: "A",
  },
  "5": {
    description: "Brand new two-bedroom apartment in a modern complex in Mesa Geitonia. Thoughtfully designed with an open-plan layout, this apartment offers excellent value in one of Limassol's most practical neighborhoods. Close to schools, hospitals, and shopping centers. The complex includes landscaped gardens, a children's playground, and covered parking. Ideal for young families or as a rental investment with strong local demand.",
    features: ["Brand new construction", "Open-plan living", "Two double bedrooms", "Modern bathroom", "Covered parking space", "Landscaped communal gardens", "Children's playground", "Storage unit"],
    amenities: ["Schools (400m)", "Hospital (2km)", "Shopping center (1km)", "Park (300m)", "Bus stop (100m)", "Sports center (800m)"],
    year: 2025, parking: true, energy: "A",
  },
  "6": {
    description: "A stunning three-bedroom villa with breathtaking sea views in a sought-after area of Paphos. Perfect as a holiday home or high-yield rental property. The villa features a private swimming pool, landscaped gardens, and a large sun terrace. The interior is finished to a high standard with stone accents, wooden beams, and modern amenities. Located in a quiet residential area, yet close to Paphos harbour, archaeological sites, and the international airport.",
    features: ["Private swimming pool", "Landscaped gardens", "Large sun terrace", "Stone & wood finishes", "Fireplace", "BBQ area", "Covered outdoor dining", "Three en-suite bedrooms"],
    amenities: ["Paphos harbour (4km)", "Beach (2km)", "Airport (10km)", "Supermarket (1km)", "Restaurants (2km)", "Archaeological park (5km)"],
    year: 2020, parking: true, energy: "B",
  },
};

export function getAllProperties(): PropertyDetail[] {
  return SAMPLE_PROPERTIES.map((p, i) => {
    const detail = descriptions[p.id] || descriptions["1"];
    return {
      ...p,
      image: IMAGES.properties[i] || IMAGES.properties[0],
      description: detail.description,
      features: detail.features,
      nearbyAmenities: detail.amenities,
      yearBuilt: detail.year,
      parking: detail.parking,
      energyRating: detail.energy,
    };
  });
}

export function getPropertyById(id: string): PropertyDetail | null {
  const all = getAllProperties();
  return all.find((p) => p.id === id) || null;
}
