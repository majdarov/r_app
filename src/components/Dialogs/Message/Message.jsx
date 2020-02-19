import React from "react";
import s from "../Dialogs.module.css";

const Message = props => {
  return (
    <div className={s.message}>
        {props.value}<br />
        <span> likes -> {props.likes}</span>
    </div>
  );
};
export default Message;
