// src/types.ts
export interface PostProps {
    slug?: string; // This will be used to identify the post
    date: string;
    title: string;
    link?: string;
    body?: string;
  }
  
  export interface PostContent {
    html: string;
    frontmatter: {
      [key: string]: any; // Adjust this to match your frontmatter structure
    };
  }