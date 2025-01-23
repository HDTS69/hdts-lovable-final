let isLoading = false;
let isInitialized = false;

export const initializeGoogleMaps = () => {
  // Check if already initialized or loading
  if (isInitialized || isLoading || window.google?.maps) {
    console.log('Google Maps already initialized or loading');
    return;
  }

  // Get API key from environment variable
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    console.error('Google Maps API key not found in environment variables');
    return;
  }

  // Load the script
  isLoading = true;
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    console.error('Failed to load Google Maps script');
    isInitialized = false;
    isLoading = false;
  };
  script.onload = () => {
    console.log('Google Maps loaded successfully');
    isInitialized = true;
    isLoading = false;
  };
  document.head.appendChild(script);
}; 