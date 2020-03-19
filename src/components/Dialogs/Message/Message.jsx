import React from "react";
import s from "../Dialogs.module.css";

const Message = props => {
  return (
    <div className={s.message}>
      <h5>From: {props.username}</h5>
        {props.value}<br />
        <span> likes -> {props.likes}</span>
    </div>
  );
};
export default Message;
