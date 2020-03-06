const SET_CURRENT_USER = "SET-CURRENT-USER";
const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE";
const ADD_DIALOG = "ADD-DIALOG";

const dialogsReduser = (state, action) => {
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
      state.messages.push(dialog);
      state.newTextMessage = "";
      return state;
    case ADD_NEW_TEXT_MESSAGE:
      if (!state.user) {
        state.newTextMessage = 'Выберите пользователя';
        return state;
      }
      state.newTextMessage = action.text;
      return state;
    case SET_CURRENT_USER:
      state.newTextMessage = '';
      state.user = action.userid;
      return state;
    default:
      return state;
  }
};
export default dialogsReduser;

export const setCurrentUserAC = userid => {
  return { type: SET_CURRENT_USER, userid: userid };
};

export const addNewTextMessageAC = text => {
  return { type: ADD_NEW_TEXT_MESSAGE, text: text };
};

export const addDialogAC = () => {
  return { type: ADD_DIALOG };
};
