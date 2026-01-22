"use client";

import { motion } from "framer-motion";
import { Compass, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

interface DestinationsHeroProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export function DestinationsHero({
  searchQuery,
  setSearchQuery,
}: DestinationsHeroProps) {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-forest-light to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-forest/10 text-forest px-4 py-2 rounded-full mb-6">
            <Compass className="w-5 h-5" />
            <span className="font-medium">Explore the World</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Popular Destinations
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            From tropical beaches to mountain peaks, discover your next
            adventure
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
