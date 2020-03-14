import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import TextArea from "../TextArea/TextArea";

const Dialogs = props => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{props.dialogsElements}</div>
      <div className={s.messages}>messages{props.messagesElements}</div>
      <NavLink
        to={"../dialogs"}
        onClick={() => props.setUser(null)}>
        <div>ALL MESSAGES</div>
      </NavLink>
      <div className={s.textarea}>
        <TextArea
          onChange={props.onTextChange}
          refrence={props.newMessEl}
          value={props.newTextMessage}
        />
        <button className="button" onClick={props.addNewDialog}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
