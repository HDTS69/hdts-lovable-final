import { ReactNode } from 'react';
import { StickyHeader } from '@/components/StickyHeader';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

interface PlumbingServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const PlumbingServiceLayout = ({ title, description, children }: PlumbingServiceLayoutProps) => {
  const navigate = useNavigate();

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
    <>
      <StickyHeader scrollToBooking={scrollToBooking} />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-teal-700 mb-4">{title}</h1>
          {/* Remove the paragraph below */}
          {/* <p className="text-gray-600 mb-8">{description}</p> */}
          {children}
        </div>
      </main>
      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={handleFaqClick}
      />
    </>
  );
}; 