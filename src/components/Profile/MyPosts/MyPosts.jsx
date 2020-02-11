import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <h4>My Posts</h4>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='First Message' likes='10' />
        <Post message='Second Message' likes='5' />
      </div>
    </div>
  );
}

export default MyPosts;