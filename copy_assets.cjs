const fs = require('fs');
const path = require('path');

const srcDir = 'alimunze-temp';
const destDir = 'public';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (['.jpg', '.png', '.svg', '.ico', '.webmanifest'].includes(ext)) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
  }
});
