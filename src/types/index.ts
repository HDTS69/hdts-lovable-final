import { type ReactNode } from "react";

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

// Re-export from BaseServiceLayout for backward compatibility
export * from "@/components/services/BaseServiceLayout"; 