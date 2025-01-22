import { useEffect, useRef, useCallback } from 'react';

interface UseGooglePlacesProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
  onInputChange?: (value: string) => void;
}

export const useGooglePlaces = ({ onPlaceSelected, onInputChange }: UseGooglePlacesProps) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const initAutocomplete = useCallback((input: HTMLInputElement) => {
    if (!window.google?.maps?.places) {
      console.warn('Google Maps Places API not loaded');
      return;
    }

    try {
      // Remove any existing autocomplete
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }

      // Create new autocomplete instance
      autocompleteRef.current = new google.maps.places.Autocomplete(input, {
        componentRestrictions: { country: 'AU' },
        fields: ['address_components', 'formatted_address', 'geometry'],
        types: ['address']
      });

      // Prevent form submission on enter
      const preventSubmit = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
        }
      };
      input.addEventListener('keydown', preventSubmit);

      // Handle place selection
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place) {
          if (!place.geometry) {
            console.warn("Selected place has no geometry");
            return;
          }
          onPlaceSelected(place);
        }
      });

      // Handle input changes
      if (onInputChange) {
        input.addEventListener('input', (e) => {
          onInputChange((e.target as HTMLInputElement).value);
        });
      }

      return () => {
        input.removeEventListener('keydown', preventSubmit);
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
        }
      };
    } catch (error) {
      console.error('Error initializing Google Places Autocomplete:', error);
    }
  }, [onPlaceSelected, onInputChange]);

  useEffect(() => {
    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  return { initAutocomplete };
}; 