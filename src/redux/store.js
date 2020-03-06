import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import navReduser from "./navReduser";

let store = {
  _state: {
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
    navigation: {
      _title: "",
      navBar: [
        { link: "/", title: "Начало" },
        { link: "/profile", title: "Профиль" },
        { link: "/dialogs", title: "Диалоги" },
        { link: "/muzik", title: "Музыка" },
        { link: "/users", title: "Пользователи" },
        { link: "/commodity", title: "Товары" },
        { link: "/game", title: "Играть" }
      ]
    },
    commodityPage: {
      data: [
        { id: 1, pid: null, label: "node1" }, // node
        { id: 2, pid: null, label: "node2" },
        { id: 3, pid: null, label: "node3" },
        { id: 4, pid: 1, label: "node1_4" },
        { id: 5, pid: 1, label: "node1_5" },
        { id: 6, pid: 3, label: "node3_6" },
        { id: 7, pid: 5, label: "node1_5_7" },
        { id: 8, pid: 6, label: "node3_6_8" },
      ]
    }
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

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
    this._state.navigation = navReduser(this._state.navigation, action);

    this._subscribe(this._state);
  }
};

export default store;
