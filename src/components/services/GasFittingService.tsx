import { useState, forwardRef, useImperativeHandle } from 'react';
import { ServiceList } from '../ServiceList';

const gasFittingServices = [
  { name: "Gas Line Installation", path: "/gas-fitting/line-installation" },
  { name: "Gas Appliance Installation", path: "/gas-fitting/appliance-installation" },
  { name: "Gas Heater Services", path: "/gas-fitting/heater-services" },
  { name: "Gas Cooktop Installation", path: "/gas-fitting/cooktop" },
  { name: "Gas Leak Detection", path: "/gas-fitting/leak-detection" },
  { name: "Gas Safety Inspections", path: "/gas-fitting/safety" },
  { name: "Gas Compliance Certificates", path: "/gas-fitting/compliance" },
  { name: "Emergency Gas Repairs", path: "/gas-fitting/emergency" }
];

export type GasFittingServiceRef = {
  toggleOpen: () => void;
  openServices: () => void;
};

export const GasFittingService = forwardRef<GasFittingServiceRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleOpen: () => setIsOpen(prev => !prev),
    openServices: () => setIsOpen(true)
  }));

  return <ServiceList services={gasFittingServices} isOpen={isOpen} onOpenChange={setIsOpen} serviceType="gas" />;
});

GasFittingService.displayName = 'GasFittingService';