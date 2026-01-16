"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { PackagesHero } from "@/components/packages/PackagesHero";
import { PackagesFilters } from "@/components/packages/PackagesFilters";
import { PackagesGrid } from "@/components/packages/PackagesGrid";
import { PackageListItem } from "@/types/package";

const packages: PackageListItem[]= [
  {
    id: 1,
    title: "5 Days Hunza Valley Tour",
    location: "Hunza, Pakistan",
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 People",
    price: 45000,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    category: "adventure",
  },
  {
    id: 2,
    title: "Bali Beach Paradise",
    location: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    groupSize: "2-8 People",
    price: 85000,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    category: "beach",
  },
  {
    id: 3,
    title: "Dubai City Experience",
    location: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 People",
    price: 120000,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    category: "city",
  },
  {
    id: 4,
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "6 Days / 5 Nights",
    groupSize: "4-10 People",
    price: 250000,
    rating: 5.0,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    category: "adventure",
  },
  {
    id: 5,
    title: "Maldives Luxury Escape",
    location: "Maldives",
    duration: "5 Days / 4 Nights",
    groupSize: "2-4 People",
    price: 350000,
    rating: 4.9,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    category: "beach",
  },
  {
    id: 6,
    title: "Japan Cultural Journey",
    location: "Tokyo & Kyoto, Japan",
    duration: "10 Days / 9 Nights",
    groupSize: "4-12 People",
    price: 280000,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    category: "cultural",
  },
];

export default function Packages() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || pkg.category === selectedCategory;
    const matchesPrice =
      priceRange === "all" ||
      (priceRange === "budget" && pkg.price < 100000) ||
      (priceRange === "mid" && pkg.price >= 100000 && pkg.price < 200000) ||
      (priceRange === "luxury" && pkg.price >= 200000);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <PackagesHero />

        {/* Filters */}
        <PackagesFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Packages Grid */}
        <PackagesGrid filteredPackages={filteredPackages} />
      </main>
      <Footer />
    </div>
  );
}
