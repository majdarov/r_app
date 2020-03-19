import React from "react";
import Message from "./Message/Message";
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import Dialogs from "./Dialogs";
import { addNewTextMessageAC, addDialogAC, setCurrentUserAC } from "../../redux/dialogsReduser";
import { connect } from "react-redux";

function messagesElements(state) {
  
  let messages;
  let userid = state.dialogsPage.user;
  let arrMessage = state.dialogsPage.messages;

  if (userid + 1) {
    messages = arrMessage.filter(item => item.iduser === userid);
  } else {
    messages = state.dialogsPage.messages;
  }

  messages = messages.map((item, idx) => {
    return <Message value={item.message} likes={item.likes} key={idx} username={item.iduser}/>;
  });
  return messages;
}

function dialogsElements(state) {
  let elements = state.dialogsPage.users.map((item, index) => {
    return <DialogItemContainer user={item} key={index}/>
  });
  return elements;
}

let newMessEl = React.createRef();

const mapStateToProps = state => {
  
  return {
    dialogsElements: dialogsElements(state),
    messagesElements: messagesElements(state),
    newTextMessage: state.dialogsPage.newTextMessage,
    newMessEl: newMessEl
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTextChange: function () {
      let text = newMessEl.current.value;
      dispatch(addNewTextMessageAC(text));
    },
    addNewDialog: function () {
      dispatch(addDialogAC());
    },
    setUser: id => {
      dispatch(setCurrentUserAC(id));
    }
  }
}

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
