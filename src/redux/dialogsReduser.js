const SET_CURRENT_USER = "SET-CURRENT-USER";
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE";
const ADD_DIALOG = "ADD-DIALOG";

export const setCurrentUserAC = userid => {
  return { type: SET_CURRENT_USER, userid: userid };
};

export const addNewTextMessageAC = text => {
  return { type: ADD_NEW_TEXT_MESSAGE, text: text };
};

export const addDialogAC = () => {
  return { type: ADD_DIALOG };
};

let initialState = {
  users: [
    { id: 0, name: "Dymich", photo: "0.jpg" },
    { id: 1, name: "Andrey", photo: "1.jpg" },
    { id: 2, name: "Michael", photo: "2.jpg" },
    { id: 3, name: "Vlad", photo: "3.jpg" },
    { id: 4, name: "Katya", photo: "4.jpg" },
    { id: 5, name: "Gala", photo: "5.jpg" }
  ],
  messages: [
    { id: 1, iduser: 3, message: "Message1", likes: 5 },
    { id: 2, iduser: 5, message: "Message2", likes: 10 },
    { id: 3, iduser: 2, message: "Message3", likes: 12 },
    { id: 4, iduser: 3, message: "Message4", likes: 15 },
    { id: 5, iduser: 0, message: "Message from user 0", likes: 3 }
  ],
  newTextMessage: "",
  user: null
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_DIALOG:
      if (!state.newTextMessage) return state;
      let id = state.messages.length + 1;
      let dialog = {
        id: id,
        message: state.newTextMessage,
        iduser: state.user,
        likes: 0
      };
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          dialog
        ],
        newTextMessage: ""
      });

    case ADD_NEW_TEXT_MESSAGE:
      if (!state.user) {
        return Object.assign({}, state, {
          newTextMessage: "Выберите пользователя"
        });
      }
      return Object.assign({}, state, {
        newTextMessage: action.text
      });

    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        newTextMessage: "",
        user: action.userid
      });
      
    default:
      return state;
  }
};
export default dialogsReduser;
