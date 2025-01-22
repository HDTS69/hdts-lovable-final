import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface ACServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const ACServiceLayout = ({ children, title, description }: ACServiceLayoutProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToBooking = () => {
    navigate('/booking');
  };

  const handleServiceClick = (service: string) => {
    navigate('/', { 
      state: { 
        previousPath: window.location.pathname 
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
      
      <div className="container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-teal-700 mb-6">{title}</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {description}
          </p>
          {children}
        </motion.div>
      </div>

      <Footer 
        handleServiceClick={handleServiceClick} 
        handleFaqClick={handleFaqClick} 
      />
    </div>
  );
};