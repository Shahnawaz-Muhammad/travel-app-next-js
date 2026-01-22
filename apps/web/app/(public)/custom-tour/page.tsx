"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const steps = [
  { id: 1, title: "Destination", icon: MapPin },
  { id: 2, title: "Dates", icon: Calendar },
  { id: 3, title: "Travelers", icon: Users },
  { id: 4, title: "Preferences", icon: Sparkles },
];

const destinations = [
  "Hunza Valley, Pakistan",
  "Bali, Indonesia",
  "Dubai, UAE",
  "Switzerland",
  "Maldives",
  "Japan",
  "Greece",
  "Thailand",
  "Other",
];

const accommodationTypes = [
  { value: "budget", label: "Budget (Hostels, Guesthouses)" },
  { value: "standard", label: "Standard (3-Star Hotels)" },
  { value: "comfort", label: "Comfort (4-Star Hotels)" },
  { value: "luxury", label: "Luxury (5-Star Resorts)" },
];

const activities = [
  "Adventure Sports",
  "Cultural Experiences",
  "Beach & Relaxation",
  "Photography",
  "Wildlife Safari",
  "Food & Culinary",
  "Historical Sites",
  "Nightlife",
];

export default function CustomTour() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "",
    customDestination: "",
    startDate: "",
    endDate: "",
    adults: "2",
    children: "0",
    accommodation: "",
    activities: [] as string[],
    budget: "",
    specialRequests: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleActivityToggle = (activity: string) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter((a) => a !== activity)
        : [...prev.activities, activity],
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-sunset-light to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sunset/10 text-sunset px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Create Your Dream Trip</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Build Your Custom Tour
            </h1>
            <p className="text-lg text-muted-foreground">
              Tell us your preferences and we'll craft the perfect itinerary for
              you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex items-center gap-4 md:gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center gap-2 ${
                      currentStep >= step.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentStep >= step.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className="hidden md:inline font-medium">
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 md:w-16 h-0.5 mx-2 ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Destination */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Where would you like to go?
                </h2>
                <div className="space-y-4">
                  <Label>Select Destination</Label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) =>
                      setFormData({ ...formData, destination: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose a destination" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinations.map((dest) => (
                        <SelectItem key={dest} value={dest}>
                          {dest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formData.destination === "Other" && (
                    <div className="space-y-2">
                      <Label>Specify Destination</Label>
                      <Input
                        placeholder="Enter your desired destination"
                        value={formData.customDestination}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customDestination: e.target.value,
                          })
                        }
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 2: Dates */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  When are you planning to travel?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) =>
                        setFormData({ ...formData, endDate: e.target.value })
                      }
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Travelers */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  How many travelers?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Adults</Label>
                    <Select
                      value={formData.adults}
                      onValueChange={(value) =>
                        setFormData({ ...formData, adults: value })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Children (Under 12)</Label>
                    <Select
                      value={formData.children}
                      onValueChange={(value) =>
                        setFormData({ ...formData, children: value })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Accommodation Preference</Label>
                  <Select
                    value={formData.accommodation}
                    onValueChange={(value) =>
                      setFormData({ ...formData, accommodation: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select accommodation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {accommodationTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}

            {/* Step 4: Preferences */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Tell us about your preferences
                </h2>

                <div className="space-y-4">
                  <Label>Activities You're Interested In</Label>
                  <div className="flex flex-wrap gap-3">
                    {activities.map((activity) => (
                      <button
                        key={activity}
                        type="button"
                        onClick={() => handleActivityToggle(activity)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          formData.activities.includes(activity)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {activity}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Estimated Budget (per person)</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="budget">Under ₹50,000</SelectItem>
                      <SelectItem value="moderate">
                        ₹50,000 - ₹100,000
                      </SelectItem>
                      <SelectItem value="premium">
                        ₹100,000 - ₹200,000
                      </SelectItem>
                      <SelectItem value="luxury">Above ₹200,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Special Requests or Notes</Label>
                  <textarea
                    placeholder="Any dietary requirements, accessibility needs, or specific requests..."
                    value={formData.specialRequests}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        specialRequests: e.target.value,
                      })
                    }
                    rows={4}
                  />
                </div>

                <div className="border-t border-border pt-6 mt-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Full Name</Label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Label>Phone Number</Label>
                    <Input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-12">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>
              {currentStep < 4 ? (
                <Button onClick={nextStep} className="gap-2">
                  Next
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} className="gap-2">
                  Submit Request
                  <Check className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
