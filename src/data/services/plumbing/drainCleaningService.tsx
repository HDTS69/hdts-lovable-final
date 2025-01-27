import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const drainCleaningServiceInfo: ServiceInfo = {
  title: "Professional Drain Cleaning",
  description: "Expert drain cleaning and maintenance services for residential and commercial properties. We use advanced equipment and proven techniques to clear blockages and prevent future clogs.",
  services: {
    title: "Our Drain Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Emergency drain unblocking",
      "CCTV drain inspection",
      "High-pressure water jetting",
      "Root removal services",
      "Drain maintenance",
      "Pipe relining",
      "Blocked toilet clearing",
      "Preventive maintenance"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "24/7 emergency service",
      "Latest drain cleaning technology",
      "Experienced technicians",
      "Guaranteed results",
      "Competitive pricing",
      "Long-term solutions",
      "Free inspection with service"
    ]
  }
};
