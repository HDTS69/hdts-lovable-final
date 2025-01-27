import { type ServiceInfo } from "@/types";
import { Wrench, Shield } from "lucide-react";
import React from "react";

// Create memoized icon components to prevent re-renders
const ServiceIcon = React.memo(() => (
  <Wrench className="h-5 w-5 text-teal-600 mr-2" />
));

const BenefitIcon = React.memo(() => (
  <Shield className="h-5 w-5 text-teal-600 mr-2" />
));

ServiceIcon.displayName = 'ServiceIcon';
BenefitIcon.displayName = 'BenefitIcon';

export const sewerServiceInfo: ServiceInfo = {
  title: "Professional Sewer Services",
  description: "Expert sewer line repair, replacement, and maintenance services to keep your plumbing system running smoothly. We use advanced technology and proven techniques to diagnose and fix sewer issues.",
  services: {
    title: "Our Sewer Services",
    icon: <ServiceIcon />,
    items: [
      "Sewer line inspection",
      "Sewer cleaning",
      "Sewer repair",
      "Sewer replacement",
      "Root removal",
      "Camera inspection",
      "Sewer relining",
      "Emergency services"
    ]
  },
  benefits: {
    title: "Why Choose Our Services?",
    icon: <BenefitIcon />,
    items: [
      "24/7 emergency service",
      "Advanced equipment",
      "Licensed technicians",
      "Upfront pricing",
      "Quality guarantees",
      "Fast response times",
      "Long-term solutions"
    ]
  }
};
