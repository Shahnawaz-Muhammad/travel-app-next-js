import {
  Compass,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Packages", href: "#packages" },
  { name: "Destinations", href: "#destinations" },
  { name: "Blog", href: "#" },
  { name: "FAQs", href: "#" },
];

const destinations = [
  "Maldives",
  "Bali, Indonesia",
  "Dubai, UAE",
  "Hunza Valley",
  "Sri Lanka",
  "Thailand",
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Compass className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">Trawaygo</span>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted travel partner for unforgettable adventures. We
              create personalized travel experiences that turn dreams into
              memories.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="Social link"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">
              Top Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">
              Get in Touch
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Travel Street, Adventure City, AC 12345
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  hello@trawaygo.com
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-sm text-primary-foreground/70 mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm outline-none focus:border-primary transition-colors"
                />
                <Button size="sm" className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
            <p>© 2025 Wanderlust. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
