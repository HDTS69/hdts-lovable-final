import { useRef } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { ReviewsSection } from '@/components/ReviewsSection';
import { ImpactSection } from '@/components/ImpactSection';
import { BrandsCarousel } from '@/components/BrandsCarousel';
import HeroSection from '@/components/HeroSection';
import { BookingForm } from '@/components/BookingForm';
import { BackToTop } from '@/components/BackToTop';
import { FAQSection, type FAQSectionRef } from '@/components/FAQSection';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { InstagramFeed } from '@/components/InstagramFeed';
import { smoothScrollTo } from "@/utils/smoothScroll";
import { AnimatedServiceIcon } from '@/components/AnimatedServiceIcon';
import { motion } from 'framer-motion';
import { Clock, Shield, Award, DollarSign } from 'lucide-react';
import { AnimatedWrench, AnimatedFlame, AnimatedHome, AnimatedWind } from '@/components/animated-icons';
import { ReviewGrid } from "@/components/reviews/ReviewGrid";

const Index = () => {
  const bookingSectionRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<FAQSectionRef>(null);

  const scrollToBooking = () => {
    if (bookingSectionRef.current) {
      smoothScrollTo(bookingSectionRef.current);
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
              <div id="plumbing-services">
                <AnimatedServiceIcon
                  icon={<AnimatedWrench className="h-8 w-8" />}
                  title="Plumbing"
                  description="Emergency repairs and installations"
                  path="/plumbing"
                />
              </div>
              <div id="gas-fitting-services">
                <AnimatedServiceIcon
                  icon={<AnimatedFlame className="h-8 w-8" />}
                  title="Gas Fitting"
                  description="Licensed services for home and business"
                  path="/gas-fitting"
                />
              </div>
              <div id="roofing-services">
                <AnimatedServiceIcon
                  icon={<AnimatedHome className="h-8 w-8" />}
                  title="Roof Repairs"
                  description="Expert maintenance and repairs"
                  path="/roofing"
                />
              </div>
              <div id="air-conditioning-services">
                <AnimatedServiceIcon
                  icon={<AnimatedWind className="h-8 w-8" />}
                  title="Air Conditioning"
                  description="Installation and servicing of AC systems"
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
                {[
                  {
                    icon: <Clock className="h-12 w-12 text-teal-500" strokeWidth={1.5} />,
                    title: "24/7 Service",
                    description: "Emergency response any time, day or night",
                    animation: { rotate: [0, 360] }
                  },
                  {
                    icon: <Shield className="h-12 w-12 text-teal-500" strokeWidth={1.5} />,
                    title: "Licensed & Insured",
                    description: "Fully qualified professionals you can trust",
                    animation: { scale: [1, 1.1, 1] }
                  },
                  {
                    icon: <Award className="h-12 w-12 text-teal-500" strokeWidth={1.5} />,
                    title: "Satisfaction Guaranteed",
                    description: "We're not happy until you're happy",
                    animation: { y: [0, -5, 0] }
                  },
                  {
                    icon: <DollarSign className="h-12 w-12 text-teal-500" strokeWidth={1.5} />,
                    title: "Finance Options",
                    description: "We offer convenient finance options, as well as Zip Pay, so you can pay in easy and flexible instalments",
                    animation: { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center space-y-3 p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={feature.animation}
                      transition={{
                        duration: index === 0 ? 20 : index === 3 ? 3 : 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-zinc-500 text-base">{feature.description}</p>
                  </motion.div>
                ))}
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

      {/* Brands - White */}
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

      <Footer handleServiceClick={() => {}} handleFaqClick={handleFaqClick} />
      <BackToTop />
    </>
  );
};

export default Index;