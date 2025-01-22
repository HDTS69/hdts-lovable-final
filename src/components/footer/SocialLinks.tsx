import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const SocialLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
      <div className="flex space-x-4">
        <a 
          href="https://facebook.com/hd.tradeservices" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-600"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a 
          href="https://instagram.com/hd.tradeservices" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-600"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/hayden-drew-869aba341" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-teal-600"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
      <div className="pt-4">
        <p className="text-sm text-gray-600">Licensed & Certified</p>
        <p className="text-sm text-gray-600">QBCC: 15371385</p>
        <p className="text-sm text-gray-600">ARC: L176115</p>
      </div>
    </div>
  );
};