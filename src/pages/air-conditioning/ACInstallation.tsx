import { Snowflake, Shield, Tool } from "lucide-react";
import { BaseServiceLayout } from "@/components/services/BaseServiceLayout";

const ACInstallation = () => {
  const serviceInfo = {
    title: "Air Conditioning Installation",
    description: "Professional installation of energy-efficient cooling systems tailored to your home or business needs.",
    services: {
      title: "Installation Services",
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
      title: "Why Our Installations?",
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

  return (
    <BaseServiceLayout
      serviceInfo={serviceInfo}
      servicePath="/air-conditioning/installation"
    />
  );
}; 