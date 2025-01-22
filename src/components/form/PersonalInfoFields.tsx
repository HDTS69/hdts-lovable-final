import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

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

  useEffect(() => {
    let isSubscribed = true;
    let scriptLoaded = false;

    const loadGoogleMapsScript = (apiKey: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.getElementById('google-maps-script');
        if (existingScript) {
          scriptLoaded = true;
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.id = 'google-maps-script';
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        
        script.onload = () => {
          scriptLoaded = true;
          resolve();
        };
        script.onerror = (error) => reject(error);
        
        document.head.appendChild(script);
      });
    };

    const initAutocomplete = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-google-places-key');
        
        if (error || !isSubscribed) {
          console.error('Error fetching API key:', error);
          return;
        }

        if (!data?.apiKey || !inputRef.current) {
          console.error('Missing API key or input reference');
          return;
        }

        await loadGoogleMapsScript(data.apiKey);

        if (!isSubscribed || !inputRef.current) return;

        try {
          autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
            componentRestrictions: { country: "au" },
            fields: ["formatted_address"]
          });

          autocompleteRef.current.addListener('place_changed', () => {
            if (!autocompleteRef.current) return;
            const place = autocompleteRef.current.getPlace();
            if (place.formatted_address) {
              setAddress(place.formatted_address);
            }
          });
        } catch (err) {
          console.error('Error initializing autocomplete:', err);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    initAutocomplete();

    return () => {
      isSubscribed = false;
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [setAddress]);

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