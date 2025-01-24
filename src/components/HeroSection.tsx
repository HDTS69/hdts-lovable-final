import React, { memo, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useConfetti } from '@/hooks/useConfetti';
import { smoothScrollTo } from "@/utils/smoothScroll";
import '../styles/hero-gradient.css';

interface HeroSectionProps {
  scrollToBooking: () => void;
  location?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

// Define animation variants outside component to prevent recreation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.2 }
  }
};

const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToBooking, 
  location = "Brisbane",
  title,
  subtitle,
  description 
}) => {
  const { triggerConfetti } = useConfetti();

  const handleBookingClick = useCallback(() => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      triggerConfetti();
      smoothScrollTo(bookingSection);
    }
  }, [triggerConfetti]);

  return (
    <LazyMotion features={domAnimation}>
      <section 
        className="w-full py-12 md:py-16 lg:py-20 text-white pt-20 relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />
        
        <div className="container px-4 md:px-6 relative z-20">
          <m.div
            className="flex flex-col items-center space-y-4 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <m.h1 
              id="hero-heading"
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              variants={itemVariants}
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
                  <span className="block font-bold">24/7 Emergency Repairs</span>
                  <span className="block">& Installations</span>
                </>
              )}
            </m.h1>
            
            <m.p 
              className="mx-auto max-w-[700px] text-zinc-200 mb-4 text-lg md:text-xl"
              variants={itemVariants}
            >
              {description || "Professional plumbing, gas, roofing & air conditioning services. Fast response. Fair pricing. Guaranteed satisfaction."}
            </m.p>
            
            <m.div 
              className="flex flex-col sm:flex-row gap-4 mb-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white transition-colors duration-300 group will-change-transform"
                onClick={handleBookingClick}
                aria-label="Book online service"
              >
                <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                <span>Book Online</span>
              </Button>
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(HeroSection);