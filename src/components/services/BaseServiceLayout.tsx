import { type ReactNode } from "react";
import { type ServiceInfo } from "@/types";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export interface BaseServiceLayoutProps {
  serviceInfo: ServiceInfo;
  showGasWarning?: boolean;
  children?: ReactNode;
}

export const BaseServiceLayout = ({
  serviceInfo,
  showGasWarning = false,
  children
}: BaseServiceLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleServiceClick = () => {
    navigate('/', { 
      state: { 
        previousPath: location.pathname, 
        openService: showGasWarning ? 'gas-fitting' : 'plumbing' 
      } 
    });
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

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      <StickyHeader scrollToBooking={() => navigate('/booking')} />
      
      <main className="pt-20 pb-6">
        <motion.div 
          className="max-w-[1120px] mx-auto px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={itemAnimation}
            className="text-3xl font-bold text-teal-700 mb-2"
          >
            {serviceInfo.title}
          </motion.h1>
          <motion.p 
            variants={itemAnimation}
            className="text-gray-600 mb-6"
          >
            {serviceInfo.description}
          </motion.p>

          {showGasWarning && (
            <motion.div 
              variants={itemAnimation}
              className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mb-6"
            >
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700">
                  If you smell gas or suspect a gas leak, evacuate the area immediately and call emergency services on 000.
                </p>
              </div>
            </motion.div>
          )}

          <motion.div 
            variants={itemAnimation}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <motion.div 
                variants={itemAnimation}
                className="bg-teal-50 p-4 rounded-lg mb-4"
              >
                <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
                  {serviceInfo.services.icon}
                  {serviceInfo.services.title}
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-gray-700">
                  {serviceInfo.services.items.map((service, index) => (
                    <motion.li 
                      key={index}
                      variants={itemAnimation}
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                variants={itemAnimation}
                className="bg-teal-50/50 p-4 rounded-lg mb-4"
              >
                <h3 className="text-xl font-semibold text-teal-700 mb-3 flex items-center">
                  {serviceInfo.benefits.icon}
                  {serviceInfo.benefits.title}
                </h3>
                <ul className="list-disc list-inside space-y-1.5 text-gray-700">
                  {serviceInfo.benefits.items.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      variants={itemAnimation}
                    >
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={itemAnimation}>
              <div className="space-y-4 mb-4">
                <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video bg-white" />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square bg-white" />
                  <div className="relative rounded-lg overflow-hidden shadow-lg aspect-square bg-white" />
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  variants={itemAnimation}
                  onClick={() => navigate('/booking')}
                  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2.5 px-8 rounded-md transition-colors duration-200"
                >
                  Book Online
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
          {children}
        </motion.div>
      </main>

      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={(e) => {
          e.preventDefault();
          navigate('/#faq');
        }}
      />
    </div>
  );
}

export { ServiceInfo };

