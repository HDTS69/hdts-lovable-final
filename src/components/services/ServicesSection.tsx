import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Plumbing Services"
            description="Professional plumbing solutions for residential and commercial properties."
            link="/services/plumbing"
            level={2}
          />
          <ServiceCard
            title="Gas Fitting"
            description="Expert gas fitting and maintenance services."
            link="/services/gas-fitting"
            level={2}
          />
          <ServiceCard
            title="Roofing"
            description="Complete roofing solutions and repairs."
            link="/services/roofing"
            level={2}
          />
          <ServiceCard
            title="Air Conditioning"
            description="Installation and maintenance of air conditioning systems."
            link="/services/air-conditioning"
            level={2}
          />
        </div>
      </div>
    </section>
  );
}; 