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
