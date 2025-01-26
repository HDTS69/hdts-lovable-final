import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Upload } from "lucide-react";
import { useConfetti } from '@/hooks/useConfetti';
import { trackBookingConversion } from '@/utils/analytics';
import { useGooglePlaces } from '@/hooks/useGooglePlaces';
import { SUPABASE_PUBLISHABLE_KEY } from "@/integrations/supabase/client";

interface BookingFormProps {
  scrollToBooking?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ scrollToBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [preferredTime, setPreferredTime] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { triggerConfetti } = useConfetti();
  const addressInputRef = useRef<HTMLInputElement>(null);
  const [isGoogleMapsLoaded, setIsGoogleMapsLoaded] = useState(false);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const [addressError, setAddressError] = useState('');

  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 50;
    let timeoutId: NodeJS.Timeout;

    const checkGoogleMapsLoaded = () => {
      if (window.google?.maps?.places) {
        setIsGoogleMapsLoaded(true);
        setAddressError('');
        return;
      }
      
      attempts++;
      if (attempts < maxAttempts) {
        timeoutId = setTimeout(checkGoogleMapsLoaded, 100);
      } else {
        setAddressError('Address autocomplete is currently unavailable. Please type your address manually.');
      }
    };

    // Listen for Google Maps auth errors
    const handleAuthError = () => {
      setAddressError('Address autocomplete is not available. Please type your address manually.');
      setIsGoogleMapsLoaded(false);
    };

    document.addEventListener('google-maps-auth-error', handleAuthError);
    checkGoogleMapsLoaded();

    return () => {
      document.removeEventListener('google-maps-auth-error', handleAuthError);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const { initAutocomplete } = useGooglePlaces({
    onPlaceSelected: (place) => {
      if (place.formatted_address) {
        setAddress(place.formatted_address);
        setAddressError('');
      }
    },
    onInputChange: (value) => {
      setAddress(value);
    }
  });

  useEffect(() => {
    if (isGoogleMapsLoaded && addressInputRef.current) {
      try {
        const cleanup = initAutocomplete(addressInputRef.current);
        return () => {
          if (cleanup) cleanup();
        };
      } catch (error) {
        console.error('Error initializing Google Places:', error);
        setAddressError('Address autocomplete encountered an error. Please type your address manually.');
      }
    }
  }, [isGoogleMapsLoaded, initAutocomplete]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://mdfmjrcznydyyboergpx.supabase.co/functions/v1/send-booking-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_PUBLISHABLE_KEY}`
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          services: selectedServices,
          preferred_time: preferredTime,
          message,
          newsletter_subscription: isSubscribed,
          status: 'pending'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit booking');
      }

      setIsSubmitted(true);
      triggerConfetti();
      trackBookingConversion(window.location.href);
      
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      setSelectedServices([]);
      setPreferredTime('');
      setMessage('');
      setIsSubscribed(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section className="w-full max-w-xl mx-auto py-8 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-[#0B7A75] mb-2">Book Your Service Online</h2>
        <p className="text-gray-600 text-sm">
          Schedule your appointment at your convenience. Our team will confirm your booking shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="name" className="text-sm">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 h-9 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 h-9 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="phone" className="text-sm">Phone</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1 h-9 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-sm">Address</Label>
            <Input
              id="address"
              ref={addressInputRef}
              placeholder={addressError ? "Enter address manually" : "Start typing your address"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              aria-invalid={!!addressError}
              aria-describedby={addressError ? "address-error" : undefined}
              required
              className={`mt-1 h-9 text-sm ${addressError ? 'border-red-500' : ''}`}
              autoComplete="off"
              disabled={isSubmitting}
            />
            {addressError && (
              <p id="address-error" className="text-xs text-red-500 mt-1">
                {addressError}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-sm mb-1 block">Services Required</Label>
            <div className="grid grid-cols-1 gap-1.5">
              {[
                ['plumbing', 'Plumbing'],
                ['gas', 'Gas Fitting'],
                ['roofing', 'Roof Repairs'],
                ['ac', 'Air Conditioning']
              ].map(([value, label]) => (
                <div key={value} className="flex items-center space-x-2">
                  <Checkbox
                    id={value}
                    checked={selectedServices.includes(value)}
                    onCheckedChange={() => handleServiceToggle(value)}
                    className="h-3.5 w-3.5"
                  />
                  <label htmlFor={value} className="text-sm">{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm mb-1 block">Preferred Time</Label>
            <RadioGroup value={preferredTime} onValueChange={setPreferredTime} className="grid grid-cols-1 gap-1.5">
              {[
                ['morning', 'Morning'],
                ['afternoon', 'Afternoon'],
                ['weekend', 'Weekend'],
                ['after_hours', 'After Hours']
              ].map(([value, label]) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={value} className="h-3.5 w-3.5" />
                  <label htmlFor={value} className="text-sm">{label}</label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm">Message</Label>
          <Textarea
            id="message"
            placeholder="Please provide any additional details about your service request"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 min-h-[80px] text-sm"
          />
        </div>

        <div>
          <Label className="text-sm">Upload Photos or Files (Optional)</Label>
          <Button
            type="button"
            variant="outline"
            className="w-full mt-1 h-9 text-sm"
          >
            <Upload className="mr-2 h-4 w-4" />
            Choose Files
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={isSubscribed}
            onCheckedChange={(checked) => setIsSubscribed(checked as boolean)}
            className="h-4 w-4"
          />
          <label htmlFor="newsletter" className="text-sm text-gray-600">
            Keep me updated with news and special offers
          </label>
        </div>

        <Button 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white h-9 text-sm transition-colors duration-300 group"
          type="submit"
          disabled={isSubmitting}
        >
          <Calendar className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
          {isSubmitting ? 'Submitting...' : 'Book Appointment'}
        </Button>
      </form>

      {isSubmitted && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-center text-sm">
          Thank you for your booking request! We'll be in touch shortly.
        </div>
      )}
    </section>
  );
};