const fs = require('fs');
let content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const replacement = `export const ACCELERATORS = [
  { name: 'Y Combinator', label: 'YC Alumni', logoUrl: 'https://logo.clearbit.com/ycombinator.com' },
  { name: 'Techstars', label: 'Techstars Network', logoUrl: 'https://logo.clearbit.com/techstars.com' },
  { name: 'Stanford', label: 'Stanford CS', logoUrl: 'https://logo.clearbit.com/stanford.edu' },
  { name: 'MIT', label: 'MIT AI Lab', logoUrl: 'https://logo.clearbit.com/mit.edu' },
  { name: 'OpenAI', label: 'OpenAI Builders', logoUrl: 'https://logo.clearbit.com/openai.com' },
  { name: 'Google', label: 'Google Alumni', logoUrl: 'https://logo.clearbit.com/google.com' },
  { name: 'Sequoia', label: 'Arc Founders', logoUrl: 'https://logo.clearbit.com/sequoiacap.com' },
  { name: 'Meta', label: 'Meta Alumni', logoUrl: 'https://logo.clearbit.com/meta.com' },
];`;

content = content.replace(/export const ACCELERATORS = \[[\s\S]*?\];/, replacement);
fs.writeFileSync('src/data/mockData.ts', content);
