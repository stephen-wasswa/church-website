const fs = require('fs');
const cssContent = fs.readFileSync('alimunze-temp/style.css', 'utf-8');
fs.writeFileSync('src/index.css', `@import "tailwindcss";\n` + cssContent);
