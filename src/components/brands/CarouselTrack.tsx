import { FC, useEffect, useRef } from 'react';
import { CarouselLogo } from './CarouselLogo';
import { BrandLogo } from './types';

interface CarouselTrackProps {
  logos: BrandLogo[];
  failedImages: Set<string>;
  handleImageError: (src: string) => void;
}

export const CarouselTrack: FC<CarouselTrackProps> = ({ logos, failedImages, handleImageError }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const pauseAnimation = () => {
      track.style.animationPlayState = 'paused';
    };

    const resumeAnimation = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', pauseAnimation);
    track.addEventListener('mouseleave', resumeAnimation);

    return () => {
      track.removeEventListener('mouseenter', pauseAnimation);
      track.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <div className="inline-flex w-full relative">
      <div
        ref={trackRef}
        className="flex space-x-8 py-4"
        style={{
          width: `${logos.length * 200 * 2}px`,
          animation: 'slide 50s linear infinite',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          marginLeft: '-100px',
          paddingRight: '200px'
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <CarouselLogo
            key={`${logo.src}-${index}`}
            logo={logo}
            index={index}
            onImageError={handleImageError}
            hasError={failedImages.has(logo.src)}
          />
        ))}
      </div>
    </div>
  );
};