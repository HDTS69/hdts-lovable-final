import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { smoothScrollTo } from '@/utils/smoothScroll';

interface QuickLinksProps {
  onFaqClick: (e: React.MouseEvent) => void;
}

export const QuickLinks = ({ onFaqClick }: QuickLinksProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('booking-section');
      if (element) {
        smoothScrollTo(element);
      }
    } else {
      navigate('/booking');
    }
  };

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      smoothScrollTo(element);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a 
            href={location.pathname === '/' ? '#booking-section' : '/booking'} 
            onClick={handleBookingClick}
            className="text-gray-600 hover:text-teal-600"
          >
            Book Online
          </a>
        </li>
        <li>
          <Link to="/terms" className="text-gray-600 hover:text-teal-600">
            Terms of Service
          </Link>
        </li>
        <li>
          <Link to="/privacy" className="text-gray-600 hover:text-teal-600">
            Privacy Policy
          </Link>
        </li>
        <li>
          <a 
            href="#faq" 
            onClick={onFaqClick} 
            className="text-gray-600 hover:text-teal-600"
          >
            FAQs
          </a>
        </li>
      </ul>
    </div>
  );
};