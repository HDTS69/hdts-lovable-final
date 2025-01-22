export const dispatchServiceOpen = (service: string) => {
  window.dispatchEvent(new CustomEvent('openServices', { 
    detail: { service } 
  }));
};