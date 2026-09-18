const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'dist');
fs.rmSync(out, {recursive:true, force:true});
fs.mkdirSync(out);
for (const file of ['index.html', 'fonts', 'favicon.png', 'favicon.svg', 'apple-touch-icon.png', 'og.png', 'resume.pdf']) {
  fs.cpSync(path.join(root,file), path.join(out,file), {recursive:true});
}
