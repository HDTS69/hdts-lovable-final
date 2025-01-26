// Resource hints manager
export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
    { rel: 'preconnect', href: 'https://maps.googleapis.com', crossorigin: true },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
  ];

  hints.forEach(({ rel, href, crossorigin }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossorigin) link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Mobile detection
export const isMobile = {
  Android: () => /Android/i.test(navigator.userAgent),
  iOS: () => /iPhone|iPad|iPod/i.test(navigator.userAgent),
  any: () => isMobile.Android() || isMobile.iOS()
};

// Mobile-optimized script loading
export const loadScript = (src: string, async = true, defer = false): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Skip non-essential scripts on mobile
    if (isMobile.any() && src.includes('non-essential')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    
    // Add mobile-specific attributes
    if (isMobile.any()) {
      script.setAttribute('importance', 'low');
      script.setAttribute('loading', 'lazy');
    }
    
    script.onload = () => resolve();
    script.onerror = () => reject();
    
    document.head.appendChild(script);
  });
};

// Mobile-optimized image handling
export const optimizeImage = (
  src: string,
  width: number,
  quality = 75
): string => {
  const url = new URL(src);
  
  // If it's already an optimized URL, return as is
  if (url.searchParams.has('w') || url.searchParams.has('q')) {
    return src;
  }

  // Lower quality and size for mobile
  if (isMobile.any()) {
    quality = Math.min(quality, 60); // Lower quality on mobile
    width = Math.min(width, window.innerWidth); // Never larger than viewport
  }

  // Add optimization parameters
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('auto', 'format,compress');
  
  // Use WebP for supported browsers
  if (supportsWebP()) {
    url.searchParams.set('fm', 'webp');
  }
  
  return url.toString();
};

// WebP support detection
const supportsWebP = (): boolean => {
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

// Enhanced lazy loading for mobile
export const setupLazyLoading = () => {
  const mobileConfig = {
    rootMargin: '100px 0px', // Larger margin on mobile for earlier loading
    threshold: 0.01
  };

  const desktopConfig = {
    rootMargin: '50px 0px',
    threshold: 0.01
  };

  const config = isMobile.any() ? mobileConfig : desktopConfig;

  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      (img as HTMLImageElement).loading = 'lazy';
      if (isMobile.any()) {
        // Set smaller image size for mobile
        img.setAttribute('sizes', '(max-width: 768px) 100vw, 50vw');
      }
      (img as HTMLImageElement).src = img.getAttribute('data-src') || '';
    });
  } else {
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src') || '';
            // Optimize image size based on device
            img.src = isMobile.any() ? 
              optimizeImage(src, window.innerWidth) :
              optimizeImage(src, parseInt(img.getAttribute('width') || '800'));
            imageObserver.unobserve(img);
          }
        });
      },
      config
    );

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

interface LayoutShift extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

// Resource hints management
export const addResourceHint = (url: string, type: 'preload' | 'prefetch' | 'preconnect') => {
  const link = document.createElement('link');
  link.rel = type;
  
  if (type === 'preconnect') {
    link.href = new URL(url).origin;
    link.crossOrigin = 'anonymous';
  } else {
    link.href = url;
    if (url.endsWith('.css')) {
      link.as = 'style';
    } else if (url.endsWith('.js')) {
      link.as = 'script';
    } else if (url.match(/\.(woff2?|ttf|otf|eot)$/)) {
      link.as = 'font';
      link.crossOrigin = 'anonymous';
    } else if (url.match(/\.(png|jpe?g|gif|svg|webp)$/)) {
      link.as = 'image';
    }
  }
  
  document.head.appendChild(link);
};

// Defer non-critical resources
export const deferNonCriticalResources = () => {
  const isMobileDevice = isMobile.any();

  // Defer non-critical CSS
  document.querySelectorAll('link[data-defer]').forEach(link => {
    if (isMobileDevice) {
      // On mobile, load after 2 seconds or on user interaction
      setTimeout(() => {
        (link as HTMLLinkElement).media = 'print';
        (link as HTMLLinkElement).onload = () => {
          (link as HTMLLinkElement).media = 'all';
        };
      }, 2000);
    } else {
      (link as HTMLLinkElement).media = 'print';
      (link as HTMLLinkElement).onload = () => {
        (link as HTMLLinkElement).media = 'all';
      };
    }
  });

  // Defer non-critical scripts
  const deferredScripts: HTMLScriptElement[] = [];
  document.querySelectorAll('script[data-defer]').forEach(script => {
    const deferredScript = document.createElement('script');
    Array.from(script.attributes).forEach(attr => {
      if (attr.name !== 'defer') {
        deferredScript.setAttribute(attr.name, attr.value);
      }
    });
    if (isMobileDevice) {
      deferredScript.setAttribute('importance', 'low');
      deferredScript.setAttribute('loading', 'lazy');
    }
    deferredScripts.push(deferredScript);
    script.remove();
  });

  // Add scripts back after main content loads
  window.addEventListener('load', () => {
    requestIdleCallback(() => {
      deferredScripts.forEach(script => document.body.appendChild(script));
    });
  });
};

