const fs = require('fs');
const p = '/app/applet/src/components/Navbar.tsx';
let content = fs.readFileSync(p, 'utf8');

content = content.replace(
  '        {/* Desktop Nav Links */}',
  '        <div className="flex items-center gap-6">\n        {/* Desktop Nav Links */}'
);

content = content.replace(
  '          </AnimatePresence>\n        </div>\n      </div>',
  '          </AnimatePresence>\n        </div>\n        </div>\n      </div>'
);

fs.writeFileSync(p, content);
console.log('Fixed nav flex container');
