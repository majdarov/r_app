import React from "react";
import s from "../Dialogs.module.css";

const Message = props => {

  let heart = props.likes ? "fas fa-heart" : "far fa-heart";

  return (
    <div className={s.message} id={props.id} onClick={e => props.clickMessage(e)}>
      <h5>From: {props.username}</h5>
      {props.value}
      <div className={s.likes}>
        <i id="like" className={heart}></i>
        <span>{props.likes}</span>
        <i id="dislike" className="fas fa-heart-broken"></i>
      </div>
    </div>
  );
};
export default Message;
