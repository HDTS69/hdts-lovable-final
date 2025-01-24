import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { initializePerformanceOptimizations } from './utils/performance'

// Initialize performance optimizations before rendering
initializePerformanceOptimizations();

// Mark the start of JavaScript execution
performance.mark('js-execution-start');

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Mark the end of JavaScript execution
performance.mark('js-execution-end');
performance.measure('js-execution', 'js-execution-start', 'js-execution-end');