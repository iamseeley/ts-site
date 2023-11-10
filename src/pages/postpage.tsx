// src/components/PostPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  { marked } from 'marked';

const PostPage: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (slug) {
      // Adjust the path to where your markdown files are served from
      const markdownFilePath = `/content/posts/${slug}.md`;

      // Fetch the markdown file content
      fetch(markdownFilePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then((text) => {
          // Use marked to convert markdown to HTML
          setContent(marked(text));
        })
        .catch((error) => {
          console.error('Fetching markdown failed: ', error);
          setContent('Failed to load post content.');
        });
    }
  }, [slug]);

  if (!slug) {
    return <div>Post slug not provided.</div>;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  // Render the HTML content in a div with dangerouslySetInnerHTML
  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default PostPage;
