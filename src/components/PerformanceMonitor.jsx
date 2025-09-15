import React, { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor performance metrics
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure') {
            console.log(`${entry.name}: ${entry.duration}ms`);
          }
        }
      });
      
      observer.observe({ entryTypes: ['measure'] });
      
      // Measure page load time
      window.addEventListener('load', () => {
        performance.mark('page-loaded');
        performance.measure('page-load-time', 'navigationStart', 'page-loaded');
      });

      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
