export interface BookingData {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  services: string[];
  preferred_time: string;
  message?: string;
  files?: string[];
  newsletter_subscription?: boolean;
  status?: string;
}

export interface FileUrls {
  originalName: string;
  publicUrl: string;
}