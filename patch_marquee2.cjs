const fs = require('fs');
let content = fs.readFileSync('src/components/SocialProofMarquee.tsx', 'utf8');

const searchStr = `{item.logoUrl ? (
                <img 
                  src={item.logoUrl} 
                  alt={item.name} 
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform brightness-0 invert opacity-70 group-hover:opacity-100" 
                />
              ) : (
                <Award className="w-4 h-4 text-[#FBE618] group-hover:scale-110 transition-transform" />
              )}`;

const replacement = `{item.logoUrl ? (
                <div className="w-8 h-8 rounded-full bg-white/10 p-1.5 flex items-center justify-center shrink-0 border border-white/5 group-hover:bg-white/20 transition-colors">
                  <img 
                    src={item.logoUrl} 
                    alt={item.name} 
                    className="w-full h-full object-contain rounded-sm" 
                  />
                </div>
              ) : (
                <Award className="w-4 h-4 text-[#FBE618] group-hover:scale-110 transition-transform" />
              )}`;

content = content.replace(searchStr, replacement);
fs.writeFileSync('src/components/SocialProofMarquee.tsx', content);
