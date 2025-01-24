import { isMobile } from './performance';

interface GoogleMapsConfig {
  apiKey: string;
  version?: string;
  libraries?: string[];
  language?: string;
  region?: string;
}

let scriptPromise: Promise<void> | null = null;
let scriptElement: HTMLScriptElement | null = null;

const cleanup = () => {
  // Remove any existing script elements
  const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Remove callback
  if (window.__googleMapsCallback) {
    delete window.__googleMapsCallback;
  }

  scriptPromise = null;
  scriptElement = null;
};

export const isGoogleMapsLoaded = () => {
  return typeof window !== 'undefined' && window.google && window.google.maps;
};

export const initializeGoogleMaps = (config?: Partial<GoogleMapsConfig>): Promise<void> => {
  if (scriptPromise) {
    return scriptPromise;
  }

  const apiKey = config?.apiKey || import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('Google Maps API key not found');
  }

  cleanup(); // Clean up any existing scripts

  scriptPromise = new Promise<void>((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('Google Maps failed to load within timeout'));
    }, 10000);

    // Create a unique callback name to avoid conflicts
    const callbackName = `googleMapsCallback_${Date.now()}`;
    window[callbackName] = () => {
      clearTimeout(timeoutId);
      delete window[callbackName];
      resolve();
    };

    // Construct URL with parameters
    const params = new URLSearchParams({
      key: apiKey,
      callback: callbackName,
      v: config?.version || '3.exp',
      libraries: config?.libraries?.join(',') || 'places',
      language: config?.language || 'en',
      region: config?.region || 'AU'
    });

    scriptElement = document.createElement('script');
    scriptElement.id = 'google-maps-script';
    scriptElement.src = `https://maps.googleapis.com/maps/api/js?${params}`;
    scriptElement.async = true;
    scriptElement.onerror = () => {
      cleanup();
      reject(new Error('Failed to load Google Maps script'));
    };

    document.head.appendChild(scriptElement);
  });

  return scriptPromise;
};

export const resetGoogleMapsLoader = () => {
  cleanup();
};

// Check for existing script
const findExistingScript = (): HTMLScriptElement | null => {
  return document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
};

// Preload Maps API if needed
export const preloadGoogleMaps = (config?: Partial<GoogleMapsConfig>): void => {
  if (!isGoogleMapsLoaded() && !scriptPromise && !isMobile.any() && !findExistingScript()) {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://maps.googleapis.com';
    document.head.appendChild(link);

    // Start loading after a short delay
    setTimeout(() => {
      initializeGoogleMaps(config).catch(() => {
        // Silent preload failure is acceptable
        resetGoogleMapsLoader();
      });
    }, 1000);
  }
};

// Add type declaration for dynamic callback
declare global {
  interface Window {
    [key: string]: any;
  }
}