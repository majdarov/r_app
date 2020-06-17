const GET_TITLE = "GET-TITLE";

export const getTitleAC = path => ({ type: GET_TITLE, path: path });

let initialState = {
  title: "",
  navBar: [
    { link: "/", title: "Начало" },
    { link: "/profile", title: "Профиль" },
    { link: "/dialogs", title: "Диалоги" },
    { link: "/muzik", title: "Музыка" },
    { link: "/users", title: "Пользователи" },
    { link: "/commodity", title: "Товары" },
    { link: "/game", title: "Играть" },
    { link: "/table", title: "Экспорт Excel" }
  ]
};

const navReduser = (state = initialState, action) => {
  switch (action.type) {

    case GET_TITLE:
      // debugger;
      let title;
      let nav = state.navBar.find(item => item.link === action.path);
      if (nav !== undefined) {
        title = nav.title;
      }
      return Object.assign({}, state, {title: title});

    default:
      return state;
  }
};

export default navReduser;
