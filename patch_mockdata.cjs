const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const replacement = `export const ACCELERATORS = [
  { name: 'Y Combinator', label: 'YC Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg' },
  { name: 'Techstars', label: 'Techstars Network', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Techstars_Logo_2022.svg/512px-Techstars_Logo_2022.svg.png' },
  { name: 'Stanford', label: 'Stanford CS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg' },
  { name: 'MIT', label: 'MIT AI Lab', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg' },
  { name: 'OpenAI', label: 'OpenAI Builders', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
  { name: 'Google', label: 'Google Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Sequoia', label: 'Arc Founders', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sequoia_Capital_logo.svg/512px-Sequoia_Capital_logo.svg.png' },
  { name: 'Meta', label: 'Meta Alumni', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
];`;

content = content.replace(/export const ACCELERATORS = \[[\s\S]*?\];/, replacement);
fs.writeFileSync('src/data/mockData.ts', content);
