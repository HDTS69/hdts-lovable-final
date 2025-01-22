import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export const ImpactSection = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-teal-700">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">See the difference we've made in our community.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="text-center space-y-3 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-5xl font-bold text-teal-500">
              <CountUp end={1000} suffix="+" duration={2.5} enableScrollSpy />
            </div>
            <p className="text-gray-600 text-lg">Happy Customers</p>
          </motion.div>
          
          <motion.div 
            className="text-center space-y-3 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-5xl font-bold text-teal-500">
              <CountUp end={14} suffix="+" duration={2} enableScrollSpy />
            </div>
            <p className="text-gray-600 text-lg">Years of Experience</p>
          </motion.div>
          
          <motion.div 
            className="text-center space-y-3 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-5xl font-bold text-teal-500">
              <CountUp end={2000} suffix="+" duration={2.5} enableScrollSpy />
            </div>
            <p className="text-gray-600 text-lg">Projects Completed</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
