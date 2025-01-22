import { CompanyInfo } from './footer/CompanyInfo';
import { ServicesLinks } from './footer/ServicesLinks';
import { QuickLinks } from './footer/QuickLinks';
import { SocialLinks } from './footer/SocialLinks';

interface FooterProps {
  handleServiceClick: (service: string) => void;
  handleFaqClick: (e: React.MouseEvent) => void;
}

export const Footer = ({ handleServiceClick, handleFaqClick }: FooterProps) => {
  return (
    <footer className="w-full py-12 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <ServicesLinks handleServiceClick={handleServiceClick} />
          <QuickLinks onFaqClick={handleFaqClick} />
          <SocialLinks />
        </div>
        <p className="text-sm text-gray-500 text-center mt-8">© 2024 HD Trade Services. All rights reserved.</p>
      </div>
    </footer>
  );
};