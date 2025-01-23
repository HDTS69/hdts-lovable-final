import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { smoothScrollTo } from "@/utils/smoothScroll";

export function StickyHeader({ }: { scrollToBooking: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
    }
  };

  const handleBookingClick = () => {
    if (location.pathname === '/') {
      const bookingSection = document.getElementById('booking-section');
      if (bookingSection) {
        smoothScrollTo(bookingSection);
      }
    } else {
      navigate('/booking');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md text-white h-16">
      <nav className="h-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo Group */}
          <div className="flex items-center gap-1 sm:gap-2 h-full">
            <div className="h-12 sm:h-16 w-16 sm:w-20 md:w-24 relative flex items-center justify-center">
              <img
                src="/lovable-uploads/5a63ed35-57aa-44f6-bf08-2471a210aeb2.png"
                alt="HD Trade Services Logo"
                className="h-full w-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                onClick={handleLogoClick}
                loading="eager"
                decoding="async"
                width={96}
                height={64}
                style={{ minHeight: '48px' }}
              />
            </div>
            <div className="h-2.5 sm:h-3 md:h-4 relative flex items-center">
              <img
                src="/lovable-uploads/0c71726d-aa61-47ee-b839-97c1d56eea6f.png"
                alt="HD TRADE SERVICES"
                className="h-full w-auto object-contain"
                loading="eager"
                decoding="async"
                width={200}
                height={16}
                style={{ minHeight: '10px' }}
              />
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="lg"
              className="bg-white text-teal-500 hover:bg-gray-200 transition-colors duration-300 group"
              onClick={() => (window.location.href = 'tel:1300420911')}
            >
              <PhoneCall className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              Call Now
            </Button>
            <Button
              size="lg"
              className="bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 group"
              onClick={handleBookingClick}
            >
              <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              Book Online
            </Button>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              size="sm"
              className="bg-white text-teal-500 hover:bg-gray-200 transition-colors duration-300 group"
              onClick={() => (window.location.href = 'tel:1300420911')}
            >
              <PhoneCall className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              className="bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 group"
              onClick={handleBookingClick}
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
