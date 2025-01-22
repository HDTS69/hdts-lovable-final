import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { useLocation, useNavigate } from "react-router-dom";

interface CallToActionProps {
  scrollToBooking: () => void;
}

export const CallToAction = ({ scrollToBooking }: CallToActionProps) => {
  const location = useLocation();
  const navigate = useNavigate();

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
    <section className="w-full py-6 bg-black text-white">
      <div className="container">
        <div className="flex flex-col items-center space-y-3 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-zinc-200 mb-3">Don't wait until it's too late. Contact us now for a quote or book online.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-teal-500 hover:bg-gray-200 transition-colors duration-300 group"
              onClick={() => window.location.href = 'tel:1300420911'}
            >
              <PhoneCall className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" /> Call Now
            </Button>
            <Button
              size="lg"
              className="bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300 group"
              onClick={handleBookingClick}
            >
              <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" /> Book Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};