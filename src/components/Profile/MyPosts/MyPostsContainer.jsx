import React from "react";
import Post from "./Post/Post";
import { addMessageAC } from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapState = state => {
  let postElements = state.profilePage.posts.map((item, idx) => (
    <Post message={item.message} likes={item.likes} key={idx} />
  ));
  return {
    postElements: postElements,
  }
}

const mapDispatch = dispatch => {
  return {
    addPostForm: post => {
      dispatch(addMessageAC(post));
    }
  }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts);

export default MyPostsContainer;
