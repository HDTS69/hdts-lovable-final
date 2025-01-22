export interface BrandLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  brand: string;
  description: string;
}

export interface LogoProps {
  logo: BrandLogo;
  index: number;
  onImageError: (src: string) => void;
  hasError: boolean;
}