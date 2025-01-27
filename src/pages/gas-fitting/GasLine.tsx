import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Wrench, Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Line Services",
  description: "Expert gas line installation and maintenance services. We ensure safe and efficient gas line setup for your property.",
  services: {
    title: "Our Gas Line Services",
    icon: <Wrench className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "New gas line installations",
      "Gas line repairs",
      "Line extensions",
      "Pressure testing",
      "Emergency leak detection",
      "Safety inspections",
      "System upgrades",
      "Maintenance services"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Licensed gas fitters",
      "Same day service",
      "Quality materials",
      "Safety certified",
      "Warranty provided",
      "Clean installation",
      "Expert advice",
      "Competitive rates"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;