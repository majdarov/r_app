const SET_PROFILE_DESCRIPTION = "SET-PROFILE-DESCRIPTION";
const ADD_MESSAGE = "ADD-MESSAGE";

const profileReduser = (state, action) => {
  switch (action.type) {
    case SET_PROFILE_DESCRIPTION:
      state.profileDescription = action.text;
      return state;
    case ADD_MESSAGE:
      let msg = {
        message: action.text,
        likes: 0
      };
      state.posts.push(msg);
      return state;
    default:
      return state;
  }
};
export default profileReduser;

export const setProfileDesriptionAC = description => {
  return { type: SET_PROFILE_DESCRIPTION, text: description };
};

export const addMessageAC = text => {
  return { type: ADD_MESSAGE, text: text };
};
