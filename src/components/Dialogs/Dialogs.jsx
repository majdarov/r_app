import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = props => {

  let dialogsElements = props.dialogsPage.users.map((item, index) => {
    return <DialogItem 
      name={item.name} 
      id={item.id} 
      key={index}
      photo={item.photo} />;
  });

  let messagesElements = props.dialogsPage.messages.map((item, idx) => {
    return <Message value={item.message} likes={item.likes} key={idx} />;
  });

  let newMessEl = React.createRef();
  function onTextChange() {
    let text = newMessEl.current.value;
    props.dialogsPage.addNewTextMessage(text);
  }

  let addNewDialog = () => {
    props.dialogsPage.addDialog();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.textarea}>
        <textarea 
          onChange={onTextChange} 
          ref={newMessEl} 
          value={props.dialogsPage.newTextMessage}
          placeholder='add new message...' />
        <button onClick={addNewDialog}>Add Message</button>
      </div>
    </div>
  );
};

export default Dialogs;
