import { ReactNode } from "react";

export interface ServiceSection {
  title: string;
  icon: ReactNode;
  items: string[];
}

export interface ServiceInfo {
  title: string;
  description: string;
  services: ServiceSection;
  benefits: ServiceSection;
}

export const BaseServiceLayout: React.FC<{
  serviceInfo: ServiceInfo;
  showGasWarning?: boolean;
}>; 