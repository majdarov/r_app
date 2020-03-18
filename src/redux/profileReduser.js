const SET_PROFILE_DESCRIPTION = "SET-PROFILE-DESCRIPTION";
const ADD_MESSAGE = "ADD-MESSAGE";

export const setProfileDesriptionAC = description => {
  return { type: SET_PROFILE_DESCRIPTION, text: description };
};

export const addMessageAC = text => {
  return { type: ADD_MESSAGE, text: text };
};

let initialState = {
  profileDescription: "Profile description...",
  posts: [
    { message: "First Message", likes: "10" },
    { message: "Second Message", likes: "5" },
    { message: "Third Message", likes: "5" }
  ]
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DESCRIPTION:
      return Object.assign({}, state, {profileDescription: action.text});
    case ADD_MESSAGE:
      let msg = {
        message: action.text,
        likes: 0
      };
      state.posts.push(msg);
      return Object.assign({}, state);
    default:
      return state;
  }
};
export default profileReduser;
