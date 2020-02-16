import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = props => {

  let dialogsElements = props.users.map((item, index) => {
    return <DialogItem 
      name={item.name} 
      id={item.id} 
      key={index}
      photo={item.photo} />;
  });

  let messagesElements = props.messages.map((item, idx) => {
    return <Message value={item.message} likes={item.likes} key={idx} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
