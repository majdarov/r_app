import { stopSubmit } from 'redux-form';
import { usersApi } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };
    default:
      return state;
  }
};

export const setUserDataAC = (data) => {
  // data - {userId, email, login}
  return { type: SET_USER_DATA, data };
};

export const authMe = () => {
  return (dispatch) => {
    return usersApi
      .getAuth()
      .then((res) => {
        if (res.resultCode !== 0) return;
        dispatch(setUserDataAC({isAuth: true, ...res.data}));
      })
      .catch((e) => alert(e.message));
  };
};

export const login = formData => dispatch => {

  usersApi.login(formData)
  .then(res => {
    if(res.resultCode === 0) {
      dispatch(authMe());
    } else {
      dispatch(stopSubmit('formLogin', {_error: res.messages[0]}));
    }
  })
}

export const logout = () => dispatch => {
  usersApi.logout()
  .then(res => {
    if(res.resultCode !== 0) {
      dispatch(setUserDataAC(initialState));
    }
  })
}

export default authReduser;
