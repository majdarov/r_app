import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = props => {
  return (
    <div>
      <ProfileInfo
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
      <MyPosts 
        profilePage={props.profilePage} 
        dispatch={props.dispatch}
        />
    </div>
  );
};

export default Content;
