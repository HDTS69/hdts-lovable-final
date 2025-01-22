import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useEffect } from 'react';

interface Service {
  name: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

interface ServiceListProps {
  services: Service[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType: string;
}

export const ServiceList = ({ services, isOpen, onOpenChange, serviceType }: ServiceListProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const { previousPath, openService } = location.state || {};
      if (openService === serviceType) {
        // Clear the state first to prevent re-opening
        window.history.replaceState({}, '');
        // Open the toggle
        onOpenChange(true);
      }
    }
  }, [location.pathname, location.state, serviceType, onOpenChange]);

  const handleServiceClick = (path: string) => {
    navigate(path);
  };

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={onOpenChange}
      className="w-full"
    >
      <CollapsibleTrigger className="flex items-center justify-center w-full text-xs text-teal-500 hover:text-teal-600 transition-all duration-300 hover:scale-105">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          View Services
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 ml-1" />
          </motion.div>
        </motion.div>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-center"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleServiceClick(service.path)}
                  className="flex items-center justify-start bg-white/50 backdrop-blur-sm p-2 rounded-md shadow-sm hover:bg-teal-50 transition-colors duration-200 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2 flex-shrink-0"></span>
                  <span className="text-sm text-zinc-700">{service.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </CollapsibleContent>
    </Collapsible>
  );
};

ServiceList.displayName = 'ServiceList';