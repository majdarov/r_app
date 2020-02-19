import React from "react";
import s from "../Dialogs.module.css";

const Message = props => {
  return (
    <div className={s.message}>
      <div>{props.value}</div>
      <div>
        <span>likes -> {props.likes}</span>
      </div>
    </div>
  );
};
export default Message;
