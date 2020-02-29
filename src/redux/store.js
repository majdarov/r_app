let store = {
  _state: {
    _title: "",
    dialogsPage: {
      users: [
        { id: 0, name: "Dymich", photo: "0.jpg" },
        { id: 1, name: "Andrey", photo: "1.jpg" },
        { id: 2, name: "Michael", photo: "2.jpg" },
        { id: 3, name: "Vlad", photo: "3.jpg" },
        { id: 4, name: "Katya", photo: "4.jpg" },
        { id: 5, name: "Gala", photo: "5.jpg" }
      ],
      messages: [
        { id: 1, iduser: 3, message: "Message1", likes: 5 },
        { id: 2, iduser: 5, message: "Message2", likes: 10 },
        { id: 3, iduser: 2, message: "Message3", likes: 12 },
        { id: 4, iduser: 3, message: "Message4", likes: 15 },
        { id: 5, iduser: 0, message: "Message from user 0", likes: 3 }
      ],
      newTextMessage: "",
      user: null
    },
    profilePage: {
      profileDescription: "Profile description...",
      posts: [
        { message: "First Message", likes: "10" },
        { message: "Second Message", likes: "5" },
        { message: "Third Message", likes: "5" }
      ]
    },
    navBar: [
      { link: "/", title: "Начало" },
      { link: "/profile", title: "Профиль" },
      { link: "/dialogs", title: "Диалоги" },
      { link: "/muzik", title: "Музыка" },
      { link: "/users", title: "Пользователи" },
      { link: "/game", title: "Играть" }
    ]
  },

  getState() {
    return this._state;
  },

  _subscribe() {
    /* observer */
  },

  getTitle(path) {
    let nav = this._state.navBar.find(item => item.link === path);
    if (nav !== undefined) {
      return nav.title;
    }
    return this._state._title;
  },

  setTitle(title) {
    this._state._title = title;
    this._subscribe();
  },

  subscribe(observer) {
    this._subscribe = observer;
  },

  setProfileDesription(text) {
    this._state.profilePage.profileDescription = text;
    this._subscribe();
  },

  addMessage(text) {
    let msg = {
      message: text,
      likes: 0
    };
    this._state.profilePage.posts.push(msg);
  },

  addDialog() {
    if (!this._state.dialogsPage.newTextMessage) return;
    let id = this._state.dialogsPage.messages.length + 1;
    let dialog = {
      id: id,
      message: this._state.dialogsPage.newTextMessage,
      iduser: this._state.dialogsPage.user,
      likes: 0
    };
    this._state.dialogsPage.messages.push(dialog);
    this._state.dialogsPage.newTextMessage = "";
    this._subscribe();
  },

  addNewTextMessage(text) {
    if (!this._state.dialogsPage.user) return;
    this._state.dialogsPage.newTextMessage = text;
    this._subscribe();
  },

  dispatch(action) {
    // {type: string, ...args}
    switch (action.type) {
      case SET_PROFILE_DESCRIPTION:
        this.setProfileDesription(action.text);
        break;
      case ADD_MESSAGE:
        this.addMessage(action.text);
        break;
      case ADD_DIALOG:
        this.addDialog();
        break;
      case ADD_NEW_TEXT_MESSAGE:
        this.addNewTextMessage(action.text);
        break;
      case GET_CURRENT_USER:
        return this._state.dialogsPage.user;
      case SET_CURRENT_USER:
        this._state.dialogsPage.user = action.userid;
        break;
      case SET_TITLE:
        this.setTitle(action.title);
        break;
      case GET_TITLE:
        return this.getTitle(action.path);
      default:
        break;
    }
  }
};

/* Action Creators */

const ADD_MESSAGE = "ADD-MESSAGE";
export const addMessageAC = text => {
  return { type: ADD_MESSAGE, text: text };
};

const SET_CURRENT_USER = "SET-CURRENT-USER";
export const setCurrentUserAC = userid => {
  return { type: SET_CURRENT_USER, userid: userid };
};

const GET_CURRENT_USER = "GET-CURRENT-USER";
export const getCurrentUserAC = () => {
  return { type: GET_CURRENT_USER };
};

const ADD_NEW_TEXT_MESSAGE = "ADD-NEW-TEXT-MESSAGE";
export const addNewTextMessageAC = text => {
  return { type: ADD_NEW_TEXT_MESSAGE, text: text };
};

const ADD_DIALOG = "ADD-DIALOG";
export const addDialogAC = () => {
  return { type: ADD_DIALOG };
};

const GET_TITLE = "GET-TITLE";
export const getTitleAC = path => ({ type: GET_TITLE, path });

const SET_TITLE = "SET-TITLE";
export const setTitleAC = title => ({ type: SET_TITLE, title });

const SET_PROFILE_DESCRIPTION = "SET-PROFILE-DESCRIPTION";
export const setProfileDesriptionAC = description => {
  return { type: SET_PROFILE_DESCRIPTION, text: description };
};

export default store;
