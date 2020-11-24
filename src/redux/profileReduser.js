import { profileApi } from "../api/api";

const SET_PROFILE_DESCRIPTION = "SET-PROFILE-DESCRIPTION";
const ADD_MESSAGE = "ADD-MESSAGE";
const TOGGLE_SHOW_TXT = "SHOW-TXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

export const setProfileDesriptionAC = description => {
  return { type: SET_PROFILE_DESCRIPTION, text: description };
};

export const addMessageAC = (post) => {
  return { type: ADD_MESSAGE, post };
};

export const toggleShowTxtAC = toggle => {
  return { type: TOGGLE_SHOW_TXT, toggle};
};

export const setUserProfileAC = profile => {
  return {type: SET_USER_PROFILE, profile}
}

export const setUserStatusAC = status => {
  return {type: SET_USER_STATUS, status}
}

let initialState = {
  profileDescription: "Profile description...",
  showTxt: false,
  posts: [
    { message: "First Message", likes: "10" },
    { message: "Second Message", likes: "5" },
    { message: "Third Message", likes: "5" }
  ],
  userProfile: null,
  status: ""
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {

    case SET_PROFILE_DESCRIPTION:
      return Object.assign({}, state, { profileDescription: action.text });

      case ADD_MESSAGE:
      let msg = {
        message: action.post,
        likes: 0
      };
      return {...state,
        posts: [...state.posts, msg],
        newPostText: ""
      };

      case TOGGLE_SHOW_TXT:
        return Object.assign({}, state, {
          showTxt: action.toggle
        });

      case SET_USER_PROFILE:
        return {...state, userProfile: action.profile}

      case SET_USER_STATUS:
        return {...state, status: action.status}
    default:
      return state;
  }
};

export const getUserProfile = (id) => {
  return (dispatch) => {
    profileApi.getProfile(id)
      .then(res => dispatch(setUserProfileAC(res)));
  }
}

export const getUserStatus = (id) => {
  return (dispatch) => {
    profileApi.getStatus(id)
      .then(res => dispatch(setUserStatusAC(res)));
  }
}

export const updateStatus = status => {
  return dispatch => {
    profileApi.updateStatus(status)
    .then(res => {
      if (res.data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
      }
    })
  }
}

export default profileReduser;
