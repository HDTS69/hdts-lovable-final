declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace google.maps.places {
  interface PlaceResult {
    address_components?: AddressComponent[];
    formatted_address?: string;
    geometry?: {
      location: LatLng;
      viewport?: LatLngBounds;
    };
  }

  interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  class Autocomplete {
    constructor(inputField: HTMLInputElement, opts?: AutocompleteOptions);
    addListener(eventName: string, handler: () => void): void;
    getPlace(): PlaceResult;
  }

  interface AutocompleteOptions {
    componentRestrictions?: {
      country: string | string[];
    };
    fields?: string[];
    types?: string[];
  }
}

export {}; 