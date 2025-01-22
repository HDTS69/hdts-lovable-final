import { smoothScrollTo } from "./smoothScroll";

export const scrollToService = (service: string) => {
  const servicesSection = document.querySelector(`[data-service="${service}"]`);
  if (servicesSection) {
    smoothScrollTo(servicesSection as HTMLElement);
    return true;
  }
  return false;
};

export const scrollToFaq = (faqRef: React.RefObject<any>) => {
  const faqSection = document.getElementById('faq');
  if (faqSection) {
    smoothScrollTo(faqSection);
    setTimeout(() => {
      faqRef.current?.toggleFAQ();
    }, 500);
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const handleNavigation = (path: string, navigate: (path: string) => void) => {
  const [basePath, hash] = path.split('#');
  
  if (basePath === window.location.pathname) {
    // If we're already on the page, just scroll to the hash
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        smoothScrollTo(element);
      }
    } else {
      scrollToTop();
    }
  } else {
    // Navigate to new page
    navigate(basePath);
    if (hash) {
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          smoothScrollTo(element);
        }
      }, 100);
    } else {
      scrollToTop();
    }
  }
};