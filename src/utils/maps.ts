import { isMobile } from './performance';

interface GoogleMapsConfig {
  apiKey: string;
  version?: string;
  libraries?: string[];
  language?: string;
  region?: string;
}

let isLoading = false;
let isLoaded = false;
let loadPromise: Promise<void> | null = null;
let scriptElement: HTMLScriptElement | null = null;

// Check for existing script
const findExistingScript = (): HTMLScriptElement | null => {
  return document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
};

// Clean up any existing scripts and global callbacks
const cleanup = () => {
  // Remove existing scripts
  const existingScripts = document.querySelectorAll('script[src*="maps.googleapis.com/maps/api/js"]');
  existingScripts.forEach(script => script.remove());

  // Clean up any existing callbacks
  for (const key in window) {
    if (key.includes('googleMapsCallback')) {
      delete window[key];
    }
  }

  if (scriptElement) {
    scriptElement.remove();
    scriptElement = null;
  }
};

// Initialize Maps with performance monitoring
export const initializeGoogleMaps = async (config?: Partial<GoogleMapsConfig>): Promise<void> => {
  // If already loaded, return immediately
  if (window.google?.maps) {
    isLoaded = true;
    return;
  }

  // If already loading, return existing promise
  if (loadPromise) {
    return loadPromise;
  }

  // Clean up any existing scripts and callbacks
  cleanup();

  isLoading = true;

  const apiKey = config?.apiKey || import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    throw new Error('Google Maps API key not found');
  }

  loadPromise = new Promise<void>((resolve, reject) => {
    try {
      // Mark the start of Maps loading
      performance.mark('maps-load-start');

      // Create a unique callback name
      const callbackName = `googleMapsCallback_${Date.now()}`;

      // Add callback to window
      window[callbackName] = () => {
        // Mark the end of Maps loading
        performance.mark('maps-load-end');
        performance.measure('Google Maps Load Time', 'maps-load-start', 'maps-load-end');

        isLoaded = true;
        isLoading = false;
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

      // Create script element with performance attributes
      scriptElement = document.createElement('script');
      scriptElement.src = `https://maps.googleapis.com/maps/api/js?${params}`;
      scriptElement.async = true;
      scriptElement.defer = true;

      // Add performance hints
      if ('fetchpriority' in scriptElement) {
        scriptElement.setAttribute('fetchpriority', 'high');
      }
      scriptElement.setAttribute('importance', 'high');

      // Error handling
      scriptElement.onerror = () => {
        cleanup();
        isLoading = false;
        loadPromise = null;
        reject(new Error('Failed to load Google Maps API'));
      };

      // Add timeout
      const timeout = setTimeout(() => {
        if (!isLoaded) {
          cleanup();
          isLoading = false;
          loadPromise = null;
          reject(new Error('Google Maps API load timeout'));
        }
      }, 10000);

      // Cleanup on success
      scriptElement.onload = () => {
        clearTimeout(timeout);
      };

      // Insert script
      document.head.appendChild(scriptElement);
    } catch (error) {
      cleanup();
      reject(error);
    }
  });

  try {
    await loadPromise;
  } finally {
    if (!isLoaded) {
      cleanup();
      loadPromise = null;
    }
  }
};

// Check if Maps is loaded
export const isGoogleMapsLoaded = (): boolean => {
  return isLoaded || (window.google?.maps !== undefined);
};

// Get Maps loading state
export const isGoogleMapsLoading = (): boolean => isLoading;

// Reset Maps loading state (useful for testing or recovery)
export const resetGoogleMapsLoader = (): void => {
  cleanup();
  isLoaded = false;
  isLoading = false;
  loadPromise = null;
};

// Preload Maps API if needed
export const preloadGoogleMaps = (config?: Partial<GoogleMapsConfig>): void => {
  if (!isLoaded && !isLoading && !isMobile.any() && !findExistingScript()) {
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