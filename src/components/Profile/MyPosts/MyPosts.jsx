import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import TextArea from "../../TextArea/TextArea";
import { useState } from "react";
import { addMessageAC } from "../../../redux/profileReduser";

const MyPosts = props => {

  let postElements = props.profilePage.posts.map((item, idx) => (
    <Post message={item.message} likes={item.likes} key={idx} />
  ));

  let newPostElement = React.createRef();

  const [newPostText, setNewPostText] = useState("");

  let addPost = () => {
    let text = newPostElement.current.value;
    if (!text.length) return;
    props.dispatch(addMessageAC(text));
    setNewPostText("");
  }

  function onPostChange() {
    let text = newPostElement.current.value;
    setNewPostText(text);
  }

  return (
    <div className={s.myposts}>
      <h3>My Posts</h3>
      <div className={s.textarea}>
        <TextArea 
          onChange={onPostChange}
          refrence={newPostElement}
          value={newPostText}
        />
        <div className={"button " + s.btn_posts} onClick={addPost}>Add post</div >
      </div>
      <div className={s.posts}>{postElements}</div>
    </div>
  );
};

export default MyPosts;
