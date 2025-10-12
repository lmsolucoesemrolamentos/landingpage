import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  // Static export configuration for GitHub Pages
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // Configure paths for GitHub Pages
  basePath: isProd && isGitHubPages ? '/landingpage' : '',
  assetPrefix: isProd && isGitHubPages ? '/landingpage/' : '',
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
    domains: ['lmsolucoesemrolamentos.github.io'],
  },

  // SEO and Performance
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
};

export default nextConfig;
