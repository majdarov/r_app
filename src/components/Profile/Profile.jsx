import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Content = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts {...props} />
    </div>
  );
};

export default Content;
