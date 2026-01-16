"use client"

import { motion } from "framer-motion";
import { Search, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-destination.jpg";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Explore Beautiful Destinations With Us
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Complete travel packages including hotels, meals, transport, and guided tours. 
            Create memories that last a lifetime.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-elevated p-4 md:p-6 max-w-4xl mx-auto mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Search className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Destination</p>
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full bg-transparent text-foreground text-sm font-medium outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>

              {/* Travel Date */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Calendar className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Travel Date</p>
                  <input
                    type="text"
                    placeholder="Select dates"
                    className="w-full bg-transparent text-foreground text-sm font-medium outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>

              {/* Travelers */}
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Travelers</p>
                  <input
                    type="text"
                    placeholder="2 Adults"
                    className="w-full bg-transparent text-foreground text-sm font-medium outline-none placeholder:text-muted-foreground/70"
                  />
                </div>
              </div>

              {/* Search Button */}
              <Button size="lg" className="h-full min-h-[56px] text-base">
                Search
              </Button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="min-w-[180px]">
              View Packages
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[180px] bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Build Custom Trip
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
