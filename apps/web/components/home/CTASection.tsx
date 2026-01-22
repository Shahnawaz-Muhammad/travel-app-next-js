import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ctaBackground from "@/assets/cta-background.jpg";
import Image from "next/image";

export function CTASection() {
  return (
    <section id="custom" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={ctaBackground}
          alt="Travelers on mountain viewpoint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Plan Your Perfect Trip Today
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us create a personalized travel experience just for you. 
            From romantic getaways to family adventures, we handle everything.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="min-w-[180px]"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              className="min-w-[180px] bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Create Custom Package
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
