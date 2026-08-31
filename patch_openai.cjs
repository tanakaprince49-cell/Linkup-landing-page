const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

content = content.replace(
  'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/66/OpenAI_logo_2025_%28symbol%29.svg'
);

fs.writeFileSync('src/data/mockData.ts', content);
