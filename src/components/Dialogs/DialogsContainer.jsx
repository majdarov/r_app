import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import { addNewTextMessageAC, addDialogAC, setCurrentUserAC } from "../../redux/dialogsReduser";

const DialogsContainer = props => {

  let dispatch = props.store.dispatch;
  let state = props.store.getState();

  function setUser(id) {
    dispatch(setCurrentUserAC(id));
  }

  let dialogsElements = state.dialogsPage.users.map((item, index) => {
    return <DialogItem user={item} key={index} setUser={setUser} />;
  });

  let arrMessage = state.dialogsPage.messages;

 let userid = +window.location.pathname.split("/")[2];

  if (userid + 1) {
    arrMessage = arrMessage.filter(item => item.iduser === userid);
  }

  let messagesElements = arrMessage.map((item, idx) => {
    return <Message value={item.message} likes={item.likes} key={idx} />;
  });

  let newMessEl = React.createRef();

  function onTextChange() {
    let text = newMessEl.current.value;
    dispatch(addNewTextMessageAC(text));
  }

  function addNewDialog() {
    dispatch(addDialogAC());
  }

  return (
    <Dialogs
      dialogsElements={dialogsElements}
      messagesElements={messagesElements}
      newMessEl={newMessEl}
      onTextChange={onTextChange}
      addNewDialog={addNewDialog}
      setUser={setUser}
      newTextMessage={state.dialogsPage.newTextMessage} />
  )
};

export default DialogsContainer;
