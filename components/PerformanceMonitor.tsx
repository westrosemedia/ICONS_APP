"use client";
import React, { useEffect, useState } from "react";

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
        const largestContentfulPaint = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
        
        // Measure Cumulative Layout Shift
        let cumulativeLayoutShift = 0;
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'layout-shift') {
                cumulativeLayoutShift += (entry as any).value;
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        }

        // Measure First Input Delay
        let firstInputDelay = 0;
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'first-input') {
                firstInputDelay = (entry as any).processingStart - entry.startTime;
              }
            }
          });
          observer.observe({ entryTypes: ['first-input'] });
        }

        setMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint,
          cumulativeLayoutShift,
          firstInputDelay
        });
      }
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  const getPerformanceScore = (metrics: PerformanceMetrics) => {
    let score = 100;
    
    // Deduct points for slow metrics
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 2000) score -= 15;
    if (metrics.largestContentfulPaint > 4000) score -= 15;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.firstInputDelay > 100) score -= 10;
    
    return Math.max(0, score);
  };

  if (!isVisible || !metrics) {
    return null;
  }

  const score = getPerformanceScore(metrics);

  return (
    <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg border border-white/10 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold">Performance Monitor</h3>
        <div className={`px-2 py-1 rounded text-xs ${
          score >= 90 ? 'bg-green-500' :
          score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
        }`}>
          {score}/100
        </div>
      </div>
      
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime > 3000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>First Paint:</span>
          <span className={metrics.firstContentfulPaint > 2000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Largest Paint:</span>
          <span className={metrics.largestContentfulPaint > 4000 ? 'text-red-400' : 'text-green-400'}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Layout Shift:</span>
          <span className={metrics.cumulativeLayoutShift > 0.1 ? 'text-red-400' : 'text-green-400'}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Input Delay:</span>
          <span className={metrics.firstInputDelay > 100 ? 'text-red-400' : 'text-green-400'}>
            {metrics.firstInputDelay.toFixed(0)}ms
          </span>
        </div>
      </div>
    </div>
  );
} 