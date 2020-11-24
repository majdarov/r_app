import React from "react";
import { AddMessageReduxForm } from "../../common/FormAddMessage/FormAddMessage";
import s from "./MyPosts.module.css";

const MyPosts = props => {

  const handleSubmit = formData => {
    props.addPostForm(formData.message);
  }

  return (
    <div className={s.myposts}>
      <h3>My Posts</h3>
      <div className={s.textarea}>
        <AddMessageReduxForm onSubmit={handleSubmit} />
      </div>
      <div className={s.posts}>{props.postElements}</div>
    </div>
  );
};

export default MyPosts;
