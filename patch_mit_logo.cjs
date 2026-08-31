const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

content = content.replace(
  'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/512px-MIT_logo.svg.png'
);

fs.writeFileSync('src/data/mockData.ts', content);
