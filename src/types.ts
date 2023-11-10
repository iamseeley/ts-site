// src/types.ts
export interface PostProps {
    slug?: string; // This will be used to identify the post
    date: string;
    title: string;
    link?: string;
    body?: string;
  }
  
  export interface PostContent {
    title: string;
    date: string;
    description: string;
    content: string;
  }