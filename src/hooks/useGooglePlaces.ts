import { useCallback, useEffect, useRef } from 'react';
import { useGoogleMaps } from '../contexts/GoogleMapsContext';

interface Place {
  formatted_address?: string;
  geometry?: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  [key: string]: any;
}

interface UseGooglePlacesProps {
  onPlaceSelected?: (place: Place) => void;
  onInputChange?: (value: string) => void;
}

export const useGooglePlaces = ({ onPlaceSelected, onInputChange }: UseGooglePlacesProps) => {
  const { isLoaded, error } = useGoogleMaps();
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const listenerRef = useRef<google.maps.MapsEventListener | null>(null);

  const initAutocomplete = useCallback((inputElement: HTMLInputElement) => {
    if (!isLoaded || error || !window.google?.maps?.places) {
      return;
    }

    // Clean up any existing autocomplete
    if (autocompleteRef.current) {
      listenerRef.current?.remove();
      autocompleteRef.current = null;
    }

    try {
      // Initialize the Autocomplete object
      const autocomplete = new window.google.maps.places.Autocomplete(inputElement, {
        componentRestrictions: { country: 'au' },
        fields: ['formatted_address', 'geometry'],
        types: ['address']
      });

      // Store the autocomplete instance
      autocompleteRef.current = autocomplete;

      // Add place_changed event listener
      const listener = autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (onPlaceSelected) {
          onPlaceSelected(place);
        }
      });

      // Store the listener for cleanup
      listenerRef.current = listener;

      // Add input event listener for real-time value changes
      const inputListener = (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (onInputChange) {
          onInputChange(target.value);
        }
      };
      inputElement.addEventListener('input', inputListener);

      // Return cleanup function
      return () => {
        listenerRef.current?.remove();
        inputElement.removeEventListener('input', inputListener);
        autocompleteRef.current = null;
      };
    } catch (error) {
      console.error('Error initializing Google Places Autocomplete:', error);
      return undefined;
    }
  }, [isLoaded, error, onPlaceSelected, onInputChange]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (listenerRef.current) {
        listenerRef.current.remove();
      }
      autocompleteRef.current = null;
    };
  }, []);

  return { initAutocomplete, isLoaded, error };
}; 