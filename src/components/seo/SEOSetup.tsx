import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { MetaTags } from './MetaTags';
import { Analytics } from './Analytics';
import { StructuredData } from './StructuredData';

export const SEOSetup = () => {
  useEffect(() => {
    // Mount MetaTags
    const metaTagsContainer = document.getElementById('meta-tags');
    if (metaTagsContainer) {
      const metaTagsRoot = createRoot(metaTagsContainer);
      metaTagsRoot.render(<MetaTags />);
    }

    // Mount Analytics
    const analyticsContainer = document.getElementById('analytics');
    if (analyticsContainer) {
      const analyticsRoot = createRoot(analyticsContainer);
      analyticsRoot.render(<Analytics />);
    }

    // Mount StructuredData
    const structuredDataContainer = document.getElementById('structured-data');
    if (structuredDataContainer) {
      const structuredDataRoot = createRoot(structuredDataContainer);
      structuredDataRoot.render(<StructuredData />);
    }
  }, []);

  return null;
};