// Monitor Core Web Vitals with mobile awareness
export const initPerformanceMonitoring = () => {
  const isMobileDevice = isMobile.any();

  // First Paint & First Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(`${entry.name}: ${entry.startTime}ms ${isMobileDevice ? '(Mobile)' : '(Desktop)'}`);
    }
  });
  observer.observe({ entryTypes: ['paint'] });

  // Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log(`LCP: ${lastEntry.startTime}ms ${isMobileDevice ? '(Mobile)' : '(Desktop)'}`);
  });
  lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

  // Layout Shifts with mobile threshold adjustment
  const clsObserver = new PerformanceObserver((list) => {
    let cumulativeLayoutShift = 0;
    const mobileThreshold = 0.1; // More tolerant threshold for mobile
    const desktopThreshold = 0.05;
    
    for (const entry of list.getEntries()) {
      const layoutShift = entry as LayoutShift;
      if (!layoutShift.hadRecentInput) {
        cumulativeLayoutShift += layoutShift.value;
      }
    }
    
    const threshold = isMobileDevice ? mobileThreshold : desktopThreshold;
    if (cumulativeLayoutShift > threshold) {
      console.warn(`High CLS detected: ${cumulativeLayoutShift}`);
    }
    
    console.log(`CLS: ${cumulativeLayoutShift} ${isMobileDevice ? '(Mobile)' : '(Desktop)'}`);
  });
  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Monitor network conditions
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', () => {
        console.log('Network conditions changed:', {
          type: connection.effectiveType,
          rtt: connection.rtt,
          downlink: connection.downlink
        });
      });
    }
  }
};

// Critical CSS injection
export const injectCriticalCSS = (css: string) => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

// Preload LCP image
export const preloadLCPImage = (imageUrl: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = imageUrl;
  document.head.appendChild(link);
};

// Optimize LCP elements
export const optimizeLCP = () => {
  // Find potential LCP elements
  const lcpElements = document.querySelectorAll(
    'img[data-lcp], h1, h2, .hero-image, .main-banner, [data-lcp]'
  );

  lcpElements.forEach(element => {
    if (element instanceof HTMLImageElement) {
      // Preload LCP images
      if (element.src) {
        preloadLCPImage(element.src);
      }
      // Remove lazy loading from LCP images
      element.loading = 'eager';
      // Add fetchPriority if supported
      if ('fetchPriority' in element) {
        element.setAttribute('fetchPriority', 'high');
      }
    }
    
    // Mark element for priority loading
    element.setAttribute('importance', 'high');
  });

  // Add priority hints for critical resources
  const criticalResources = [
    { type: 'style', pattern: /main|critical|hero|banner/i },
    { type: 'script', pattern: /main|critical|core/i },
    { type: 'font', pattern: /primary|heading|hero/i }
  ];

  document.querySelectorAll('link[rel="stylesheet"], script[src], link[rel="preload"][as="font"]')
    .forEach((resource: Element) => {
      let resourceUrl = '';
      if (resource instanceof HTMLLinkElement) {
        resourceUrl = resource.href;
      } else if (resource instanceof HTMLScriptElement) {
        resourceUrl = resource.src;
      }
      
      criticalResources.forEach(({ type, pattern }) => {
        if (resourceUrl && pattern.test(resourceUrl)) {
          if (type === 'style' || type === 'script') {
            resource.setAttribute('importance', 'high');
          }
          if ('fetchPriority' in resource) {
            resource.setAttribute('fetchPriority', 'high');
          }
        }
      });
    });
};

// Enhanced image optimization for LCP
export const optimizeImageForLCP = (
  src: string,
  width: number,
  quality = 85 // Higher quality for LCP images
): string => {
  const url = new URL(src);
  
  // If it's already an optimized URL, return as is
  if (url.searchParams.has('w') || url.searchParams.has('q')) {
    return src;
  }

  // Maintain higher quality for LCP images, even on mobile
  if (isMobile.any()) {
    width = Math.min(width, window.innerWidth);
    // Keep quality higher for LCP images on mobile
    quality = Math.min(quality, 75);
  }

  // Add optimization parameters
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', quality.toString());
  url.searchParams.set('auto', 'format,compress');
  
  // Use WebP for supported browsers
  if (supportsWebP()) {
    url.searchParams.set('fm', 'webp');
  }
  
  return url.toString();
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  const isMobileDevice = isMobile.any();
  
  // Add viewport meta for mobile
  if (isMobileDevice) {
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1, maximum-scale=5';
    document.head.appendChild(viewport);
  }

  // Optimize LCP first
  optimizeLCP();

  // Add resource hints
  addResourceHints();
  
  // Setup lazy loading (but not for LCP elements)
  setupLazyLoading();
  
  // Defer non-critical resources
  deferNonCriticalResources();
  
  // Initialize performance monitoring
  initPerformanceMonitoring();
  
  // Add critical CSS with LCP-specific rules
  const criticalCSS = `
    :root {
      --primary-color: #1a73e8;
      --background-color: #ffffff;
      --text-color: #202124;
    }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: var(--background-color);
      color: var(--text-color);
    }
    
    /* Optimize LCP elements */
    img[data-lcp], .hero-image, .main-banner {
      content-visibility: auto;
      contain-intrinsic-size: auto 300px;
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    /* Prevent layout shifts for images */
    img {
      max-width: 100%;
      height: auto;
      display: block;
      aspect-ratio: attr(width) / attr(height);
    }
    
    /* Optimize text rendering */
    h1, h2, [data-lcp] {
      text-rendering: optimizeLegibility;
    }
  `;
  
  injectCriticalCSS(criticalCSS);
}; 