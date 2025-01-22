import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface PlumbingServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const PlumbingServiceLayout = ({ children, title, description }: PlumbingServiceLayoutProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToBooking = () => {
    navigate('/booking');
  };

  const handleServiceClick = () => {
    navigate('/', { 
      state: { 
        previousPath: '/plumbing',
        openService: 'plumbing'
      }
    });
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faq');
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader scrollToBooking={scrollToBooking} />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-teal-600 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {children}
          </div>

          <div>
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-sm" />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" />
                <div className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/booking')}
                className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-colors duration-300"
              >
                Book Online
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={handleFaqClick}
      />
    </div>
  );
};