"use client";
import React, { useState, useEffect } from "react";
import ParallaxImage from "./ParallaxImage";

// Your image collection - add more images here as you upload them
const IMAGE_COLLECTION = [
  "_VWR5983.jpg",
  "_VWR6544.jpg", 
  "_VWR3352.jpg",
  "_VWR4578.jpg",
  "_VWR5003.jpg",
  "_VWR5005.jpg",
  "_VWR7765.jpg",
  // Add more image filenames here as you upload them
];

interface DynamicParallaxImageProps {
  height?: string;
  focalPoint?: { x: number; y: number };
  children?: React.ReactNode;
  excludeImages?: string[]; // Images to exclude from random selection
}

export default function DynamicParallaxImage({ 
  height = "h-[70vh]", 
  focalPoint = { x: 0.5, y: 0.25 },
  children,
  excludeImages = []
}: DynamicParallaxImageProps) {
  const [selectedImage, setSelectedImage] = useState<string>("");

  useEffect(() => {
    // Filter out excluded images
    const availableImages = IMAGE_COLLECTION.filter(img => !excludeImages.includes(img));
    
    // Randomly select an image
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const selected = availableImages[randomIndex];
    
    // Build the full Firebase URL
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/${selected}?alt=media`;
    setSelectedImage(imageUrl);
  }, []);

  if (!selectedImage) {
    // Show a placeholder while loading
    return (
      <div className={`${height} w-full bg-gray-900 animate-pulse`} />
    );
  }

  return (
    <ParallaxImage 
      image={selectedImage}
      height={height}
      focalPoint={focalPoint}
    >
      {children}
    </ParallaxImage>
  );
}

