"use client";

import { motion } from "framer-motion";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface PackageCardProps {
  image: StaticImageData;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  index?: number;
}

export function PackageCard({
  image,
  title,
  location,
  duration,
  price,
  rating,
  index = 0,
}: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          priority={index === 0}
        />
        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-4 h-4 text-sunset fill-sunset" />
          <span className="text-sm font-semibold text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-1 text-muted-foreground mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-sm text-muted-foreground">/person</span>
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
