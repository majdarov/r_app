import React from "react";
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import Dialogs from "./Dialogs";
import { addNewTextMessageAC, addDialogAC, setCurrentUserAC } from "../../redux/dialogsReduser";
import { connect } from "react-redux";
import MessageContainer from "./Message/MessageContainer";

function messagesElements(state) {
  
  let messages;
  let userid = state.dialogsPage.user;
  let arrMessage = state.dialogsPage.messages;

  if (userid + 1) {
    messages = arrMessage.filter(item => item.iduser === userid);
  } else {
    messages = state.dialogsPage.messages;
  }

  const getUserName = iduser => {
    let user = state.dialogsPage.users.find(user => user.id === iduser);
    return user.name;
  }

  messages.sort((a, b) => {
    return (a.likes > b.likes) ? -1 : 1;
  });

  messages = messages.map((item, idx) => {
    return <MessageContainer
      value={item.message} 
      likes={item.likes} 
      key={idx} 
      id={item.id}
      username={getUserName(item.iduser)}/>;
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
  let placeholder;
  if (state.dialogsPage.user === -1) {
    placeholder = "Select user...";
  } else {
    placeholder = null;
  }

  return {
    dialogsElements: dialogsElements(state),
    messagesElements: messagesElements(state),
    newTextMessage: state.dialogsPage.newTextMessage,
    newMessEl: newMessEl,
    placeholder
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
