import { useRef } from "react";
import { StickyHeader } from "@/components/StickyHeader";
import { ReviewsSection } from '@/components/ReviewsSection';
import { ImpactSection } from '@/components/ImpactSection';
import { BrandsCarousel } from '@/components/BrandsCarousel';
import HeroSection from '@/components/HeroSection';
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

const RoofingPage = () => {
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
    <div className="flex flex-col min-h-screen">
      <StickyHeader scrollToBooking={scrollToBooking} />
      <HeroSection 
        scrollToBooking={scrollToBooking} 
        location="Brisbane"
        title="Expert Roof Repairs"
        subtitle="& Leak Detection"
        description="Professional roof repairs, leak detection & emergency services. Fast response times. Quality workmanship. Satisfaction guaranteed."
      />
      <FeaturesSection 
        plumbingRef={plumbingRef}
        gasFittingRef={gasFittingRef}
        roofingRef={roofingRef}
        airConditioningRef={airConditioningRef}
        plumbingServiceRef={plumbingServiceRef}
        gasFittingServiceRef={gasFittingServiceRef}
        roofingServiceRef={roofingServiceRef}
        airConditioningServiceRef={airConditioningServiceRef}
      />
      <ReviewsSection />
      <ImpactSection />
      <InstagramFeed />
      <BrandsCarousel />
      <FAQSection ref={faqRef} />
      <BookingForm />
      <CallToAction scrollToBooking={scrollToBooking} />
      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={handleFaqClick}
      />
      <BackToTop />
    </div>
  );
};

export default RoofingPage;