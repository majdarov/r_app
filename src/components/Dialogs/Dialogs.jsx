import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import TextArea from "../TextArea/TextArea";

const Dialogs = props => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{props.dialogsElements}</div>
      <div className={s.messages}>
        <div>
          <h3>Messages</h3>
          {/* <button><i className="far fa-hand-point-up"></i></button> */}
        </div>
        {props.messagesElements}
      </div>
      <NavLink
        to={"../dialogs"}
        onClick={() => props.setUser(-1)}>
        <div>ALL MESSAGES</div>
      </NavLink>
      <div className={s.textarea}>
        <TextArea
          onChange={props.onTextChange}
          refrence={props.newMessEl}
          value={props.newTextMessage}
          placeholder={props.placeholder}
        />
        <button className="button" onClick={props.addNewDialog}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
