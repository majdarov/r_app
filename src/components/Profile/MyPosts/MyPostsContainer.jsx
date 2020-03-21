import React from "react";
import Post from "./Post/Post";
import { addMessageAC, setNewPosTextAC } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapState = state => {
  let newPostElement = React.createRef();
  let postElements = state.profilePage.posts.map((item, idx) => (
    <Post message={item.message} likes={item.likes} key={idx} />
  ));
  return {
    postElements: postElements,
    newPostText: state.profilePage.newPostText,
    newPostElement: newPostElement
  }
}

const mapDispatch = dispatch => {
  return {
    onPostChange: e => { 
      let txt = e.target.value;
      dispatch(setNewPosTextAC(txt)) 
    },
    addPost: () => { dispatch(addMessageAC()) },

  }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);

export default MyPostsContainer;
