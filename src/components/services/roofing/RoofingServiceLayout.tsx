import React from 'react';
import { motion } from 'framer-motion';
import { ServiceCard } from '../ServiceCard';

interface RoofingServiceLayoutProps {
  children: React.ReactNode;
}

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

export const RoofingServiceLayout: React.FC<RoofingServiceLayoutProps> = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-8"
    >
      <motion.h1 
        variants={item}
        className="text-4xl font-bold text-gray-900 mb-4"
      >
        Roofing Services
      </motion.h1>
      <motion.p 
        variants={item}
        className="text-lg text-gray-600 mb-8"
      >
        Complete roofing solutions to protect your property
      </motion.p>
      
      <motion.div variants={item}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Available Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            title="Roof Repairs"
            description="Expert repairs for all types of roof damage."
            link="/contact"
            level={3}
          />
          <ServiceCard
            title="Roof Maintenance"
            description="Regular maintenance to extend your roof's lifespan."
            link="/contact"
            level={3}
          />
        </div>
      </motion.div>
      
      <motion.div variants={item} className="mt-8">
        {children}
      </motion.div>
    </motion.div>
  );
}; 