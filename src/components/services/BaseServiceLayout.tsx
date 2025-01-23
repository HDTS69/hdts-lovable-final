import { ReactNode } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface BaseServiceLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  servicePath?: string;
}

export const BaseServiceLayout = ({ 
  title, 
  description, 
  children,
  servicePath 
}: BaseServiceLayoutProps) => {
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
        previousPath: servicePath || window.location.pathname,
        openService: servicePath?.split('/')[1]
      }
    });
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
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
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
          viewport={{ once: true }}
        >
          <motion.h1 
            variants={item}
            className="text-3xl font-bold text-teal-700 mb-2"
          >
            {title}
          </motion.h1>
          <motion.p 
            variants={item}
            className="text-gray-600 mb-6 leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.div 
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div 
              variants={item}
              className="space-y-6"
            >
              {children}
            </motion.div>

            <motion.div variants={item}>
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden aspect-video bg-white shadow-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" />
                  <div className="relative rounded-lg overflow-hidden aspect-square bg-white shadow-sm" />
                </div>
              </div>

              <motion.div 
                className="mt-8 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <button
                  onClick={() => navigate('/booking')}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-all duration-300 hover:shadow-lg"
                >
                  Book Online
                </button>
              </motion.div>
            </motion.div>
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