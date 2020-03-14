import React from "react";
import s from "./MyPosts.module.css";
import TextArea from "../../TextArea/TextArea";

const MyPosts = props => {

  let addPost = () => {
    let text = props.newPostElement.current.value;
    props.addPost(text);
  }

  function onPostChange() {
    let text = props.newPostElement.current.value;
    props.onPostChange(text);
  }

  return (
    <div className={s.myposts}>
      <h3>My Posts</h3>
      <div className={s.textarea}>
        <TextArea 
          onChange={onPostChange}
          refrence={props.newPostElement}
          value={props.newPostText}
        />
        <div className={"button " + s.btn_posts} onClick={addPost}>Add post</div >
      </div>
      <div className={s.posts}>{props.postElements}</div>
    </div>
  );
};

export default MyPosts;
