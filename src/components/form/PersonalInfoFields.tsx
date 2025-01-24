import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useGoogleMaps } from '../../contexts/GoogleMapsContext';

interface PersonalInfoFieldsProps {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  address: string;
  setAddress: (value: string) => void;
}

export const PersonalInfoFields = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
}: PersonalInfoFieldsProps) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoaded, error } = useGoogleMaps();

  useEffect(() => {
    if (isLoaded && !error) {
      const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address') as HTMLInputElement,
        { types: ['address'], componentRestrictions: { country: 'AU' } }
      );
      
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setAddress(place.formatted_address);
        }
      });
    }
  }, [isLoaded, error, setAddress]);

  return (
    <div className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name" className="text-gray-800 dark:text-gray-200">Name</Label>
        <Input
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-gray-800 dark:text-gray-200">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone" className="text-gray-800 dark:text-gray-200">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address" className="text-gray-800 dark:text-gray-200">Address</Label>
        <Input
          id="address"
          ref={inputRef}
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          required
        />
      </div>
    </div>
  );
};