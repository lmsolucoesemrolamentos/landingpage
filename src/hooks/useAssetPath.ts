'use client';

import { useState, useEffect } from 'react';

export function useAssetPath() {
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    // Only run in browser
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      
      // Check if we're on GitHub Pages
      if (hostname.includes('github.io') || pathname.startsWith('/landingpage')) {
        setBasePath('/landingpage');
      } else {
        setBasePath('');
      }
    }
  }, []);

  const getAssetPath = (path: string): string => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
  };

  return { getAssetPath, basePath };
}