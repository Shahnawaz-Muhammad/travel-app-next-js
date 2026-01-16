"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export function MissionVision() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-8 shadow-soft"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground">
              To inspire and enable meaningful travel experiences that connect
              people with diverse cultures, breathtaking landscapes, and
              unforgettable adventures. We strive to make travel accessible,
              sustainable, and transformative for everyone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-soft"
          >
            <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-forest" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground">
              To become the world's most trusted travel partner, known for our
              commitment to quality, authenticity, and customer satisfaction. We
              envision a world where travel breaks down barriers and builds
              understanding between people and cultures.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
