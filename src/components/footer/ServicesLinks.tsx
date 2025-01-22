import React from 'react';
import { Link } from 'react-router-dom';

interface ServicesLinksProps {
  handleServiceClick: (service: string) => void;
}

export const ServicesLinks = ({ handleServiceClick }: ServicesLinksProps) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/plumbing" 
            className="text-gray-600 hover:text-teal-600"
            onClick={handleClick}
          >
            Plumbing Services
          </Link>
        </li>
        <li>
          <Link 
            to="/gas-fitting" 
            className="text-gray-600 hover:text-teal-600"
            onClick={handleClick}
          >
            Gas Fitting
          </Link>
        </li>
        <li>
          <Link 
            to="/roofing" 
            className="text-gray-600 hover:text-teal-600"
            onClick={handleClick}
          >
            Roofing Solutions
          </Link>
        </li>
        <li>
          <Link 
            to="/air-conditioning" 
            className="text-gray-600 hover:text-teal-600"
            onClick={handleClick}
          >
            Air Conditioning
          </Link>
        </li>
      </ul>
    </div>
  );
};