let state = {
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
      { id: 1, message: "Message1", likes: 5 },
      { id: 2, message: "Message2", likes: 10 },
      { id: 3, message: "Message3", likes: 12 },
      { id: 4, message: "Message4", likes: 15 }
    ]
  },
  profilePage: {
    posts: [
      { message: "First Message", likes: "10" },
      { message: "Second Message", likes: "5" },
      { message: "Third Message", likes: "5" }
    ]
  }
};

export default state;
