import { Snowflake, Shield } from "lucide-react";
import { BaseServiceLayout, type ServiceInfo } from "@/components/services/BaseServiceLayout";

const serviceInfo: ServiceInfo = {
  title: "AC Installation",
  description: "Professional air conditioning installation services.",
  services: {
    title: "Our Installation Services",
    icon: <Snowflake className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Ducted system installation",
      "Split system installation",
      "Multi-head unit setup",
      "Smart thermostat integration",
      "Commercial HVAC systems",
      "Energy efficiency audits",
      "Zoning system configuration",
      "Post-installation testing"
    ]
  },
  benefits: {
    title: "Why Choose Our Services",
    icon: <Shield className="w-5 h-5 mr-2 text-teal-600" />,
    items: [
      "Certified HVAC technicians",
      "5-year installation warranty",
      "Energy star rated equipment",
      "After-hours installation available",
      "Financing options available",
      "Free cooling load calculations",
      "Post-installation maintenance plans",
      "Rebate program assistance"
    ]
  }
};

export default () => <BaseServiceLayout serviceInfo={serviceInfo} />;

 