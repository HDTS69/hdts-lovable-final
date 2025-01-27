import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const renovationsServiceInfo: ServiceInfo = {
  title: "Plumbing Renovations",
  description: "Transform your home with our expert plumbing renovation services. Whether you're updating a bathroom, remodeling a kitchen, or upgrading your entire plumbing system, our skilled team ensures quality workmanship and lasting results.",
  services: {
    title: "Our Renovation Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Bathroom renovations",
      "Kitchen remodeling",
      "Pipe system upgrades",
      "Fixture replacements",
      "Water line modifications",
      "Gas line installations",
      "Drainage improvements",
      "Code compliance updates"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Increased property value",
      "Modern plumbing solutions",
      "Energy efficiency",
      "Quality materials",
      "Expert installation",
      "Project management",
      "Clean workmanship"
    ]
  }
};