import { useState, forwardRef, useImperativeHandle } from 'react';
import { ServiceList } from '../ServiceList';
import { Wind, Thermometer, Wrench, AlertTriangle, Search, Settings, Activity } from 'lucide-react';

const airConServices = [
  {
    name: "Split System Installation",
    description: "Professional installation of energy-efficient split system air conditioners",
    icon: <Thermometer className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/split-system"
  },
  {
    name: "Ducted Systems",
    description: "Complete ducted air conditioning solutions for whole-home comfort",
    icon: <Wind className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/ducted"
  },
  {
    name: "AC Repairs",
    description: "Fast and reliable repairs for all AC system issues",
    icon: <Wrench className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/repairs"
  },
  {
    name: "Emergency Services",
    description: "24/7 emergency AC repair services",
    icon: <AlertTriangle className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/emergency"
  },
  {
    name: "AC Diagnostics",
    description: "Advanced diagnostic tools to identify AC issues",
    icon: <Search className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/diagnostics"
  },
  {
    name: "System Optimization",
    description: "Maximize your AC's efficiency and performance",
    icon: <Settings className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/optimization"
  },
  {
    name: "Maintenance",
    description: "Regular maintenance to extend your AC's lifespan",
    icon: <Wrench className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/maintenance"
  },
  {
    name: "System Upgrades",
    description: "Upgrade to more efficient and modern AC systems",
    icon: <Activity className="w-8 h-8 text-teal-500" />,
    path: "/air-conditioning/replacement"
  }
];

export type AirConditioningServiceRef = {
  toggleOpen: () => void;
  openServices: () => void;
};

export const AirConditioningService = forwardRef<AirConditioningServiceRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleOpen: () => setIsOpen(prev => !prev),
    openServices: () => setIsOpen(true)
  }));

  return <ServiceList services={airConServices} isOpen={isOpen} onOpenChange={setIsOpen} serviceType="air-conditioning" />;
});

AirConditioningService.displayName = 'AirConditioningService';