import React from "react";
import s from "./MyPosts.module.css";
import TextArea from "../../TextArea/TextArea";

const MyPosts = props => {

  return (
    <div className={s.myposts}>
      <h3>My Posts</h3>
      <div className={s.textarea}>
        <TextArea
          onChange={props.onPostChange}
          refrence={props.newPostElement}
          value={props.newPostText}
        />
        <div className={"button " + s.btn_posts} onClick={props.addPost}>Add post</div >
      </div>
      <div className={s.posts}>{props.postElements}</div>
    </div>
  );
};

export default MyPosts;
