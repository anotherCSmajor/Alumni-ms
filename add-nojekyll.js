const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist', '.nojekyll');
fs.writeFileSync(distPath, '');
console.log('.nojekyll file created in dist folder');
