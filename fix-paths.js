const fs = require('fs');
const path = require('path');

function replacePaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      replacePaths(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace image paths
      content = content.replace(/src="\/images\//g, 'src="/landingpage/images/');
      content = content.replace(/href="\/images\//g, 'href="/landingpage/images/');
      content = content.replace(/url\(\/images\//g, 'url(/landingpage/images/');
      content = content.replace(/"\/images\//g, '"/landingpage/images/');
      
      // Replace favicon and other root assets
      content = content.replace(/href="\/favicon\./g, 'href="/landingpage/favicon.');
      content = content.replace(/src="\/favicon\./g, 'src="/landingpage/favicon.');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in: ${filePath}`);
    }
  });
}

console.log('Fixing asset paths for GitHub Pages...');
replacePaths('./out');
console.log('Done!');