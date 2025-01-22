import { useRef, useEffect } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { ReviewsSection } from '@/components/ReviewsSection';
import { ImpactSection } from '@/components/ImpactSection';
import { BrandsCarousel } from '@/components/BrandsCarousel';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { BookingForm } from '@/components/BookingForm';
import { BackToTop } from '@/components/BackToTop';
import { FAQSection, type FAQSectionRef } from '@/components/FAQSection';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { InstagramFeed } from '@/components/InstagramFeed';
import { smoothScrollTo } from "@/utils/smoothScroll";
import type { PlumbingServiceRef } from "@/components/services/PlumbingService";
import type { GasFittingServiceRef } from "@/components/services/GasFittingService";
import type { RoofingServiceRef } from "@/components/services/RoofingService";
import type { AirConditioningServiceRef } from "@/components/services/AirConditioningService";
import { TestGoogleReviews } from '@/components/TestGoogleReviews';
import { AnimatedServiceIcon } from '@/components/AnimatedServiceIcon';
import { motion } from 'framer-motion';
import { Clock, Flame, Home, Wind, DollarSign, Award, Shield } from 'lucide-react';
import { AnimatedWrench, AnimatedFlame, AnimatedHome, AnimatedWind } from '@/components/animated-icons';
import { useLocation } from 'react-router-dom';
import { ReviewGrid } from "@/components/reviews/ReviewGrid";

