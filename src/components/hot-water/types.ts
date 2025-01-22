export interface SystemCardProps {
  title: string;
  description: string;
  brands: string[];
  advantages: string[];
  sizing?: {
    label: string;
    value: string;
  }[];
  keyNotes?: string[];
  tips?: string[];
  lifespan?: string;
}

export interface HotWaterSystem {
  title: string;
  description: string;
  brands: string[];
  advantages: string[];
  sizing: {
    label: string;
    value: string;
  }[];
  keyNotes?: string[];
  tips?: string[];
  lifespan?: string;
}

export interface Systems {
  [key: string]: HotWaterSystem;
}