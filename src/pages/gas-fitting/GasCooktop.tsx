import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Wrench, Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Cooktop Services",
  description: "Professional gas cooktop installation and repair services. We ensure your cooktop is installed safely and operates efficiently.",
  services: {
    title: "Our Cooktop Services",
    icon: <Wrench className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Cooktop installation",
      "Gas line connection",
      "Safety testing",
      "Repairs & maintenance",
      "Leak detection",
      "Pressure testing",
      "Parts replacement",
      "Performance optimization"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Licensed gas fitters",
      "Same day service",
      "Warranty provided",
      "Quality parts used",
      "Safety certified",
      "Clean installation",
      "Expert advice",
      "Competitive pricing"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;