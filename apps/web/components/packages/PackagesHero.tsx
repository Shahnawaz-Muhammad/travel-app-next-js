"use client";

import { motion } from "framer-motion";

export function PackagesHero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-ocean-light to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Explore Our Travel Packages
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover curated travel experiences designed to create unforgettable
            memories
          </p>
        </motion.div>
      </div>
    </section>
  );
}
