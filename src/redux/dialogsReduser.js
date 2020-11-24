const SET_CURRENT_USER = "SET-CURRENT-USER";
const ADD_DIALOG = "ADD-DIALOG";
const SET_LIKE = "SET-LIKE";

export const setCurrentUserAC = userid => {
  return { type: SET_CURRENT_USER, userid: userid };
};

export const addDialogAC = (text) => {
  return { type: ADD_DIALOG, text };
};

export const setLikeAC = (id, like) => {
  return { type: SET_LIKE, id, like };
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
    { id: 1, iduser: 3, message: "Message from user 3", likes: 5 },
    { id: 2, iduser: 5, message: "Messagefrom user 5", likes: 10 },
    { id: 3, iduser: 2, message: "Message from user 2", likes: 12 },
    { id: 4, iduser: 3, message: "Message from user 3", likes: 15 },
    { id: 5, iduser: 0, message: "Message from user 0", likes: 3 }
  ],
  user: -1
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {

    case ADD_DIALOG:
      let id = state.messages.length + 1;
      let dialog = {
        id: id,
        message: action.text,
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

    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        newTextMessage: "",
        user: action.userid
      });

    case SET_LIKE:
      let messages = [...state.messages];
      let message = messages.find(item => item.id === action.id);
      message.likes += action.like;
      if (message.likes < 0) message.likes = 0;
      return Object.assign({}, state, {
        messages: messages
      });

    default:
      return state;
  }
};
export default dialogsReduser;
