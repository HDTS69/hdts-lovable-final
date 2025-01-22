import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion } from 'framer-motion';
import { useConfetti } from '@/hooks/useConfetti';
import { smoothScrollTo } from "@/utils/smoothScroll";

interface HeroSectionProps {
  scrollToBooking: () => void;
  location?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export const HeroSection = ({ 
  scrollToBooking, 
  location = "Brisbane",
  title,
  subtitle,
  description 
}: HeroSectionProps) => {
  const { triggerConfetti } = useConfetti();

  const handleBookingClick = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      triggerConfetti();
      smoothScrollTo(bookingSection);
    }
  };

  return (
    <section 
      className="w-full py-12 md:py-16 lg:py-20 text-white pt-20 relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div 
        className="absolute inset-0 bg-black animate-gradient"
        style={{
          background: 'linear-gradient(-45deg, #000000, #001a1a, #000000, #003333)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />
      
      <div className="container px-4 md:px-6 relative z-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 
              id="hero-heading"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {title ? (
                <>
                  <span className="block">{location}</span>
                  <span className="block">{title}</span>
                  {subtitle && <span className="block">{subtitle}</span>}
                </>
              ) : (
                <>
                  <span className="block">{location}</span>
                  <span className="block">24/7 Emergency Repairs</span>
                  <span className="block">& Installations</span>
                </>
              )}
            </h1>
          </motion.header>
          <motion.p 
            className="mx-auto max-w-[700px] text-zinc-200 mb-4 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description || "Professional plumbing, gas, roofing & air conditioning services. Fast response. Fair pricing. Guaranteed satisfaction."}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white transition-colors duration-300 group"
              onClick={handleBookingClick}
              aria-label="Book online service"
            >
              <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              <span>Book Online</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};