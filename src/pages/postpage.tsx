import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PostContent } from '../types';
import { Helmet } from 'react-helmet-async';
import rehypeRaw from 'rehype-raw';
import Footer from '../components/footer';
import { MotionLayout } from '../components/motionlayout';
import PostHeader from '../components/postheader';

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
    // Optionally, you can return null or some placeholder here
    // if you don't want to render anything while postContent is null.
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Thomas Seeley - {postContent.title}</title>
        <meta name='description' content={postContent.description} />
      </Helmet>
      <MotionLayout>
        <PostHeader />
        <article>
        <div className='article-header'>
          <h2>{postContent.title}</h2>
          <time>TS ~ {postContent.date}</time>
        </div>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{postContent.content}</ReactMarkdown>
        </article>
        <Footer />
      </MotionLayout>
    </>
  );
};

export default PostPage;
