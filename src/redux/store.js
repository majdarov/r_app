let store = {
  state: {
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
        { id: 4, iduser: 3, message: "Message4", likes: 15 }
      ],
      newTextMessage: "",

      _subscribe() {
        /* renderApp */
      },

      addDialog() {
        if (!this.newTextMessage) return;
        let id = this.messages.length + 1;
        let msg = {
          id: id,
          message: this.newTextMessage,
          iduser: 4,
          likes: 0
        };
        this.messages.push(msg);
        this.newTextMessage = "";
        this._subscribe();
      },

      addNewTextMessage(text) {
        this.newTextMessage = text;
        this._subscribe();
      }
    },
    profilePage: {
      posts: [
        { message: "First Message", likes: "10" },
        { message: "Second Message", likes: "5" },
        { message: "Third Message", likes: "5" }
      ],
      newPostText: "",

      _subscribe() {
        /* renderApp */
      },

      addMessage() {
        let msg = {
          message: this.newPostText,
          likes: 0
        };
        this.posts.push(msg);
        this.newPostText = "";
        this._subscribe();
      },

      addNewText(text) {
        this.newPostText = text;
        this._subscribe();
      }
    },
    navBar: [
      { link: "/Profile", title: "Профиль" },
      { link: "/Dialogs", title: "Диалоги" },
      { link: "/Muzik", title: "Музыка" },
      { link: "/Users", title: "Пользователи" },
      { link: "/Game", title: "Играть" }
    ]
  },

  subscribe(observer) {
    this.state.dialogsPage._subscribe = this.state.profilePage._subscribe = observer;
  }
};

export default store;
