import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={s.message}>{props.value}</div>;
};

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dymich" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Michael" id="3" />
        <DialogItem name="Vlad" id="4" />
        <DialogItem name="Katya" id="5" />
        <DialogItem name="Gala" id="6" />
      </div>
      <div className={s.messages}>
        <Message value="Message1" />
        <Message value="Message2" />
        <Message value="Message3" />
      </div>
    </div>
  );
};

export default Dialogs;
