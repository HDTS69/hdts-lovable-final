import { useEffect, useRef, useCallback, useState } from 'react';
import { initializeGoogleMaps, getStatus, isLoaded } from '../utils/maps';

interface UseGooglePlacesProps {
  onPlaceSelected: (place: google.maps.places.PlaceResult) => void;
  onInputChange?: (value: string) => void;
  onError?: (error: string) => void;
}

export const useGooglePlaces = ({ 
  onPlaceSelected, 
  onInputChange,
  onError 
}: UseGooglePlacesProps) => {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [status, setStatus] = useState(getStatus());

  const initAutocomplete = useCallback(async (input: HTMLInputElement) => {
    try {
      // Initialize Google Maps if not already loaded
      if (!isLoaded()) {
        await initializeGoogleMaps();
        setStatus(getStatus());
      }

      if (!window.google?.maps?.places) {
        throw new Error('Google Maps Places API not loaded');
      }

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
            onError?.('Selected place has no geometry');
            return;
          }
          onPlaceSelected(place);
        }
      });

      // Handle input changes
      if (onInputChange) {
        const handleInput = (e: Event) => {
          onInputChange((e.target as HTMLInputElement).value);
        };
        input.addEventListener('input', handleInput);
        return () => {
          input.removeEventListener('keydown', preventSubmit);
          input.removeEventListener('input', handleInput);
          if (autocompleteRef.current) {
            google.maps.event.clearInstanceListeners(autocompleteRef.current);
          }
        };
      }

      return () => {
        input.removeEventListener('keydown', preventSubmit);
        if (autocompleteRef.current) {
          google.maps.event.clearInstanceListeners(autocompleteRef.current);
        }
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error initializing Google Places Autocomplete';
      console.error('Places Autocomplete Error:', errorMessage);
      onError?.(errorMessage);
    }
  }, [onPlaceSelected, onInputChange, onError]);

  useEffect(() => {
    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  return { 
    initAutocomplete,
    ...status
  };
};