interface CustomWindow extends Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare let window: CustomWindow;

export const trackBookingConversion = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-11553460915/booking_click',
      'page_location': location
    });
  }
};