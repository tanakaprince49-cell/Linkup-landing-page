const fs = require('fs');
let content = fs.readFileSync('src/components/SocialProofMarquee.tsx', 'utf8');

const searchStr = `<Award className="w-4 h-4 text-[#FBE618] group-hover:scale-110 transition-transform" />`;

const replacement = `{item.logoUrl ? (
                <img 
                  src={item.logoUrl} 
                  alt={item.name} 
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform brightness-0 invert opacity-70 group-hover:opacity-100" 
                />
              ) : (
                <Award className="w-4 h-4 text-[#FBE618] group-hover:scale-110 transition-transform" />
              )}`;

content = content.replace(searchStr, replacement);
fs.writeFileSync('src/components/SocialProofMarquee.tsx', content);
