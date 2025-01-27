import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { StickyHeader } from '@/components/StickyHeader';
import { Footer } from '@/components/Footer';
import { BookingForm } from '@/components/BookingForm';
import { FAQSection, type FAQSectionRef } from '@/components/FAQSection';
import { ServiceList } from '@/components/ServiceList';
import { Helmet } from 'react-helmet-async';
import { smoothScrollTo } from "@/utils/smoothScroll";
import { SuburbContent } from '@/components/suburb/SuburbContent';
import { LoadingState } from '@/components/suburb/LoadingState';
import { ErrorState } from '@/components/suburb/ErrorState';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ImpactSection } from '@/components/ImpactSection';
import { BrandsCarousel } from '@/components/BrandsCarousel';
import { InstagramFeed } from '@/components/InstagramFeed';
import { CallToAction } from '@/components/CallToAction';
import { BackToTop } from '@/components/BackToTop';
import HeroSection from '@/components/HeroSection';

const services = [
  { name: "Plumbing Services", path: "/plumbing" },
  { name: "Gas Fitting", path: "/gas-fitting" },
  { name: "Roofing Solutions", path: "/roofing" },
  { name: "Air Conditioning", path: "/air-conditioning" }
];

const SuburbPage = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const faqRef = useRef<FAQSectionRef>(null);

  // Enhanced query with better error handling and caching
  const { data: suburb, isLoading, error } = useQuery({
    queryKey: ['suburb', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      console.log('Fetching suburb data for:', slug);
      
      const { data, error } = await supabase
        .from('suburbs')
        .select('*')
        .eq('slug', slug.toLowerCase())
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching suburb:', error);
        throw error;
      }
      
      if (!data) {
        console.log('No suburb found for slug:', slug);
        throw new Error('Suburb not found');
      }
      
      console.log('Suburb data fetched successfully:', data.name);
      return data;
    },
    retry: false,
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep in cache for 30 minutes (renamed from cacheTime)
  });

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      smoothScrollTo(bookingSection);
    }
  };

  const handleServiceClick = (service: string) => {
    console.log('Service clicked:', service);
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

  if (isLoading) return <LoadingState />;
  if (error || !suburb) return <ErrorState />;

  return (
    <>
      <Helmet>
        <title>{suburb.meta_title}</title>
        <meta name="description" content={suburb.meta_description} />
        <meta property="og:title" content={suburb.meta_title} />
        <meta property="og:description" content={suburb.meta_description} />
        <link rel="canonical" href={`https://hdtradeservices.com.au/${suburb.slug}`} />
      </Helmet>

      <StickyHeader scrollToBooking={scrollToBooking} />

      <main className="min-h-screen">
        <HeroSection 
          scrollToBooking={scrollToBooking}
          location={suburb.name}
        />
        
        <SuburbContent suburb={suburb} />
        
        <ServiceList 
          services={services}
          isOpen={isServicesOpen}
          onOpenChange={setIsServicesOpen}
          serviceType="suburb"
        />
        
        <ReviewsSection />
        <ImpactSection />
        <InstagramFeed />
        <BrandsCarousel />
        <FAQSection ref={faqRef} />
        <BookingForm />
        <CallToAction scrollToBooking={scrollToBooking} />
      </main>

      <Footer 
        handleServiceClick={handleServiceClick}
        handleFaqClick={handleFaqClick}
      />
      <BackToTop />
    </>
  );
};

export default SuburbPage;