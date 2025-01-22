import { ReactNode } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface GasServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const GasServiceLayout = ({ title, description, children }: GasServiceLayoutProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToBooking = () => {
    navigate('/booking');
  };

  const handleServiceClick = (service: string) => {
    navigate(`/${service}`);
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faq');
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader scrollToBooking={scrollToBooking} />
      
      <main className="pt-20 pb-6">
        <div className="max-w-[1120px] mx-auto px-4">
          <h1 className="text-3xl font-bold text-teal-700 mb-2">{title}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          {children}
        </div>
      </main>

      <Footer 
        handleServiceClick={handleServiceClick} 
        handleFaqClick={handleFaqClick} 
      />
    </div>
  );
};