const Index = () => {
  const bookingSectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<FAQSectionRef>(null);
  const plumbingRef = useRef<HTMLDivElement>(null);
  const plumbingServiceRef = useRef<PlumbingServiceRef>(null);
  const gasFittingRef = useRef<HTMLDivElement>(null);
  const gasFittingServiceRef = useRef<GasFittingServiceRef>(null);
  const roofingRef = useRef<HTMLDivElement>(null);
  const roofingServiceRef = useRef<RoofingServiceRef>(null);
  const airConditioningRef = useRef<HTMLDivElement>(null);
  const airConditioningServiceRef = useRef<AirConditioningServiceRef>(null);
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { openService?: string } | null;
    if (state?.openService) {
      let ref: HTMLDivElement | null = null;
      let serviceRef: any = null;

      switch (state.openService) {
        case 'plumbing':
          ref = plumbingRef.current;
          serviceRef = plumbingServiceRef.current;
          break;
        case 'gas':
          ref = gasFittingRef.current;
          serviceRef = gasFittingServiceRef.current;
          break;
        case 'roofing':
          ref = roofingRef.current;
          serviceRef = roofingServiceRef.current;
          break;
        case 'air-conditioning':
          ref = airConditioningRef.current;
          serviceRef = airConditioningServiceRef.current;
          break;
      }

      if (ref && serviceRef) {
        // First, open the services
        serviceRef.openServices();
        
        // Then scroll to the section after a delay
        setTimeout(() => {
          const rect = ref?.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetY = rect?.top + scrollTop - 120; // 120px offset for header
          window.scrollTo({
            top: targetY,
            behavior: 'instant'
          });
        }, 100);
      }

      // Clear the state after handling
      window.history.replaceState(null, '');
    }
  }, [location.state]);

  const scrollToBooking = () => {
    if (bookingSectionRef.current) {
      smoothScrollTo(bookingSectionRef.current);
    }
  };

  const handleServiceClick = (service: string) => {
    let ref: HTMLDivElement | null = null;
    let serviceRef: any = null;

    switch (service) {
      case 'plumbing':
        ref = plumbingRef.current;
        serviceRef = plumbingServiceRef.current;
        break;
      case 'gas':
        ref = gasFittingRef.current;
        serviceRef = gasFittingServiceRef.current;
        break;
      case 'roofing':
        ref = roofingRef.current;
        serviceRef = roofingServiceRef.current;
        break;
      case 'air-conditioning':
        ref = airConditioningRef.current;
        serviceRef = airConditioningServiceRef.current;
        break;
    }

    if (ref && serviceRef) {
      smoothScrollTo(ref, 120);
      setTimeout(() => {
        serviceRef.openServices();
      }, 800);
    }
  };

  const handleFaqClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (faqRef.current) {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        smoothScrollTo(faqSection);
        setTimeout(() => {
          faqRef.current?.toggleFAQ();
        }, 500);
      }
    }
  };

  return (
    <>
      <StickyHeader scrollToBooking={scrollToBooking} />
      
      {/* Hero - Dark */}
      <section className="bg-black">
        <HeroSection scrollToBooking={scrollToBooking} />
      </section>

      {/* Services - White */}
      <section className="bg-white">
        <div className="w-full py-12 md:py-16 lg:py-20">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-6 md:gap-8 grid-cols-1">
              <div ref={plumbingRef} id="plumbing-services">
                <AnimatedServiceIcon
                  icon={<AnimatedWrench className="h-8 w-8" />}
                  title="Plumbing"
                  description="Emergency repairs and installations"
                  ref={plumbingServiceRef}
                  path="/plumbing"
                />
              </div>
              <div ref={gasFittingRef} id="gas-fitting-services">
                <AnimatedServiceIcon
                  icon={<AnimatedFlame className="h-8 w-8" />}
                  title="Gas Fitting"
                  description="Licensed services for home and business"
                  ref={gasFittingServiceRef}
                  path="/gas-fitting"
                />
              </div>
              <div ref={roofingRef} id="roofing-services">
                <AnimatedServiceIcon
                  icon={<AnimatedHome className="h-8 w-8" />}
                  title="Roof Repairs"
                  description="Expert maintenance and repairs"
                  ref={roofingServiceRef}
                  path="/roofing"
                />
              </div>
              <div ref={airConditioningRef} id="air-conditioning-services">
                <AnimatedServiceIcon
                  icon={<AnimatedWind className="h-8 w-8" />}
                  title="Air Conditioning"
                  description="Installation and servicing of AC systems"
                  ref={airConditioningServiceRef}
                  path="/air-conditioning"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Light Gray */}
      <section className="bg-gray-50">
        <div className="w-full min-h-[100vh] sm:min-h-0 py-8">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-3xl text-teal-700">
                  Why Choose HD Trade Services?
                </h2>
                <p className="mx-auto max-w-[600px] text-zinc-500 text-sm md:text-base">
                  We deliver excellence in every service, guaranteed.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                <motion.div 
                  className="flex flex-col items-center space-y-3 p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Clock className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold">24/7 Service</h3>
                  <p className="text-zinc-500 text-base">Emergency response any time, day or night</p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center space-y-3 p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Shield className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold">Licensed & Insured</h3>
                  <p className="text-zinc-500 text-base">Fully qualified professionals you can trust</p>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col items-center space-y-3 p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Award className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
                  <p className="text-zinc-500 text-base">We're not happy until you're happy</p>
                </motion.div>

                <motion.div 
                  className="flex flex-col items-center space-y-3 p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <DollarSign className="h-12 w-12 text-teal-500" strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-xl font-bold">Finance Options</h3>
                  <p className="text-zinc-500 text-base">We offer convenient finance options, as well as Zip Pay, so you can pay in easy and flexible instalments</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers - White */}
      <section className="bg-white">
        <ImpactSection />
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <ReviewGrid />
        </div>
      </section>

      {/* Brands - White (keeping this white as requested) */}
      <section className="bg-white">
        <BrandsCarousel />
      </section>

      {/* Instagram Feed - Light Gray */}
      <section className="bg-gray-50">
        <InstagramFeed />
      </section>

      {/* Booking Form - White */}
      <section className="bg-white" ref={bookingSectionRef} id="booking-section">
        <BookingForm />
      </section>

      {/* FAQ - Light Gray */}
      <section className="bg-gray-50">
        <FAQSection ref={faqRef} />
      </section>

      {/* CTA - White */}
      <section className="bg-white">
        <CallToAction scrollToBooking={scrollToBooking} />
      </section>

      <Footer handleServiceClick={handleServiceClick} handleFaqClick={handleFaqClick} />
      <BackToTop />
    </>
  );
};

export default Index;