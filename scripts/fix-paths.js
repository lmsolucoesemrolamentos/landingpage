#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = './out';
const REPO_NAME = 'landingpage';

console.log('🔧 Starting post-build fixes for GitHub Pages...');

// Function to fix paths in HTML files
function fixHtmlPaths(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Fix asset paths
  let fixed = content
    // Fix CSS imports
    .replace(/href="\/_next\//g, `href="/${REPO_NAME}/_next/`)
    // Fix JS imports  
    .replace(/src="\/_next\//g, `src="/${REPO_NAME}/_next/`)
    // Fix image paths that might be missed
    .replace(/src="\/images\//g, `src="/${REPO_NAME}/images/`)
    // Fix any remaining absolute paths
    .replace(/href="\/([^\/])/g, `href="/${REPO_NAME}/$1`)
    // Fix Google Fonts
    .replace(/fonts\.googleapis\.com/g, 'fonts.googleapis.com');

  fs.writeFileSync(filePath, fixed);
  console.log(`✅ Fixed paths in: ${filePath}`);
}

// Function to fix CSS files
function fixCssPaths(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  let fixed = content
    // Fix URL paths in CSS
    .replace(/url\(\/([^\/])/g, `url(/${REPO_NAME}/$1`)
    // Fix font URLs
    .replace(/url\(data:/g, 'url(data:');

  fs.writeFileSync(filePath, fixed);
  console.log(`✅ Fixed CSS paths in: ${filePath}`);
}

// Recursively process files
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      fixHtmlPaths(filePath);
    } else if (file.endsWith('.css')) {
      fixCssPaths(filePath);
    }
  });
}

// Check if out directory exists
if (!fs.existsSync(OUT_DIR)) {
  console.error('❌ Out directory not found!');
  process.exit(1);
}

// Process all files
processDirectory(OUT_DIR);

console.log('🎉 Post-build fixes completed successfully!');