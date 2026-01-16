"use client";

import { motion } from "framer-motion";
import { Package, Users, Wallet, Headphones } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "All-Inclusive Packages",
    description:
      "Everything you need for a perfect trip - accommodation, meals, transport, and activities all in one package.",
  },
  {
    icon: Users,
    title: "Experienced Tour Guides",
    description:
      "Our professional guides with local expertise ensure you discover hidden gems and authentic experiences.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description:
      "Best value for money with transparent pricing. No hidden costs, just amazing travel experiences.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Round-the-clock assistance before, during, and after your trip. We're always here to help.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Why Travel With Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Your Trusted Travel Partner
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
