"use client";

import {
  Users,
  Award,
  Globe,
  Heart,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/CTASection";
import { OurTeam } from "@/components/about/OurTeam";
import { AboutHero } from "@/components/about/AboutHero";
import { Stats } from "@/components/about/Stats";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "100+", label: "Destinations" },
  { value: "500+", label: "Tours Completed" },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description:
      "We believe travel transforms lives. Our passion drives us to create meaningful experiences.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Every tour is carefully crafted with attention to detail and quality standards.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description:
      "We're committed to responsible travel that benefits local communities and preserves nature.",
  },
];

const team = [
  {
    name: "Ahmed Khan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    bio: "With 15+ years in the travel industry, Ahmed founded Wanderlust to share Pakistan's beauty with the world.",
  },
  {
    name: "Fatima Ali",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    bio: "Fatima ensures every tour runs smoothly, managing our network of guides and partners.",
  },
  {
    name: "Omar Hassan",
    role: "Lead Tour Guide",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    bio: "Omar's deep knowledge of local cultures and landscapes makes every tour unforgettable.",
  },
  {
    name: "Sara Malik",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    bio: "Sara leads our support team, ensuring travelers receive exceptional service at every step.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <AboutHero />
        
        {/* Stats */}
        <Stats stats={stats}/>

        {/* Story */}
        <OurStory />

        {/* Mission & Vision */}
        <MissionVision />

        {/* Values */}
        <CoreValues values={values}/>

        {/* Team */}
        <OurTeam team={team} />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
