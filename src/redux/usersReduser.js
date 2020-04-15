const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET-PAGE";

let initialState = {
  users: [
    // {
    //   id: 0,
    //   followed: false,
    //   fullName: "Dymich",
    //   photo: "0.jpg",
    //   status: "Sensay IT-Kamasutra",
    //   location: { city: "Minsk", country: "Belarus" }
    // },
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: "Andrey",
    //   photo: "1.jpg",
    //   status: "Hto ne sckache tot moscal",
    //   location: { city: "Kiev", country: "Ukraine" }
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Michael",
    //   photo: "2.jpg",
    //   status: "I'm Learning React",
    //   location: { city: "Uljanovsk", country: "Russia" }
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: "Vlad",
    //   photo: "3.jpg",
    //   status: "C# Guru",
    //   location: { city: "Uljanovsk", country: "Russia" }
    // },
    // {
    //   id: 4,
    //   followed: true,
    //   fullName: "Katya",
    //   photo: "4.jpg",
    //   status: "Busines Analitic",
    //   location: { city: "Moscow", country: "Russia" }
    // },
    // {
    //   id: 5,
    //   followed: true,
    //   fullName: "Gala",
    //   photo: "5.jpg",
    //   status: "Busines Woman",
    //   location: { city: "Uljanovsk", country: "Russia" }
    // }
  ],
  pageSize: 10,
  totalUsersCount: 0,
  pageNumber: 1,
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: true };
          }
          return item;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: false };
          }
          return item;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [ ...action.users],
        totalUsersCount: action.totalCount,
      };
    case SET_PAGE:
      return {
        ...state,
        pageNumber: action.p
      };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export const unFollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsersAC = (users, totalCount) => {
  return { type: SET_USERS, users, totalCount };
};

export const setPageAC = p => {
  return { type: SET_PAGE, p }
}

export default usersReduser;
