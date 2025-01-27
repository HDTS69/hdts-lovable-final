import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Emergency Gas Services",
  description: "24/7 emergency gas services for your safety. Our licensed gas fitters respond quickly to gas emergencies to protect your property and family.",
  services: {
    title: "Our Emergency Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "24/7 emergency response",
      "Gas leak detection",
      "Emergency repairs",
      "Gas line isolation",
      "Safety inspections",
      "Appliance shutdown",
      "Temporary solutions",
      "Permanent repairs"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Available 24/7",
      "Fast response time",
      "Licensed gas fitters",
      "Safety first approach",
      "Complete solutions",
      "Emergency expertise",
      "Clear communication",
      "Satisfaction guaranteed"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;