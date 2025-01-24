import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeGoogleMaps, isGoogleMapsLoaded } from '../utils/maps';

interface GoogleMapsContextType {
  isLoaded: boolean;
  error: string | null;
}

const GoogleMapsContext = createContext<GoogleMapsContextType>({
  isLoaded: false,
  error: null
});

export const useGoogleMaps = () => useContext(GoogleMapsContext);

interface GoogleMapsProviderProps {
  children: React.ReactNode;
}

export const GoogleMapsProvider: React.FC<GoogleMapsProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If Google Maps is already loaded, set state and return
    if (isGoogleMapsLoaded()) {
      setIsLoaded(true);
      return;
    }

    const initMaps = async () => {
      try {
        await initializeGoogleMaps();
        setIsLoaded(true);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load Google Maps');
      }
    };

    initMaps();
  }, []);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, error }}>
      {children}
    </GoogleMapsContext.Provider>
  );
};

// Add type declaration for the callback
declare global {
  interface Window {
    __googleMapsCallback?: () => void;
  }
} 