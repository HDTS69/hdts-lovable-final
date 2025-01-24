import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useConfetti } from '@/hooks/useConfetti';
import { trackBookingConversion } from '@/utils/analytics';
import { useGoogleMaps } from '../contexts/GoogleMapsContext';
import { SUPABASE_PUBLISHABLE_KEY } from "@/integrations/supabase/client";

interface BookingFormProps {
  scrollToBooking?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ }) => {
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
  const { isLoaded, error } = useGoogleMaps();
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!isLoaded || !window.google?.maps?.places) return;

    const input = document.getElementById('address-input') as HTMLInputElement;
    if (!input) return;

    const options = {
      componentRestrictions: { country: 'au' },
      fields: ['address_components', 'formatted_address', 'geometry'],
    };

    const newAutocomplete = new window.google.maps.places.Autocomplete(input, options);
    
    // Add place_changed event listener
    newAutocomplete.addListener('place_changed', () => {
      const place = newAutocomplete.getPlace();
      if (place.formatted_address) {
        setAddress(place.formatted_address);
      }
    });

    setAutocomplete(newAutocomplete);

    return () => {
      if (autocomplete) {
        google.maps.event.clearInstanceListeners(autocomplete);
      }
    };
  }, [isLoaded]);

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

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  return (
    <section className="w-full max-w-xl mx-auto py-8 px-4" aria-labelledby="booking-form-title">
      <h2 id="booking-form-title" className="text-2xl font-bold text-gray-900 mb-6">
        Book a Service
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="name" className="text-sm">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
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
              aria-required="true"
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
              aria-required="true"
              className="mt-1 h-9 text-sm"
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-sm">Address</Label>
            <Input
              id="address-input"
              ref={addressInputRef}
              placeholder={error ? 'Error loading Google Maps' : 'Enter your address'}
              value={address}
              onChange={handleAddressChange}
              aria-invalid={!!error}
              aria-describedby={error ? "address-error" : undefined}
              required
              aria-required="true"
              className={`mt-1 h-9 text-sm ${error ? 'border-red-500' : ''}`}
              autoComplete="off"
              disabled={!isLoaded}
            />
            {error && (
              <p id="address-error" className="text-xs text-red-500 mt-1" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label className="text-sm mb-1 block">Services Required</Label>
            <div className="grid grid-cols-1 gap-1.5" role="group" aria-label="Select required services">
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
                    aria-label={`Select ${label} service`}
                  />
                  <label htmlFor={value} className="text-sm">{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm mb-1 block">Preferred Time</Label>
            <RadioGroup
              value={preferredTime}
              onValueChange={setPreferredTime}
              className="grid grid-cols-1 gap-1.5"
              aria-label="Select preferred time"
            >
              {[
                ['morning', 'Morning (8am-12pm)'],
                ['afternoon', 'Afternoon (12pm-5pm)'],
                ['weekend', 'Weekend'],
                ['after_hours', 'After Hours']
              ].map(([value, label]) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    id={`time-${value}`}
                    value={value}
                    className="h-3.5 w-3.5"
                    aria-label={`Select ${label}`}
                  />
                  <label htmlFor={`time-${value}`} className="text-sm">{label}</label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div>
          <Label htmlFor="message" className="text-sm">Additional Details</Label>
          <Textarea
            id="message"
            placeholder="Please provide any additional details about your service request"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1"
            rows={4}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="newsletter"
            checked={isSubscribed}
            onCheckedChange={(checked) => setIsSubscribed(checked as boolean)}
            className="h-3.5 w-3.5"
            aria-label="Subscribe to newsletter"
          />
          <label htmlFor="newsletter" className="text-sm">
            Keep me updated with news and promotions
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          aria-label={isSubmitting ? "Submitting booking request..." : "Submit booking request"}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
        </Button>
      </form>

      {isSubmitted && (
        <div className="mt-6 p-4 bg-green-50 text-green-800 rounded-md" role="alert">
          <p className="font-medium">Thank you for your booking request!</p>
          <p className="text-sm mt-1">We'll get back to you shortly to confirm your appointment.</p>
        </div>
      )}
    </section>
  );
};