import React from "react";
import Post from "./Post/Post";
import { useState } from "react";
import { addMessageAC } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {

  let postElements = props.profilePage.posts.map((item, idx) => (
    <Post message={item.message} likes={item.likes} key={idx} />
  ));

  let newPostElement = React.createRef();

  const [newPostText, setNewPostText] = useState("");

  let addPost = (text) => {
    if (!text.length) return;
    props.store.dispatch(addMessageAC(text));
    setNewPostText("");
  }

  function onPostChange(text) {
    setNewPostText(text);
  }

  return <MyPosts 
    newPostText={newPostText}
    newPostElement={newPostElement}
    onPostChange={onPostChange}
    addPost={addPost}
    postElements={postElements}/>
};

export default MyPostsContainer;
