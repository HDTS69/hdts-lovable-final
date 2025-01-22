import { ReactNode } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface RoofingServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const RoofingServiceLayout = ({
  title,
  description,
  children,
}: RoofingServiceLayoutProps) => {
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader scrollToBooking={scrollToBooking} />
      
      <main className="pt-20 pb-6">
        <motion.div 
          className="max-w-[1120px] mx-auto px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={item}
            className="text-3xl font-bold text-teal-700 mb-2"
          >
            {title}
          </motion.h1>
          <motion.p 
            variants={item}
            className="text-gray-600 mb-6"
          >
            {description}
          </motion.p>
          <motion.div variants={item}>
            {children}
          </motion.div>
        </motion.div>
      </main>

      <Footer 
        handleServiceClick={handleServiceClick} 
        handleFaqClick={handleFaqClick} 
      />
    </div>
  );
}; 