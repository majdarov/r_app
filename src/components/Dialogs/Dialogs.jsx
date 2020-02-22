import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { NavLink } from "react-router-dom";

const Dialogs = props => {
  let dialogsElements = props.dialogsPage.users.map((item, index) => {
    return <DialogItem
      user={item}
      key={index} />;
  });

  let arrMessage = props.dialogsPage.messages;
  let userid = +window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1);
  console.log(userid);
  
  props.dialogsPage.setCurrentUser(userid);

  if (props.dialogsPage.getCurrentUser() + 1) {
    arrMessage = arrMessage.filter(item => item.iduser === userid);
  }

  let messagesElements = arrMessage.map((item, idx) => {
    return <Message value={item.message} likes={item.likes} key={idx} />;
  });



  let newMessEl = React.createRef();

  function onTextChange() {
    let text = newMessEl.current.value;
    props.dialogsPage.addNewTextMessage(text);
  }

  let addNewDialog = () => {
    props.dialogsPage.addDialog(userid);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>messages{messagesElements}</div>
      <NavLink to={"../dialogs"}>
        <div>ALL MESSAGES</div>
      </NavLink>
      <div className={s.textarea}>
        <textarea
          onChange={onTextChange}
          ref={newMessEl}
          cols={"60"}
          rows={"4"}
          wrap={"hard"}
          value={props.dialogsPage.newTextMessage}
          placeholder="add new message..."
        />
        <button className="button" onClick={addNewDialog}>
          Add Message
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
