import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Leak Detection",
  description: "Professional gas leak detection and repair services. Our expert team quickly locates and fixes gas leaks to ensure your safety.",
  services: {
    title: "Our Detection Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Gas leak detection",
      "Emergency repairs",
      "Pressure testing",
      "Line inspection",
      "Safety assessment",
      "Leak prevention",
      "24/7 response",
      "System maintenance"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Fast response time",
      "Licensed technicians",
      "Latest equipment",
      "Safety certified",
      "24/7 availability",
      "Complete solutions",
      "Clear communication",
      "Service warranty"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;