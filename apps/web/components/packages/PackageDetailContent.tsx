"use client";

import { motion } from "framer-motion";
import { Check, Calendar, Utensils, Hotel, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageDetail } from "@/types/package";

interface PackageDetailContentProps {
  packageData: PackageDetail;
}

export function PackageDetailContent({
  packageData,
}: PackageDetailContentProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    About This Tour
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {packageData.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Highlights
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {packageData.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-forest" />
                        </div>
                        <span className="text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {packageData.included.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-forest" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      Not Included
                    </h3>
                    <ul className="space-y-3">
                      {packageData.notIncluded.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Day by Day Itinerary
                </h2>
                {packageData.itinerary.map((day, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      {index < packageData.itinerary.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                        {day.title}
                      </h3>
                      <p className="text-muted-foreground">{day.description}</p>
                    </div>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="gallery">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {packageData.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="aspect-video rounded-xl overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-card">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-foreground">
                  ₹{packageData.price.toLocaleString()}
                </div>
                <div className="text-muted-foreground">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Duration
                    </div>
                    <div className="font-medium">{packageData.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Hotel className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Accommodation
                    </div>
                    <div className="font-medium">4-Star Hotels</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Utensils className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Meals</div>
                    <div className="font-medium">All Inclusive</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Bus className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Transport
                    </div>
                    <div className="font-medium">Private Vehicle</div>
                  </div>
                </div>
              </div>

              <Button className="w-full mb-3" size="lg">
                Book Now
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                Inquire About Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
