const GET_TITLE = "GET-TITLE";

const navReduser = (state, action) => {
  switch (action.type) {
    case GET_TITLE:
      let nav = state.navBar.find(item => item.link === action.path);
      if (nav !== undefined) {
        state._title = nav.title;
      }
      return state;
    default:
      return state;
  }
};

export default navReduser;

export const getTitleAC = path => ({ type: GET_TITLE, path });
