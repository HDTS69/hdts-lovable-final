let isLoading = false;
let isInitialized = false;
let error: string | null = null;

export const initializeGoogleMaps = async (): Promise<void> => {
  // Return early if already initialized
  if (isInitialized && window.google?.maps) {
    return;
  }

  // Return early if already loading
  if (isLoading) {
    return;
  }

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    error = 'Google Maps API key not found';
    throw new Error(error);
  }

  isLoading = true;
  error = null;

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onerror = () => {
      error = 'Failed to load Google Maps';
      isLoading = false;
      isInitialized = false;
      reject(new Error(error));
    };

    script.onload = () => {
      isLoading = false;
      isInitialized = true;
      error = null;
      resolve();
    };

    document.head.appendChild(script);
  });
};

export const getStatus = () => ({
  isLoading,
  isInitialized,
  error
});

export const isLoaded = () => isInitialized && window.google?.maps !== undefined;