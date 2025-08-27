"use client";
import React, { useEffect, useState } from "react";

interface AccessibilityIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  element?: string;
  wcag?: string;
}

export default function AccessibilityAudit() {
  const [issues, setIssues] = useState<AccessibilityIssue[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runAudit = () => {
    setIsRunning(true);
    const newIssues: AccessibilityIssue[] = [];

    // Check for alt text on images
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        newIssues.push({
          type: 'error',
          message: 'Image missing alt text',
          element: `img[${index}]`,
          wcag: '1.1.1'
        });
      }
    });

    // Check for proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > previousLevel + 1) {
        newIssues.push({
          type: 'warning',
          message: `Heading hierarchy skipped from h${previousLevel} to h${level}`,
          element: heading.tagName.toLowerCase(),
          wcag: '1.3.1'
        });
      }
      previousLevel = level;
    });

    // Check for proper color contrast (simplified)
    const textElements = document.querySelectorAll('p, span, div, h1, h2, h3, h4, h5, h6');
    textElements.forEach((element) => {
      const style = window.getComputedStyle(element);
      const color = style.color;
      const backgroundColor = style.backgroundColor;
      
      // This is a simplified check - in production you'd use a proper contrast checker
      if (color === 'rgb(255, 255, 255)' && backgroundColor === 'rgb(0, 0, 0)') {
        // White text on black background - good contrast
      } else if (color === 'rgba(255, 255, 255, 0.8)' && backgroundColor === 'rgb(0, 0, 0)') {
        // Semi-transparent white on black - might need attention
        newIssues.push({
          type: 'warning',
          message: 'Check color contrast for semi-transparent text',
          element: element.tagName.toLowerCase(),
          wcag: '1.4.3'
        });
      }
    });

    // Check for keyboard navigation
    const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
    interactiveElements.forEach((element) => {
      if (!element.hasAttribute('tabindex') && element.getAttribute('tabindex') !== '0') {
        // This is normal for most elements, but we should ensure they're keyboard accessible
      }
    });

    // Check for ARIA labels
    const formInputs = document.querySelectorAll('input, select, textarea');
    formInputs.forEach((input) => {
      if (!input.hasAttribute('aria-label') && !input.hasAttribute('aria-labelledby')) {
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (!label) {
          newIssues.push({
            type: 'warning',
            message: 'Form input missing label or aria-label',
            element: input.tagName.toLowerCase(),
            wcag: '3.3.2'
          });
        }
      }
    });

    // Check for focus indicators
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea');
    focusableElements.forEach((element) => {
      const style = window.getComputedStyle(element);
      const outline = style.outline;
      const boxShadow = style.boxShadow;
      
      if (outline === 'none' && !boxShadow.includes('rgba')) {
        newIssues.push({
          type: 'warning',
          message: 'Focus indicator may not be visible',
          element: element.tagName.toLowerCase(),
          wcag: '2.4.7'
        });
      }
    });

    setIssues(newIssues);
    setIsRunning(false);
  };

  useEffect(() => {
    // Run audit on component mount
    runAudit();
  }, []);

  if (isRunning) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg border border-white/10">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span className="text-sm">Running accessibility audit...</span>
        </div>
      </div>
    );
  }

  if (issues.length === 0) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500/90 text-white p-4 rounded-lg border border-white/10">
        <div className="flex items-center space-x-2">
          <span className="text-sm">✅ Accessibility audit passed</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg border border-white/10 max-w-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-bold">Accessibility Issues ({issues.length})</h3>
        <button
          onClick={runAudit}
          className="text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded"
        >
          Re-run
        </button>
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {issues.map((issue, index) => (
          <div key={index} className="text-xs">
            <div className={`inline-block px-2 py-1 rounded text-xs mb-1 ${
              issue.type === 'error' ? 'bg-red-500' :
              issue.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            }`}>
              {issue.type.toUpperCase()}
            </div>
            <p className="text-white/80">{issue.message}</p>
            {issue.wcag && (
              <p className="text-white/60 text-xs">WCAG: {issue.wcag}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 