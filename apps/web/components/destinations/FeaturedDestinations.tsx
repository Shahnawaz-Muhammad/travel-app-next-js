"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Destination } from "@/types/destinations";

interface FeaturedDestinationsProps {
  featuredDestinations: Destination[];
}

export function FeaturedDestinations({
  featuredDestinations,
}: FeaturedDestinationsProps) {
  return (
    <>
      {featuredDestinations.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Featured Destinations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative h-80 rounded-2xl overflow-hidden"
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {dest.country}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      {dest.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-primary-foreground/70 text-sm">
                        {dest.packages} packages available
                      </span>
                      <Link href={`/destinations/${dest.id}`}>
                        <Button size="sm" variant="secondary">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
