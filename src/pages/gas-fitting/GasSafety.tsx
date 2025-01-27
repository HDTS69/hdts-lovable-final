import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Wrench, Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Safety Services",
  description: "Professional gas safety inspections and certifications. We ensure your gas systems meet all safety standards and regulations.",
  services: {
    title: "Our Safety Services",
    icon: <Wrench className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Safety inspections",
      "Gas leak detection",
      "Compliance checks",
      "System testing",
      "Safety upgrades",
      "Risk assessment",
      "Documentation",
      "Safety certification"
    ]
  },
  benefits: {
    title: "Why Choose Our Service",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Licensed technicians",
      "Thorough inspections",
      "Fast response time",
      "Detailed reports",
      "Full documentation",
      "Expert advice",
      "Competitive rates",
      "Peace of mind"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;