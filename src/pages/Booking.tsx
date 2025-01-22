import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const handleServiceClick = (service: string) => {
    navigate(`/${service}`);
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/#faq');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <div className="container px-4 max-w-4xl mx-auto pt-20">
        <BookingForm />
      </div>
      <Footer handleServiceClick={handleServiceClick} handleFaqClick={handleFaqClick} />
    </div>
  );
};

export default Booking;