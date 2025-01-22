export const smoothScrollTo = (element: HTMLElement, offset: number = 120) => {
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};