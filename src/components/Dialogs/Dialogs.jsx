import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { NavLink } from "react-router-dom";
import TextArea from "../TextArea/TextArea";

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.users.map((item, index) => {
    return <DialogItem
      user={item}
      key={index} />;
  });

  let arrMessage = props.dialogsPage.messages;
  let userid = +window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1);

  props.dispatch({ type: 'SET-CURRENT-USER', userid: userid });

  if (props.dispatch({ type: 'GET-CURRENT-USER' }) + 1) {
    arrMessage = arrMessage.filter(item => item.iduser === userid);
  }

  let messagesElements = arrMessage.map((item, idx) => {
    return <Message value={item.message} likes={item.likes} key={idx} />;
  });



  let newMessEl = React.createRef();

  function onTextChange() {
    let text = newMessEl.current.value;
    props.dispatch({ type: 'ADD-NEW-TEXT-MESSAGE', text: text });
  }

  let addNewDialog = () => {
    props.dispatch({ type: 'ADD-DIALOG' });
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>messages{messagesElements}</div>
      <NavLink to={"../dialogs"}>
        <div>ALL MESSAGES</div>
      </NavLink>
      <div className={s.textarea}>
        <TextArea
          onChange={onTextChange}
          refrence={newMessEl}
          value={props.dialogsPage.newTextMessage}
        />
        <button className="button" onClick={addNewDialog}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
