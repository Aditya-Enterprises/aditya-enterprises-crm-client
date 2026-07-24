export type Property = {
  title: string;
  location: string;
  price: string;
  transaction: "Sale" | "Rent";
  status: "Active" | "Pending" | "Sold";
  beds: number;
  baths: number;
  area: string;
  image: string;
  imageAlt: string;
};

export type PropertyTab = {
  label: string;
  count: number;
  active?: boolean;
};

export type Amenity = {
  label: string;
  icon: string;
};

export const propertyTabs: PropertyTab[] = [
  { label: "All Properties", count: 24, active: true },
  { label: "Active", count: 18 },
  { label: "Pending", count: 4 },
  { label: "Sold", count: 2 },
];

export const properties: Property[] = [
  {
    title: "Sapphire Bay Villa",
    location: "Worli Sea Face, Mumbai",
    price: "Rs 12.4Cr",
    transaction: "Sale",
    status: "Active",
    beds: 5,
    baths: 4,
    area: "3,200",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Modern luxury villa with large windows and a pool",
  },
  {
    title: "Modern Loft Downtown",
    location: "Bandra Kurla Complex, Mumbai",
    price: "Rs 4.5L/mo",
    transaction: "Rent",
    status: "Pending",
    beds: 2,
    baths: 2,
    area: "1,450",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Contemporary home facade with manicured landscaping",
  },
  {
    title: "Willow Creek Estate",
    location: "Alibaug, Maharashtra",
    price: "Rs 7.8Cr",
    transaction: "Sale",
    status: "Active",
    beds: 4,
    baths: 3,
    area: "2,100",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Bright residential living space opening to greenery",
  },
  {
    title: "The Marble Residence",
    location: "Juhu, Mumbai",
    price: "Rs 18.5Cr",
    transaction: "Sale",
    status: "Sold",
    beds: 6,
    baths: 5,
    area: "5,400",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Luxury kitchen with marble island and warm lighting",
  },
];

export const propertyTypes = [
  "Residential",
  "Commercial",
  "Industrial",
  "Land",
];

export const amenities: Amenity[] = [
  { label: "Pool", icon: "analytics" },
  { label: "Garage", icon: "garage" },
  { label: "Garden", icon: "outdoor_garden" },
  { label: "Gym", icon: "fitness_center" },
];
