import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Wrench, Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Heater Services",
  description: "Expert gas heater installation, maintenance, and repair services. We ensure your heating system operates safely and efficiently.",
  services: {
    title: "Our Heating Services",
    icon: <Wrench className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Heater installation",
      "System maintenance",
      "Safety inspections",
      "Repairs & servicing",
      "Gas line connection",
      "Efficiency testing",
      "Parts replacement",
      "Performance tuning"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Licensed technicians",
      "Same day service",
      "Quality parts used",
      "Safety certified",
      "Warranty provided",
      "Clean installation",
      "Expert advice",
      "Competitive rates"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;