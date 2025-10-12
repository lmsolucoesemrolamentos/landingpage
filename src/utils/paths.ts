// Utility function to handle asset paths for GitHub Pages deployment

/**
 * Get the correct path for an asset (image, font, etc.)
 * @param path - The asset path starting with /
 * @returns The correct path for the current environment
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Only run in browser
  if (typeof window === 'undefined') {
    // During SSR/build, return the original path
    return normalizedPath
  }
  
  // In browser, check if we're on GitHub Pages
  const hostname = window.location.hostname
  const pathname = window.location.pathname
  
  // If we're on GitHub Pages
  if (hostname.includes('github.io') || pathname.startsWith('/landingpage')) {
    return `/landingpage${normalizedPath}`
  }
  
  return normalizedPath
}

/**
 * Get the base path for the application
 * @returns The base path for the current environment
 */
export function getBasePath(): string {
  if (typeof window === 'undefined') {
    return ''
  }
  
  const hostname = window.location.hostname
  const pathname = window.location.pathname
  
  if (hostname.includes('github.io') || pathname.startsWith('/landingpage')) {
    return '/landingpage'
  }
  
  return ''
}

// Hook para usar em componentes React
export function useAssetPath() {
  const getPath = (path: string) => {
    if (typeof window === 'undefined') return path
    return getAssetPath(path)
  }
  
  return getPath
}