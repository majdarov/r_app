import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {

  let postElements = props.profilePage.posts.map((item, idx) => (
    <Post message={item.message} likes={item.likes} key={idx} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    if (!text.length) return;
    props.profilePage.addMessage();
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    props.profilePage.addNewText(text);
  }

  return (
    <div className={s.myposts}>
      <h4>My Posts</h4>
      <div>
        <textarea onChange={onPostChange} 
          ref={newPostElement} 
          value={props.profilePage.newPostText}
          placeholder='add new message...' />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
