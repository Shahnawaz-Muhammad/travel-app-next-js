"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Users, Star, ArrowLeft, Plane, Sun, Droplets } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";

const destinationData = {
  id: 1,
  name: "Hunza Valley",
  country: "Pakistan",
  description:
    "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. Known for its stunning natural beauty, ancient forts, and the warm hospitality of its people, Hunza offers an unforgettable travel experience for adventurers and culture enthusiasts alike.",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  gallery: [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
  ],
  highlights: [
    "Breathtaking mountain scenery with views of Rakaposhi",
    "Ancient Baltit and Altit forts",
    "Crystal clear Attabad Lake",
    "Rich cultural heritage and friendly locals",
    "Traditional Hunzai cuisine",
  ],
  weather: {
    bestTime: "April to October",
    temperature: "5°C to 25°C",
    rainfall: "Low to Moderate",
  },
  packages: [
    {
      id: 1,
      title: "5 Days Hunza Valley Tour",
      duration: "5 Days / 4 Nights",
      price: 45000,
      rating: 4.9,
    },
    {
      id: 2,
      title: "7 Days Hunza & Skardu Combined",
      duration: "7 Days / 6 Nights",
      price: 75000,
      rating: 4.8,
    },
    {
      id: 3,
      title: "3 Days Hunza Quick Escape",
      duration: "3 Days / 2 Nights",
      price: 28000,
      rating: 4.7,
    },
  ],
};

export default function DestinationDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img
          src={destinationData.image}
          alt={destinationData.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Destinations
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-primary-foreground/80 mb-2">
                <MapPin className="w-5 h-5" />
                {destinationData.country}
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-primary-foreground">
                {destinationData.name}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  About {destinationData.name}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {destinationData.description}
                </p>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {destinationData.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="aspect-square rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${destinationData.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {destinationData.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted rounded-xl"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Packages */}
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Available Packages
                </h3>
                <div className="space-y-4">
                  {destinationData.packages.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                    >
                      <div>
                        <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                          {pkg.title}
                        </h4>
                        <div className="flex items-center gap-4 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {pkg.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-sunset text-sunset" />
                            {pkg.rating}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">
                          ₹{pkg.price.toLocaleString()}
                        </div>
                        <Link href={`/packages/${pkg.id}`}>
                          <Button size="sm" className="mt-2">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Weather Card */}
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Best Time to Visit
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-sunset-light flex items-center justify-center">
                        <Sun className="w-5 h-5 text-sunset" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Season</div>
                        <div className="font-medium text-foreground">
                          {destinationData.weather.bestTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-ocean-light flex items-center justify-center">
                        <Plane className="w-5 h-5 text-ocean" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Temperature</div>
                        <div className="font-medium text-foreground">
                          {destinationData.weather.temperature}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest-light flex items-center justify-center">
                        <Droplets className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Rainfall</div>
                        <div className="font-medium text-foreground">
                          {destinationData.weather.rainfall}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Inquiry */}
                <div className="bg-gradient-cta rounded-2xl p-6 text-primary-foreground">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Need Help Planning?
                  </h3>
                  <p className="opacity-90 mb-4 text-sm">
                    Our travel experts are ready to help you create your perfect trip.
                  </p>
                  <Link href="/contact">
                    <Button variant="secondary" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
