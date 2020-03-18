import React from "react";
import { setProfileDesriptionAC } from "../../redux/profileReduser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Content = props => {

  let state = props.store.getState();

  function updateDescription(description) {
    props.store.dispatch(setProfileDesriptionAC(description));
  }


  return (
    <div>
      <ProfileInfoContainer
        profilePage={state.profilePage}
        updateDescription={updateDescription}
      />
      <MyPostsContainer 
        store={props.store}
        />
    </div>
  );
};

export default Content;
