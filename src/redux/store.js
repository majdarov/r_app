let store = {
  _state: {
    link: "Main",
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
      case "SET-PROFILE-DESCRIPTION":
        this.setProfileDesription(action.text);
        break;
      case "ADD-MESSAGE":
        this.addMessage(action.text);
        break;
      case "ADD-DIALOG":
        this.addDialog();
        break;
      case "ADD-NEW-TEXT-MESSAGE":
        this.addNewTextMessage(action.text);
        break;
      case "GET-CURRENT-USER":
        return this._state.dialogsPage.user;
      case "SET-CURRENT-USER":
        this._state.dialogsPage.user = action.userid;
        break;
      default:
        break;
    }
  }
};

export default store;
