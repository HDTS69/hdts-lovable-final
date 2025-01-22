import { motion } from 'framer-motion';

export const BookingHeader = () => {
  return (
    <motion.div 
      className="text-center space-y-1 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-teal-700">
        Book Your Service Online
      </h2>
      <p className="text-sm text-gray-600 max-w-[600px] mx-auto">
        Schedule your appointment at your convenience. Our team will confirm your booking and provide any additional information you need.
      </p>
    </motion.div>
  );
};