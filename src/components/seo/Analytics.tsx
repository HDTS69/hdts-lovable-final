import React from 'react';

export const Analytics = () => {
  return (
    <>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-K3QWWFXZD1"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K3QWWFXZD1');
        `
      }} />
      
      {/* Google Ads */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11553460915"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11553460915');
        `
      }} />
      
      {/* Ahrefs Analytics */}
      <script 
        src="https://analytics.ahrefs.com/analytics.js" 
        data-key="4RFriO1NPszGT4pljJ6IYA" 
        async
      />
    </>
  );
};