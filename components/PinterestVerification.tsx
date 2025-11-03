'use client';

import { useEffect } from 'react';

export default function PinterestVerification() {
  useEffect(() => {
    // Check if meta tag already exists
    if (document.querySelector('meta[name="p:domain_verify"]')) {
      return;
    }

    // Create and append the Pinterest verification meta tag
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'p:domain_verify');
    meta.setAttribute('content', '12b6f42affb7537b4f78a6f420394653');
    document.head.appendChild(meta);
  }, []);

  return null;
}

