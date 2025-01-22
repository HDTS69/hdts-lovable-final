import React from 'react';

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Trade Services",
    "image": "/lovable-uploads/5a63ed35-57aa-44f6-bf08-2471a210aeb2.png",
    "description": "Brisbane's leading provider of 24/7 emergency plumbing, gas fitting, roofing & air conditioning services. Available around the clock with upfront pricing and satisfaction guaranteed.",
    "@id": "https://hdtradeservices.com.au",
    "url": "https://hdtradeservices.com.au",
    "telephone": "1300420911",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Brisbane",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "postalCode": "4000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.4698,
      "longitude": 153.0251
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Saturday",
          "Sunday"
        ],
        "description": "24/7 Emergency Services Available"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/hd.tradeservices",
      "https://www.instagram.com/hd.tradeservices",
      "https://www.linkedin.com/in/hayden-drew-869aba341"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Trade Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Plumbing",
            "description": "24/7 emergency plumbing services including burst pipes, blocked drains, hot water repairs, and leak detection. Fast response times across Brisbane."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gas Fitting",
            "description": "Licensed gas fitting services including installations, repairs, and safety inspections for all gas appliances. Compliance certificates provided."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Split System Air Conditioning",
            "description": "Professional installation and maintenance of split system air conditioners. Energy-efficient solutions for homes and businesses."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ducted Air Conditioning",
            "description": "Expert installation and servicing of ducted air conditioning systems. Whole-home cooling solutions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AC Repairs & Maintenance",
            "description": "Professional air conditioning repair and maintenance services. Regular servicing to prevent breakdowns."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Repairs",
            "description": "Expert roof repairs and maintenance services. Quality workmanship and materials guaranteed."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Leak Detection",
            "description": "Advanced leak detection services using the latest technology. Fast and accurate diagnosis."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Roofing",
            "description": "Professional metal roofing installation and repairs. Long-lasting solutions for your home."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Maintenance",
            "description": "Regular roof maintenance and inspection services. Prevent costly repairs with proactive care."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gutter Guard Installation",
            "description": "Professional gutter guard installation to protect your gutters from debris and reduce maintenance."
          }
        }
      ]
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -27.4698,
        "longitude": 153.0251
      },
      "geoRadius": "50000",
      "description": "Servicing Brisbane, Ipswich, Moreton Bay, and Gold Coast regions"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "150",
      "bestRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Tyla Hodgson"
        },
        "reviewBody": "Hayden was fantastic, he effortlessly replaced my aircon unit and was professional and friendly at every touch point. Highly recommend! Thanks again Hayden."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Lachy Holliday"
        },
        "reviewBody": "Hayden was quick, efficient, knowledgeable and paid great attention to detail in ensuring the best outcome for my job. I will definitely be using HD Trade Services again!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Margaret Lawrence"
        },
        "reviewBody": "Hayden provided an outstanding service for my elderly mother recently when she moved into her new home. There were serious overland flow drainage issues which he has rectified with new drains that fall properly and additional sumps. He also cleaned the roof and gutters that were completely blocked with leaf litter. He was super professional and friendly, prompt and very communicative and we would highly recommend him."
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};