const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const replacement = `export const ACCELERATORS = [
  { name: 'Y Combinator', label: 'YC Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg' },
  { name: 'Techstars', label: 'Techstars Network', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Techstars_logo.png' },
  { name: 'Stanford', label: 'Stanford CS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg' },
  { name: 'MIT', label: 'MIT AI Lab', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/MIT_logo_2003-2023.svg' },
  { name: 'OpenAI', label: 'OpenAI Builders', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Google', label: 'Google Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Sequoia', label: 'Arc Founders', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Sequoia_Capital_logo.svg' },
  { name: 'Meta', label: 'Meta Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
];`;

content = content.replace(/export const ACCELERATORS = \[[\s\S]*?\];/, replacement);
fs.writeFileSync('src/data/mockData.ts', content);
