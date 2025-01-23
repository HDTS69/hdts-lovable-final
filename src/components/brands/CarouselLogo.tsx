import { FC, useState, useEffect } from 'react';
import { LogoProps } from './types';

export const CarouselLogo: FC<LogoProps> = ({ logo, index, onImageError, hasError }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  // Preload images
  useEffect(() => {
    const img = new Image();
    img.src = logo.src;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setLoadError(true);
      onImageError(logo.src);
    };
  }, [logo.src, onImageError]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300"
      style={{ width: '200px', height: '100px' }}
      onContextMenu={handleContextMenu}
    >
      {isLoading && !loadError && (
        <div className="animate-pulse bg-gray-200 w-32 h-16 rounded"></div>
      )}
      {!isLoading && (
       <img
       src={hasError || loadError ? '/placeholder.svg' : logo.src}
       alt={logo.alt}
       width={logo.width || 160}
       height={logo.height || 80}
       className="max-w-full max-h-full object-contain mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-300 no-copy"
       loading={index < 4 ? "eager" : "lazy"}
       decoding={index < 4 ? "sync" : "async"}
       style={{
         minWidth: '80px',
         minHeight: '40px',
         objectFit: 'contain',
       }}
     />
      )}
    </div>
  );
};