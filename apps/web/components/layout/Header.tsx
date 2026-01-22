import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "./NavLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Packages", href: "/packages" },
  { name: "Destinations", href: "/destinations" },
  { name: "Custom Tour", href: "/custom-tour" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/60 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-cta flex items-center justify-center">
              <Compass className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold text-foreground">
              Trawaygo
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="text-md font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="lg">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  className="py-3 px-4 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Button variant="default" className="mt-2 w-full">
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
