// src/types/package.ts

/** --------------------
 * Shared fields
 * ------------------- */
export interface PackageBase {
  id: number;
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

/** --------------------
 * List page item
 * ------------------- */
export interface PackageListItem extends PackageBase {
  category: "adventure" | "beach" | "city" | "cultural";
}

/** --------------------
 * Detail page types
 * ------------------- */
export interface ItineraryItem {
  day: number;
  title: string;
  description: string;
}

export interface PackageDetail extends PackageBase {
  gallery: string[];
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  itinerary: ItineraryItem[];
}
