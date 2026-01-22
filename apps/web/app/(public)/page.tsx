"use client";

import { CTASection } from "@/components/home/CTASection";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { HeroSection } from "@/components/home/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PopularDestinations } from "@/components/home/PopularDestinations";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedPackages />
        <WhyChooseUs />
        <PopularDestinations />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
