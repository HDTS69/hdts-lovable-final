import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      setIsActive(true);
      
      // Fire multiple bursts of confetti
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        spread: 360,
        ticks: 50,
        gravity: 0.8,
        decay: 0.94,
        startVelocity: 30
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      fire(0.2, {
        spread: 60,
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });

      setShowConfetti(false);
      
      // Reset isActive after animation
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  }, [showConfetti]);

  return { 
    triggerConfetti: () => setShowConfetti(true),
    isActive 
  };
};