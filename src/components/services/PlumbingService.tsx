import { useState, forwardRef, useImperativeHandle } from 'react';
import { ServiceList } from '../ServiceList';
import { PenLine } from 'lucide-react';

const plumbingServices = [
  { name: "Hot Water Systems", path: "/plumbing/hot-water" },
  { name: "Drain Cleaning", path: "/plumbing/drain-cleaning" },
  { name: "Fixtures & Taps", path: "/plumbing/fixtures" },
  { name: "Toilet Repairs", path: "/plumbing/toilet" },
  { name: "Pipe Repairs", path: "/plumbing/pipes" },
  { name: "Sewer & Stormwater", path: "/plumbing/sewer" },
  { name: "Bathroom Renovations", path: "/plumbing/renovations" }
];

export type PlumbingServiceRef = {
  toggleOpen: () => void;
  openServices: () => void;
};

export const PlumbingService = forwardRef<PlumbingServiceRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleOpen: () => setIsOpen(prev => !prev),
    openServices: () => setIsOpen(true)
  }));

  return <ServiceList services={plumbingServices} isOpen={isOpen} onOpenChange={setIsOpen} serviceType="plumbing" />;
});

PlumbingService.displayName = 'PlumbingService';