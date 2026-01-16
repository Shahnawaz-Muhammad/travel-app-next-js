"use client";

import { motion } from "framer-motion";
import { PackageCard } from "./PackageCard";
import destinationMountains from "@/assets/destination-mountains.jpg";
import destinationBeach from "@/assets/destination-beach.jpg";
import destinationTemple from "@/assets/destination-temple.jpg";
import destinationDesert from "@/assets/destination-desert.jpg";

const packages = [
  {
    image: destinationMountains,
    title: "5 Days Hunza Valley Tour",
    location: "Northern Pakistan",
    duration: "5 Days / 4 Nights",
    price: 599,
    rating: 4.9,
  },
  {
    image: destinationBeach,
    title: "7 Days Maldives Escape",
    location: "Maldives",
    duration: "7 Days / 6 Nights",
    price: 1299,
    rating: 4.8,
  },
  {
    image: destinationTemple,
    title: "Bali Cultural Journey",
    location: "Bali, Indonesia",
    duration: "6 Days / 5 Nights",
    price: 899,
    rating: 4.9,
  },
  {
    image: destinationDesert,
    title: "Dubai Desert Safari",
    location: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    price: 749,
    rating: 4.7,
  },
];

export function FeaturedPackages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Best Deals
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Featured Travel Packages
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Handpicked destinations with all-inclusive packages designed to give you 
            the perfect travel experience.
          </p>
        </motion.div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} {...pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
