import { authMe } from './auth_reduser';

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initialState = {
  initialized: false,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccessAC = () => {
  return { type: INITIALIZED_SUCCESS };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(authMe());
    Promise.all([promise]).then(
      resolve => {
        dispatch(initializedSuccessAC());
      }
    )
  };
};

export default appReduser;
