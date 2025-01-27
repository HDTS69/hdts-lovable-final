import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const hotWaterServiceInfo: ServiceInfo = {
  title: "Hot Water Services",
  description: "Professional hot water system solutions for your home. From traditional storage systems to modern continuous flow units, we provide expert solutions for all your hot water needs.",
  services: {
    title: "Our Hot Water Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "System Installation",
      "Repairs & Maintenance",
      "Emergency Services",
      "System Upgrades",
      "Efficiency Solutions",
      "Tank Replacements",
      "System Assessment",
      "Preventive Care"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Expert Technicians",
      "Licensed Plumbers",
      "Quality Products",
      "Guaranteed Work",
      "Competitive Pricing",
      "Fast Response",
      "Professional Service"
    ]
  }
}; 