import React from 'react';
import PostItem from './postitem';
import postDatas from '../../data/postdatas.ts';


const PostsList: React.FC = () => {
  return (
    <section className=''>
      <h3>Posts</h3>
      <ul>
        {postDatas.map((post, index) => (
          <PostItem key={index} filename={post.filename} title={post.title} date={post.date} />
        ))}
      </ul>
    </section>
  );
};

export default PostsList;
