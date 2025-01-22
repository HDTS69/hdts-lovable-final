import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';

export const CompanyInfo = () => {
  const [isHoursOpen, setIsHoursOpen] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">HD Trade Services</h3>
      <div className="space-y-2">
        <a href="tel:1300420911" className="flex items-center text-gray-600 hover:text-teal-600">
          <PhoneCall className="h-4 w-4 mr-2" />
          1300 420 911
        </a>
        <a href="mailto:admin@hdtradeservices.com.au" className="flex items-center text-gray-600 hover:text-teal-600">
          <Mail className="h-4 w-4 mr-2" />
          admin@hdtradeservices.com.au
        </a>
        <a 
          href="https://maps.google.com/?q=Brisbane,QLD" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-gray-600 hover:text-teal-600"
        >
          <MapPin className="h-4 w-4 mr-2" />
          Brisbane, QLD
        </a>

        <div>
          <button 
            onClick={() => setIsHoursOpen(!isHoursOpen)}
            className="flex items-center text-gray-600 hover:text-teal-600 group"
          >
            <Clock className="h-4 w-4 mr-2" />
            <span>Opening Hours</span>
            <ChevronDown 
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${isHoursOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {isHoursOpen && (
            <div className="space-y-1 text-sm text-gray-600 mt-2 pl-6">
              <div className="flex justify-between">
                <span>Monday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="ml-4 text-teal-600">OPEN 24 Hours</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};