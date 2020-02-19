import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item}>
      <div className={s.msg}>
        {props.message} <br />
        <span> Likes -></span> {props.likes}
      </div>
    </div>
  );
};

export default Post;
