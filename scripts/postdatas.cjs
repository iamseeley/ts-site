const fs = require('fs');
const path = require('path');

const dataDir = path.join('src', 'data');
const output = path.join( 'src', 'data', 'postdatas.ts');

const postFiles = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));

const postsDatas = postFiles.map(file => {
  const filePath = path.join(dataDir, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    filename: file.replace('.json', ''),
    title: content.title,
    date: content.date
  };
});

fs.writeFileSync(output, `export default ${JSON.stringify(postsDatas, null, 2)};`);
