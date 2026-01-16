"use client";

import { motion } from "framer-motion";

export function AboutHero() {
    return (
        <section className="relative h-[60vh] min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200"
            alt="Travel journey"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center px-4"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                About Wanderlust
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Crafting unforgettable travel experiences since 2014
              </p>
            </motion.div>
          </div>
        </section>

    )
}