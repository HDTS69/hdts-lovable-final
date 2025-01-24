import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  level?: 2 | 3 | 4; // Allow specifying heading level for proper hierarchy
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  link,
  level = 2 // Default to h2 if not specified
}) => {
  const Heading = `h${level}` as 'h2' | 'h3' | 'h4';

  return (
    <div className="relative overflow-hidden rounded-lg border border-teal-600 bg-white p-4">
      <Heading className="text-lg font-bold text-teal-800 hover:text-teal-900 transition-colors">
        {title}
      </Heading>
      <p className="mt-2 text-gray-800">
        {description}
      </p>
      <Button
        variant="outline"
        asChild
        className="mt-4"
        aria-label={`View ${title.toLowerCase()} details`}
      >
        <Link to={link}>
          <span className="text-teal-800">View Services</span>
        </Link>
      </Button>
    </div>
  );
}; 