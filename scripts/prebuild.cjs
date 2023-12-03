const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function convertMarkdownToJson(srcDir, outputDir) {
  console.log(`Converting from ${srcDir} to ${outputDir}`);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.md'));

  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContents);

    const object = { ...data, content };
    
    const outputFileName = file.replace('.md', '.json');
    fs.writeFileSync(path.join(outputDir, outputFileName), JSON.stringify(object, null, 2));
  });
}

// Usage for posts
const postsSrcDir = path.join('src/content/posts');
const postsOutputDir = path.join('src/data/posts');
convertMarkdownToJson(postsSrcDir, postsOutputDir);

// Usage for projects
const projectsSrcDir = path.join('src/content/projects');
const projectsOutputDir = path.join('src/data/projects');
convertMarkdownToJson(projectsSrcDir, projectsOutputDir);


const projectDataDir = path.join('src', 'data', 'projects');
const projectOutput = path.join( 'src', 'data', 'projectdatas.ts');

const projectFiles = fs.readdirSync(projectDataDir).filter(file => file.endsWith('.json'));

const projectDatas = projectFiles.map(file => {
  const filePath = path.join(projectDataDir, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    filename: file.replace('.json', ''),
    title: content.title,
    description: content.description,
    link: content.link,
  };
});

fs.writeFileSync(projectOutput, `export default ${JSON.stringify(projectDatas, null, 2)};`);



const postDataDir = path.join('src', 'data', 'posts');
const postOutput = path.join( 'src', 'data', 'postdatas.ts');

const postFiles = fs.readdirSync(postDataDir).filter(file => file.endsWith('.json'));

const postsDatas = postFiles.map(file => {
  const filePath = path.join(postDataDir, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return {
    filename: file.replace('.json', ''),
    title: content.title,
    date: content.date
  };
});

fs.writeFileSync(postOutput, `export default ${JSON.stringify(postsDatas, null, 2)};`);


