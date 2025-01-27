import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const pipesServiceInfo: ServiceInfo = {
  title: "Professional Pipe Services",
  description: "Expert pipe installation, repair, and maintenance services for your home or business. We handle everything from leak detection to complete pipe system replacements.",
  services: {
    title: "Our Pipe Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Pipe installation",
      "Leak detection & repair",
      "Pipe replacement",
      "Pipe relining",
      "Burst pipe repair",
      "Water line services",
      "Gas line services",
      "Emergency repairs"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Licensed plumbers",
      "Latest pipe technology",
      "Quality materials",
      "Guaranteed work",
      "Competitive pricing",
      "24/7 emergency service",
      "Long-term solutions"
    ]
  }
};