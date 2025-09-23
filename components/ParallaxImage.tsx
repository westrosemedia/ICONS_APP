"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  image: string;
  height?: string;
  children?: React.ReactNode;
  focalPoint?: { x: number; y: number }; // 0-1 coordinates for focal point
}

export default function ParallaxImage({ 
  image, 
  height = "h-[70vh]", 
  children, 
  focalPoint = { x: 0.5, y: 0.25 } // Default to eyes area
}: ParallaxImageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the element is visible
        const elementBottom = elementTop + elementHeight;
        const viewportTop = scrollTop;
        const viewportBottom = scrollTop + windowHeight;
        
        // Check if element is in viewport
        const isInView = elementBottom > viewportTop && elementTop < viewportBottom;
        setIsVisible(isInView);
        
        if (isInView) {
          // Calculate scroll progress within the element
          const elementCenter = elementTop + elementHeight / 2;
          const viewportCenter = scrollTop + windowHeight / 2;
          const distanceFromCenter = elementCenter - viewportCenter;
          
          // Create parallax effect based on distance from center
          setScrollY(distanceFromCenter * 0.5);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate background position to keep focal point centered
  const backgroundPositionX = 50 + (scrollY * 0.1); // Slight horizontal movement
  const backgroundPositionY = 50 + (scrollY * 0.3) - (focalPoint.y - 0.5) * 20; // More vertical movement, adjusted for focal point

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl"
      style={{ height: height.replace('h-[', '').replace(']', '').replace('vh', 'vh') }}
    >
      <div
        className={`${height} w-full bg-cover bg-center transition-transform duration-75 ease-out`}
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundPosition: `${Math.max(0, Math.min(100, backgroundPositionX))}% ${Math.max(0, Math.min(100, backgroundPositionY))}%`,
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.1}px)`,
          willChange: 'transform, background-position'
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
      {children && (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div className="mx-auto max-w-2xl text-white">{children}</div>
        </div>
      )}
    </section>
  );
}
