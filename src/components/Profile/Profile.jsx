import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = props => {
  return (
    <div>
      <ProfileInfo 
      profileDescription={props.profilePage.profileDescription}
      setProfileDescription={props.setProfileDescription}
      />
      <MyPosts profilePage={props.profilePage} />
    </div>
  );
};

export default Content;
