"use client";

import {motion} from "framer-motion"
import { Sparkles } from "lucide-react";

export function OurStory() {
    return (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 bg-sunset/10 text-sunset px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-medium">Our Story</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From a Dream to a Journey
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Wanderlust was born from a simple belief: that travel has
                    the power to transform lives, bridge cultures, and create
                    lasting memories. Founded in 2014 by a group of passionate
                    travelers, we set out to share the hidden gems of South Asia
                    with the world.
                  </p>
                  <p>
                    What started as a small operation organizing tours to
                    northern Pakistan has grown into a full-service travel
                    company offering curated experiences across multiple
                    continents. Yet our core mission remains unchanged: to
                    provide authentic, immersive travel experiences that go
                    beyond the ordinary.
                  </p>
                  <p>
                    Today, we're proud to have served over 50,000 travelers from
                    around the globe, and we continue to explore new
                    destinations and create innovative tour packages that
                    inspire wanderlust in everyone we meet.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600"
                      alt="Mountain landscape"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400"
                      alt="Beach destination"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400"
                      alt="Cultural site"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600"
                      alt="City skyline"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    )
}