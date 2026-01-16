"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, MapPin, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { PackageListItem } from "@/types/package";

interface PackagesGridProps {
  filteredPackages: PackageListItem[];
}

export function PackagesGrid({filteredPackages}: PackagesGridProps) {
    return(
        <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    ₹{pkg.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-sunset mb-2">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-muted-foreground text-sm">
                      ({pkg.reviews} reviews)
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {pkg.groupSize}
                    </div>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button className="w-full">View Details</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No packages found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    )
}