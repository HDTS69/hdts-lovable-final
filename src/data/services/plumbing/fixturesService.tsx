import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const fixturesServiceInfo: ServiceInfo = {
  title: "Plumbing Fixtures Services",
  description: "Expert installation, repair, and maintenance of all plumbing fixtures. From faucets and sinks to showers and bathtubs, we ensure quality workmanship and lasting solutions.",
  services: {
    title: "Our Fixtures Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Fixture installation",
      "Fixture repair",
      "Fixture replacement",
      "Leak repairs",
      "Upgrades & modernization",
      "Water-efficient fixtures",
      "Custom solutions",
      "Emergency repairs"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Expert technicians",
      "Quality fixtures",
      "Professional installation",
      "Guaranteed work",
      "Competitive pricing",
      "Fast response",
      "Clean workmanship"
    ]
  }
};