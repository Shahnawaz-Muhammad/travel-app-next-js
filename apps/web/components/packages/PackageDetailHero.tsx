"use client";

import { PackageDetail } from "@/types/package";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PackageDetailHeroProps {
  packageData: PackageDetail;
}

export function PackageDetailHero({ packageData }: PackageDetailHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px]">
      <img
        src={packageData.image}
        alt={packageData.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Packages
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            {packageData.title}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 text-primary-foreground/90">
            <div className="flex items-center gap-1">
              <MapPin className="w-5 h-5" />
              {packageData.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-5 h-5" />
              {packageData.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-5 h-5" />
              {packageData.groupSize}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-sunset text-sunset" />
              {packageData.rating} ({packageData.reviews} reviews)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
