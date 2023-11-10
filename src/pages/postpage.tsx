import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PostContent } from '../types';
import { Helmet } from 'react-helmet-async';
import rehypeRaw from 'rehype-raw';

interface Params {
  [key: string]: string;
}


const PostPage: React.FC = () => {
  const { slug } = useParams<Params>();
  const [postContent, setPostContent] = useState<PostContent | null>(null);

  useEffect(() => {
    if (slug) {
      const loadPost = async () => {
        try {
          const module = await import(`../data/${slug}.json`);
          setPostContent(module.default as PostContent);
        } catch (error) {
          console.error('Post not found:', error);
        }
      };

      loadPost();
    }
  }, [slug]);

  if (!postContent) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Helmet>
      <title>Thomas Seeley - {postContent.title}</title>
      <meta name='description' content={postContent.description} />
    </Helmet>
    <article>
      <div className='article-header'>
      <h2>{postContent.title}</h2>
      <time>{postContent.date}</time>
      </div>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{postContent.content}</ReactMarkdown>
    </article>
    </>
  );
};

export default PostPage;
