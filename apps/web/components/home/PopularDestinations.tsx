"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import destinationMountains from "@/assets/destination-mountains.jpg";
import destinationBeach from "@/assets/destination-beach.jpg";
import destinationTemple from "@/assets/destination-temple.jpg";
import destinationDesert from "@/assets/destination-desert.jpg";

const destinations = [
  {
    image: destinationMountains,
    name: "Hunza Valley",
    country: "Pakistan",
  },
  {
    image: destinationBeach,
    name: "Maldives",
    country: "Indian Ocean",
  },
  {
    image: destinationTemple,
    name: "Bali",
    country: "Indonesia",
  },
  {
    image: destinationDesert,
    name: "Dubai Desert",
    country: "UAE",
  },
];

export function PopularDestinations() {
  return (
    <section id="destinations" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Explore
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Popular Destinations
          </h2>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                  {destination.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {destination.country}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
