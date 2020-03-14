import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { setProfileDesriptionAC } from "../../redux/profileReduser";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Content = props => {

  let state = props.store.getState();

  function updateDescription(description) {
    props.store.dispatch(setProfileDesriptionAC(description));
  }


  return (
    <div>
      <ProfileInfo
        profilePage={state.profilePage}
        updateDescription={updateDescription}
      />
      <MyPostsContainer 
        profilePage={state.profilePage} 
        store={props.store}
        />
    </div>
  );
};

export default Content;
