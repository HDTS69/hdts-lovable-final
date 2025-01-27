import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

export const pressureServiceInfo: ServiceInfo = {
  title: "Water Pressure Solutions",
  description: "Expert water pressure solutions for your home or business. We diagnose and fix low pressure issues, install pressure boosting systems, and ensure optimal water flow throughout your property.",
  services: {
    title: "Our Pressure Services",
    icon: <Wrench className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Pressure testing",
      "Pressure pump installation",
      "Leak detection",
      "Pipe inspection",
      "Pressure reduction valves",
      "System optimization",
      "Pressure booster systems",
      "Emergency repairs"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <Shield className="h-5 w-5 text-teal-600 mr-2" />,
    items: [
      "Expert diagnostics",
      "Long-term solutions",
      "Latest equipment",
      "Licensed technicians",
      "Competitive pricing",
      "Fast response times",
      "Quality guarantees"
    ]
  }
};