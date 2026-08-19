const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');
content = content.replace(
  '<meta name="scrolllaunch-verify"',
  '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />\n    <meta name="scrolllaunch-verify"'
);
fs.writeFileSync('index.html', content);
console.log('Updated index.html');
