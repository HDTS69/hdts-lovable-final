import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";
import { Wrench, Shield } from "lucide-react";

const serviceInfo: ServiceInfo = {
  title: "Gas Appliance Services",
  description: "Expert gas appliance installation, repair, and maintenance services. We ensure safe and efficient operation of all your gas appliances.",
  services: {
    title: "Our Installation Services",
    icon: <Wrench className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Gas cooktop installation",
      "Gas heater installation",
      "Hot water system setup",
      "Gas oven installation",
      "BBQ gas line setup",
      "Appliance safety checks",
      "Gas leak detection",
      "Compliance certification"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Licensed gas fitters",
      "Same day service",
      "Upfront pricing",
      "Quality workmanship",
      "Safety guaranteed",
      "Emergency response",
      "Full documentation",
      "Satisfaction guaranteed"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} showGasWarning={true} />;
