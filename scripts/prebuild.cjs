const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function convertMarkdownToJson(srcDir, outputDir) {
  console.log(`Source Directory: ${srcDir}`);
  console.log(`Output Directory: ${outputDir}`);
  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read all markdown files from the source directory
  const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.md'));

  files.forEach(file => {
    const filePath = path.join(srcDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    
    // Parse the markdown file
    const { data, content } = matter(fileContents);

    // Create an object to be saved as JSON
    const postObject = {
      ...data,
      content
    };

    // Write the JSON file
    fs.writeFileSync(
      path.join(outputDir, file.replace('.md', '.json')),
      JSON.stringify(postObject, null, 2)
    );
  });
}

// Usage
const srcDir = path.join('src/content/posts'); // Directory where your markdown files are located
const outputDir = path.join('src/data'); // Output directory for JSON files
convertMarkdownToJson(srcDir, outputDir);
