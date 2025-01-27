import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Compliance Services",
  description: "Professional gas compliance inspections and certification services. We ensure your gas installations meet all safety standards and regulations.",
  services: {
    title: "Our Compliance Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Gas safety inspections",
      "Compliance certificates",
      "Installation verification",
      "Safety audits",
      "Gas pressure testing",
      "System certification",
      "Documentation review",
      "Regulatory compliance"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Licensed inspectors",
      "Thorough assessment",
      "Fast certification",
      "Clear documentation",
      "Expert advice",
      "Compliance expertise",
      "Detailed reports",
      "Peace of mind"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;