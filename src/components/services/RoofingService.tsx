import { useState, forwardRef, useImperativeHandle } from 'react';
import { ServiceList } from '../ServiceList';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Wrench, Shield, Hammer, Droplet } from "lucide-react";

const roofingServices = [
  { name: "Roof Repairs", path: "/roofing/repairs" },
  { name: "Leak Detection", path: "/roofing/leak-detection" },
  { name: "Leak Investigation", path: "/roofing/leak-investigation" },
  { name: "Roof Maintenance", path: "/roofing/maintenance" },
  { name: "Roof Report", path: "/roofing/report" },
  { name: "Metal Roofing", path: "/roofing/metal-roof" },
  { name: "Gutter & Downpipes", path: "/roofing/downpipes" },
  { name: "Roof Ventilation", path: "/roofing/ventilation" },
  { name: "Roof Tile Repair", path: "/roofing/tile-repair" },
  { name: "Gutter Guard", path: "/roofing/gutter-guard" }
];

export type RoofingServiceRef = {
  toggleOpen: () => void;
  openServices: () => void;
};

export const RoofingService = forwardRef<RoofingServiceRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleOpen: () => setIsOpen(prev => !prev),
    openServices: () => setIsOpen(true)
  }));

  return <ServiceList services={roofingServices} isOpen={isOpen} onOpenChange={setIsOpen} serviceType="roofing" />;
});

RoofingService.displayName = 'RoofingService';