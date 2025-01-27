import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const toiletServiceInfo: ServiceInfo = {
  title: "Professional Toilet Services",
  description: "Expert toilet repair, installation, and maintenance services for residential and commercial properties. We handle everything from minor repairs to complete toilet replacements.",
  services: {
    title: "Our Toilet Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Toilet installation",
      "Toilet repair",
      "Toilet replacement",
      "Leak repair",
      "Cistern repairs",
      "Blocked toilet clearing",
      "Water efficiency upgrades",
      "Emergency repairs"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "24/7 emergency service",
      "Licensed plumbers",
      "Quality parts",
      "Guaranteed work",
      "Competitive pricing",
      "Fast response",
      "Clean workmanship"
    ]
  }
};