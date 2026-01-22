"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { DestinationsHero } from "@/components/destinations/DestinationsHero";
import type { Destination } from "@/types/destinations";
import { FeaturedDestinations } from "@/components/destinations/FeaturedDestinations";

const destinations: Destination[] = [
  {
    id: 1,
    name: "Hunza Valley",
    country: "Pakistan",
    description: "Majestic mountains and ancient forts",
    packages: 8,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    featured: true,
  },
  {
    id: 2,
    name: "Bali",
    country: "Indonesia",
    description: "Tropical paradise with stunning temples",
    packages: 12,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    featured: true,
  },
  {
    id: 3,
    name: "Dubai",
    country: "UAE",
    description: "Modern luxury meets desert wonder",
    packages: 6,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    featured: true,
  },
  {
    id: 4,
    name: "Switzerland",
    country: "Europe",
    description: "Alpine beauty at its finest",
    packages: 5,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    featured: false,
  },
  {
    id: 5,
    name: "Maldives",
    country: "South Asia",
    description: "Crystal clear waters and overwater villas",
    packages: 4,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    featured: true,
  },
  {
    id: 6,
    name: "Japan",
    country: "East Asia",
    description: "Where tradition meets innovation",
    packages: 7,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
    featured: false,
  },
  {
    id: 7,
    name: "Santorini",
    country: "Greece",
    description: "Iconic white buildings and blue domes",
    packages: 3,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
    featured: false,
  },
  {
    id: 8,
    name: "Machu Picchu",
    country: "Peru",
    description: "Ancient Incan citadel in the clouds",
    packages: 4,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800",
    featured: false,
  },
];

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredDestinations = filteredDestinations.filter((d) => d.featured);
  const otherDestinations = filteredDestinations.filter((d) => !d.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <DestinationsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Featured Destinations */}
      <FeaturedDestinations featuredDestinations={featuredDestinations} />

      {/* All Destinations */}
      {otherDestinations.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              More Destinations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-1">
                      <MapPin className="w-3 h-3" />
                      {dest.country}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {dest.packages} packages
                    </p>
                    <Link href={`/destinations/${dest.id}`}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredDestinations.length === 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">
              No destinations found matching "{searchQuery}"
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
