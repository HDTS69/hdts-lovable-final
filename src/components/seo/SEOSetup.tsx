import React, { useEffect } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { MetaTags } from './MetaTags';
import { Analytics } from './Analytics';
import { StructuredData } from './StructuredData';

export const SEOSetup = () => {
  const roots = new Map<string, Root>();

  useEffect(() => {
    // Helper function to create or reuse root
    const renderToContainer = (containerId: string, Component: React.ComponentType) => {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Container with ID "${containerId}" not found.`);
        return;
      }

      if (!roots.has(containerId)) {
        const root = createRoot(container); // Only createRoot if it doesn't already exist
        roots.set(containerId, root);
      }

      const root = roots.get(containerId)!;
      root.render(<Component />);
    };

    // Render components
    renderToContainer('meta-tags', MetaTags);
    renderToContainer('analytics', Analytics);
    renderToContainer('structured-data', StructuredData);

    // Cleanup function
    return () => {
      // Defer unmounting to avoid race conditions
      setTimeout(() => {
        roots.forEach((root) => root.unmount());
        roots.clear();
      }, 0); // Defer unmounting to the next tick
    };
  }, []);

  return null;
};
