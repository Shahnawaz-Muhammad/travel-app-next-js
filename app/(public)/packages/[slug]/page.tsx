"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  Star,
  Check,
  Calendar,
  Utensils,
  Hotel,
  Bus,
  Camera,
  ArrowLeft,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PackageDetailHero } from "@/components/packages/PackageDetailHero";
import { PackageDetailContent } from "@/components/packages/PackageDetailContent";
import type { PackageDetail } from "@/types/package";

const packageData:PackageDetail = {
  id: 1,
  title: "5 Days Hunza Valley Tour",
  location: "Hunza, Pakistan",
  duration: "5 Days / 4 Nights",
  groupSize: "2-12 People",
  price: 45000,
  rating: 4.9,
  reviews: 128,
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
  gallery: [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
    "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800",
    "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
  ],
  description:
    "Experience the breathtaking beauty of Hunza Valley, where towering peaks meet ancient culture. This 5-day adventure takes you through some of Pakistan's most stunning landscapes, from the majestic Rakaposhi to the serene Attabad Lake.",
  highlights: [
    "Visit the iconic Baltit Fort",
    "Explore Attabad Lake by boat",
    "Witness sunrise at Eagle's Nest viewpoint",
    "Experience local Hunzai culture and cuisine",
    "Photography at Passu Cones",
  ],
  included: [
    "Comfortable hotel accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Private transportation",
    "Professional tour guide",
    "Entry fees to attractions",
    "Airport pickup and drop-off",
  ],
  notIncluded: [
    "International flights",
    "Travel insurance",
    "Personal expenses",
    "Tips and gratuities",
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Gilgit",
      description:
        "Arrive at Gilgit Airport. Transfer to hotel. Evening orientation and welcome dinner.",
    },
    {
      day: 2,
      title: "Gilgit to Hunza",
      description:
        "Drive to Hunza Valley via Karimabad. Visit Baltit Fort. Overnight in Karimabad.",
    },
    {
      day: 3,
      title: "Explore Upper Hunza",
      description:
        "Visit Passu Cones, Attabad Lake boat ride, and Borith Lake. Evening free for exploration.",
    },
    {
      day: 4,
      title: "Eagle's Nest & Local Culture",
      description:
        "Early morning trip to Eagle's Nest for sunrise. Visit local villages and traditional homes.",
    },
    {
      day: 5,
      title: "Departure",
      description:
        "Breakfast at hotel. Transfer to Gilgit Airport for departure. Tour ends.",
    },
  ],
};

export default function PackageDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <PackageDetailHero packageData={packageData} />

      {/* Content */}
      <PackageDetailContent packageData={packageData}/>

      <Footer />
    </div>
  );
}
