import { useState, useCallback } from 'react';

export const useConfetti = () => {
  const [isActive, setIsActive] = useState(false);

  const triggerConfetti = useCallback(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3000);
  }, []);

  return { triggerConfetti, isActive };
};