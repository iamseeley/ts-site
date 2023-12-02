import React from 'react';
import { Link } from 'react-router-dom';

interface PostItemProps {
  filename: string;
  title: string;
  date: string;
}

const PostItem: React.FC<PostItemProps> = ({ filename, title, date }) => {
  return (
    <>
    <li className='post-item'>
      
      <time>{date}</time>
      
      
      <Link to={`/posts/${filename}`}><strong>{title}</strong></Link>
      
      </li>
    </>
  );
};

export default PostItem;
