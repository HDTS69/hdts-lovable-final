import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CarouselTrack } from './brands/CarouselTrack';
import { slideAnimation, noCopyStyles } from './brands/CarouselStyles';
import type { BrandLogo } from './brands/types';
import { Helmet } from 'react-helmet';

const logos: BrandLogo[] = [
  { 
    src: '/lovable-uploads/3b41e333-b031-45a5-ac8c-527c228397b4.png',
    alt: 'Rinnai - Trusted Hot Water System Provider',
    width: 160,
    height: 80,
    brand: 'Rinnai',
    description: 'Leading manufacturer of hot water systems and heating solutions'
  },
  { 
    src: '/lovable-uploads/1a30fc10-f5ce-4a46-9620-06e31cdfa161.png',
    alt: 'AquaMax - Premium Water Heating Solutions',
    width: 160,
    height: 80,
    brand: 'AquaMax',
    description: 'Premium manufacturer of water heating systems'
  },
  { 
    src: '/lovable-uploads/72e471ea-2cca-4980-a78c-eb53d26ea3fc.png',
    alt: 'Everhot - Quality Hot Water Systems',
    brand: 'Everhot',
    description: 'Reliable hot water system solutions'
  },
  { 
    src: '/lovable-uploads/c6d9abea-9e12-43fa-8270-b9ca5f6e8f5a.png',
    alt: 'Bosch - German Engineered Home Appliances',
    brand: 'Bosch',
    description: 'German engineered home appliances and heating systems'
  },
  { 
    src: '/lovable-uploads/d4c80244-9315-45d7-ba94-8fda91e3b041.png',
    alt: 'Rheem - Trusted Water Heating Solutions',
    brand: 'Rheem',
    description: 'Leading manufacturer of water heaters and HVAC systems'
  },
  { 
    src: '/lovable-uploads/a3a1f6b2-b9e3-4ba6-9789-aa1dbe7b312b.png',
    alt: 'Caroma - Australian Bathroom Products',
    brand: 'Caroma',
    description: 'Australian manufacturer of bathroom and plumbing products'
  },
  { 
    src: '/lovable-uploads/3af9fb82-ee7f-4e0c-b893-0b118d7ad1d4.png',
    alt: 'Bromic Heating - Premium Outdoor Heating',
    brand: 'Bromic',
    description: 'Premium outdoor heating solutions'
  },
  { 
    src: '/lovable-uploads/1d70d92a-43ea-40ea-80ac-1daf68484734.png',
    alt: 'Mitsubishi Electric - Leading Air Conditioning',
    brand: 'Mitsubishi Electric',
    description: 'Leading manufacturer of air conditioning and heating systems'
  },
  { 
    src: '/lovable-uploads/8cc34d2e-0ec2-4646-b367-dba32b334d0b.png',
    alt: 'Reece - Quality Plumbing Supplies',
    brand: 'Reece',
    description: 'Australia\'s leading supplier of plumbing products'
  },
  { 
    src: '/lovable-uploads/96fbf8d1-4d5f-4381-83e3-cf69bbf89b96.png',
    alt: 'Dux - Australian Hot Water Systems',
    brand: 'Dux',
    description: 'Australian manufacturer of hot water systems'
  },
  { 
    src: '/lovable-uploads/e1c8487f-411b-4de7-95e8-b65f36532cf6.png',
    alt: 'Thermann - Quality Hot Water Solutions',
    brand: 'Thermann',
    description: 'Quality hot water systems and solutions'
  },
  { 
    src: '/lovable-uploads/625908b2-8082-4ded-bc21-f1b5fb99d1fb.png',
    alt: 'Stiebel Eltron - German Engineering Excellence',
    brand: 'Stiebel Eltron',
    description: 'German engineered water heating and renewable energy systems'
  },
  { 
    src: '/lovable-uploads/bf41bad2-19d2-4c87-9491-771463b5a1e0.png',
    alt: 'Tradelink - Professional Plumbing Supplies',
    brand: 'Tradelink',
    description: 'Leading supplier of plumbing and bathroom products'
  },
  { 
    src: '/lovable-uploads/986cd7c8-ec0a-4190-8287-da239b754827.png',
    alt: 'Vulcan - Reliable Water Heating Solutions',
    brand: 'Vulcan',
    description: 'Reliable manufacturer of water heating systems'
  }
];

export const BrandsCarousel: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Preload all images
    logos.forEach(logo => {
      const img = new Image();
      img.src = logo.src;
      img.onload = () => {
        setPreloadedImages(prev => {
          const newSet = new Set(prev);
          newSet.add(logo.src);
          return newSet;
        });
      };
      img.onerror = () => handleImageError(logo.src);
    });
  }, []);

  const handleImageError = (src: string) => {
    console.error(`Error loading image: ${src}`);
    setFailedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(src);
      return newSet;
    });
  };

  const brandsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HD Trade Services",
    "brand": logos.map(logo => ({
      "@type": "Brand",
      "name": logo.brand,
      "description": logo.description,
      "logo": logo.src
    }))
  };

  if (preloadedImages.size === 0) {
    return (
      <div className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            <div className="h-20 bg-gray-200 rounded mt-8"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(brandsSchema)}
        </script>
      </Helmet>
      <section 
        className="w-full py-12 md:py-16 lg:py-20"
        aria-label="Our Trusted Brands"
      >
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center space-y-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-teal-700">
              Trusted Brands We Work With
            </h2>
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              We partner with industry-leading suppliers to ensure top-quality materials and products for all our services.
            </p>
          </motion.div>
          
          <div 
            className="w-full overflow-hidden p-2 rounded-lg relative"
            role="region"
            aria-label="Brand Partner Carousel"
          >
            <style dangerouslySetInnerHTML={{ __html: slideAnimation + noCopyStyles }} />
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <CarouselTrack 
              logos={logos}
              failedImages={failedImages}
              handleImageError={handleImageError}
            />
          </div>
        </div>
      </section>
    </>
  );
};