import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { AddMessageReduxForm } from "../common/FormAddMessage/FormAddMessage";

const Dialogs = props => {

  const handleSubmit = formData => {
    props.addMessage(formData.message);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{props.dialogsElements}</div>
      <div className={s.messages}>
        <div>
          <h3>Messages</h3>
        </div>
        {props.messagesElements}
      </div>
      <NavLink
        to={"../dialogs"}
        onClick={() => props.setUser(-1)}>
        <div>ALL MESSAGES</div>
      </NavLink>
      <div className={s.textarea}>
        <AddMessageReduxForm
          onSubmit={handleSubmit}
          placeholder={props.placeholder}
          txtClass={props.txtClass}
          disabled={!!props.txtClass}
        />
      </div>
    </div>
  );
};

export default Dialogs;
