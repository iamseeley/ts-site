const fs = require('fs');
const path = require('path');

const dataDir = path.join('src', 'data', 'projects');
const output = path.join( 'src', 'data', 'projectdatas.ts');

const projectFiles = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));

const projectDatas = projectFiles.map(file => {
  const filePath = path.join(dataDir, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    filename: file.replace('.json', ''),
    title: content.title,
    description: content.description,
    link: content.link,
  };
});

fs.writeFileSync(output, `export default ${JSON.stringify(projectDatas, null, 2)};`);
