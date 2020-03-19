const SET_PROFILE_DESCRIPTION = "SET-PROFILE-DESCRIPTION";
const ADD_MESSAGE = "ADD-MESSAGE";
const TOGGLE_SHOW_TXT = "SHOW-TXT";
const SET_NEW_POST_TEXT = "SET-NEW-POST-TEXT";

export const setProfileDesriptionAC = description => {
  return { type: SET_PROFILE_DESCRIPTION, text: description };
};

export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};

export const toggleShowTxtAC = toggle => {
  return { type: TOGGLE_SHOW_TXT, toggle};
};

export const setNewPosTextAC = text => {
  return {type: SET_NEW_POST_TEXT, text}
}

let initialState = {
  profileDescription: "Profile description...",
  showTxt: false,
  posts: [
    { message: "First Message", likes: "10" },
    { message: "Second Message", likes: "5" },
    { message: "Third Message", likes: "5" }
  ],
  newPostText: ""
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_PROFILE_DESCRIPTION:
      return Object.assign({}, state, { profileDescription: action.text });
    
      case ADD_MESSAGE:
      if (!state.newPostText.length) return;
      let msg = {
        message: state.newPostText,
        likes: 0
      };
      state.posts.push(msg);
      return Object.assign({}, state, {
        newPostText: ""
      });

      case TOGGLE_SHOW_TXT:
        return Object.assign({}, state, {
          showTxt: action.toggle
        });

      case SET_NEW_POST_TEXT:
        // debugger;
        return Object.assign({}, state, {
          newPostText: action.text
        });

    default:
      return state;
  }
};
export default profileReduser;
