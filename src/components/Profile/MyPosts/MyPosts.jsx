import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  
  let postElements = props.posts.map((item, idx) => (
    <Post message={item.message} likes={item.likes} key={idx} />
  ));

  return (
    <div className={s.myposts}>
      <h4>My Posts</h4>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
